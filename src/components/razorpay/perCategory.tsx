import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="nontechnical">Non Technical</TabsTrigger>
        <TabsTrigger value="cultural">Cultural</TabsTrigger>
        <TabsTrigger value="mega">Mega</TabsTrigger>
      </TabsList>
      {/* Technical Events */}
      <TabsContent value="technical">
        <Card>
          <CardHeader>
            <CardTitle>Choose a Technical Event</CardTitle>


          </CardHeader>
          <CardContent className="space-y-2">
            
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
           
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
