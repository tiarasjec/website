import React from "react";
import { Card, Icon } from "@/components/ui/framer/card";
import { Text } from "@/components/shared/text";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
  {
    name: "Mr. Roopesh",
    role: "Faculty Coordinator",
    image: "/team/roopesh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/roopesh-329862125/",
    },
  },
];

function TeamPage() {
  return (
    <div className="py-10 mx-auto flex flex-wrap gap-2">
      <Text inherit="h1">Tiara 2024 Core Team</Text>
      {team.map((member, i) => (
        <div
          key={i}
          className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3" />
          <Card image={member.image} />
          <h2 className="mt-4 text-sm font-light">
            Hover over this card to reveal an awesome effect. Running out of
            copy here.
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4  px-2 py-0.5">
            Watch me hover
          </p>
        </div>
      ))}
    </div>
  );
}

export default TeamPage;
