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
    fetch(`/api/events/${category}/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setEventInfo(dataList);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);
  const startTime = eventInfo?.startTime ? new Date(eventInfo.startTime) : null;
  const formattedDate = startTime ? startTime.getDate() : "";
  const formattedTime = startTime
    ? startTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";
  const eventName = eventInfo?.name;
  const parts = eventName?.split(/\(([^)]+)\)/);
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] p-24 pt-36 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="mt-4 w-maxPhone  relative sm:w-2/3 lg:ml-3 h-90% sm:ml-1 sm:pl-5  lg:pl-10">
            <h1 className="font-staat text-5xl text-white font-bold lg:whitespace-nowrap">
              {parts ? parts[0] : ""}
            </h1>
            <span className="text-2xl text-tiara_red">
              {parts ? parts[1] : ""}
            </span>
            <br />
            <span className="text-base tracking-widest font-tiara py-10">
              <span className="bg-white px-2 py-1 rounded-lg text-black">
                {formattedDate.toString().toLowerCase()}th may -{" "}
                {formattedTime.toString().toLowerCase()}
              </span>
            </span>
            <p className="mt-4 text-md">{eventInfo?.description}</p>
            <h2 className="mt-5 text-tiara_red text-2xl">Prerequisites:</h2>
            <ul className="relative ml-5 w-4/5">
              {eventInfo?.prerequisites.map((pre, index) => (
                <li key={index}>
                  <span className="text-tiara_red">•</span> {pre}
                </li>
              ))}
            </ul>
            <h2 className="mt-3 text-tiara_red text-2xl">Guidelines:</h2>
            <ul className="relative ml-5 w-4/5 lg:whitespace-nowrap">
              {eventInfo?.rules.map((rule, index) => (
                <li key={index}>
                  <span className="text-tiara_red">•</span> {rule}
                </li>
              ))}
            </ul>
            <div className="mt-8 w-full h-fit">
              <div className="sm:flex sm:flex-col sm:gap-y-2 lg:flex-row gap-x-6">
                <div className="mr-10">
                  <h2 className="mt-3 text-tiara_red text-lg">
                    Faculty Co-ordinators:
                  </h2>
                  <div className="flex flex-col w-96 gap-x-6 mt-2 lg:whitespace-nowrap">
                    {eventInfo?.facultyCoordinators.map(
                      (coordinator, index) => (
                        <>
                          <p className="text-white">
                            {coordinator.name} {" | "}
                            <span className="text-white">
                              <a href={`tel:${coordinator.phone}`}>
                                {coordinator.phone}
                              </a>
                            </span>
                          </p>
                        </>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="mt-3 text-tiara_red text-lg">
                    Student Co-ordinators:
                  </h2>
                  <div className="flex flex-col w-96 gap-x-6 mt-2 lg:whitespace-nowrap">
                    {eventInfo?.studentCoordinators.map(
                      (coordinator, index) => (
                        <>
                          <p className="text-white">
                            {coordinator.name} {" | "}
                            <span className="text-white">
                              <a href={`tel:${coordinator.phone}`}>
                                {coordinator.phone}
                              </a>
                            </span>
                          </p>
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Col */}
          <div className="relative ms-4">
            <Image
              className="w-full rounded-md"
              src={eventInfo?.thumbnail!}
              width={500}
              height={500}
              alt="Image Description"
            />
            <div className="flex flex-col gap-2 items-center justify-center mt-10">
            <span className="font-tiara"> cost ₹ <span className="text-tiara_red">{eventInfo?.costs}</span> {eventInfo?.team ? "per team" : "per person"} 
            {/* {eventInfo.costs<250:"for 4 events":" "}  */}
            </span>
              <Button className="w-32 h-8">
                <p className="tracking-widest text-sm font-tiara">
                  register now
                </p>
              </Button>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Page;
