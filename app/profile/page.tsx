import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

const ProfilePage = () => {
  return (
    <Tabs defaultValue="summary" className="">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="summary">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>
              Write a short summary of your career, your skills and your accomplishments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Textarea
                id="summary"
                placeholder="e.g.: Full stack developer, working with technologies like next.js, node.js, typescript and tailwind."
                className="resize-none min-h-28"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>Describe every position you have had throughout your career</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button>
              <Plus />
              Add experience
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>Describe every degree you have had throughout your education</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button>
              <Plus />
              Add education
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="projects">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Describe every project you have worked on</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button>
              <Plus />
              Add project
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Add any skill you have acquired through your career or education</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button>
              <Plus />
              Add skill
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="contact">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Add your necessary contact information for recruiters to contact you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button>
              <Plus />
              Save changes
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfilePage;
