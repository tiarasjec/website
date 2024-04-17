import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
  title: string;
}

export default function CategoryCard({ title }: CategoryCardProps) {
  return (
    <Link href={`/events/${title}`}>
      <div className="w-[350px] h-[450px] relative overflow-hidden cursor-pointer">
        <div className="w-full h-full flex justify-center items-center text-white/60 hover:font-staat hover:text-6xl hover:items-start  hover:text-tiara_red transition-all duration-300">
          <p className="uppercase font-bold absolute z-10">{title}</p>
          <Image
            src="/Categories/Mega.jpg"
            alt="Category Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover filter opacity-100 grayscale hover:filter-none hover:opacity-80 transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  );
}
