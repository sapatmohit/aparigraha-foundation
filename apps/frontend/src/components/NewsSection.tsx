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
            <img src="/images/gallary/gallary1.jpg" alt="Gallery 1" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary2.jpg" alt="Gallery 2" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary3.jpg" alt="Gallery 3" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary4.jpg" alt="Gallery 4" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary5.jpg" alt="Gallery 5" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary6.jpg" alt="Gallery 6" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary7.jpg" alt="Gallery 7" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary8.jpg" alt="Gallery 8" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary9.jpg" alt="Gallery 9" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary10.jpg" alt="Gallery 10" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary11.jpg" alt="Gallery 11" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary12.jpg" alt="Gallery 12" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary13.jpg" alt="Gallery 13" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary14.jpg" alt="Gallery 14" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary15.jpg" alt="Gallery 15" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary16.jpg" alt="Gallery 16" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary17.jpg" alt="Gallery 17" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary18.jpg" alt="Gallery 18" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary19.jpg" alt="Gallery 19" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary20.jpg" alt="Gallery 20" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary21.jpg" alt="Gallery 21" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary22.jpg" alt="Gallery 22" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary23.jpg" alt="Gallery 23" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary24.jpg" alt="Gallery 24" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary25.jpg" alt="Gallery 25" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary26.jpg" alt="Gallery 26" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary27.jpg" alt="Gallery 27" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary28.jpg" alt="Gallery 28" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary29.jpg" alt="Gallery 29" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary30.jpg" alt="Gallery 30" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary31.jpg" alt="Gallery 31" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary32.jpg" alt="Gallery 32" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary33.jpg" alt="Gallery 33" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary34.jpg" alt="Gallery 34" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary35.jpg" alt="Gallery 35" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary36.jpg" alt="Gallery 36" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary37.jpg" alt="Gallery 37" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary38.jpg" alt="Gallery 38" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary39.jpg" alt="Gallery 39" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary40.jpg" alt="Gallery 40" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary41.jpg" alt="Gallery 41" className="w-full h-64 object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/gallary/gallary42.jpg" alt="Gallery 42" className="w-full h-64 object-cover" />
          </Card>
        </TabsContent>

      </Tabs>
    </section>
  );
}
