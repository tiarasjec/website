import { NextRequest, NextResponse } from "next/server";
import { categoriesList } from "@/data/categoryList";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

const categoryData: { [key: string]: any } = categoriesList;

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role === UserRole.PARTICIPANT) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  const events = [];
  const allEvents = Object.values(categoryData).flatMap((category) =>
    category.events.flatMap(Object.values)
  );

  for (const event of allEvents) {
    const typedEvent = event as { name: string };
    const eventRegistrations = await prisma.user
      .findMany({
        where: {
          events: {
            has: typedEvent.name,
          },
        },
      })
      .then((users) => users.length);
    events.push({ name: typedEvent.name, registrations: eventRegistrations });
  }

  return NextResponse.json(
    events.sort((a, b) => a.name.localeCompare(b.name)),
    { status: 200 }
  );
}
