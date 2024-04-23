"use client";

import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
export default function About() {
  return (
    <Container className="mx-auto">
      <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32">
        <h1
          id="about"
          className={cn("text-6xl text-center", tiaraFont.className)}
        >
          About Ti<span className="text-tiara_red">ar</span>a
        </h1>
        <p>
          St Joseph Engineering College has come together to host a national
          level techno-cultural fest, Tiara 2024. Tiara is a National-level
          Techno-Cultural fest, conducted for young minds aspiring to be
          extraordinary, that is open to all students of undergraduate level and
          above to come and showcase their talents and represent their
          respective institutions on the grand stage of Tiara. Our event mainly
          aims to spread and teach the youth to explore new areas of Technology
          and Culture to foster the nation{"'"}s development. SJEC welcomes you
          all to Tiara-2024 To unleash your potential and unlock your skills.
          See you on 9th, 10th and 11th May 2024.
        </p>
      </div>
      <iframe
        className="px-10"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9520361386985!2d74.89609701022555!3d12.910804316156533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359dfac132663%3A0xa7bf228838232d32!2sSt%20Joseph%20Engineering%20College!5e0!3m2!1sen!2sin!4v1713257369845!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </Container>
  );
}
