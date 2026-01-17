import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import all SDG images
import sdg1 from '@/assets/SDG-1.png';
import sdg2 from '@/assets/SDG-2.png';
import sdg3 from '@/assets/SDG-3.png';
import sdg4 from '@/assets/SDG-4.png';
import sdg5 from '@/assets/SDG-5.png';
import sdg6 from '@/assets/SDG-6.png';
import sdg7 from '@/assets/SDG-7.png';
import sdg8 from '@/assets/SDG-8.png';
import sdg9 from '@/assets/SDG-9.png';
import sdg10 from '@/assets/SDG-10.png';
import sdg11 from '@/assets/SDG-11.png';
import sdg12 from '@/assets/SDG-12.png';
import sdg13 from '@/assets/SDG-13.png';
import sdg14 from '@/assets/SDG-14.png';
import sdg15 from '@/assets/SDG-15.png';
import sdg16 from '@/assets/SDG-16.png';
import sdg17 from '@/assets/SDG-17.png';

const sdgImages = [
  sdg1, sdg2, sdg3, sdg4, sdg5, sdg6, sdg7, sdg8, sdg9, sdg10,
  sdg11, sdg12, sdg13, sdg14, sdg15, sdg16, sdg17
];

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const showReadMore = member.bio.length > maxLength;

  return (
    <Card className={`bg-card text-center overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm flex flex-col fade-in-up stagger-${index + 1}`}>
      <div className="h-2 bg-gradient-to-r from-secondary to-primary w-full"></div>
      <CardContent className="p-8 flex-1 flex flex-col items-center">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur opacity-20 transform scale-110"></div>
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full relative z-10 object-cover border-4 border-white shadow-md ring-2 ring-primary/10"
          />
        </div>
        
        <h4 className="text-2xl font-bold mb-1 text-foreground font-serif">{member.name}</h4>
        <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs uppercase tracking-wider font-semibold">
          {member.role}
        </Badge>
        
        <div className="text-left w-full relative">
          <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif leading-none">“</span>
          <div className="relative z-10">
            <p className="text-muted-foreground leading-relaxed text-[0.95rem] mb-2">
              {isExpanded ? member.bio : `${member.bio.slice(0, maxLength)}${showReadMore ? '...' : ''}`}
            </p>
            {showReadMore && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent flex items-center gap-1 mx-auto mt-2"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp className="h-3 w-3" /></>
                ) : (
                  <>Read More <ChevronDown className="h-3 w-3" /></>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
const AboutSection = () => {
  const sdgGoals = [
    { id: 1, title: "No Poverty", description: "End poverty in all its forms everywhere." },
    { id: 2, title: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture." },
    { id: 3, title: "Good Health and Well-being", description: "Ensure healthy lives and promote well-being for all at all ages." },
    { id: 4, title: "Quality Education", description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all." },
    { id: 5, title: "Gender Equality", description: "Achieve gender equality and empower all women and girls." },
    { id: 6, title: "Clean Water and Sanitation", description: "Ensure availability and sustainable management of water and sanitation for all." },
    { id: 7, title: "Affordable and Clean Energy", description: "Ensure access to affordable, reliable, sustainable and modern energy for all." },
    { id: 8, title: "Decent Work and Economic Growth", description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all." },
    { id: 9, title: "Industry, Innovation, and Infrastructure", description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation." },
    { id: 10, title: "Reduced Inequalities", description: "Reduce inequality within and among countries." },
    { id: 11, title: "Sustainable Cities and Communities", description: "Make cities and human settlements inclusive, safe, resilient and sustainable." },
    { id: 12, title: "Responsible Consumption and Production", description: "Ensure sustainable consumption and production patterns." },
    { id: 13, title: "Climate Action", description: "Take urgent action to combat climate change and its impacts." },
    { id: 14, title: "Life Below Water", description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development." },
    { id: 15, title: "Life on Land", description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss." },
    { id: 16, title: "Peace, Justice, and Strong Institutions", description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels." },
    { id: 17, title: "Partnerships for the Goals", description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development." },
  ];

  const team = [
    {
      name: "Dr. Amita Jain",
      role: "President",
      image: "/images/team/amita.jpg",
      bio: "Transformational Education Leader transitioning into Institutional Admission Strategy and Enrollment Management, bringing 30+ years of experience in governance, academic operations, and international partnerships. Demonstrated expertise in policy design, data-driven student recruitment, candidate evaluation, and stakeholder engagement. Adept at leveraging technology, analytics, and cross-cultural collaboration to enhance institutional growth and student diversity. Deeply committed to philanthropic educational initiatives, including expanding access for underrepresented learners, championing equity-driven admission practices, and supporting community-based programs that uplift marginalized student groups."
    },
    {
      name: "Ms. Geeta Jain",
      role: "Secretary",
      image: "/images/team/geeta.jpg",
      bio: "A purpose-driven woman entrepreneur, she blends business leadership with a deep commitment to social impact. Passionate about designing and executing high-pressure project timelines, she brings precision, creativity, and resilience to every initiative she leads. Beyond her entrepreneurial work, she champions philanthropic causes—supporting education, women’s empowerment, and community development—ensuring that every project she undertakes contributes to meaningful and sustainable change."
    },
    {
      name: "Ms. Rishika Jain",
      role: "CEO",
      image: "/images/team/rishika.jpg",
      bio: "An inquisitive and driven social empath of International Relations and Law with an interest in diplomacy, human rights and a passion for sustainability."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Mission & Vision */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            About Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
            The best way to live life is "Live and Let Live"
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 To Empower "YOUNG India" with skills, tools, Techniques and methods to Face the Global Change 
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 Empowering vision through belief to create lasting impact and inspire positive change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Commitment to the SDGs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
            {sdgGoals.map((sdg, index) => (
              <Card key={sdg.id} className={`bg-white border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl overflow-hidden h-full group fade-in-up stagger-${(index % 9) + 1}`}>
                <div className="p-2">
                   <div className="rounded-lg overflow-hidden aspect-square w-full shadow-inner">
                    <img src={sdgImages[sdg.id - 1]} alt={sdg.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                   </div>
                </div>
                <div className="px-2 pb-3 pt-1 text-center">
                  <h4 className="text-sm font-serif font-medium text-foreground/80 leading-tight">{sdg.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {team.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;