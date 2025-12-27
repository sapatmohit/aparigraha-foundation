import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./Indradhanush.css";
import { Link } from 'react-router-dom';

const Indradhanush: React.FC = () => {
  return (
    <div className="indradhanush-background">
      <Navigation />
      <div className="hero-gradient text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-2xl shadow-strong w-full h-full object-cover"
                src="https/via.placeholder.com/800x600"
                alt="Indradhanush Program"
              />
            </div>
            <div>
              <h1 className="hero-title mb-4">Indradhanush</h1>
              <p className="text-xl text-white/80 mb-6">
                Fostering holistic development through arts, culture, and sports in rural communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary flex justify-center">12,000+</p>
                    <p className="text-white/80 flex justify-center">Children Engaged</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">50+</p>
                  <p className="text-white/80">Community Centers</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">200+</p>
                  <p className="text-white/80">Events Organized</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Key Objectives</h2>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Establish community art and music centers</li>
                  <li>Organize sports tournaments and cultural festivals</li>
                  <li>Provide mentorship from local artists and athletes</li>
                  <li>Promote traditional art forms and cultural heritage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="impact-card text-center max-w-3xl mx-auto">
            <p className="text-2xl italic text-foreground/80">
              "The 'Indradhanush' program has brought our community together. Our children are now more confident and expressive."
            </p>
            <p className="text-right font-semibold mt-4 text-primary">- A Community Leader</p>
        </div>
      </div>

      <div className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Our Mission</span></h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-muted-foreground">
            The Indradhanush program is dedicated to nurturing the creative and athletic talents of children in underserved areas. We believe that arts, culture, and sports are essential for holistic development, fostering creativity, discipline, and teamwork. Our mission is to provide a platform for children to explore their passions, express themselves, and build a strong sense of identity and community.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Impact Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">The Sound of a Brighter Future: Ravi's Journey</h3>
              <p className="text-muted-foreground">Ravi, a young boy with a passion for music, had never held a real instrument. Through our music center, he learned to play the sitar and has now performed at several regional festivals. His story inspires other children to follow their dreams.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">Victory for the Village: The Annual Sports Meet</h3>
              <p className="text-muted-foreground">Our annual sports meet has become a much-awaited event, bringing together children from several villages. It has not only promoted a healthy and active lifestyle but has also fostered a spirit of sportsmanship and unity among the communities.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">Colors of Hope: The Community Art Project</h3>
              <p className="text-muted-foreground">We initiated a community art project to beautify the village walls with murals depicting local folklore and traditions. The project has not only transformed the village aesthetically but has also revived a sense of pride in their cultural heritage.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Upcoming Initiatives</span></h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">Participation — Quick Entry Steps</h4>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Register on the program page with basic participant details.</li>
                <li>Prepare your creative entry according to category rules and submit online.</li>
                <li>Include consent & contact details; winners announced on our official channels.</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-3">Till date 12,000+ entries from across Indian states.</p>
            </div>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-4">
              <li>
                <strong>Theatre for Social Change:</strong> We are launching a series of theatre workshops to raise awareness about social issues and empower children to become agents of change in their communities.
              </li>
              <li>
                <strong>Inter-Village Sports League:</strong> We are organizing an inter-village sports league to promote healthy competition and identify and nurture sporting talent in the region.
              </li>
              <li>
                <strong>Cultural Exchange Program:</strong> We are planning a cultural exchange program to provide children with an opportunity to interact with artists and performers from different parts of the country.
              </li>
            </ul>
            <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground mb-4">Join us in our mission to create a world where every child has the opportunity to explore their creative and athletic potential.</p>
                <Link to="/volunteer">
                  <button className="btn-hero">Get Involved</button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Indradhanush;