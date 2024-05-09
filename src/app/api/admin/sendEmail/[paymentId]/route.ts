import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentStatus, UserRole } from "@prisma/client";
import { auth } from "@/auth";
import { sendEmail } from "@/helper/mailer";
import { razorpay } from "@/lib/razorpay";
import { generatedSignature } from "@/lib/utils";

export async function POST(
  request: NextRequest,
  context: { params: { paymentId: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  if (session.user.role !== UserRole.ADMIN) {
    return NextResponse.json(
      { message: "Forbidden", isOk: false },
      { status: 403 }
    );
  }

  const { paymentId } = context.params;
  const payment = await razorpay.payments.fetch(paymentId);
  const signature = generatedSignature(payment.order_id, payment.id);

  const user = await prisma.user.findUnique({
    where: {
      email: payment.notes.customerEmail,
    },
  });

  console.log(user)

  const prismaPayment = await prisma.payment.findUnique({
    where: {
      razorpayPaymentId: payment.id,
    },
  });

  try {
    await sendEmail({
      amount: parseFloat(payment.amount.toString()),
      email: payment.email,
      teamNames: [],
      contactNumber: payment.contact.toString(),
      name: user?.name!,
      events: payment.notes.events.split(","),
      registrationLink: `https://tiarasjec.in/api/verify/${user?.id}`,
    });
  } catch (error) {
    console.error(error);
  }

  if (!prismaPayment) {
    await prisma.$transaction(async (prisma) => {
      await prisma.payment.create({
        data: {
          amount: parseFloat(payment.amount.toString()),
          signature,
          razorpayPaymentId: payment.id,
          orderCreationId: payment.order_id,
          status: PaymentStatus.SUCCESS,
          user: {
            connect: {
              email: session.user?.email!,
            },
          },
        },
      });

      const existingUser = await prisma.user.findUnique({
        where: {
          email: session.user?.email!,
        },
        include: {
          teams: true,
        },
      });

      const mergedEvents = [
        ...existingUser?.events!,
        ...payment.notes.events.split(","),
      ];
      await prisma.user.update({
        where: {
          email: session.user?.email!,
        },
        data: {
          registrationEmailSent: true,
          contact: payment.contact.toString(),
          college: payment.notes.college,
          events: mergedEvents,
          teams: {
            createMany: {
              data: [],
            },
          },
        },
        include: {
          teams: true,
        },
      });
    });
  }

  return NextResponse.json(
    { message: "Payment verified successfully", isOk: true },
    { status: 200 }
  );
}
