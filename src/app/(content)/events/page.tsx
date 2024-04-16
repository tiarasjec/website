"use client";
import { Text } from "@/components/shared/text";
import Timeline from "@/components/widgets/Timeline";
// import GanttComponent from "@/components/widgets/gantt";
import React from "react";

export default function EventsPage() {
  return (
    <>
    
      <div className="dark absolute w-11/12 flex justify-center left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center items-center mt-10 w-full ">
          <Timeline />
        </div>
      </div>
    </>
  );
}
