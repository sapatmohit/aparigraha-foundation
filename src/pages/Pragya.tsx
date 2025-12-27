import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./Pragya.css";
import { Link } from 'react-router-dom';

const Pragya: React.FC = () => {
  return (
    <div className="pragya-background">
      <Navigation />
      <div className="hero-gradient text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-2xl shadow-strong w-full h-full object-cover"
                src="https://via.placeholder.com/800x600"
                alt="Pragya Program"
              />
            </div>
            <div>
              <h1 className="hero-title mb-4">Pragya</h1>
              <p className="text-xl text-white/80 mb-6">
                Empowering women and girls through skill development and vocational training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">5,000+</p>
                  <p className="text-white/80">Women Trained</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">500+</p>
                  <p className="text-white/80">Self-Help Groups</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">1,000+</p>
                  <p className="text-white/80">Enterprises Started</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Key Objectives</h2>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Provide vocational training in tailoring, handicrafts, and beauty services</li>
                  <li>Facilitate the formation of self-help groups for financial independence</li>
                  <li>Offer entrepreneurship development and financial literacy workshops</li>
                  <li>Create market linkages for products made by women entrepreneurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="impact-card text-center max-w-3xl mx-auto">
            <p className="text-2xl italic text-foreground/80">
              "The 'Pragya' program has given me the confidence to stand on my own feet. I am now a successful entrepreneur and an inspiration to other women in my village."
            </p>
            <p className="text-right font-semibold mt-4 text-primary">- A Pragya Beneficiary</p>
        </div>
      </div>

      <div className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Our Mission</span></h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-muted-foreground">
            The Pragya program is committed to empowering women and girls from marginalized communities by providing them with the skills and resources they need to become economically independent. We believe that empowering women is key to building a just and equitable society. Our mission is to create a world where every woman has the opportunity to realize her full potential and live a life of dignity and respect.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Impact Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">A Stitch in Time: Sunita's Story</h3>
              <p className="text-muted-foreground">Sunita, a single mother of two, struggled to make ends meet. After enrolling in our tailoring program, she started her own boutique and is now a successful business owner. She is a role model for other women in her community.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">The Power of a Collective: The Women's Self-Help Group</h3>
              <p className="text-muted-foreground">A group of women in a remote village came together to form a self-help group with our support. They started a small business making and selling handicrafts, and have now become financially independent. Their success has inspired other women to form similar groups.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">From Homemaker to Entrepreneur: The Financial Literacy Workshop</h3>
              <p className="text-muted-foreground">Our financial literacy workshop equipped a group of women with the knowledge and skills to manage their finances and start their own businesses. Many of them have now started their own small enterprises and are contributing to their family's income.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Upcoming Initiatives</span></h2>
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-4">
              <li>
                <strong>Digital Skills for Women:</strong> We are launching a new program to provide digital skills training to women, including computer literacy, social media marketing, and e-commerce.
              </li>
              <li>
                <strong>Leadership Development Program:</strong> We are developing a leadership program to groom women for leadership roles in their communities and beyond.
              </li>
              <li>
                <strong>Mentorship Program for Women Entrepreneurs:</strong> We are launching a mentorship program to connect aspiring women entrepreneurs with experienced mentors who can guide and support them in their entrepreneurial journey.
              </li>
            </ul>
            <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground mb-4">Join us in our mission to create a world where every woman is empowered to achieve her dreams.</p>
                <Link to="/volunteer">
                  <button className="btn-hero">Support Women</button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Pragya;