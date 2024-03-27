import { HeroParallax } from "@/components/widgets/Hero";
import { Spotlight } from "@/components/widgets/Spotlight";
import { Starfield } from "@/components/widgets/Starfield";
import Lenis from "@/components/shared/Lenis";
import { glob } from "glob";
import { relative } from "path";

export default async function Home() {
  let images = (await glob("public/hero/*.jpg")).map((image, i) => {
    const imageName = relative("public", image); // Remove the "public/hero/" part from the image path
    return {
      alt: `Image ${i}`,
      src: `https://tiara2024.vercel.app/${imageName}`,
    };
  });
  images = images.concat(...images);
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Spotlight />
      <Lenis>
        <HeroParallax images={images} />
      </Lenis>
    </main>
  );
}
