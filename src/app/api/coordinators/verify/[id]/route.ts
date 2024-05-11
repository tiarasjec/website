import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  const { id } = context.params;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ user }, { status: 200 });
}
