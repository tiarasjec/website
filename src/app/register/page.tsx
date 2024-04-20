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
import { Event, CheckedItem, CheckboxProps, EventList, Events } from "@/lib/interfaces";


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

function processEvents(
  category: string,
  categoriesList: any,
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>
) {
  const eventsData: Event[] = [];
  const categoryEvents: Events = categoriesList[category].events[0]; // Assuming you only want the first array of events

  Object.keys(categoryEvents).forEach((key) => {
    const event = categoryEvents[key];
    eventsData.push({
      name: event.name,
      key: key,
      amount: event.costs,
      team: event.team,
    });
  });

  setEvents(eventsData);
}



const Register: React.FC = () => {
  const session = useSession({
    required: true,
    onUnauthenticated: async () => {
      await signIn("google");
    },
  });

  const [technicalCheckedItems, setTechnicalCheckedItems] = useState<CheckedItem[]>([]);
  const [nontechnicalCheckedItems, setNontechnicalCheckedItems] = useState<CheckedItem[]>([]);
  const [culturalCheckedItems, setCulturalCheckedItems] = useState<CheckedItem[]>([]);
  const [megaCheckedItems, setMegaCheckedItems] = useState<CheckedItem[]>([]);
  
  const [phoneNumber, setPhoneNumber] = React.useState("+91");
  const [technical, setTechnical] = React.useState<Event[]>([]);
  const [nontechnical, setNonTechnical] = React.useState<Event[]>([]);
  const [cultural, setCultural] = React.useState<Event[]>([]);
  const [mega, setMega] = React.useState<Event[]>([]);
  

  useEffect(() => {
    processEvents("technical", categoriesList, setTechnical);
    processEvents("non_technical", categoriesList, setNonTechnical);
    processEvents("cultural", categoriesList, setCultural);
    processEvents("mega", categoriesList, setMega);
    console.log(technical);
    console.log(nontechnical);
    console.log(cultural);
    console.log(mega);
  }, []);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const key = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      if (category === "technical") {
        const selectedEvent = technical.find((event) => event.key === key);
        if (selectedEvent) {
          setTechnicalCheckedItems([
            ...technicalCheckedItems,
            { ...selectedEvent, checked: true },
          ]);
        } else {
          setTechnicalCheckedItems(
            technicalCheckedItems.filter((item) => item.key !== key)
          );
        }
      } else if (category === "nontechnical") {
        const selectedEvent = nontechnical.find((event) => event.key === key);
        if (selectedEvent) {
          setNontechnicalCheckedItems([
            ...nontechnicalCheckedItems,
            { ...selectedEvent, checked: true },
          ]);
        } else {
          setNontechnicalCheckedItems(
            technicalCheckedItems.filter((item) => item.key !== key)
          );
        }
      } else if (category === "cultural") {
        const selectedEvent = cultural.find((event) => event.key === key);
        if (selectedEvent) {
          setCulturalCheckedItems([
            ...culturalCheckedItems,
            { ...selectedEvent, checked: true },
          ]);
        }
        else {
          setCulturalCheckedItems(
            culturalCheckedItems.filter((item) => item.key !== key)
          );
        }
      } 
      else if (category === "mega") {
        const selectedEvent = mega.find((event) => event.key === key);
        if (selectedEvent) {
          setMegaCheckedItems([
            ...megaCheckedItems,
            { ...selectedEvent, checked: true },
          ]);
        }
        else {
          setMegaCheckedItems(
            megaCheckedItems.filter((item) => item.key !== key)
          );
        }
      } 
    }
  };

  const sumOfCheckedItemsAmount = megaCheckedItems.reduce(
    (acc, item) => (item.checked ? acc + item.amount : acc),
    0
  );

  return (
    <div className="flex flex-col sm:flex-row w-full items-start justify-center gap-4 p-2 pt-36">
      <Card className="w-full max-w-xl">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              <span className="font-tiara">
                Ti<span className="text-red-500">ar</span>a{"'"} 24
              </span>{" "}
              Event Registration
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
        <TabsDemo
          {...{ technical, nontechnical, cultural, mega }}
          technicalCheckedItems={technicalCheckedItems}
          nontechnicalCheckedItems={nontechnicalCheckedItems}
          culturalCheckedItems={culturalCheckedItems}
          megaCheckedItems={megaCheckedItems}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Card>
      <Checkout
        technicalCheckedItems={technicalCheckedItems}
        nontechnicalCheckedItems={nontechnicalCheckedItems}
        culturalCheckedItems={culturalCheckedItems}
        megaCheckedItems={megaCheckedItems}
        sumOfCheckedItemsAmount={sumOfCheckedItemsAmount}
        phoneNumber={phoneNumber}
      />
    </div>
  );
};

export default Register;
