import { forEach } from "lodash";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest) {
  const path = req.nextUrl.pathname.split("/")[5];
  console.log(path);
  const events = [
    {
      id: "0",
      name: "CodeJam",
      description: "A coding competition for enthusiasts",
      rules: ["Rule 1","Rule 2"],
      prerequisites: ["P 1","P 2"],
      thumbnail: "/codejam-thumbnail.jpg",
      startTime: "2024-05-12 10:00",
      endTime: "2024-05-12 18:00",
      facultyCoordinators: [
        {
          name: "Michael Johnson",
          phone: "+1122334455",
        },
      ],
      studentCoordinators: [
        {
          name: "Emily Brown",
          phone: "+5566778899",
        },
      ],
    },
    {
      id: "1",
      name: "SyncLine  Sprint",
      description: "A high-speed race where robots follow a designated line, testing precision, speed, and coordination.",
      rules: [
        "All team members must be full-time students.",
        "No restrictions on team number per institute.",
        "Team size: 3-5 members.",
        "Registered ID card required.",
        "Only one team in the arena at a time.",
        "2 rounds with different maps.",
        "Black line on white arena.",
        "Autonomous robots after crossing start line.",
        "Line width approx. 3 cm.",
        "Teams provide batteries, power supply available.",
        "Robot intact until results.",
        "Judges' decision final."
      ],
      prerequisites: [
        "Knowledge of robotics and line following algorithms.",
        "Robot building skills."
      ],
      general_rules: [ 
        "Sportsmanship and adherence to event guidelines."
      ],
      thumbnail: "image_of_line_follower_robot.jpg", // Replace with actual image
      startTime: "2024-05-09 10:00:00", // Replace with actual start time
      endTime: "2024-05-09 17:00:00", // Replace with actual end time
      costs: "Registration fee: $XX", // Replace with actual cost
      facultyCoordinators: [
        {
          name: "Dr. Robotics Expert",
          phone: "555-123-4567" // Replace with actual contact details 
        }
      ],
      studentCoordinators: [
        {
          name: "Student Leader",
          phone: "555-234-5678" // Replace with actual contact details
        }
      ]
    }
    
  ]
  
  let matchedEvent = null;
  forEach(events, (event, key) => {
    if (event.id === path) {
      matchedEvent = event;
    }
  })
  
  return Response.json(matchedEvent);
}
