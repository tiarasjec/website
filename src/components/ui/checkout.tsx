import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Suspense, use } from "react";
import React from "react";
import { useSession } from "next-auth/react";
import { CheckedItem } from "@/lib/interfaces";
import renderCheckedItemsList from "./renderCheckedItemList";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

const Buy = React.lazy(() => import("@/components/razorpay/Buy"));

export default function Checkout({
  technicalCheckedItems,
  nontechnicalCheckedItems,
  culturalCheckedItems,
  megaCheckedItems,
  sumOfCheckedItemsAmount,
  phoneNumber,
  itemsWith250,
}: {
  technicalCheckedItems: CheckedItem[];
  nontechnicalCheckedItems: CheckedItem[];
  culturalCheckedItems: CheckedItem[];
  megaCheckedItems: CheckedItem[];
  itemsWith250: CheckedItem[];
  sumOfCheckedItemsAmount: () => number;
  phoneNumber: string;
}) {
  const session = useSession({
    required: true,
  });
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = sumOfCheckedItemsAmount();
    setTotal(total);
  }, [sumOfCheckedItemsAmount]);

  let countOf250 =
    technicalCheckedItems.filter((item) => item.amount === 250).length +
    nontechnicalCheckedItems.filter((item) => item.amount === 250).length +
    culturalCheckedItems.filter((item) => item.amount === 250).length +
    megaCheckedItems.filter((item) => item.amount === 250).length;

  return (
    <Card className="overflow-hidden w-full max-w-lg">
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <h1 className="text-lg font-semibold">Events summary</h1>
          <span>
            {itemsWith250.map((item) => (
              <span key={item.key}>
                {item.name}({item.amount})
              </span>
            ))}
          </span>
          {renderCheckedItemsList(
            technicalCheckedItems,
            "technical",
            countOf250
          )}
          {renderCheckedItemsList(
            nontechnicalCheckedItems,
            "nontechnical",
            countOf250
          )}
          {renderCheckedItemsList(culturalCheckedItems, "cultural", countOf250)}
          {renderCheckedItemsList(megaCheckedItems, "mega", countOf250)}
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>
                {"\u20B9"}
                {total} /-
              </span>
            </li>
          </ul>
          <Suspense fallback={<Loading />}>
            <Buy
              name={session.data?.user?.name!}
              email={session.data?.user?.email!}
              contact={phoneNumber}
              amount={total}
            />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}
