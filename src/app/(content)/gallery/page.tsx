"use client";
import { Gallery } from "@/components/widgets/Gallery";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);
  return (
    <>
      <Gallery images={images} />
    </>
  );
}
