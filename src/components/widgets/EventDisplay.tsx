import React from "react";
import { EventCard } from "../ui/EventCard";

// interface Event {
//   title: string;
// }

// interface EventDisplayProps {
//   categories: Event[];
// }

const EventDisplay = () => {
return (
    <>
        <div className="w-fit  flex flex-wrap justify-center items-center p-4  z-50 gap-y-8 gap-x-12">
            {/* {categories.map((Event, index) => (
    <EventCard key={index} Event={Event.title} />
))} */}
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
            <div className="mb-4">
                <EventCard title="Blitz" description="Some" />
            </div>
        </div>
    </>
);
};

export default EventDisplay;
