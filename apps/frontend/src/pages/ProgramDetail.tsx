// Images from public folder for deployment
const educationImage = "/images/programs/aursunao.png";
const communityImage = "/images/programs/indradhanush.png";
const pragyaImage = "/images/programs/pragya.png";
const mealtohealImage = "/images/programs/mealtoheal.png";
const gowiththeflowImage = "/images/programs/gowiththeflow.png";
const rootforo2Image = "/images/programs/rootforO2.jpg";
const storyoffrontlineImage = "/images/programs/storyoffrontlinewarriors.png";
// Import SDG images
import sdg2 from '@/assets/SDG-2.png';
import sdg3 from '@/assets/SDG-3.png';
import sdg4 from '@/assets/SDG-4.png';
import sdg6 from '@/assets/SDG-6.png';
import sdg8 from '@/assets/SDG-8.png';
import sdg15 from '@/assets/SDG-15.png';
import sdg17 from '@/assets/SDG-17.png';

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
  Users,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const sdgMap: Record<number, string> = {
  2: sdg2,
  3: sdg3,
  4: sdg4,
  6: sdg6,
  8: sdg8,
  15: sdg15,
  17: sdg17,
};

const ProgramDetail = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100);

  // Program data - in a real app, this would come from an API
  const programs = {
    "mealtoheal": {
      id: "mealtoheal",
      title: "Meal To Heal",
      description: "Weekly Food Drive carried out at various cities across India for the needy. Meals distributed at various shelter homes and care clinics for sick and elderly. Volunteers prepare age-appropriate nutritive meals per medical requirements.",
      image: mealtohealImage,
      icon: Heart,
      sdgIds: [2],
      stats: {
        meals: "150,000+",
        cities: "Multiple",
        volunteers: "Active"
      },
      objectives: [
        "Mobilize volunteers for food preparation and distribution",
        "Coordinate with shelter homes and care clinics for targeted delivery",
        "Ensure dietary needs are met for elderly and sick beneficiaries",
        "Provide nutritious meals per medical requirements"
      ],
      testimonial: {
        quote: "Our volunteers make and distribute nutritious meals to those who need them most.",
        author: "Volunteer Coordinator"
      },
      impact: {
        title: "Zero Hunger",
        description: "Over 150,000 meals distributed across Indian states. We ensure that no one goes to sleep hungry.",
        image: mealtohealImage,
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Donate", description: "Contribute to meal preparation and logistics." },
          { step: "2", title: "Volunteer", description: "Help prepare and distribute meals at local drives." },
          { step: "3", title: "Partner", description: "Collaborate with local organizations for wider reach." }
        ]
      }
    },
    "aursunao": {
      id: "aursunao",
      title: "AurSunao",
      description: "An Open Platform to reach experts for Good Health and Well Being. Free confidential counselling helplines for those in emotional distress.",
      image: educationImage,
      icon: Heart,
      sdgIds: [3],
      stats: {
        beneficiaries: "25 K+",
        support: "24/7",
        professionals: "Trained"
      },
      objectives: [
        "Provide free, confidential counselling helplines",
        "Connect trained listeners and mental-health professionals",
        "Empower hope and deliver comfort to those in distress",
        "Ensure a judgment-free space for emotional well-being"
      ],
      testimonial: {
        quote: "In moments of depression, despair, or emotional overwhelm, no one should feel alone. We are here to help.",
        author: "AurSunao Team"
      },
      impact: {
        title: "Good Health and Well Being",
        description: "We ensure that every individual—regardless of background or circumstance—has access to a compassionate support system. We are here to empower hope.",
        image: educationImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Volunteer", description: "Join as a trained listener or mental health professional." },
          { step: "2", title: "Spread Awareness", description: "Share our helpline numbers with those in need." },
          { step: "3", title: "Donate", description: "Support the infrastructure that keeps our lines open." }
        ]
      }
    },
    "indradhanush": {
      id: "indradhanush",
      title: "Indradhanush",
      description: "Monthly Creative Expression for ages 3 years + to 18 years +. An initiative to promote Quality Education through art and creativity.",
      image: communityImage,
      icon: BookOpen,
      sdgIds: [4],
      stats: {
        entries: "12,000+",
        states: "PAN India",
        events: "Monthly"
      },
      objectives: [
        "Organize art, essay, and creative competitions",
        "Encourage creative expression among students",
        "Provide a platform for showcasing talent",
        "Ensure inclusive participation across all age groups"
      ],
      testimonial: {
        quote: "Quality education is not just a right; it is the foundation for empowerment, innovation, and sustainable development.",
        author: "Program Lead"
      },
      impact: {
        title: "Quality Education",
        description: "Till date 12,000+ entries and creative work submitted from across Indian states. We aim to eliminate disparities in access to creative learning opportunities.",
        image: communityImage
      },
      getInvolved: {
        title: "Participate in 4 Steps",
        steps: [
          { step: "1", title: "Choose Category", description: "Select the category fitting your age group." },
          { step: "2", title: "Create", description: "Keep your final artwork or essay ready." },
          { step: "3", title: "Register", description: "Upload artwork and submit entry fee." }
        ]
      }
    },
    "gowiththeflow": {
      id: "gowiththeflow",
      title: "Go With The Flow",
      description: "Sanitary Pad Drive Donation and menstrual hygiene education. Creating a period of change across India.",
      image: gowiththeflowImage,
      icon: Users,
      sdgIds: [6],
      stats: {
        kits: "Distributed",
        coverage: "PAN India",
        awareness: "High"
      },
      objectives: [
        "Provide sanitary pad kits to remand homes and underprivileged areas",
        "Educate women and girls about menstrual health and hygiene",
        "Break the stigma and secrecy around menstruation",
        "Ensure access to basic sanitary necessities"
      ],
      testimonial: {
        quote: "Sanitary hygiene is not a privilege but a basic necessity. We help women manage their periods with dignity.",
        author: "Go With The Flow Team"
      },
      impact: {
        title: "Clean Water and Sanitation",
        description: "Distribution of sanitary pads and hygiene education to help women and girls in underprivileged communities manage their periods safely.",
        image: gowiththeflowImage,
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Donate", description: "Support sanitary pad kit procurement." },
          { step: "2", title: "Volunteer", description: "Help distribute kits and run awareness drives." },
          { step: "3", title: "Advocate", description: "Help break the stigma by talking about menstrual health." }
        ]
      }
    },
    "pragya": {
      id: "pragya",
      title: "Pragya",
      description: "Skill Building Programs for Students and Teachers. Promoting Decent Work and Economic Growth.",
      image: pragyaImage,
      icon: Target,
      sdgIds: [8],
      stats: {
        teachers: "Trained",
        students: "Skilled",
        partners: "Multiple"
      },
      objectives: [
        "Train teachers in Canvas, Google for Education, and AI in classrooms",
        "Student workshops on Value Systems and Career Decisions",
        "Career guidance for Armed Forces and other sectors",
        "Implement NEP 2020 aligned training modules"
      ],
      testimonial: {
        quote: "Empowering the next generation with the right skills and values for a sustainable economic future.",
        author: "Pragya Coordinator"
      },
      impact: {
        title: "Decent Work and Economic Growth",
        description: "Comprehensive training programs covering digital tools, values, and career guidance to foster economic growth and employment.",
        image: pragyaImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Mentor", description: "Share your professional expertise with students." },
          { step: "2", title: "Partner", description: "Schools and institutions can partner for training." },
          { step: "3", title: "Sponsor", description: "Support skill-building workshops." }
        ]
      }
    },
    "rootforo2": {
      id: "rootforo2",
      title: "Root For O2",
      description: "Planting new roots for a Greener Planet. Life on Land initiatives across states.",
      image: rootforo2Image,
      icon: Home,
      sdgIds: [15],
      stats: {
        saplings: "100,000+",
        drives: "Ongoing",
        impact: "High"
      },
      objectives: [
        "Organize plantation drives in disaster-affected areas",
        "Combat desertification and halt biodiversity loss",
        "Promote sustainable use of terrestrial ecosystems",
        "Engage communities in reforestation"
      ],
      testimonial: {
        quote: "By safeguarding life on land, we secure the well-being of all species and ensure a healthier planet.",
        author: "Root For O2 Team"
      },
      impact: {
        title: "Life on Land",
        description: "Planted over 100,000 saplings. Focusing on protecting, restoring, and promoting sustainable use of our land resources.",
        image: rootforo2Image
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Plant", description: "Join our plantation drives." },
          { step: "2", title: "Donate", description: "Sponsor saplings for a greener future." },
          { step: "3", title: "Adopt", description: "Commit to maintaining planted saplings." }
        ]
      }
    },
    "storyoffrontline": {
      id: "storyoffrontline",
      title: "Story of FrontLine Warriors",
      description: "FB Live with the Front Line Warriors. Partnerships for the Goals to honor those who serve.",
      image: storyoffrontlineImage,
      icon: Users,
      sdgIds: [17],
      stats: {
        sessions: "Live",
        heroes: "Honored",
        reach: "Global"
      },
      objectives: [
        "Host live sessions with frontline workers",
        "Showcase stories of resilience and courage",
        "Pay gratitude to forces and medical fraternity",
        "Strengthen global partnership for goals"
      ],
      testimonial: {
        quote: "Their courage, dedication, and unwavering commitment brought hope when the world stood still.",
        author: "Appreciation Note"
      },
      impact: {
        title: "Partnerships for the Goals",
        description: "Highighting the efforts of frontline warriors during COVID-19 and beyond, fostering a spirit of unity and gratitude.",
        image: storyoffrontlineImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Watch", description: "Tune in to our live sessions." },
          { step: "2", title: "Share", description: "Amplify the stories of our heroes." },
          { step: "3", title: "Nominate", description: "Suggest a frontline warrior to be featured." }
        ]
      }
    }
  };

  if (!programId) {
    return <div>Program ID missing</div>;
  }

  const program = programs[programId as keyof typeof programs];

  if (!program) {
    return <div>Program not found</div>;
  }

  // Redirect to 404 if program not found
  useEffect(() => {
    // This useEffect is now redundant if the above `if (!program)` handles it.
    // However, if `programId` is valid but `programs[programId]` is undefined,
    // the above `if (!program)` will catch it.
    // The original `useEffect` was for when `program` was derived directly from `useParams`
    // and `programs` was not yet defined or checked.
    // For now, keeping it as per instruction, but it might be simplified.
    // For this specific instruction, the `if (!program)` check is added before this useEffect.
    // So, this useEffect will only run if `program` is valid.
    // The instruction also adds `window.scrollTo(0,0)` in a new useEffect.
    // Let's remove the old 404 redirect useEffect as the new `if (!program)` handles it.
    // The instruction implies removing the old useEffect and adding new ones.
    // The instruction snippet does not include the old useEffect, so I will remove it.
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDonate = () => {
    setShowDonationModal(true);
  };

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
    <div className="pt-24 min-h-screen">
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
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {program.sdgIds.map((sdgId) => (
                    <Badge key={sdgId} variant="outline" className="text-[10px] px-2 py-0 h-5 border-secondary text-secondary">
                      SDG {sdgId}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
                <p className="text-muted-foreground text-lg">{program.description}</p>
              </div>
              <div className="hidden md:flex flex-wrap gap-2 justify-end ml-4">
                  {program.sdgIds.map((sdgId) => (
                    <div key={sdgId} className="w-24 h-24 rounded-lg overflow-hidden shrink-0 shadow-sm" title={`SDG ${sdgId}`}>
                      <img src={sdgMap[sdgId]} alt={`SDG ${sdgId}`} className="w-full h-full object-contain" />
                    </div>
                  ))}
              </div>
            </div>
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
