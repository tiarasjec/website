import React from "react";
import { EventCard } from "../ui/EventCard";

interface Event {
  name: string;
  description: string;
}

interface EventDisplayProps {
  events: Event[];
  category: string;
}

const EventDisplay: React.FC<EventDisplayProps> = ({ events, category }) => {
  return (
    <div className="w-maxPhone sm:-ml-5 flex flex-wrap justify-center items-center p-4 z-10 gap-y-8 gap-x-12 sm:gap-x-3 sm:p-0">
      {events.map((event, index) => (
        <div key={index} className="mb-4">
          <EventCard
            name={event.name}
            description={event.description}
            category={category}
            id={index}
          />
        </div>
      ))}
    </div>
  );
};

export default EventDisplay;
