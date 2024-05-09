"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn, tiaraAssetsPrefix } from "@/lib/utils";

const sponsers = [
  `${tiaraAssetsPrefix}/sponsers/marian.jpeg`,
  `${tiaraAssetsPrefix}/sponsers/ather.jpeg`,
  `${tiaraAssetsPrefix}/sponsers/kasharp.jpeg`,
  `${tiaraAssetsPrefix}/sponsers/nidhi_land.jpeg`,
  `${tiaraAssetsPrefix}/sponsers/pakruti.jpeg`,
  
];



export  function Sponsers() {
  return (
    <div className="h-fit">
      <div className="-ml-5 flex justify-center items-center pt-32 z-50">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Sponsers
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {sponsers.map((card, index) => {
            return (
              <CardContainer
                key={index}
                containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear"
              >
                <CardBody className="relative">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={card}
                      className="rounded-xl "
                      alt="thumbnail"
                      width={1200}
                      height={800}
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}
