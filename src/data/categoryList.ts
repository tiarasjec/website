import { tiaraAssetsPrefix } from '@/lib/utils';

const categoriesList = {
  technical: {
    // Small description of the category
    description:
      "Technical events are a showcase of innovation and creativity in the field of technology.",
    thumbnail: `${tiaraAssetsPrefix}/technical/technical_thumbnail.png`,
    events: [
      {
        "0": {
          team: false,
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
            `${tiaraAssetsPrefix}/technical/syncline_sprints.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Dr. Robotics Expert",
              phone: "555-123-4567",
            },
            {
              name: "Dr. Robotics Expert",
              phone: "555-123-4567",
            },
          ],
          studentCoordinators: [
            {
              name: "Sufaid",
              phone: "7795287262",
            },
            {
              name: "Shreyas Rai",
              phone: "9731068224",
            },
          ],
        },
        "1": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/dirtdash_rc.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Dr. RC Expert",
              phone: "555-123-4567",
            },
          ],
          studentCoordinators: [
            {
              name: "Mevil Dsa",
              phone: "9482905974",
            },
            {
              name: "Melrick",
              phone: "9686381387",
            },
          ],
        },
        "2": {
          team: false,
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
            `${tiaraAssetsPrefix}/technical/blitzbot_soccer.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Hensal Mathias",
              phone: "8867265012",
            },
            {
              name: "Ashton Dsouza",
              phone: "6364323663",
            },
          ],
        },
        "3": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/robo_clash.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Ian",
              phone: "6363960016",
            },
            {
              name: "Karthik",
              phone: "7483287716",
            },
          ],
        },
        "4": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/one_piece.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
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
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/zen_flow.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
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
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/typing_titans.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Omkar",
              phone: "6363302952",
            },
            {
              name: "Sahana",
              phone: "9845962616",
            },
          ],
        },
        "7": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/hydroblast.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Awais",
              phone: "9591319165",
            },
            {
              name: "Jeevith",
              phone: "9591710600",
            },
          ],
        },
        "8": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/drone_clash.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Mukshith",
              phone: "9113223178",
            },
            {
              name: "Akshay",
              phone: "9741473448",
            },
          ],
        },
        "9": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/cad_ventures.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Rahul Revankar",
              phone: "8147841609",
            },
            {
              name: "Mohammed Zaid",
              phone: "7019180608",
            },
          ],
        },
        "10": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/business_bay.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
          facultyCoordinators: [
            {
              name: "Michael Johnson",
              phone: "+1122334455",
            },
          ],
          studentCoordinators: [
            {
              name: "Venita",
              phone: "9606133612",
            },
            {
              name: "Prajwal Dsouza",
              phone: "8277547570",
            },
          ],
        },
        "11": {
          team: false,
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
          thumbnail: `${tiaraAssetsPrefix}/technical/black_mirror.png`,
          startTime: "2024-05-09 10:00:00",
          endTime: "2024-05-09 17:00:00",
          costs: 250,
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

  non_technical: {
    description:
      "Non-technical events are a showcase of creativity and talent in various fields such as art, music, and literature.",
    thumbnail:
      `${tiaraAssetsPrefix}/nontechnical/nontechnical_thumbnail.png`,
    events: [
      {
        "0": {
          team: false,
          name: "Capture Clash (Photography)",
          description:
            "World with pixels in a vibrant mosaic of visual eloquence",
          rules: [
            "The photograph must be in JPEG or JPG format.",
            "Basic editing, including color enhancement and cropping of the photo, is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the photo.",
            "The submission of the photograph should be done within due time. Failure to do this would lead to disqualification.",
            "The competition will be judged based on the quality, creativity, and content that the photograph portrays.",
            "The judges' and organizers' decisions will be final.",
          ],
          prerequisites: [
            "This will be an individual event.",
            "Contestants should bring their own photography kits.",
            "Themes will be given on-the-spot.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/capture_clash1.png`,
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
              name: "Muhammad Mukthaar",
              phone: "8157866491",
            },
            {
              name: "Uthpal",
              phone: "8147063820",
            },
          ],
        },
        "1": {
          team: false,
          name: " Reeload (Reel)",
          description:
            "Cinematic brilliance and creative flair in one thrilling reel.",
          prerequisites: [
            "The Reeload is an individual event where participants showcase their talents independently.",
            "Record and edit videos on the given topic with creative tools.",
            "Each participant is allowed to submit only one reel.",
          ],
          rules: [
            "The duration of the reel is to be a minimum of 30 seconds and a maximum of 60 seconds.",
            "The event starts at 9:00 a.m. and ends at 9:00 p.m. on the same day.",
            "All the participants will be added to the WhatsApp group, and the link to upload the reels will be shared.",
            "The reels should be uploaded before 11:59 p.m., after which no submissions will be considered.",
            "Any act of indiscipline by participants calls for the cancellation of registration.",
            "After the event day, further instructions will be shared on how to upload the reels to their own accounts.",
            "For judging purposes, those with a private account switch to public.",
            "Judging will be based on the quality and creativity of the video, and not on the number of views and likes.",
            "The judges' and organizers' decisions will be the final ones.",
          ],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/nontechnical/reeload.png`,
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
              name: "Kaneeksha Kiran",
              phone: "9071201842",
            },
            {
              name: "Vishak Kumble",
              phone: "9746547253",
            },
          ],
        },
        "2": {
          team: false,
          name: "Headline hustle (Mock Press)",
          description: "Plunge into the frenetic realm of journalism",
          prerequisites: [
            "Each participant is required to perform individually, showcasing their skills and abilities without assistance from teammates.",
            "Registration options include on-site or pre-registration.",
            "Punctuality is essential; candidates must be present at the venue on time.",
          ],
          rules: [
            "Each participant has 10 minutes to prepare for their assigned character and introduce themselves accordingly.",
            "Following the introduction, participants will field questions from judges acting as journalists, as well as from fellow participants and the audience.",
            "Categories are chosen by participants, but specific personalities within those categories are revealed via a draw during the competition.",
            "Participants must embody their assigned personality and refrain from any inappropriate behavior.",
            "Audience participation is encouraged, and organizers reserve the right to modify round formats as needed.",
            "The judges' decision will be deemed final and binding.",
            "Round 1: General/Entertainment Quiz.",
            "Round 2: The final round will be a mock press conference.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/headline_hustle.png`,
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
          team: false,
          name: "Synergy ( Best Management Team)",
          description:
            "Management excellence and success through leadership with each member a pillar of expertise navigating challenges with finesse",
          rules: [
            "On-the-spot or pre-registration can be done.",
            "Team must consist of 3 Members.",
            "Candidates should be present at the venue on time.",
            "Participant must carry their own laptop and other accessories.",
          ],
          prerequisites: ["PP"],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/nontechnical/synergy.png`,
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
              name: "Canute Pinto",
              phone: "8904155670",
            },
            {
              name: "Apeksha Neha",
              phone: "8431151695",
            },
          ],
        },
        "4": {
          team: false,
          name: "Lines & Shades (Sketching)",
          description: "Transforming canvas into mesmerizing masterpiece",
          prerequisites: ["Each participant must perform individually."],
          rules: [
            "The theme will be revealed at the beginning of the competition.",
            "Participants can seek inspiration from internet sources during the first 8 minutes only.",
            "Only lead pencil drawings are permitted; no colored artwork will be accepted.",
            "Participants must use the drawing sheets provided by the organizers.",
            "The competition has a time limit of 90 minutes for completing the artwork.",
            "Participants are responsible for bringing their own art materials.",
            "Plagiarism is strictly prohibited and will result in disqualification.",
            "The decisions of the judges and organizers are final.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/lines_and_shades.png`,
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
              name: "Sabin PS",
              phone: "9980878406",
            },
            
          ],
        },
        "5": {
          team: false,
          name: "Mask It! (Face Painting)",
          description:
            ": Unleash artistic alchemy with patterns converge on human canvas",
          prerequisites: ["Teams shall consist of two members only."],
          rules: [
            "The theme will be announced at the beginning of the competition.",
            "Participants may reference internet sources for inspiration during the initial 8 minutes.",
            "Each team must bring their own colors, brushes, and supplies.",
            "Stencils, stamps, and masks are not permitted.",
            "The competition must be completed within a 90-minute time frame.",
            "Participants will be evaluated on originality, creativity, and presentation.",
            "The decisions made by the judges and organizers are final.",
          ],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/nontechnical/mask.png`,
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
          team: false,
          name: "Persuasion pit (Debate)",
          description: "The art of rhetoric to shape the tides of debate",
          prerequisites: ["Teams consist of two members each."],
          rules: [
            "Topics will be provided 15 minutes before the round begins.",
            "One team will argue in favor of the topic, while the other team will argue against it.",
            "Each team has a maximum of 5 minutes to present their arguments.",
            "Vulgarity or misbehavior will result in disqualification.",
            "The decisions of the judges and organizers are final.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/rersuasion_pit.png`,
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
              name: "Apeksha A",
              phone: "9567026847",
            },
            {
              name: "Sandesh bekal",
              phone: "9663557289",
            },
          ],
        },
        "7": {
          team: false,
          name: "Humor hustle(Stand-Up Comedy)",
          description: "Life's laughs, unleashed one punchline at a time.",
          prerequisites: [
            "Teams may consist of a maximum of two participants.",
          ],
          rules: [
            "The content must be original and not copied from any source.",
            "It is strictly prohibited to use words that may offend or hurt the sentiments of individuals or religious groups.",
            "Performances should not rely on reading scripts from books or mobile devices.",
            "Vulgarity or misbehavior will not be tolerated.",
            "Each performance is allotted 7 minutes, with an additional 1 minute for setup if needed.",
            "The decisions made by the judges and organizers are final.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/humor_hustle.png`,
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
              name: "Sathwik A Bangera",
              phone: "6361973634",
            },
            {
              name: "Thejaswi bhandary",
              phone: "961116785",
            },
          ],
        },
        "8": {
          team: false,
          name: "Treasure trek (Treasure hunt)",
          description:
            "Embark on an exhilarating adventure, unravelling mysteries and uncovering treasures, in thrill of the hunt",
          prerequisites: ["Teams are limited to three members each."],
          rules: [
            "The event comprises four rounds, each with its own unique challenges.",
            "Detailed instructions will be provided at the venue, ensuring all participants are prepared.",
            "Judges' and organizers' decisions are ultimate and binding, ensuring fair play throughout the competition.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/treasure_trek.png`,
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
            {
              "name": "Anusha K",
              "phone": "9591053484"
            },
            {
              "name": "Charisma Shivani",
              "phone": "8660832070"
            }
          ],
        },
        "9": {
          team: false,
          name: "BGMI",
          description:
            "Dive into the heart-pounding battlegrounds of BGMI, where every move carves in the adrenaline-fueled arena of mobile gaming.",
          prerequisites: ["A valid college ID is required for participation."],
          rules: [
            "Wi-Fi connectivity will be available, but any issues related to Wi-Fi are not the responsibility of the management team. Participants should be prepared to use their own mobile data in such cases.",
            "Teams with unregistered players may face disqualification.",
            "During the online event, team members must refrain from using language that is offensive, insulting, or otherwise inappropriate.",
            "Participants must play all games to be eligible for prize winnings.",
            "The Tournament Administration reserves the right to change match start times at their discretion, with notification provided to all affected players.",
            "Strict adherence to schedule timing is required.",
            "Any act of violence will result in immediate disqualification.",
            "Team members can only compete for the team they have enrolled with and cannot participate in multiple teams simultaneously.",
            "The use of triggers is strictly prohibited.",
            "Teams must capture screenshots of all results.",
            "Allegations against teams must be supported by proper evidence, such as death replays or screen recordings.",
            "Teaming up with other teams is strictly prohibited and will result in disqualification for all involved teams.",
            "Third-party apps, mods, and exploiting bugs are strictly prohibited, with disqualification as the consequence for such offenses.",
            "Game rooms will not be restarted for any reason, including ping issues, glitches, or late player or team arrivals.",
            "The judges' and organizers' decisions will be final.",
          ],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/nontechnical/bgmi.png`,
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
            {
              "name": "Nishanth",
              "phone": "7676729896"
            },
            {
              "name": "Abhinav Sudesh",
              "phone": "9108668456"
            }
            
          ],
        },
        "10": {
          team: false,
          name: " Valorant",
          description: "We fight to win",
          prerequisites: [
            "Participants must play on their main Riot account and be at least 16 years old.",
            "Having a college ID is compulsory.",
          ],
          rules: [
            "Teams will consist of five players, one of whom will be designated captain.",
            "By participating in the Tournament, Participants acknowledge they will comply with the Tournament Rules and decisions made by the Administration.",
            "The Administration has the right to modify the rules and regulations for adjustments at any time without notice.",
            "Participants must be respectful towards Admins and other Participants. Insults and unfair or disrespectful behavior will not be tolerated.",
            "Vulgar, racist, sexist, or otherwise offensive player names are forbidden, at the sole discretion of the Tournament Admins.",
            "Participants must commit to playing the entire Tournament.",
            "All matches will be a Best-of-One.",
            "All players must report at the venue before the start of the tournament; failure to do so will lead to disqualification.",
            "All Participants must be available in the waiting area 10 minutes before their match starts and ready up for each match.",
            "Players must get their own accessories; the management will not be providing anything to the players. It is recommended to have an ethernet port on your laptop; if not, please inform the admins beforehand.",
            "The map pool consists of Ascent, Bind, Breeze, Icebox, Lotus, Split, and Sunset.",
            "Participants are prohibited from intentionally disconnecting from the game once a match begins. If a Participant or Team disconnects intentionally after the game has started, the game will continue with the remaining players and will not be restarted.",
            "If Participants are found guilty of Bug Abuse or in breach of Riot's Terms of Service, they may face consequences including automatic disqualification.",
          ],
          costs: 250,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/defy_the_limits.png`,
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
          team: false,
          name: "Cosmeticraze (Make-up and hairstyle)",
          description:
            " Beauty knows no bounds, redefining norms in an artful fusion of makeup and tress.",
          prerequisites: ["Three members make a team, including the model."],
          rules: [
            "Participants must create hair and makeup looks that align with a specific theme, 'Retro Glamour.'",
            "Competitors are typically given 90 minutes of time to complete their makeup looks.",
            "Makeup looks are evaluated based on various criteria, including creativity, originality, precision, and attention to detail.",
            "Competitors must adhere to strict hygiene and sanitation standards when applying makeup, including using disposable applicators, sanitizing tools between uses, and following proper makeup removal protocols.",
            "Organizers reserve the right to disqualify participants who violate competition rules, engage in unethical behavior, or fail to meet eligibility requirements.",
            "Judges' and organizers' decisions shall be final.",
          ],
          costs: 1800,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/cosmeticraze.png`,
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
            {
              "name": "Jessica Fernandes",
              "phone": "7019978723"
            }
            
          ],
        },
        "12": {
          team: true,
          name: " Gully-googly (Gully cricket)",
          description:
            "Beneath the sky, amidst chaos, legends rise with every swing of the bat",
          prerequisites: [
            "Each team typically consists of six players.",
            "The scheduled arrival time is 9 a.m.",
            "Failure to report at the assigned time will result in automatic disqualification for the team.",
            "Students from different colleges are allowed to form a single team.",
          ],
          rules: [
            "There are no sixes; only boundaries are considered.",
            "Runs can also be scored by running between the wickets.",
            "Bowling will be conducted underarm within the designated box.",
            "Common modes of dismissal include getting caught by a fielder, getting bowled, being run out, or hitting a six.",
            "One pitch caught in one hand is considered out.",
            "Fielders are positioned based on mutual agreement, often with variations due to space constraints.",
            "Each match consists of three overs per side.",
            "Gully cricket is played in a fun and spirited manner, with an emphasis on enjoyment.",
            "Fair play and sportsmanship are encouraged among players.",
            "Any form of vulgarity or misconduct will not be tolerated and may result in the disqualification of the offending team.",
            "If a match ends in a draw, a super-over will be played. If the super over also ends in a draw, the winner will be decided by a toss.",
            "Decisions made by the judges, organizers, and umpires will be deemed final and binding.",
          ],
          costs: 900,
          thumbnail:
            `${tiaraAssetsPrefix}/nontechnical/gully_googly.png`,
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
            {
              "name": "Abhishek U Acharva",
              "phone": "9739454720"
            },
            {
              "name": "AbhiramS",
              "phone": "7338475817"
            }
            
          ],
        },
        "13": {
          team: true,
          name: " Dunkin-dribble (3x3 Basketball)",
          description: "Just give it a shot",
          prerequisites: [
            "Each team should consist of three members.",
            "Teams must wear appropriate sportswear to participate; those without proper attire will not be allowed to compete.",
            "Registration will be limited to the first 20 boys' teams and the first 10 girls' teams.",
            "The scheduled arrival time is 9 a.m.",
            "Failure to report at the assigned time will result in automatic disqualification for the team.",
            "Students from different colleges are allowed to form a single team.",
          ],
          rules: [
            "Decisions made by judges and organizers are considered final.",
            "The game will last for 10 minutes with 2 minutes of mid-break.",
            "The match will be played on a half court.",
          ],
          costs: 900,
          thumbnail: `${tiaraAssetsPrefix}/nontechnical/dunkin.png`,
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
            {
              "name": "Vedika kodi",
              "phone": "9483302374"
            },
            {
              "name": "Shane Noronha",
              "phone": "9483913853"
            }
            
          ],
        },
        // "14": {
        //   team: false,
        //   name: "Seasoned-saute (ONLY FOR FACULTIES)",
        //   description: "",
        //   rules: ["RR"],
        //   prerequisites: ["PP"],
        //   costs: 250,
        //   thumbnail: "",
        //   startTime: "2024-05-12 10:00",
        //   endTime: "2024-05-12 18:00",
        //   facultyCoordinators: [
        //     {
        //       name: "Michael Johnson",
        //       phone: "+1122334455",
        //     },
        //   ],
        //   studentCoordinators: [
        //     {
        //       name: "Emily Brown",
        //       phone: "+5566778899",
        //     },
        //   ],
        // },
        // "14": {
        //   name: ". Seasoned-saute (ONLY FOR FACULTIES)",
        //   description: "",
        //   rules: ["RR"],
        //   prerequisites: ["PP"],
        //   thumbnail: "/codejam-thumbnail.jpg",
        //   startTime: "2024-05-12 10:00",
        //   endTime: "2024-05-12 18:00",
        //   facultyCoordinators: [
        //     {
        //       name: "Michael Johnson",
        //       phone: "+1122334455",
        //     },
        //   ],
        //   studentCoordinators: [
        //     {
        //       name: "Emily Brown",
        //       phone: "+5566778899",
        //     },
        //   ],
        // },
      },
    ],
  },

  cultural: {
    description:
      "Cultural events are a celebration of art, dance, and creativity.",
    thumbnail: `${tiaraAssetsPrefix}/cultural/cultural_thumbnail.png`,
    events: [
      {
        "0": {
          team: false,
          name: " RHYTHMIC FUSION (Group Dance)",
          description: "Every step ignites the fire!",
          prerequisites: [
            "All dance forms are allowed.",
            "Team size: Minimum number of dancers in a team - 7",
            "No maximum limit for participants.",
            "Sound tracks should be submitted in a pen drive prior to the event to the respective event coordinator.",
            "An individual cannot take part in multiple groups in the same event.",
            "College ID is mandatory at the event site.",
          ],
          rules: [
            "Each team will be allotted 5 minutes for their performance and 1 minute for stage setting, totaling 6 minutes.",
            "Exceeding the time limit may lead to negative marking.",
            "An instance of vulgarity / disturbing content will lead to a forceful halt of performance and immediate disqualification.",
            "No use of any powdered substances/fire/water / animals / smoke machine on stage.",
            "Audio file should be in MP3 format.",
            "Judges and organizers' decisions are final and binding.",
          ],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/cultural/rythmic_fusion.png`,
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
            {
              "name": "SUMANTH",
              "phone": "968650968"
            }
            
          ],
        },
        "1": {
          team: false,
          name: "HARMONY HAVEN (Group Singing",
          description: " Harmony in every note, unity in every voice",
          prerequisites: [],
          rules: [
            "Team size and composition:",
            "Maximum no. of members (including accompanists) - 12",
            "Minimum vocalists - 4",
            "Maximum vocalists - 7",
            "Maximum no. of instruments per team: 3",
            "Time limit: 2 minutes of setup time + 5 minutes of performance time (8 minutes in total).",
            "No pre-recorded instrumentals or vocals will be allowed.",
            "One individual is allowed to be a part of only one group. (Being part of more than one group will result in immediate disqualification).",
            "Any regional languages, as well as English songs, will be permitted.",
            "Explicit or offensive lyrics/gestures/misconduct will be disqualified immediately.",
            "Participants must bring their own instruments.",
            "Judges and organizers' decisions are final and binding.",
          ],
          costs: 250,
          thumbnail: `${tiaraAssetsPrefix}/cultural/harmony_heaven.png`,
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
            {
              "name": "ASHEL DSOUZA",
              "phone": "9110879491"
            }
            
          ],
        },
      },
    ],
  },

  mega: {
    description:
      "Mega events are the grand spectacles of the fest, featuring a variety of competitions and performances that showcase the talents and skills of participants in a larger-than-life setting.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.png`,
    events: [
      {
        "0": {
          name: "TUNE TUSSLE (Battle Of Bands)",
          description: "Rocking the stage, one riff at a time!",
          prerequisites: [],
          rules: [
            "Team size: 3-7 members",
            "Minimum number of members per band - 3 (minimum use of 3 instruments is a must).",
            "Maximum number of members per band - 7 (Members performing for more than one band will lead to disqualification of all the involved bands)",
            "Time limit 5+15 (exceeding the time limit will lead to loss of points).",
            "There is no specific genre for the battle however the overall atmosphere of the music has to be western.",
            "Slot Picking, ID and age verification wilt be done one day prior to the battle i.e. on the 5th of March 2023. (All the band members need not be present; However, the Band representatives need to have the necessary documents for verification for all the members).",
            "Audition links to be submitted by May 1st 2024 with all the necessary details of the bands (including brief introduction of the bands with social media links, links to the released music or YouTube covers and the details of band members. Bands failing to do so will not be considered into the battle). The selected Bands will be contacted back. Submission: tiara@sjec.ac.in.",
            "All the Rules and regulations will be briefed to the band representatives on the day prior to the battle.",
            "Participants must convey their message concisely and effectively, avoiding unnecessary details and jargon.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/tunetussel.jpg`,
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
            {
              "name": "AJITH RODRIGUES",
              "phone": "6362070751"
            },
            {
              "name": "SEAN R MONIS",
              "phone": "9448106775"
            }
            
          ],
        },
        "1": {
          name: "SPIN-OFF SHOWDOWN (BATTLE OF DJ) ",
          description: "Mixing beats, igniting souls",
          prerequisites: [
            "All contestants must register themselves on the website.",
          ],
          rules: [
            "The SPIN WIZARD is an individual event.",
            "Time limit: 5 minutes of setup time + 10 minutes of performance time (15 minutes in total).",
            "The use of any kind of abusive / offensive / pornographic / illegal content is strictly prohibited. Such contest entries will be disqualified immediately.",
            "Contestants are requested to bring their own headphones and pen drives.",
            "Use of Controllers is permitted.",
            "Judge's decision in all matters is final and cannot be appealed or contested.",
            "Results will be announced right after the competition.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/spin_of_showdown.jpg`,
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
            {
              "name": "HAVAN KOTIAN",
              "phone": "8951726188"
            },
            {
              "name": "RENVIL CASTELINO",
              "phone": "8139979122"
            }
            
          ],
        },
        "2": {
          name: "GROOVE",
          description: " Step up, shake it off, and own the floor",
          prerequisites: [
            "Individual participation.",
            "Participants must present a physical college ID card and PID to participate in the event.",
          ],
          rules: [
            "All the rounds will be battle and there will be elimination.",
            "Random songs will be played on the spot.",
            "Two participants will be called on the stage simultaneously. The first participant dances to a song played on the spot while the other stays still.",
            "At the signal of the judges, the first participant will stop and the second participant will immediately begin dancing to the continuation of the same song.",
            "The process will be repeated every time the song is changed. The starting sequence for each song will be performed by participants 1 and 2 alternately.",
            "Judgement will be based on Creativity, Musicality, Confidence, Entertainment factor, Execution and Expression will be considered.",
            "Judges and organizer's decisions are final and binding.",
            "Judges and coordinator may tweak the rules based on the number of participants.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/groove.jpeg`,
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
            {
              "name": "RISHIKA",
              "phone": "8624901265"
            },
            {
              "name": "SOURABH",
              "phone": "9113962008"
            }
            
          ],
        },
        "3": {
          name: "HERITAGE HAUTE (Fashion walk)",
          description: "Strut with style, own the runway",
          prerequisites: [
            "All the participants must be from the same college.",
            "Participants must present a physical college ID card and PID to participate in the event.",
          ],
          rules: [
            "A team can have a minimum of 8 models to a maximum of 16 models.",
            "A total of 5 minutes will be allotted purely for the performance, and an additional 2 minutes will be allotted for setting up the stage.",
            "Use of water, fire or any kind of fireworks (party poppers) will lead to immediate disqualification.",
            "There are no gender restrictions for the team composition.",
            "Performance should be based on the theme given.",
            "Any deviation from a fashion-related choreography will lead to a deduction in score.",
            "Any violation with respect to the campus rules could lead to disqualification.",
            "Any sort of intoxication in the campus or the green room will lead to disqualification.",
            "Judgement will be based on coordination, music, confidence, gesture, creativity, garments and accessories.",
            "The decisions of the judges and organisers will be final.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/heritage_haute.jpeg`,
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
            {
              "name": "ANUSHA",
              "phone": "7259583371"
            },
            {
              "name": "MELISHA DSOUZA",
              "phone": "8217458056"
            }
            
          ],
        },
        "4": {
          name: "TECH TITAN TUSSLE (ROBOWARs) ",
          description:
            "Witness sparks fly and metal clash in the ultimate showdown of robotic combat",
          prerequisites: [
            "Participants must carry any valid ID for registration.",
          ],
          rules: [
            "Team size: 3-6 members.",
            "Compliance with organizers' directives is mandatory; violations lead to disqualification.",
            "Judges' decisions are final.",
            "Bot weight limit: 3lb and 8kg categories.",
            "Only wireless bots allowed.",
            "Various weapons allowed with exceptions and limitations.",
            "Knock-out format for contests.",
            "Safety inspection before the event; unsafe bots discarded.",
            "Bot declared immobile if unable to exhibit linear motion of at least one inch within 10 seconds.",
            "LEGO kits, readymade kits, etc., not permitted; readymade gear boxes allowed.",
            "Organizers reserve the right to modify rules.",
            "Strict enforcement of allocated time; no extensions.",
            "Unsafe bots disqualified during the match.",
            "Criteria for judging informed on event day.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/techtitan.jpg`,
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
            {
              "name": "Delson Tellis",
              "phone": "8310990921"
            },
            {
              "name": "Shreyas",
              "phone": "7090265515"
            }
            
          ],
        },
        "5": {
          name: "SKY SURGE (RC Plane)",
          description:
            "Taking imagination on flight with cutting-edge innovation",
          prerequisites: [
            "Propellor Palooza is an open-to-all event.",
            "Teams can have a maximum of 4 members.",
            "Teams must register through the official Tiara'24 website. Spot entries are not allowed.",
            "Team members must possess a Tiara ID to participate.",
            "Participants must design and fabricate an RC aircraft; readymade models are not allowed.",
            "The same aircraft should be used in both rounds.",
            "Use of 2.4 GHz radio is required for all competing aircraft.",
            "Receivers installed in the aircraft must be in 'receiver mode only'.",
            "Last date for abstract submission: April 30, 2024.",
          ],
          rules: [
            "Teams must adhere to design constraints including T/W ratio, propeller diameter, and wingspan limitations.",
            "Only electric motors are allowed; IC engines or other means of providing thrust are prohibited.",
            "Use of gyroscopes (gyros) and programming assistance in receivers is prohibited.",
            "Programming for any step of the mission is not allowed.",
            "Use of FPV or any other support for flying is not allowed.",
            "The competition will be conducted in 3 rounds, with final points being the sum of points earned in each round.",
            "Teams will have 2 attempts in round 2 and 3, and the best of the scores will be considered from each round.",
            "Metal propellers are not allowed.",
            "Organizers will check all systems (servos, motors, etc.) for functionality before the competition.",
            "In case of disputes/discrepancies, the organizers' decision will be final and binding.",
            "Any changes in rules will be updated on the official Tiara'24 website and notified to registered teams.",
            "For details about the competition rounds, please refer to the rulebook.",
          ],
          costs: 300,
          thumbnail: `${tiaraAssetsPrefix}/mega/sky_surge.jpeg`,
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
            {
              "name": "Prajwal",
              "phone": "7019111734"
            },
            {
              "name": "Mayur",
              "phone": "9353832081"
            }
            
          ],
        },
      },
    ],
  },
};

export { categoriesList };
