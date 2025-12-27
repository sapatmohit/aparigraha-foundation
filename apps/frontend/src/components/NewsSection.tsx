import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, goToPrevious, goToNext]);

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
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer hover:shadow-medium transition-all duration-300 group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">Click to expand</span>
                </div>
              </div>
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
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer hover:shadow-medium transition-all duration-300 group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">Click to expand</span>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <img 
            src={galleryImages[selectedImageIndex]} 
            alt={`Gallery ${selectedImageIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button 
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
