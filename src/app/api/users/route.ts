import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  try {
    // Session returns Null, even if the user is authenticated.
    await delay(4000);
    const session = await auth();
    console.log(session);
    if (!session) {
      return NextResponse.json("Not Authenticated", { status: 401 });
    }

    // If the user is not an Admin, return Not Authorized.
    if (session.user.role !== UserRole.ADMIN) {
      return NextResponse.json("Not Authorized", { status: 403 });
    }

    // Fetch all users from the database.
    const users = await prisma.user.findMany();

    // Return the fetched users.
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error in GET /api/users", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
 