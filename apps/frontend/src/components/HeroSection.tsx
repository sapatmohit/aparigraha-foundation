import heroImage from "@/assets/hero-image.jpg";
import DonationModal from "@/components/DonationModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Play } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showRecurringModal, setShowRecurringModal] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aparigraha Foundation making impact in communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="hero-title mb-6 fade-in-up">
            Dedicated to Making a Holistic Difference
            <span className="block text-secondary">in the Quality of Life.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed fade-in-up stagger-1">
            Together, we're building sustainable solutions that create lasting change
            in education, healthcare, and community development across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <Button
              className="bg-[#331452] text-lg px-10 py-5"
              onClick={() => setShowDonationModal(true)}
            >
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <a href="https://youtu.be/Edg4oS5Gni0?si=DWcN2LAXOy8BcXuS" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#331452] text-lg px-10 py-5">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </a>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up stagger-3 bg-[#331452]/60 rounded-md py-4">
            <div className="text-center">
              <div className="counter text-secondary mb-2 text-[#f1b1dc]">100 K+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Lives transformed</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2 text-[#f1b1dc]">25 K+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Students educated</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2 text-[#f1b1dc]">2.5 K+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Healthcare</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2 text-[#f1b1dc]">2 K+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Jobs Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <DonationModal
        open={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        initialAmount={100}
        isRecurring={false}
      />

      <DonationModal
        open={showRecurringModal}
        onClose={() => setShowRecurringModal(false)}
        initialAmount={50}
        isRecurring={true}
      />
    </section>
  );
};

export default HeroSection;
