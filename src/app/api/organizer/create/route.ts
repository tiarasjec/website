import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, description, date, location, image, user } = await req.json();
  const event = prisma.event
    .create({
      data: {
        name: name,
        description: description,
        date: date,
        location: location,
        image: image,
        user: { connect: { email: user.email } },
      },
      include: {
        user: true,
      },
    })
    .catch((e) => console.log("Error", e.message));
  return NextResponse.json(event);
}
