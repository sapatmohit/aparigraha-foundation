import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EngagementSection from "@/components/EngagementSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";  // ← ADD THIS LINE
import ProgramsSection from "@/components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <div className="bg-[#f3e2ea]">
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <NewsSection />
          <EngagementSection />
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;