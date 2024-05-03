import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

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
    }
  });
  return NextResponse.json(payments);
}
