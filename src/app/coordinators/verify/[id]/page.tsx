"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VerificationPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [data, setData] = useState<User | null>(null);
  useEffect(() => {
    fetch(`/api/coordinators/verify/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.user);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verification of {data.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>
          Email
          <Input value={data.email!} disabled />
        </Label>
        <Label>
          Phone
          <Input value={data.contact!} disabled />
        </Label>
        <Label>
          College
          <Input value={data.college!} disabled />
        </Label>
        <Label>
          Events
          <div className="flex flex-col gap-3 mt-5">
            {data.events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </div>
        </Label>
      </CardContent>
    </Card>
  );
}
