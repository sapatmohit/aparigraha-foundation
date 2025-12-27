import DonationModal from "@/components/DonationModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    BookOpen,
    Calendar,
    DollarSign,
    Heart,
    Home,
    LucideIcon,
    MapPin,
    Target,
    TrendingUp,
    Users
} from "lucide-react";
import { useState } from 'react';

interface ProgramDetailProps {
  program: {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    stats: {
      beneficiaries: string;
      [key: string]: string;
    };
    objectives: string[];
    testimonial: {
      quote: string;
      author: string;
    };
    impact: {
      title: string;
      description: string;
      image: string;
    };
    getInvolved: {
      title: string;
      steps: {
        step: string;
        title: string;
        description: string;
      }[];
    };
  };
  onClose: () => void;
}

const ProgramDetail = ({ program, onClose }: ProgramDetailProps) => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  
  const programIcons: Record<string, LucideIcon> = {
    "aursunao": BookOpen,
    "indradhanush": Home,
    "pragya": Heart
  };

  const ProgramIcon = programIcons[program.id] || BookOpen;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/80 backdrop-blur-sm">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl rounded-lg bg-white shadow-xl dark:bg-gray-900">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="text-2xl">&times;</span>
          </button>

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <ProgramIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{program.title}</h2>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            </div>

            {/* Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(program.stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Objectives */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Key Objectives
                </h3>
                <ul className="space-y-3">
                  {program.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      "{program.testimonial.quote}"
                    </p>
                    <p className="text-sm font-medium text-primary">
                      — {program.testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Impact */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Program Impact</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={program.impact?.image || program.image}
                    alt="Program impact"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-medium mb-2">{program.impact?.title || "Transforming Lives"}</h4>
                  <p className="text-muted-foreground">
                    {program.impact?.description || "Our program has made a significant impact in the communities we serve, providing essential resources and opportunities for growth and development."}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {program.getInvolved?.steps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                )) || (
                  <>
                    <Card>
                      <CardHeader>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Donate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Support our work with a financial contribution to help us expand our reach.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Volunteer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Join our team of volunteers and make a direct impact in communities.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Partner</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Collaborate with us to amplify our impact through strategic partnerships.</p>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero flex-1" onClick={() => setShowDonationModal(true)}>
                Support This Program
                <Heart className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex-1">
                <Users className="mr-2 h-4 w-4" />
                Volunteer
              </Button>
              <Button variant="outline" className="flex-1">
                <Calendar className="mr-2 h-4 w-4" />
                Stay Updated
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <DonationModal 
        open={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
        initialAmount={100}
        isRecurring={false}
      />
    </div>
  );
};

export default ProgramDetail;