"use client";
import { HeroParallax } from "@/components/widgets/Hero";
import { useEffect, useState } from "react";
import { LabIntro } from "@/components/story/intro";
import { Last } from "@/components/story/last";
import Loading from "./loading";
import Lenis from "@/components/shared/lenis";
import { tiaraAssetsPrefix } from "@/lib/utils";

const images = [
  { alt: "Image 0", src: `${tiaraAssetsPrefix}/hero/3(1).webp` },
  { alt: "Image 1", src: `${tiaraAssetsPrefix}/hero/3(10).webp` },
  { alt: "Image 2", src: `${tiaraAssetsPrefix}/hero/3(11).webp` },
  { alt: "Image 3", src: `${tiaraAssetsPrefix}/hero/3(12).webp` },
  { alt: "Image 4", src: `${tiaraAssetsPrefix}/hero/3(13).webp` },
  { alt: "Image 5", src: `${tiaraAssetsPrefix}/hero/3(14).webp` },
  { alt: "Image 6", src: `${tiaraAssetsPrefix}/hero/3(15).webp` },
  { alt: "Image 7", src: `${tiaraAssetsPrefix}/hero/3(16).webp` },
  { alt: "Image 8", src: `${tiaraAssetsPrefix}/hero/3(2).webp` },
  { alt: "Image 9", src: `${tiaraAssetsPrefix}/hero/3(3).webp` },
  { alt: "Image 10", src: `${tiaraAssetsPrefix}/hero/3(4).webp` },
  { alt: "Image 11", src: `${tiaraAssetsPrefix}/hero/3(5).webp` },
  { alt: "Image 12", src: `${tiaraAssetsPrefix}/hero/3(6).webp` },
  { alt: "Image 13", src: `${tiaraAssetsPrefix}/hero/3(7).webp` },
  { alt: "Image 14", src: `${tiaraAssetsPrefix}/hero/3(8).webp` },
  { alt: "Image 15", src: `${tiaraAssetsPrefix}/hero/3(9).webp` },
];

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
      <Lenis>
        <HeroParallax images={images} />
        <LabIntro />
        <Last />
      </Lenis>
    </main>
  );
}
