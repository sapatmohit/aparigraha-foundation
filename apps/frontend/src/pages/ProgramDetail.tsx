// Images from public folder for deployment
const educationImage = "/images/programs/aursunao.png";
const communityImage = "/images/programs/indradhanush.png";
const pragyaImage = "/images/programs/pragya.png";
const mealtohealImage = "/images/programs/mealtoheal.png";
const gowiththeflowImage = "/images/programs/gowiththeflow.jpg";
const rootforo2Image = "/images/programs/rootforO2.jpg";
const storyoffrontlineImage = "/images/programs/storyoffrontlinewarriors.png";
import ContactForm from "@/components/ContactForm";
import DonationModal from "@/components/DonationModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  DollarSign,
  Heart,
  Home,
  Mail,
  MapPin,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProgramDetail = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100);

  // Program data - in a real app, this would come from an API
  const programs = {
    "aursunao": {
      id: "aursunao",
      title: "AurSunao",
      description: "Providing quality education and learning resources to underserved communities.",
      image: educationImage,
      icon: BookOpen,
      stats: {
        beneficiaries: "25 K+",
        schools: "150",
        graduates: "5,000+"
      },
      objectives: [
        "Build and renovate schools in rural areas",
        "Train local teachers and educators",
        "Provide scholarships for promising students",
        "Develop digital learning programs"
      ],
      testimonial: {
        quote: "Thanks to the scholarship program, I was able to complete my nursing degree and now serve my community as a healthcare worker.",
        author: "Maria Santos, Scholarship Recipient"
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Support our education initiatives with a financial contribution to help us expand our reach."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Join our team of volunteers and make a direct impact in communities through teaching and mentoring."
          },
          {
            step: "3",
            title: "Partner",
            description: "Collaborate with us to amplify our impact through strategic partnerships and resource sharing."
          }
        ]
      }
    },
    "indradhanush": {
      id: "indradhanush",
      title: "Indradhanush",
      description: "Empowering communities through infrastructure and economic development projects.",
      image: communityImage,
      icon: Home,
      stats: {
        beneficiaries: "100,000+",
        projects: "300",
        jobs: "2 K+"
      },
      objectives: [
        "Develop clean water and sanitation systems",
        "Support small business and microfinance",
        "Build sustainable infrastructure",
        "Promote environmental conservation"
      ],
      testimonial: {
        quote: "The clean water project transformed our village. Children no longer get sick from contaminated water, and women can focus on other activities.",
        author: "James Mukasa, Community Leader"
      },
      impact: {
        title: "Building Sustainable Communities",
        description: "Our community development program has completed over 300 projects, creating 2 K+ jobs and benefiting more than 100,000 people. We've built clean water systems, improved sanitation, and supported local businesses through microfinance initiatives.",
        image: communityImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Support our community development projects with a financial contribution."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Join our team of volunteers and make a direct impact in communities through construction and development work."
          },
          {
            step: "3",
            title: "Partner",
            description: "Collaborate with us to amplify our impact through strategic partnerships and resource sharing."
          }
        ]
      }
    },
    "pragya": {
      id: "pragya",
      title: "Pragya",
      description: "Improving healthcare accessibility and quality in remote and underserved areas.",
      image: pragyaImage,
      icon: Heart,
      stats: {
        beneficiaries: "7.5 K+",
        clinics: "50",
        professionals: "200"
      },
      objectives: [
        "Establish mobile health clinics",
        "Train community health workers",
        "Provide essential medicines and equipment",
        "Implement preventive health programs"
      ],
      testimonial: {
        quote: "The mobile clinic brings hope to our remote area. My daughter received life-saving treatment that wasn't available before.",
        author: "Grace Achieng, Mother of Patient"
      },
      impact: {
        title: "Bringing Healthcare to Remote Areas",
        description: "Our healthcare program has established 50 mobile clinics, trained 200 healthcare professionals, and provided medical care to over 7.5 K+ people in remote areas. We've implemented preventive health programs that have reduced disease incidence by 40% in our service areas.",
        image: pragyaImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Support our healthcare initiatives with a financial contribution to help us expand our reach."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Join our team of volunteers and make a direct impact in communities through healthcare services."
          },
          {
            step: "3",
            title: "Partner",
            description: "Collaborate with us to amplify our impact through strategic partnerships and resource sharing."
          }
        ]
      }
    },
    "mealtoheal": {
      id: "mealtoheal",
      title: "Meal To Heal",
      description: "Weekly Food Drive carried out at various cities across India for the needy. Meals distributed at various shelter homes and care clinics for sick and elderly.",
      image: mealtohealImage,
      icon: Heart,
      stats: {
        beneficiaries: "150,000+",
        cities: "Multiple",
        meals: "Weekly"
      },
      objectives: [
        "Mobilize volunteers for food preparation and distribution",
        "Coordinate with shelter homes and care clinics for targeted delivery",
        "Ensure dietary needs are met for elderly and sick beneficiaries",
        "Prepare age-appropriate nutritive meals per medical requirements"
      ],
      testimonial: {
        quote: "Our volunteers make and distribute nutritious meals to those who need them most. Every meal brings hope and nourishment.",
        author: "Volunteer Coordinator"
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Contribute to meal preparation and logistics to help us feed more people."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Help prepare and distribute meals at local drives in your city."
          },
          {
            step: "3",
            title: "Partner",
            description: "Collaborate with local organizations for wider reach and impact."
          }
        ]
      }
    },
    "gowiththeflow": {
      id: "gowiththeflow",
      title: "Go With The Flow",
      description: "Sanitary Pad Drive Donation and menstrual hygiene education across India.",
      image: gowiththeflowImage,
      icon: Users,
      stats: {
        beneficiaries: "Thousands",
        states: "PAN India",
        kits: "Distributed"
      },
      objectives: [
        "Provide sanitary pad kits and hygiene education across India",
        "Partner with schools, NGOs, and remand homes for distribution",
        "Train volunteers to deliver menstrual health workshops",
        "Break the stigma around menstrual hygiene"
      ],
      testimonial: {
        quote: "Menstrual hygiene drives improve dignity and health outcomes for young women. Access to sanitary products changes lives.",
        author: "Program Lead"
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Support sanitary pad kit procurement and distribution across India."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Help run hygiene education sessions in schools and communities."
          },
          {
            step: "3",
            title: "Partner",
            description: "Work with us to scale education and distribution to more regions."
          }
        ]
      }
    },
    "rootforo2": {
      id: "rootforo2",
      title: "Root For O2",
      description: "Plantation drives across states, especially post-disasters, to restore ecological balance.",
      image: rootforo2Image,
      icon: Home,
      stats: {
        saplings: "100,000+",
        states: "Multiple",
        drives: "Ongoing"
      },
      objectives: [
        "Organize large-scale plantation events across districts",
        "Engage local communities and volunteers for maintenance",
        "Focus on disaster-affected areas for reforestation",
        "Promote environmental conservation and awareness"
      ],
      testimonial: {
        quote: "Plantation drives help restore ecological balance and community resilience. Every tree planted is a step towards a greener future.",
        author: "Environmental Coordinator"
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Donate",
            description: "Support sapling procurement and on-ground logistics for our drives."
          },
          {
            step: "2",
            title: "Volunteer",
            description: "Join local plantation drives and support ongoing maintenance."
          },
          {
            step: "3",
            title: "Partner",
            description: "Collaborate on large-scale restoration projects in your area."
          }
        ]
      }
    },
    "storyoffrontline": {
      id: "storyoffrontline",
      title: "Story of FrontLine Warriors",
      description: "Honoring and supporting frontline workers through live sessions and community engagement.",
      image: storyoffrontlineImage,
      icon: Users,
      stats: {
        sessions: "Multiple",
        warriors: "Featured",
        reach: "National"
      },
      objectives: [
        "Host live sessions with frontline workers to share their stories",
        "Showcase frontline stories and resilience during crises",
        "Encourage community dialogue and support for essential workers",
        "Raise awareness about the sacrifices of frontline warriors"
      ],
      testimonial: {
        quote: "Highlighting the efforts of frontline workers during crises brings communities together and honors their sacrifices.",
        author: "Program Coordinator"
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          {
            step: "1",
            title: "Attend",
            description: "Join our live sessions and learn from frontline heroes."
          },
          {
            step: "2",
            title: "Share",
            description: "Spread frontline stories across your network to inspire others."
          },
          {
            step: "3",
            title: "Support",
            description: "Support frontline initiatives through donations and advocacy."
          }
        ]
      }
    }
  };

  const program = programs[programId as keyof typeof programs];

  // Redirect to 404 if program not found
  useEffect(() => {
    if (!program) {
      navigate('/404');
    }
  }, [program, navigate]);

  if (!program) {
    return null;
  }

  const ProgramIcon = program.icon;

  // Handle donation with default description
  const handleSupportProgram = (amount: number = 100) => {
    setSelectedAmount(amount);
    setShowDonationModal(true);
  };

  // Handle contact form with program-specific message
  const handleContact = () => {
    setShowContactForm(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-custom py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Programs
        </Button>
      </div>

      <div className="container-custom pb-16">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <ProgramIcon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{program.title}</h1>
            <p className="text-muted-foreground text-lg">{program.description}</p>
          </div>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Stats */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(program.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                    <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
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

            {/* Get Involved */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Get Involved</h3>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Support This Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full btn-hero"
                  onClick={() => handleSupportProgram(100)}
                >
                  Donate ₹100
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSupportProgram(250)}
                >
                  Donate ₹250
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSupportProgram(500)}
                >
                  Donate ₹500
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setShowDonationModal(true)}
                >
                  Custom Amount
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Program Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Global Program</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Ongoing Initiative</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{(program.stats as { beneficiaries?: string }).beneficiaries || 'Many'} Beneficiaries</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Want to learn more about this program or how you can get involved?
                </p>
                <Button
                  className="w-full"
                  onClick={handleContact}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Donation Modal with default description */}
      <DonationModal
        open={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        initialAmount={selectedAmount}
        isRecurring={false}
        programTitle={program.title}
        defaultDescription={`Support for ${program.title} program`}
      />

      {/* Contact Form */}
      <ContactForm
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
        initialSubject={`Inquiry about ${program.title} Program`}
        initialMessage={`I would like to learn more about the ${program.title} program and how I can get involved or support this initiative.`}
      />
    </div>
  );
};

export default ProgramDetail;