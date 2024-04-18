import { categoriesList } from "@/data/categoryList";
import { NextRequest, NextResponse } from "next/server";

type EventTypes = keyof typeof categoriesList;

// Display per event information
export async function GET(req: NextRequest) {
  const [, , , category, pathname] = req.nextUrl.pathname.split("/");

  const eventData =
    // @ts-ignore
    categoriesList[category as EventTypes]["events"][0][pathname];
  return NextResponse.json(eventData);
}
