import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { PaymentStatus } from "@prisma/client";
import { auth } from "@/auth";
import { sendEmail } from "@/helper/mailer";

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.RAZORPAY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const { orderCreationId, razorpayPaymentId, razorpaySignature } =
    await request.json();
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    await prisma.payment.upsert({
      where: {
        razorpayPaymentId,
        user: {
          email: session.user?.email,
        },
      },
      update: {
        status: PaymentStatus.FAILED,
        orderCreationId,
      },
      create: {
        razorpayPaymentId,
        orderCreationId,
        status: PaymentStatus.FAILED,
        user: {
          connect: {
            email: session.user?.email!,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  } else if (signature === razorpaySignature) {
    await prisma.payment.upsert({
      where: {
        razorpayPaymentId,
        user: {
          email: session.user?.email,
        },
      },
      update: {
        status: PaymentStatus.SUCCESS,
        orderCreationId,
      },
      create: {
        razorpayPaymentId,
        orderCreationId,
        status: PaymentStatus.SUCCESS,
        user: {
          connect: {
            email: session.user?.email!,
          },
        },
      },
    });
    sendEmail(session.user?.email!, session.user?.name!);
    return NextResponse.json(
      { message: "payment verified successfully", isOk: true },
      { status: 200 }
    );
  }
}
