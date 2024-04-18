import {categoriesList} from "@/data/categoryList";

export async function GET() {
  

  const mappedCategories = categoriesList.map(({category,events}) => {
    return {
     category,
     events
    };
  });

  return Response.json(mappedCategories);
}
