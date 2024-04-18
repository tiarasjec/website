import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
 category: string;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/events/${category}`}>
      <div className="w-[350px] h-[450px] sm:w-72 lg:w-96 xl:w-[280px] xl:h-[400px] relative overflow-hidden cursor-pointer">
        <div className="w-full h-full flex justify-center items-center text-tiara_red text-2xl hover:text-transparent">
          <p className="uppercase font-bold absolute z-10 hover:hidden">{category}</p>
          <Image
            src="/Categories/Mega.jpg"
            alt="Category Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover filter opacity-100 grayscale hover:filter-none hover:opacity-80 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  );
}
