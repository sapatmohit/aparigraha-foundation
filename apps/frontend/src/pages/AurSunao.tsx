import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

const AurSunao: React.FC = () => {
  return (
    <div style={{backgroundColor: '#f3d9ea'}}>
      <Navigation />
      <div className="hero-gradient text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-2xl shadow-strong w-full h-full object-cover"
                src="src/assets/Aursunao.png"
                alt="AurSunao Program"
              />
            </div>
            <div>
              <h1 className="hero-title mb-4">AurSunao</h1>
              <p className="text-xl text-white/80 mb-6">
                An open platform to reach experts for Good Health and Well Being. Introducing our free counselling support platform offering confidential counselling helplines for those in emotional distress; trained listeners and mental-health professionals available.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                    <p className="counter text-secondary flex justify-center items-center">25 K+</p>
                    <p className="text-white/80">Beneficiaries</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary">150</p>
                  <p className="text-white/80">Schools</p>
                </div>
                <div className="impact-card text-center bg-white/10 backdrop-blur-sm">
                  <p className="counter text-secondary flex justify-center items-center">5,000+</p>
                  <p className="text-white/80">Graduates</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Key Objectives</h2>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Build and renovate schools in rural areas</li>
                  <li>Train local teachers and educators</li>
                  <li>Provide scholarships for promising students</li>
                  <li>Develop digital learning programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="impact-card text-center max-w-3xl mx-auto">
            <p className="text-2xl italic text-foreground/80">
              "The 'AurSunao' program has been a beacon of hope for our village. Our children now have access to quality education and a brighter future."
            </p>
            <p className="text-right font-semibold mt-4 text-primary">- A Village Elder</p>
        </div>
      </div>

      <div className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Our Mission</span></h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-muted-foreground">
            At AurSunao, we provide both educational support and a confidential helpline to promote mental health and well-being. Our mission is to increase access to trained listeners and mental health professionals for those seeking emotional support while continuing to deliver education resources to underserved communities.
          </p>

          <div className="mt-8 bg-white/5 p-6 rounded-lg max-w-2xl mx-auto text-left">
            <h4 className="font-semibold mb-2">Confidential Counselling Helpline</h4>
            <p className="text-sm text-muted-foreground mb-2">Free confidential helpline support for emotional distress — trained listeners and mental-health professionals are available for confidential calls and online counselling.</p>
            <p className="text-sm text-muted-foreground">Helpline details and timings are available on our contact page.</p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="gradient-text">Impact Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">From Fields to a Future: Meena's Story</h3>
              <p className="text-muted-foreground">Meena, a bright young girl from a remote village, had to drop out of school to support her family. Through our scholarship program, she was able to resume her studies and is now on her way to becoming the first engineer from her community. Her story is a testament to the power of opportunity.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">A Village Transformed: The Digital Classroom</h3>
              <p className="text-muted-foreground">In a village with no access to computers, we established a digital learning center. Today, children are learning to code, adults are gaining new skills, and the entire community is connected to the world. The center has become a hub of innovation and a symbol of hope for a better tomorrow.</p>
            </div>
            <div className="program-card">
              <h3 className="font-bold text-xl mb-2 text-primary">Empowering Educators: The Teacher Training Program</h3>
              <p className="text-muted-foreground">We believe that teachers are the backbone of the education system. Our comprehensive training program equips local educators with modern teaching techniques and resources. As a result, student engagement has soared, and learning outcomes have improved dramatically across 150 schools.</p>
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
                <strong>The Mobile Library Project:</strong> We are launching a fleet of mobile libraries to bring books and learning resources to the doorsteps of children in remote areas. Our goal is to reach 10,000 children in the next year.
              </li>
              <li>
                <strong>Digital Literacy for Adults:</strong> In partnership with local community centers, we will be conducting digital literacy workshops for adults. These workshops will cover basic computer skills, internet usage, and online safety.
              </li>
              <li>
                <strong>Community-led Environmental Programs:</strong> We believe in the power of community action. We will be launching a series of workshops and events to raise awareness about environmental conservation and empower communities to take ownership of their natural resources.
              </li>
            </ul>
            <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground mb-4">Join us in our mission to create a world where everyone has the opportunity to learn and thrive.</p>
                <Link to="/volunteer">
                  <button className="btn-hero">Donate Now</button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AurSunao;