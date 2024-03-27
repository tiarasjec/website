import { Gallery } from "@/components/widgets/Gallery";
import React from "react";
import { glob } from "glob";
import { relative } from "path";

export default async function GalleryPage() {
  const images = (await glob("public/hero/*.jpg")).map((image, i) => {
    const imageName = relative("public", image); // Remove the "public/hero/" part from the image path
    return {
      alt: `Image ${i}`,
      src: `https://tiara2024.vercel.app/${imageName}`,
    };
  });
  return (
    <>
      <Gallery images={images}/>
    </>
  );
}
