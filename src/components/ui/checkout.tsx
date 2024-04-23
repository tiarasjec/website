import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Suspense, use } from "react";
import React from "react";
import { useSession } from "next-auth/react";
import { CheckedItem,Teams } from "@/lib/interfaces";
import renderCheckedItemsList from "./renderCheckedItemList";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Info from "./hover/info";
import { Label } from "./label";
import { Input } from "./input";


const Buy = React.lazy(() => import("@/components/razorpay/Buy"));


export default function Checkout({
  technicalCheckedItems,
  nontechnicalCheckedItems,
  culturalCheckedItems,
  megaCheckedItems,
  sumOfCheckedItemsAmount,
  itemsWith250,
  college,
  selectedEvents,
}: {
  technicalCheckedItems: CheckedItem[];
  nontechnicalCheckedItems: CheckedItem[];
  culturalCheckedItems: CheckedItem[];
  megaCheckedItems: CheckedItem[];
  itemsWith250: CheckedItem[];
  college: string;
  selectedEvents: string[];
  sumOfCheckedItemsAmount: () => number;
}) {
  const session = useSession({
    required: true,
  });
  const [total, setTotal] = useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState("+91");
  useEffect(() => {
    const total = sumOfCheckedItemsAmount();
    setTotal(total);
  }, [sumOfCheckedItemsAmount]);

  let countOf250 =
    technicalCheckedItems.filter((item) => item.amount === 250).length +
    nontechnicalCheckedItems.filter((item) => item.amount === 250).length +
    culturalCheckedItems.filter((item) => item.amount === 250).length +
    megaCheckedItems.filter((item) => item.amount === 250).length;
  const [teamCount, setTeamCount] = useState<Teams[]>([]);
  const [teamNames, setTeamNames] = useState<string[]>([]);

  const handleTeamNameChange = (id: number, newName: string, event: string) => {
    setTeamCount((teamCount) => teamCount.map((teams)=>{
      if(teams.id===id){
        teams.name=newName;
      }
      return teams;
    }));
  };

  return (
    <Card className="overflow-hidden w-full border-hidden">
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <h1 className="text-lg font-semibold">Events summary</h1>
          {itemsWith250.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline">
                  Event Pass{" "}
                  <span className="ml-2">
                    <Info
                      info={
                        "Events priced at 250 rupees are per person for up to every 4 events"
                      }
                    />
                  </span>
                  <span className="ml-auto">
                    {Math.ceil(itemsWith250.length / 4) +
                      `x  ${"\u20B9"}250/person`}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-3">
                    {itemsWith250.map((item) => (
                      <li
                        className="flex items-center justify-between"
                        key={item.key}
                      >
                        <span className="text-muted-foreground">
                          {item.name}
                        </span>
                        <span className="text-muted-foreground">1 x</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {renderCheckedItemsList(
            technicalCheckedItems,
            "technical",
            countOf250
          )}
          {renderCheckedItemsList(
            nontechnicalCheckedItems,
            "nontechnical",
            countOf250,
            setTeamCount
          )}
          {renderCheckedItemsList(culturalCheckedItems, "cultural", countOf250)}
          {renderCheckedItemsList(megaCheckedItems, "mega", countOf250)}
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              aria-label="Phone number"
              placeholder="Phone number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {teamCount.length > 0 &&
              teamCount.map((team, index) => (
                <>
                  <Label htmlFor={`team_name_${index}`}>
                    Team Name {index + 1}
                  </Label>
                  <Input
                    key={index}
                    type="text"
                    id={`team_name_${index}`}
                    aria-label="Team Name"
                    placeholder={`Team Name for ${team.event}`}
                    value={team.name || ""}
                    required
                    onChange={(e) =>
                      handleTeamNameChange(team.id, e.target.value, team.event)
                    }
                  />
                </>
              ))}

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
              teams={teamCount}
              events={selectedEvents}
              name={session.data?.user?.name!}
              email={session.data?.user?.email!}
              contact={phoneNumber}
              amount={total}
              college={college}
            />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}
