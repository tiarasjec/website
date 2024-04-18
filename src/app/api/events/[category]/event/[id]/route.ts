import { forEach } from "lodash";
import { NextRequest, NextResponse } from "next/server";
import { categoriesList } from "@/data/categoryList";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.split("/");
  const category = path[3];
  const index = categoriesList.findIndex((item) => item.category === category);
  const events = index !== -1 ? categoriesList[index].events : null;
  
  console.log(events);
  console.log(path);
  
  let matchedEvent = null;
  

  forEach(events, (event, key) => {
      if (event.id === path[5]) {
        matchedEvent = event;
      }
  });
  
  return Response.json(matchedEvent);
}
