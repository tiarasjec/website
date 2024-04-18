const categoriesList = {
  technical: {
    thumbnail:
      "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/technical_thumbnail.png",
    events: [
      {
        "0": {
          name: "SyncLine Sprint (Line Follower)",
          description:
            "Experience the adrenaline-fueled intensity in a high-speed race of synchronized robots.",
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
            "Judges' decision final.",
          ],
          prerequisites: [
            "Knowledge of robotics and line following algorithms.",
            "Robot building skills.",
          ],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/syncline_sprints.png",
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
          facultyCoordinators: [
            {
              name: "Dr. Robotics Expert",
              phone: "555-123-4567",
            },
          ],
          studentCoordinators: [
            {
              name: "Student Leader",
              phone: "555-234-5678",
            },
          ],
        },
        "1": {
          name: "DirtDash RC (RC Extreme)",
          description:
            "Unleash the thrill at off-road adventure as miniature marvels tear through rugged lanscapes.",
          rules: [
            "All team members must be full-time students.",
            "Registered ID card required.",
            "No restrictions on team number per institute.",
            "Team size: 2-4 members.",
            "2 rounds.",
            "Self-made RC vehicles only.",
            "One run per team.",
            "Judges' decision final.",
          ],
          prerequisites: ["RC car building and driving skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/dirtdash_rc.png",
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: "Registration fee: $XX",
          facultyCoordinators: [
            {
              name: "Dr. RC Expert",
              phone: "555-123-4567",
            },
          ],
          studentCoordinators: [
            {
              name: "Student Leader",
              phone: "555-234-5678",
            },
          ],
        },
        "2": {
          name: "BlitzBot Soccer (Bot Soccer)",
          description: "Electrifying fusion of robotics and soccer.",
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
            "Specific rules for pushing, scoring, and penalties.",
          ],
          prerequisites: [
            "Robot building and programming skills.",
            "Understanding of soccer game rules.",
          ],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/blitzbot_soccer.png",
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
          ],
        },
        "3": {
          name: "RoboClash (Robo Sumo)",
          description: "Innovation with electrifying clash.",
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
            "Specific rules for pushing and penalties.",
          ],
          prerequisites: [
            "Robot building and programming skills.",
            "Understanding of sumo wrestling rules.",
          ],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/robo_clash.png",
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
          ],
        },
        "4": {
          name: "ONE PIECE",
          description:
            "Embark on your quest with ingenuity in this nautical challenge.",
          rules: [
            "Team size: 3-4 members.",
            "Materials provided on-site.",
            "Boat dimensions specified on-site.",
            "25 minutes to build the boat.",
            "Boats must float independently.",
            "No modifications after testing begins.",
            "Follow safety guidelines.",
          ],
          prerequisites: ["Basic engineering and design skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/one_piece.png",
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
          ],
        },
        "5": {
          name: "ZenFlow (Ease of Flow)",
          description: "Navigate obstacles with fluid precision.",
          rules: [
            "Team size: 3 members.",
            "1 round (6 minutes).",
            "Judges and organizers' decisions final.",
            "Use provided PVC pipes and joints.",
            "Pipes must pass along two sides of at least two cubes.",
            "No external materials allowed.",
            "Maximum time of 6 minutes.",
            "Screening round if needed.",
          ],
          prerequisites: ["Problem-solving and spatial reasoning skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/zen_flow.png",
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
          ],
        },
        "6": {
          name: "TYPING TITANS!!!",
          description:
            "Race to master the keys in the ultimate typing showdown.",
          rules: [
            "Open to all college students.",
            "Individual registration.",
            "No typing aids or software.",
            "No cheating or plagiarism.",
            "Judges' decisions final.",
            "Respectful behavior required.",
          ],
          prerequisites: ["Typing skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/typing_titans.png",
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
          ],
        },
        "7": {
          name: "HydroBlast",
          description:
            "Ascend to Ambitious Victory with Hydro-Powered Mastery.",
          rules: [
            "Team size: Up to 4 members.",
            "All members from the same institution.",
            "Judges' decisions final.",
            "Multi-stage rockets allowed.",
            "No electronic or chemical components (except water).",
            "No fire or explosives.",
            "Teams provide launchpads and pumps.",
            "Rocket volume limit: 2.5 liters.",
            "2 rounds: Distance challenge and target accuracy.",
          ],
          prerequisites: ["Knowledge of rocketry and water rocket design."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/hydroblast.png",
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
          ],
        },
        "8": {
          name: "Drone Clash (Drone Challenge)",
          description:
            "Experience the ultimate rush of Drone Racing for an electrifying journey to victory.",
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
            "Radio telemetry range limitations.",
          ],
          prerequisites: ["Drone building and piloting skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/drone_clash.png",
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
          ],
        },
        "9": {
          name: "CADventures (3D CAD Challenge)",
          description: "Map your boundless creativity with CAD.",
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
            "Radio telemetry range limitations.",
          ],
          prerequisites: ["Drone building and piloting skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/cad_ventures.png",
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
          ],
        },
        "10": {
          name: "Business bay (SHARK TANK)",
          description: "A dynamic thrill of Ideas and Toss.",
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
            "Radio telemetry range limitations.",
          ],
          prerequisites: ["Drone building and piloting skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/business_bay.png",
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
          ],
        },
        "11": {
          name: "Black mirror (Technical Treasure Hunt)",
          description: "Fusion of storytelling and puzzles tangled in quest.",
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
            "Radio telemetry range limitations.",
          ],
          prerequisites: ["Drone building and piloting skills."],
          general_rules: ["Sportsmanship and adherence to event guidelines."],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/technical/black_mirror.png",
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
          ],
        },
      },
    ],
  },

  "non_technical": {
    thumbnail:
      "https://raw.githubusercontent.com/tiarasjec/assets/main/nontechnical/nontechnical_thumbnail.png",
    events: [
      {
        "0": {
          name: "Capture Clash (Photography)",
          description:
            ": World with pixels in a vibrant mosaic of visual eloquence",
          rules: ["RR"],
          prerequisites: ["PP"],
          thumbnail:
            "https://raw.githubusercontent.com/tiarasjec/assets/main/nontechnical/capture_clash.png",
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
        "1": {
          name: " Reeload (Reel)",
          description:
            "Cinematic brilliance and creative flair in one thrilling reel.",
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
        "2": {
          name: "Headline hustle (Mock Press)",
          description: "Plunge into the frenetic realm of journalism",
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
        "3": {
          name: "Synergy ( Best Management Team)",
          description:
            "Management excellence and success through leadership with each member a pillar of expertise navigating challenges with finesse",
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
        "4": {
          name: "Lines & Shades (Sketching)",
          description: "Transforming canvas into mesmerizing masterpiece",
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
        "5": {
          name: "Mask It! (Face Painting)",
          description:
            ": Unleash artistic alchemy with patterns converge on human canvas",
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
        "6": {
          name: "Persuasion pit (Debate)",
          description: "The art of rhetoric to shape the tides of debate",
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
        "7": {
          name: "Humor hustle(Stand-Up Comedy)",
          description: "Life's laughs, unleashed one punchline at a time.",
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
        "8": {
          name: "Treasure trek (Treasure hunt)",
          description:
            "Embark on an exhilarating adventure, unravelling mysteries and uncovering treasures, in thrill of the hunt",
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
        "9": {
          name: "BGMI",
          description:
            "Dive into the heart-pounding battlegrounds of BGMI, where every move carves in the adrenaline-fueled arena of mobile gaming.",
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
        "10": {
          name: " Valorant",
          description: "We fight to win",
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
        "11": {
          name: "Cosmeticraze (Make-up and hairstyle)",
          description:
            " Beauty knows no bounds, redefining norms in an artful fusion of makeup and tress.",
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
        "12": {
          name: " Gully-googly (Gully cricket)",
          description:
            "Beneath the sky, amidst chaos, legends rise with every swing of the bat",
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
        "13": {
          name: " Dunkin-dribble (3x3 Basketball)",
          description: "Just give it a shot",
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
        "14": {
          name: ". Seasoned-saute (ONLY FOR FACULTIES)",
          description: "",
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
      },
    ],
  },

  cultural: {
    thumbnail:
      "https://raw.githubusercontent.com/tiarasjec/assets/main/cultural/cultural_thumbnail.png",
    events: [
      {
        "0": {
          name: " RHYTHMIC FUSION (Group Dance)",
          description: "Every step ignites the fire!",
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
        "1": {
          name: "HARMONY HAVEN (Group Singing",
          description: " Harmony in every note, unity in every voice",
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
      },
    ],
  },

  mega: {
    thumbnail:
      "https://raw.githubusercontent.com/tiarasjec/assets/main/mega/mega_thumbnail.png",
    events: [
      {
        "0": {
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
        "1": {
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
      },
    ],
  },
};

export { categoriesList };
