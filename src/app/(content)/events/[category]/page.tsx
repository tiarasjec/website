"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { CardType } from "@/components/ui/hover/scroll";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@/components/shared/lenis";

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function EventsPage() {
  const [cards, setCards] = useState<CardType[]>([]);
  const pathname = usePathname();
  useEffect(() => {
    const path = pathname.split("/")[2];
    fetch(`/api/events/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setCards(dataList);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);
  return (
    <Lenis>
      <div className="h-fit">
        <div className="-ml-5 flex justify-center items-center pt-32 z-50">
          <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-tiara w-fit text-center duration-500">
            {toTitleCase(pathname.split("/")[2])} Events
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((card) => {
                return (
                  <Link href={card.href} key={card.id}>
                    <Image
                      className="cursor-pointer rounded-lg border border-tiara_red hover:shadow-xl transition duration-300 ease-in-out"
                      key={card.id}
                      src={card.thumbnail}
                      alt={card.name}
                      width={450}
                      height={300}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Lenis>
  );
}
