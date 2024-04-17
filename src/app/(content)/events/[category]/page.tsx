"use client";
import CategoryDisplay from "@/components/widgets/CategoryDisplay";
import { BackgroundBeams } from "@/components/ui/background-beams";
import EventDisplay from "@/components/widgets/EventDisplay";
import React from "react";

export default function EventsPage() {
  return (
    <>
      <div className="w-maxPage h-fit ">
        <div className="flex justify-center items-center pt-5 z-50">
          <div className="text-8xl font-tiara  w-fit">
            Ti<span className="text-tiara_red">ar</span>a{" "}
            <span className="text-tiara_red">{"'"}</span>24
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className="font-staat text-2xl">Explore the <span className="text-tiara_red">Unknown</span></p> {/* Moved below */}
        </div>
        <div className="w-maxPage flex justify-center items-center mt-10 z-50">
          <EventDisplay/>

        </div>
        <BackgroundBeams />
      </div>

     
    </>
  );
}
