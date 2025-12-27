import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const videos = [
  { id: "Edg4oS5Gni0", title: "Story of Front Line Warrior Series - Episode 1 - Dr Bindal Vala", date: "May 11, 2021" },
  { id: "x7lEcmqcjPU", title: "Story of Front Line Warriors Series - Episode 2 - ACP Avinash Dharmadhikari", date: "May 12, 2021" },
  { id: "7dgTMtKWCa4", title: "Story of Front Line Warriors Series - Episode 3 - K K Rana", date: "May 16, 2021" },
  { id: "P67vzbc0C28", title: "Story of Front Line Warriors Series - Episode 4 - Himanshu Sharma", date: "May 23, 2021" },
  { id: "fJt4i09Zu2E", title: "Story of Front Line Warriors Series - Episode 5 - Dr. Kunal P. Shah", date: "June 7, 2021" },
  { id: "uiWi0EPo5oM", title: "Story of Front Line Warriors Series - Episode 6 - Col. Venkat Raman (Retd.)", date: "June 13, 2021" },
  { id: "V2kSRnb6ioc", title: "Front Line Warriors – Special Episode", date: "New Release" },
];

const galleryImages = Array.from({ length: 42 }, (_, i) => `/images/gallary/gallary${i + 1}.jpg`);

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

        {/* ALL TAB - Videos + Sample Images */}
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Videos */}
          {videos.slice(0, 6).map((video) => (
            <Card key={video.id} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
              <div className="relative">
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{video.title}</h4>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{video.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Sample Gallery Images in All Tab */}
          {galleryImages.slice(0, 3).map((src, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-medium transition-all duration-300">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">Image</Badge>
                <h4 className="font-medium text-sm">Gallery Photo {index + 1}</h4>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* VIDEOS TAB */}
        <TabsContent value="videos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
              <div className="relative">
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">Video</Badge>
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{video.title}</h4>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{video.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* IMAGES TAB */}
        <TabsContent value="images" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-medium transition-all duration-300">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
