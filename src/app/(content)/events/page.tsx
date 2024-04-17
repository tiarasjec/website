"use client";
import CategoryDisplay from "@/components/widgets/CategoryDisplay";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useEffect, useState } from "react";

export default function EventsPage() {
  const [categories, setCategories] = useState<{ category: string }[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
      <div className="w-maxPage h-fit ">
        <div className="-ml-5 flex justify-center items-center pt-5 z-50">
          <div className="text-6xl sm:text-8xl font-tiara  w-fit pr-8">
            Ti<span className="text-tiara_red">ar</span>a{" "}
            <span className="text-tiara_red">{"'"}</span>24
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className="font-staat text-2xl mt-3">
            Explore the <span className="text-tiara_red">Unknown</span>
          </p>
        </div>
        <div className="w-maxPhone h-fit  flex justify-center mt-10 z-0 overflow-y-scroll">
          <CategoryDisplay categories={categories.map(category => ({ title: category.category }))} />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
