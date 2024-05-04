import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function GET(
  request: Request,
  context: { params: { id: string } }
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
      { message: "Unauthorized", isOk: false },
      { status: 403 }
    );
  }
  const { id } = context.params;
  try {
    const paymentData = await razorpay.payments.fetch(id);
    return NextResponse.json(paymentData, { status: 200 });
  } catch (error) {
    console.error("Error fetching payment data:", error);
    return NextResponse.json({ error: "Payment not found" }, { status: 404 });
  }
}
