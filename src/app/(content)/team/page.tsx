"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn, tiaraAssetsPrefix } from "@/lib/utils";


const coreTeam = [
    `${tiaraAssetsPrefix}/coreteam/chaitra.png`,
    `${tiaraAssetsPrefix}/coreteam/roopesh.png`,
    `${tiaraAssetsPrefix}/coreteam/convener_1.png`,
    `${tiaraAssetsPrefix}/coreteam/convener_2.png`,
    `${tiaraAssetsPrefix}/coreteam/cultural.png`,
    `${tiaraAssetsPrefix}/coreteam/design.png`,
    `${tiaraAssetsPrefix}/coreteam/discipline.png`,
    `${tiaraAssetsPrefix}/coreteam/logistics.png`,
    `${tiaraAssetsPrefix}/coreteam/media.png`,
    `${tiaraAssetsPrefix}/coreteam/non_technical_1.png`,
    `${tiaraAssetsPrefix}/coreteam/non_technical_2.png`,
    `${tiaraAssetsPrefix}/coreteam/registration.png`,
    `${tiaraAssetsPrefix}/coreteam/prizes_awards.png`,
    `${tiaraAssetsPrefix}/coreteam/social_media.png`,
    `${tiaraAssetsPrefix}/coreteam/stage_decoration.png`,
    `${tiaraAssetsPrefix}/coreteam/technical.png`,
    `${tiaraAssetsPrefix}/coreteam/website.png`,
];


export default function CoreTeamPage() {
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
                Core Team
            </h1>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {coreTeam
            .map((card, index) => {
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
