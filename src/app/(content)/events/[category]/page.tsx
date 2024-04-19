"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { CardType } from "@/components/ui/hover/scroll";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@/components/shared/lenis";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
              .map((card, index) => {
                return (
                  <CardContainer className="inter-var  h-60 w-96 m-20">
                    <CardBody
                      key={index}
                      className="bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 mb-20 border  "
                    >
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white dark:text-white py-4"
                      >
                        {card.name}
                      </CardItem>
                      <CardItem
                        translateZ="100"
                        as={Link}
                        href={card.href}
                        className="w-full mt-4"
                      >
                        <Image
                          src={card.thumbnail}
                          height="800"
                          width="800"
                          className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      {/* <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={card.href}
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-sm font-normal text-white"
                        >
                          Check out description
                        </CardItem>
                      </div> */}
                    </CardBody>
                  </CardContainer>
                );
              })}
          </div>
        </div>
      </div>
    </Lenis>
  );
}
