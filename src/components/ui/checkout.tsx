import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Buy from "../razorpay/Buy";
import { Suspense } from "react";
import React from "react";
import { useSession } from "next-auth/react";
import { Label } from "./label";

interface Event {
  name: string;
  key: string;
  amount: number;
}

interface CheckedItem extends Event {
  checked: boolean;
}

export default function Checkout({
  checkedItems,
  sumOfCheckedItemsAmount,
}: {
  checkedItems: CheckedItem[];
  sumOfCheckedItemsAmount: number;
}) {
  const [phoneNumber, setPhoneNumber] = React.useState("+91");
  const session = useSession({
    required: true,
  });
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Event Registration
          </CardTitle>
          <CardDescription>Registration for Tiara 2024 events</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
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
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            {checkedItems.map((item) => (
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">{item.name}</span>
                <span>
                  {"\u20B9"}
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>
                {"\u20B9"}
                {sumOfCheckedItemsAmount} /-
              </span>
            </li>
          </ul>
          <Suspense fallback={null}>
            <Buy name={session.data?.user?.name!} email={session.data?.user?.email!} contact={phoneNumber} amount={sumOfCheckedItemsAmount} />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}
