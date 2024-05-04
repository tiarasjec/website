import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { event: string } }
) {
  const { event } = context.params;
  const users = await prisma.user.findMany({
    where: {
      events: {
        has: event,
      },
    },
  });
  return NextResponse.json(users, { status: 200 });
}
