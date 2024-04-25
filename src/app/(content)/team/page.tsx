"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn, tiaraAssetsPrefix } from "@/lib/utils";

const coreTeam = [
  `${tiaraAssetsPrefix}/coreteam/chaitra.avif`,
  `${tiaraAssetsPrefix}/coreteam/roopesh.avif`,
  `${tiaraAssetsPrefix}/coreteam/convener_1.avif`,
  `${tiaraAssetsPrefix}/coreteam/convener_2.avif`,
  `${tiaraAssetsPrefix}/coreteam/cultural.avif`,
  `${tiaraAssetsPrefix}/coreteam/discipline.avif`,
  `${tiaraAssetsPrefix}/coreteam/logistics.avif`,
  `${tiaraAssetsPrefix}/coreteam/media.avif`,
  `${tiaraAssetsPrefix}/coreteam/non_technical_1.avif`,
  `${tiaraAssetsPrefix}/coreteam/non_technical_2.avif`,
  `${tiaraAssetsPrefix}/coreteam/registration.avif`,
  `${tiaraAssetsPrefix}/coreteam/prizes_awards.avif`,
  `${tiaraAssetsPrefix}/coreteam/social_media.avif`,
  `${tiaraAssetsPrefix}/coreteam/sponsership.avif`,
  `${tiaraAssetsPrefix}/coreteam/technical.avif`,
  `${tiaraAssetsPrefix}/coreteam/website.avif`,
  `${tiaraAssetsPrefix}/coreteam/stage_decoration.avif`,
  `${tiaraAssetsPrefix}/coreteam/design.avif`,
];

const webTeam = [
  `${tiaraAssetsPrefix}/webteam/anish.avif`,
  `${tiaraAssetsPrefix}/webteam/rabil.avif`,
  `${tiaraAssetsPrefix}/webteam/jenison.avif`,
  `${tiaraAssetsPrefix}/webteam/joywin.avif`,
  `${tiaraAssetsPrefix}/webteam/vyshnav.avif`,
  `${tiaraAssetsPrefix}/webteam/vineeth_.avif`,
  `${tiaraAssetsPrefix}/webteam/melroy.avif`,
  `${tiaraAssetsPrefix}/webteam/nithin.avif`,
  `${tiaraAssetsPrefix}/webteam/uthpal.avif`,
  `${tiaraAssetsPrefix}/webteam/vaibhav.avif`,
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
          {coreTeam.map((card, index) => {
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
      <div className="-ml-5 flex justify-center items-center -mt-16 z-50">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Website Team
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {webTeam.map((card, index) => {
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
