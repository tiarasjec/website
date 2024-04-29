import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import Info from "../ui/hover/info";

interface Event {
  name: string;
  key: string;
  amount: number;
  team: boolean;
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
    <Input
      type="checkbox"
      className={className}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export function EventTabs({
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
  handleCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => void;
}) {
  return (
    <Tabs defaultValue="technical" className="border-hidden w-full pl-2">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto border-hidden">
        <TabsTrigger value="technical">
          <span className="flex flex-wrap border">Technical</span>
        </TabsTrigger>
        <TabsTrigger value="nontechnical">
          <span className="flex flex-wrap">Non Technical</span>
        </TabsTrigger>
        <TabsTrigger value="cultural">
          <span className="flex flex-wrap">Cultural</span>
        </TabsTrigger>
        <TabsTrigger value="mega">
          <span className="flex flex-wrap">Mega</span>
        </TabsTrigger>
      </TabsList>
      <div className="h-[400px] overflow-y-auto">
        {/* Technical Events */}
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Technical Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 border-hidden">
              {technical.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 mr-2"
                    value={event.key}
                    checked={technicalCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e) => handleCheckboxChange(e, "technical")}
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
              <CardTitle>Choose a Non Technical Events</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              {nontechnical.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  {parseInt(event.key) < 14 ? (
                    <Checkbox
                      className="w-6 h-6 mr-2"
                      value={event.key}
                      checked={nontechnicalCheckedItems.some(
                        (item) => item.key === event.key
                      )}
                      onChange={(e) => handleCheckboxChange(e, "nontechnical")}
                    />
                  ) : (
                    <div className="ml-36">
                     <Info info={"Registration is not available online but will be available offline on the day of Tiara."} />
                      </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        {/*Cultural Events */}
        <TabsContent value="cultural">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Cultural Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 ">
              {cultural.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 mr-2"
                    value={event.key}
                    checked={culturalCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e) => handleCheckboxChange(e, "cultural")}
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
              <CardTitle>Choose a Mega events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mega.map((event) => (
                <div
                  key={event.key}
                  className="flex justify-between items-center p-4 mb-2"
                >
                  <Label className="mr-2">{event.name}</Label>
                  <Checkbox
                    className="w-6 h-6 mr-2"
                    value={event.key}
                    checked={megaCheckedItems.some(
                      (item) => item.key === event.key
                    )}
                    onChange={(e) => handleCheckboxChange(e, "mega")}
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
