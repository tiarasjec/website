"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export interface Event {
  name: string;
  description: string;
  rules: string[];
  prerequisites: string[];
  general_rules: string[];
  thumbnail: string;
  startTime: string;
  endTime: string;
  costs: string;
  facultyCoordinators: FacultyCoordinator[];
  studentCoordinators: StudentCoordinator[];
}

export interface FacultyCoordinator {
  name: string;
  phone: string;
}

export interface StudentCoordinator {
  name: string;
  phone: string;
}

const Page = () => {
  const [eventInfo, setEventInfo] = useState<Event>();
  const pathname = usePathname();

  useEffect(() => {
    const [, , category, path] = pathname.split("/");
    console.log(category, path);
    fetch(`/api/events/${category}/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setEventInfo(dataList);
      })
      .catch((error) => console.error("Error fetching events:", error));
    console.log(eventInfo);
  }, [eventInfo, pathname]);
  return (
    <>
      <div className="h-fit">
        <div className="-ml-5 flex justify-center items-center pt-32 z-50">
          <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500 font-basement">
            {eventInfo?.name}
          </div>
        </div>
        <div className="p-16">
          <div className="justify-around">
            <Image
              src={eventInfo?.thumbnail!}
              alt={eventInfo?.name!}
              width={450}
              height={300}
            />
            <div className="flex flex-col">
              <h1>{eventInfo?.name}</h1>
              <p>{eventInfo?.description}</p>
              <Button>Register</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
