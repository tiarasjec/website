"use client";
import Container from "@/components/shared/container";
import { Link, LinkProps } from "@/components/ui/hover/link";
import { useEffect, useState } from "react";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const [categories, setCategories] = useState<LinkProps[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <Container className="mx-auto pt-16">
        <div className="py-4 mx-6 sm:mx-12 space-y-4 mt-10 pt-10">
          <h1
            id="about"
            className={cn("text-center text-4xl text-white", tiaraFont.className)}
          >
            Events categories
          </h1>
        </div>
      </Container>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        {categories.map((category, index) => (
          <Link
            key={index}
            heading={category.heading}
            subheading={category.subheading}
            image={category.image}
            href={category.href}
          />
        ))}
      </div>
    </>
  );
}
