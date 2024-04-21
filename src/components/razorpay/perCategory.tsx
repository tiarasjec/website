import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Event {
  name: string;
  key: string;
  amount: number;
  team:boolean;
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

export function TabsDemo({
  technical,
  nontechnical,
  cultural,
  mega,
  technicalCheckedItems,
  nontechnicalCheckedItems,
  culturalCheckedItems,
  megaCheckedItems,
  handleCheckboxChange,
}: {
  technical: Event[];
  nontechnical: Event[];
  cultural: Event[];
  mega: Event[];
  technicalCheckedItems: CheckedItem[];
  nontechnicalCheckedItems: CheckedItem[];
  culturalCheckedItems: CheckedItem[];
  megaCheckedItems: CheckedItem[];
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, category: string) => void;
}) {
  return (
    <Tabs defaultValue="technical" className="">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="nontechnical">Non Technical</TabsTrigger>
        <TabsTrigger value="cultural">Cultural</TabsTrigger>
        <TabsTrigger value="mega">Mega</TabsTrigger>
      </TabsList>
      <div className="h-[400px] overflow-y-auto">
        {/* Technical Events */}
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Technical Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technical.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 rounded-full"
                    value={event.key}
                    checked={technicalCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e)=>handleCheckboxChange(e,"technical")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        {/*Non - Technical Events */}
        <TabsContent value="nontechnical">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Technical Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {nontechnical.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 rounded-full"
                    value={event.key}
                    checked={nontechnicalCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e)=>handleCheckboxChange(e,"nontechnical")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        {/*Cultural Events */}
        <TabsContent value="cultural">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Cultural Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {cultural.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 rounded-full"
                    value={event.key}
                    checked={culturalCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e)=>handleCheckboxChange(e,"cultural")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        {/*Mega Events */}
        <TabsContent value="mega">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Mega event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mega.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 rounded-full"
                    value={event.key}
                    checked={megaCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e)=>handleCheckboxChange(e,"mega")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
}
