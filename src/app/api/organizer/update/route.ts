import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { id, name, description, date, location, image } = await req.json();
  const event = prisma.event
    .update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        date: date,
        location: location,
        image: image,
      },
      include: {
        user: true,
      },
    })
    .catch((e) => console.log("Error", e.message));
  return NextResponse.json(event);
}
