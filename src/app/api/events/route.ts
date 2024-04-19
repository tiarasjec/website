import { categoriesList } from "@/data/categoryList";
import { NextResponse } from "next/server";

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("  ");
}

export async function GET() {
  return NextResponse.json(
    Object.entries(categoriesList).map(([key, value]) => {
      return {
        heading: titleCase(key),
        subheading: value["description"],
        href: `/events/${key}`,
        image: value["thumbnail"],
      };
    })
  );
}
