const categoriesList = [
    {
      category: "technical",
      events: [
        {
          id: "0",
          name: "SyncLine Sprint (Line Follower)",
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
          thumbnail: "/", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX", 
          facultyCoordinators: [
            {
              name: "Dr. Robotics Expert",
              phone: "555-123-4567" 
            }
          ],
          studentCoordinators: [
            {
              name: "Student Leader",
              phone: "555-234-5678"
            }
          ]
        },
        {
          id: "1",
          name: "DirtDash RC (RC Extreme)",
          description: "Off-road RC car racing event testing speed, skill, and control on challenging terrains.",
          rules: [
            "All team members must be full-time students.",
            "Registered ID card required.",
            "No restrictions on team number per institute.",
            "Team size: 2-4 members.",
            "2 rounds.",
            "Self-made RC vehicles only.",
            "One run per team.",
            "Judges' decision final."
          ],
          prerequisites: [
            "RC car building and driving skills."
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_rc_car_racing.jpg", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
          facultyCoordinators: [
            {
              name: "Dr. RC Expert",
              phone: "555-123-4567" 
            }
          ],
          studentCoordinators: [
            {
              name: "Student Leader",
              phone: "555-234-5678" 
            }
          ]
        },
        {
          id: "2",
          name: "BlitzBot Soccer (Bot Soccer)",
          description: "Fast-paced robot soccer game requiring strategy, skill, and agility.",
          rules: [
            "Team size: 2-4 members.",
            "Judges and organizers' decisions final.",
            "Bot size limitations: 30cm x 30cm x 20cm (LxWxH).",
            "Weight limit: 5kg with 10% tolerance.",
            "Wired or wireless bots allowed.",
            "No Lego or ready-made kits.",
            "No hitting mechanisms.",
            "Minimum wire length 5m (wired bots).",
            "Voltage limit: 12.5V.",
            "Arena size: 12ft x 8ft.",
            "2 halves of 2 minutes each.",
            "Bots cannot be immobile for more than 10 seconds.", 
            "Specific rules for pushing, scoring, and penalties." 
          ],
          prerequisites: [
            "Robot building and programming skills.",
            "Understanding of soccer game rules."
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_robot_soccer.jpg",
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
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
          ]
        },
        {
          id: "3",
          name: "RoboClash (Robo Sumo)",
          description: "Robot combat event where robots try to push each other out of the arena.",
          rules: [ 
            "Team size: 2-4 members.",
            "Judges and organizers' decisions final.", 
            "No video recording by teams.",
            "Bot size limitations: 30cm x 30cm x 20cm (LxWxH).",
            "Weight limit: 5kg with 10% tolerance.",
            "Wired or wireless bots allowed.",
            "No Lego or ready-made kits.",
            "No hitting or lifting mechanisms.",
            "Minimum wire length 5m (wired bots).",
            "Voltage limit: 12.5V.",
            "Arena details revealed on event day.",
            "2 halves of 1 minute and 30 seconds each.", 
            "Specific rules for pushing and penalties."
          ], 
          prerequisites: [
            "Robot building and programming skills.",
            "Understanding of sumo wrestling rules."
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_robot_sumo.jpg", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00", 
          costs: "Registration fee: $XX",
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
          ]
        },
        {
          id: "4",
          name: "ONE PIECE",
          description: "Teams build boats to hold the most weight without sinking.",
          rules: [
            "Team size: 3-4 members.",
            "Materials provided on-site.",
            "Boat dimensions specified on-site.", 
            "25 minutes to build the boat.", 
            "Boats must float independently.",
            "No modifications after testing begins.", 
            "Follow safety guidelines."
          ],
          prerequisites: [
            "Basic engineering and design skills."
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_boat_building.jpg", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00", 
          costs: "Registration fee: $XX",
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
          ]
        }, 
        {
          id: "5",
          name: "ZenFlow (Ease of Flow)",
          description: "Teams use pipes and joints to transport water through obstacles.",
          rules: [
            "Team size: 3 members.",
            "1 round (6 minutes).", 
            "Judges and organizers' decisions final.", 
            "Use provided PVC pipes and joints.",
            "Pipes must pass along two sides of at least two cubes.",
            "No external materials allowed.", 
            "Maximum time of 6 minutes.",
            "Screening round if needed."
          ],
          prerequisites: [
            "Problem-solving and spatial reasoning skills."
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_water_flow_challenge.jpg", 
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
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
          ]
        },
        {
          id: "6",
          name: "TYPING TITANS!!!",
          description: "Competition to test typing speed and accuracy.", 
          rules: [
            "Open to all college students.", 
            "Individual registration.", 
            "No typing aids or software.", 
            "No cheating or plagiarism.",
            "Judges' decisions final.", 
            "Respectful behavior required."
          ],
          prerequisites: [
            "Typing skills." 
          ],
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ],
          thumbnail: "image_of_typing_competition.jpg", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00", 
          costs: "Registration fee: $XX",
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
          ]
        },
        {
          id: "7",
          name: "HydroBlast",
          description: "Competition to design and launch water rockets.",
          rules: [
            "Team size: Up to 4 members.",
            "All members from the same institution.", 
            "Judges' decisions final.", 
            "Multi-stage rockets allowed.",
            "No electronic or chemical components (except water).", 
            "No fire or explosives.", 
            "Teams provide launchpads and pumps.", 
            "Rocket volume limit: 2.5 liters.",
            "2 rounds: Distance challenge and target accuracy."
          ],
          prerequisites: [ 
            "Knowledge of rocketry and water rocket design." 
          ], 
          general_rules: [ 
            "Sportsmanship and adherence to event guidelines." 
          ], 
          thumbnail: "image_of_water_rocket.jpg", 
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
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
          ]
        },
        {
          id: "8",
          name: "Drone Clash (Drone Challenge)",
          description: "Drone racing competition with obstacle courses.",
          rules: [
            "Open to all drone enthusiasts.", 
            "Individual or team participation (up to 5 members).",
            "No restrictions on team composition.", 
            "One attempt per bot.", 
            "Penalties for collisions.", 
            "No arena access during race.", 
            "No test flights.",
            "Teams must have charged batteries.",
            "Drone must cross finish line to win.", 
            "Off-the-shelf drones prohibited.",
            "Frame size limitations.",
            "Battery/power supply limitations.", 
            "Line-of-sight operation.",
            "Radio telemetry range limitations."
          ], 
          prerequisites: [
            "Drone building and piloting skills." 
          ], 
          general_rules: [
            "Sportsmanship and adherence to event guidelines."
          ], 
          thumbnail: "image_of_drone_racing.jpg",
          startTime: "2024-05-09 10:00:00", 
          endTime: "2024-05-09 17:00:00", 
          costs: "Registration fee: $XX",
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
          ]
        } 
      ],
    }, 
    {
      category: "Non-Technical",
      events: [
        {
          id: "0",
          name: "TechExpo2",
          description: "Showcasing latest tech innovations",
          rules: ["RR"],
          prerequisites: ["PP"],
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          id: "1",
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: ["RR"],
          prerequisites: ["PP"],
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
      ],
    },
    {
      category: "Cultural",
      events: [
        {
          id: "0",
          name: "TechExpo3",
          description: "Showcasing latest tech innovations",
          rules: ["RR"],
          prerequisites: ["PP"],
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          id: "1",
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: ["RR"],
          prerequisites: ["PP"],
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
      ],
    },
    {
      category: "Mega",
      events: [
        {
          id:"0",
          name: "TechExpo4",
          description: "Showcasing latest tech innovations",
          rules: ["RR"],
          prerequisites: ["PP"],
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          id: "1",
          name: "CodeJam",
          description: "A coding competition for enthusiasts",
          rules: ["RR",],
          prerequisites: ["PP"],
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
      ],
    },
  ];
  

  export {categoriesList};