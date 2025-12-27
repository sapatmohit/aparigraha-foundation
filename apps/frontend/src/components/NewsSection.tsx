import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewsSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-background text-foreground" id="multimedia">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Multimedia Stories</h2>
        <p className="text-muted-foreground">Explore our video stories and photo gallery</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex justify-center mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        {/* ----------- ALL TAB ----------- */}
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Existing 3 YouTube Videos */}
          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/Edg4oS5Gni0"
                title="Story of Front Line Warrior Series - Episode 1 - Dr Bindal Vala"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front line Warrior Series - Episode 1 - Dr Bindal Vala
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 11, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/x7lEcmqcjPU"
                title="Story of Front Line Warriors Series - Episode 2 - ACP Avinash Dharmadhikari"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 2 - ACP Avinash Dharmadhikari
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 12, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/7dgTMtKWCa4"
                title="Story of Front Line Warriors Series - Episode 3 - K K Rana"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 3 - K K Rana
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 16, 2021</span>
              </div>
            </CardContent>
          </Card>

          {/* ----------- New Original 3 Videos ----------- */}

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/P67vzbc0C28"
                title="Story of Front Line Warriors Series - Episode 4 - Himanshu Sharma"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 4 - Himanshu Sharma
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 23, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/fJt4i09Zu2E"
                title="Story of Front Line Warriors Series - Episode 5 - Dr. Kunal P. Shah"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 5 - Dr. Kunal P. Shah
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>June 7, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/uiWi0EPo5oM"
                title="Story of Front Line Warriors Series - Episode 6 - Col. Venkat Raman (Retd.)"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 6 - Col. Venkat Raman (Retd.)
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>June 13, 2021</span>
              </div>
            </CardContent>
          </Card>

          {/* ----------- NEW VIDEO YOU PROVIDED ----------- */}

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/V2kSRnb6ioc"
                title="Front Line Warriors – Special Episode"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
              <h4 className="font-medium text-sm mb-1">
                Front Line Warriors – Special Episode
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>New Release</span>
              </div>
            </CardContent>
          </Card>

        </TabsContent>

        {/* ----------- VIDEOS TAB ----------- */}
        <TabsContent value="videos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {[
            "https://www.youtube.com/embed/Edg4oS5Gni0",
            "https://www.youtube.com/embed/x7lEcmqcjPU",
            "https://www.youtube.com/embed/7dgTMtKWCa4",
            "https://www.youtube.com/embed/P67vzbc0C28",
            "https://www.youtube.com/embed/fJt4i09Zu2E",
            "https://www.youtube.com/embed/uiWi0EPo5oM",
            "https://www.youtube.com/embed/V2kSRnb6ioc" // NEW VIDEO
          ].map((src, index) => (
            <Card key={index} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
              <div className="relative">
                <iframe
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={src}
                  title={`Video ${index + 1}`}
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
                <h4 className="font-medium text-sm mb-1">
                  Story of Front Line Warriors Series - Episode {index + 1}
                </h4>
              </CardContent>
            </Card>
          ))}

        </TabsContent>

        {/* ----------- IMAGES TAB ----------- */}
        <TabsContent value="images" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <img src="/images/gallery1.jpg" alt="Gallery 1" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallery2.jpg" alt="Gallery 2" className="w-full h-64 object-cover" />
          </Card>
        </TabsContent>

      </Tabs>
    </section>
  );
}
