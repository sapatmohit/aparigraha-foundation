// Images from public folder for deployment
const educationImage = "/images/programs/aursunao.png";
const mealtohealImage = "/images/programs/mealtoheal.png";
const gowiththeflowImage = "/images/programs/gowiththeflow.png";
const rootforo2Image = "/images/programs/rootforO2.jpg";
const storyoffrontlineImage = "/images/programs/storyoffrontlinewarriors.png";
const communityImage = "/images/programs/indradhanush.png";
const pragyaImage = "/images/programs/pragya.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Home,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

// Import SDG images
import sdg15 from '@/assets/SDG-15.png';
import sdg17 from '@/assets/SDG-17.png';
import sdg2 from '@/assets/SDG-2.png';
import sdg3 from '@/assets/SDG-3.png';
import sdg4 from '@/assets/SDG-4.png';
import sdg6 from '@/assets/SDG-6.png';
import sdg8 from '@/assets/SDG-8.png';

const sdgMap: Record<number, string> = {
  2: sdg2,
  3: sdg3,
  4: sdg4,
  6: sdg6,
  8: sdg8,
  15: sdg15,
  17: sdg17,
};

// Define the program type
interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  sdgIds: number[];
  stats: {
    beneficiaries?: string;
    [key: string]: string | undefined;
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
}

const ProgramsSection = () => {
  const programs: Program[] = [
    {
      id: "mealtoheal",
      title: "Meal To Heal",
      description: "Weekly Food Drive carried out at various cities across India for the needy. Meals distributed at various shelter homes and care clinics for sick and elderly.",
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
        quote: "Our volunteers use their cooking skills to make age appropriate nutritive value meals as per the medical requirements.",
        author: "Volunteer"
      },
      impact: {
        title: "Zero Hunger",
        description: "Over 150,000 meals distributed across Indian states. We ensure that no one goes to sleep hungry in the communities we serve.",
        image: mealtohealImage
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
    {
      id: "aursunao",
      title: "AurSunao",
      description: "An Open Platform to reach experts for Good Health and Well Being. Free confidential counselling helplines for those in emotional distress.",
      image: educationImage,
      icon: Heart,
      sdgIds: [3],
      stats: {
        beneficiaries: "1 K+",
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ];

  const processSteps = [
    {
      step: "Identify",
      title: "Community Assessment",
      description: "We work with local communities to identify their most pressing needs and priorities."
    },
    {
      step: "Enable",
      title: "Resource Mobilization",
      description: "We mobilize resources, partners, and expertise to address identified challenges."
    },
    {
      step: "Empower",
      title: "Sustainable Solutions",
      description: "We implement programs that empower communities to sustain positive change."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <Badge className="mb-4">Our Programs</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Creating Lasting Change</h2>
          <p className="text-xl text-muted-foreground">
            We focus on holistic development through targeted initiatives in education, healthcare, and community empowerment.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center fade-in-up stagger-1">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-16 h-8 w-8 text-muted-foreground/30" />
                  )}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div key={program.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-up stagger-2`}>
                <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl overflow-hidden h-[400px]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* SDG Badge Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
                    {program.sdgIds.map((sdgId) => (
                      <div key={sdgId} className="w-20 h-20 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300" title={`SDG ${sdgId}`}>
                        <img src={sdgMap[sdgId]} alt={`SDG ${sdgId}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} fade-in-up stagger-1`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {program.sdgIds.map((sdgId) => (
                        <Badge key={sdgId} variant="outline" className="text-[10px] px-2 py-0 h-5 border-secondary text-secondary">
                          SDG {sdgId}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold">{program.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">{program.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {program.objectives.map((objective, i) => (
                      <li key={i} className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="btn-hero"
                  asChild
                >
                  <Link to={`/program/${program.id}`}>
                    Learn More About {program.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;