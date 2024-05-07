import { auth } from "@/auth";
import { NextResponse } from "next/server";
import shortid from "shortid";
import { razorpay } from "@/lib/razorpay";
import { UserRole } from "@prisma/client";

export async function GET() {
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

  try {
    const paymentDatas = await razorpay.payments.all({
      count: 100
    });
    const paymentData = {
      entity: paymentDatas.entity,
      count: paymentDatas.count,
      items: paymentDatas.items.filter((paymentItem) => paymentItem.status === "captured"),
    }
    return NextResponse.json(paymentData, { status: 200 });
  } catch (error) {
    console.error("Error fetching payment data:", error);
    return NextResponse.json({ error: "Payments not found" }, { status: 404 });
  }
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  const body = await req.json();
  const payment_capture = 1;
  const amount = body.amount * 100; // amount in paisa. In our case it's INR 1
  const currency = "INR";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  const order = await razorpay.orders.create(options);
  return NextResponse.json({ orderId: order.id }, { status: 200 });
}
