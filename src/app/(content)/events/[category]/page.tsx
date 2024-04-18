"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import EventDisplay from "@/components/widgets/EventDisplay";

interface Event {
  name: string;
  description: string;
  rules: string;
  prerequisites: string;
  thumbnail: string;
  startTime: string;
  endTime: string;
  facultyCoordinators: {
    name: string;
    phone: string;
  }[];
  studentCoordinators: {
    name: string;
    phone: string;
  }[];
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const pathname = usePathname(); // Use usePathname instead of useRouter
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(pathname.split("/").pop() || ""); // Extract category from pathname
    fetch(`/api/events/${category}`)
      .then((response) => response.json())
      .then((data) => {
        const eventsData = data[0].events; // Access the events array from the response
        setEvents(eventsData); // Set the events array to the state
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);

  useEffect(() => {}, [events]);

  return (
    <div className="w-maxPage h-fit">
      <div className="-ml-5 flex justify-center items-center pt-32 z-50">
        <div className="text-6xl sm:text-8xl font-tiara  w-fit pr-8">
          Ti<span className="text-tiara_red">ar</span>a{" "}
          <span className="text-tiara_red">{"'"}</span>24
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="font-staat text-2xl mt-3">
          Explore the <span className="text-tiara_red">Unknown</span>
        </p>
      </div>
      <div className="w-maxPhone sm:w-maxPage flex justify-center items-center mt-10 z-50">
        <EventDisplay events={events} category={category} />
      </div>
    </div>
  );
}
