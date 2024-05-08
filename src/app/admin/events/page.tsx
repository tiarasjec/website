"use client";

import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminPage() {
  const data = ['Aim The Target', 'BGMI (Battle Ground Mobile India)', 'Black Mirror (Technical Treasure Hunt)', 'BlitzBot Soccer (Bot Soccer)', 'Business Bay (Shark Tank)', 'Buzz Wire', 'CADventures (3D CAD Challenge)', 'Capture Clash (Photography)', 'Cosmeticraze (Make-up and Hairstyle)', 'DirtDash RC (RC Extreme)', 'Drone Clash (Drone Challenge)', 'Groove (Dance Battle)', 'Gully-Googly (Gully Cricket)', 'Harmony Heaven (Group Singing)', 'Headline Hustle (Mock Press)', 'Heritage Haute (Fashion Show)', 'Humor Hustle (Stand-Up Comedy)', 'HydroBlast (Water Rocketry)', 'Lines & Shades (Sketching)', 'Mask It! (Face Painting)', 'One Piece (Boat Building)', 'Persuasion Pit (Debate)', 'Reeload (Reel Making)', 'RoboClash (Robo Sumo)', 'Rythmic Fusion (Group Dance)', 'Sky Surge (RC Plane Extreme)', 'Spin the Disc (Battle of DJs)', 'SyncLine Sprint (Line Follower)', 'Synergy (Best Management Team)', 'Tech Titan Tussle (Robo War, 3lbs)', 'Tech Titan Tussle (Robo War, 8KG)', 'Treasure Trek (Treasure Hunt)', 'Tune Tussel (Battle of Bands)', 'Typing Titans (Typing Challenge)', 'Valorant', 'ZenFlow (Ease of Flow)'];
  return (
    <>
      <Table>
        <TableCaption>List of Events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((event, i) => (
            <Link
              key={i}
              href={`/admin/events/${event}`}
              legacyBehavior
            >
              <TableRow>
                  <TableCell>{event}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
