import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
// import { razorpay } from "@/lib/razorpay";

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  if (session.user.role !== UserRole.ADMIN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const payments = await prisma.payment.findMany({
    include: {
      user: true,
    },
  });

  // for (const prismaPayment of payments) {
  //   console.log("ID: ", prismaPayment.razorpayPaymentId);
  //   const payment = await razorpay.payments.fetch(prismaPayment.razorpayPaymentId);
  //   await prisma.payment.update({
  //     where: {
  //       razorpayPaymentId: prismaPayment.razorpayPaymentId,
  //     },
  //     data: {
  //       amount: parseFloat(payment.amount.toString()),
  //     }
  //   })
  //   console.log("ID: Done", prismaPayment.razorpayPaymentId);
  // }

  return NextResponse.json(payments);
}
