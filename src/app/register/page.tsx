"use client";
import React, { useEffect, useState } from "react";
import Checkout from "@/components/ui/checkout";
import { signIn, useSession } from "next-auth/react";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TabsDemo } from "@/components/razorpay/perCategory";
import { categoriesList } from "@/data/categoryList";

interface Event {
  name: string;
  key: string;
  amount: number;
  // team:boolean;
}

interface CheckedItem extends Event {
  checked: boolean;
}

interface CheckboxProps {
  className: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  value,
  checked,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      className={className}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

// const events: Event[] = [
//   { name: "SyncLine Sprint", key: "syncLineSprint", amount: 5 },
//   { name: "DirtDash RC", key: "dirtDashRC", amount: 10 },
//   { name: "BlitzBot Soccer", key: "blitzBotSoccer", amount: 15 },
//   { name: "RoboClash", key: "roboClash", amount: 20 },
//   { name: "ONE PIECE", key: "onePiece", amount: 25 },
//   { name: "ZenFlow", key: "zenFlow", amount: 30 },
//   { name: "TYPING TITANS", key: "typingTitans", amount: 35 },
//   { name: "HYDROBLAST", key: "hydroBlast", amount: 40 },
//   { name: "Drone Clash", key: "droneClash", amount: 45 },
//   { name: "BUSINESS BAY", key: "businessBay", amount: 50 },
//   { name: "BLACK MIRROR", key: "blackMirror", amount: 55 },
//   { name: "CADventures", key: "cadventures", amount: 60 },
// ];

// interface eventItems {
//   name: string;
//   costs: number;
// }
interface EventList {
  team: boolean;
  name: string;
  description: string;
  rules: string[];
  prerequisites: string[];
  general_rules: string[];
  thumbnail: string;
  startTime: string;
  endTime: string;
  costs: number;
  facultyCoordinators: { name: string; phone: string }[];
  studentCoordinators: { name: string; phone: string }[];
}

interface Events {
  [key: string]: EventList;
}

const Register: React.FC = () => {
  const session = useSession({
    required: true,
    onUnauthenticated: async () => {
      await signIn("google");
    },
  });

  const [checkedItems, setCheckedItems] = useState<CheckedItem[]>([]);
  const [phoneNumber, setPhoneNumber] = React.useState("+91");
  const [events, setEvents] = React.useState<Event[]>([]);


  useEffect(() => {
    const technicalEvents: Events = categoriesList.technical.events[0];
    Object.keys(technicalEvents).forEach((key) => {
     console.log(technicalEvents[key]);
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          name: technicalEvents[key].name,
          key: key,
          amount: technicalEvents[key].costs,
        },
      ])
    });
  }, []);

  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      const selectedEvent = events.find((event) => event.key === key);
      if (selectedEvent) {
        setCheckedItems([...checkedItems, { ...selectedEvent, checked: true }]);
      }
    } else {
      setCheckedItems(checkedItems.filter((item) => item.key !== key));
    }
  };

  const sumOfCheckedItemsAmount = checkedItems.reduce(
    (acc, item) => (item.checked ? acc + item.amount : acc),
    0
  );

  return (
    <div className="flex flex-col sm:flex-row w-full items-start justify-center gap-4 p-2 pt-36">
      <Card className="w-full max-w-xl">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              <span className="font-tiara">Ti<span className="text-red-500">ar</span>a{"'"} 24</span> Event Registration
            </CardTitle>
            <CardDescription>
              Your name and email are pre-filled from your Google account.
              <br /> Select the events you want to participate in and complete
              the payment.
            </CardDescription>
          </div>
        </CardHeader>
        <div className="p-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            aria-label="Name"
            placeholder="Name"
            value={session.data?.user?.name!}
            disabled
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            aria-label="Email"
            placeholder="Email"
            value={session.data?.user?.email!}
            disabled
          />
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            aria-label="Phone number"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <Separator className="my-2" />
        {events.map((event) => (
          <div
            key={event.key}
            className="flex justify-between items-center p-4 mb-2"
          >
            <Label className="mr-2">{event.name}</Label>
            <Checkbox
              className="w-6 h-6 rounded-full"
              value={event.key}
              checked={checkedItems.some((item) => item.key === event.key)}
              onChange={handleCheckboxChange}
            />
          </div>
        ))}
      </Card>
      <Checkout
        checkedItems={checkedItems}
        sumOfCheckedItemsAmount={sumOfCheckedItemsAmount}
        phoneNumber={phoneNumber}
      />
      <TabsDemo />
    </div>
  );
};

export default Register;
