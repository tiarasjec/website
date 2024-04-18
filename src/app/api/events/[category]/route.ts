import { categoriesList } from "@/data/categoryList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.pathname.split("/")[3];
  const eventsData = categoriesList[pathname as keyof typeof categoriesList];

  const events = Object.entries(eventsData["events"]).map(([_, item]) => {
    return Object.keys(item).map((key) => {
      return {
        id: key,
        // @ts-ignore
        name: item[key]["name"],
        href: `/events/${pathname}/${key}`,
        // @ts-ignore
        thumbnail: item[key]["thumbnail"],
        // @ts-ignore
        description: item[key]["description"],
      };
    });
  });

  return NextResponse.json(events.flat());
}
