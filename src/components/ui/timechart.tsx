import React from "react";

const timechart = () => {
  const events = [
    "Registration",
    "Inaugration",
    "Capture Clash",
    "Reelingreels",
    "Headline Hust..",
  ];
  return (
    <div className="w-full h-fit items-center space-y-3 bg-blue-500">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative w-full h-fit flex items-center font-staat"
        >
          <div className="absolute h-0.5 w-full bg-primary rounded-full" />
          <div
            className={`relative h-12 w-1/6 ml-${
              index * 28 + 2
            } bg-secondary rounded-full flex items-center`}
          >
            <div className="relative z-20 h-12 w-12 bg-tiara_red rounded-full"></div>
            <h3 className="ml-2 text-2xl">{event}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default timechart;
