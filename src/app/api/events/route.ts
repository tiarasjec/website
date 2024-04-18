import {categoriesList} from "@/data/categoryList";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.split("/");
  const category = path[3];
  

  const mappedCategories = categoriesList.map(({category,events}) => {
    return {
     category,
     events
    };
  });

  return Response.json(mappedCategories);
}
