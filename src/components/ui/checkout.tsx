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
import { Suspense } from "react";
import React from "react";
import { useSession } from "next-auth/react";
import { Label } from "./label";
import Loading from "@/app/loading";

const Buy = React.lazy(() => import("@/components/razorpay/Buy"));

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
  phoneNumber,
}: {
  checkedItems: CheckedItem[];
  sumOfCheckedItemsAmount: number;
  phoneNumber: string;
}) {
  const session = useSession({
    required: true,
  });
  return (
    <Card className="overflow-hidden w-full max-w-lg">
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <h1 className="text-lg font-semibold">Events summary</h1>
          {checkedItems.length > 0 ? <ul className="grid gap-3">
            {checkedItems.map((item) => (
              <li className="flex items-center justify-between" key={item.key}>
                <span className="text-muted-foreground">{item.name}</span>
                <span>
                  {"\u20B9"}
                  {item.amount}
                </span>
              </li>
            ))}
          </ul> : <p className="text-muted-foreground">No events selected</p>}
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
          <Suspense fallback={<Loading />}>
            <Buy
              name={session.data?.user?.name!}
              email={session.data?.user?.email!}
              contact={phoneNumber}
              amount={sumOfCheckedItemsAmount}
            />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}
