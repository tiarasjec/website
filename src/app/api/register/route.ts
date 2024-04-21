import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/helper/mailer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
    const session = await auth();
    if (!session) {
        return NextResponse.json(
            { message: "Unauthorized", isOk: false },
            { status: 401 }
        );
    }
}