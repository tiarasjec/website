// import React from "react";

// const timechart = () => {
//   const events = [
//     "Registration",
//     "Inaugration",
//     "Capture Clash",
//     "Reelingreels",
//     "Headline Hust..",
//   ];
//   return (
//     <div className="w-full h-fit items-center space-y-3">
//       {events.map((event, index) => (
//         <div
//           key={index}
//           className="relative w-full h-fit flex items-center font-staat"
//         >
//           <div className="absolute h-0.5 w-full bg-primary rounded-full" />
//           <div
//             className={`relative h-12 w-1/6 ml-${
//               index * 28 + 2
//             } bg-secondary rounded-full flex items-center`}
//           >
//             <div className="relative z-20 h-12 w-12 bg-tiara_red rounded-full"></div>
//             <h3 className="ml-2 text-2xl">{event}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default timechart;
import React from "react";
import { AnimatedPinDemo } from "./ganttab";

export default function App() {
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 19; hour++) {
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const am_pm = hour >= 12 ? "pm" : "am";
      const time = `${displayHour}${am_pm}`;
      timeSlots.push(time);
    }
    return timeSlots;
  };

  return (
    <div className="bg-blue rounded-md w-full h-fit">
      <table className="rounded-md w-full">
        <thead className="bg-black rounded-md">
          <tr className="bg-secondary text-2xl font-staat">
            {generateTimeSlots().map((time, index) => (
              <th key={index} className="border-r border-gray-200 w-1/12">
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="absolute rounded-md bg- w-full mt-2 bg-secondary">
          <tr key="1">
            <AnimatedPinDemo/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
