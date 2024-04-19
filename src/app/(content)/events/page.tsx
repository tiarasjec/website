"use client";
import Container from "@/components/shared/container";
import { Link, LinkProps } from "@/components/ui/hover/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function EventsPage() {
  const [categories, setCategories] = useState<LinkProps[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <Container className="mx-auto pt-16">
        <div className="py-4 mx-6 sm:mx-12 space-y-4 mt-10 pt-10">
          <h1 id="about" className="text-center text-4xl font-tiara">
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

export function ThreeDCardDemo() {
  const [categories, setCategories] = useState<LinkProps[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);
  return (
    <>
      {categories.map((category: any, index: any) => (
        <CardContainer className="inter-var">
          <CardBody
            key={index}
            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {category.heading}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={category.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={category.href}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
}
