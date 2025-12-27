// Images from public folder for deployment
const educationImage = "/images/programs/aursunao.png";
const mealtohealImage = "/images/programs/mealtoheal.jpg";
const gowiththeflowImage = "/images/programs/gowiththeflow.png";
const rootforo2Image = "/images/programs/rootforO2.jpg";
const storyoffrontlineImage = "/images/programs/storyoffrontlinewarriors.png";
const communityImage = "/images/programs/indradhanush.png";
const pragyaImage = "/images/programs/pragya.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Heart,
  Home,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

// Define the program type
interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
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
      id: "aursunao",
      title: "AurSunao",
      description: "An open platform to reach experts for good health and well being. Free counselling support platform offering confidential counselling helplines for those in emotional distress; trained listeners and mental-health professionals available. Also supports education initiatives and resources.",
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
      impact: {
        title: "Transforming Education",
        description: "Our education program has built 150 schools and trained over 2,000 teachers, reaching more than 25 K+ students across rural communities. We've awarded 5,000+ scholarships to deserving students, with 85% going on to higher education.",
        image: educationImage
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
    {
      id: "mealtoheal",
      title: "Meal To Heal",
      description: "Weekly Food Drive carried out at various cities across India for the needy. Meals distributed at various shelter homes and care clinics for sick and elderly. Volunteers prepare age-appropriate nutritive meals per medical requirements.",
      image: mealtohealImage,
      icon: ArrowRight,
      stats: {
        meals: "150,000+"
      },
      objectives: [
        "Mobilize volunteers for food preparation and distribution",
        "Coordinate with shelter homes and care clinics for targeted delivery",
        "Ensure dietary needs are met for elderly and sick beneficiaries"
      ],
      testimonial: {
        quote: "Our volunteers make and distribute nutritious meals to those who need them most.",
        author: "Volunteer Coordinator"
      },
      impact: {
        title: "Feeding Hope",
        description: "Over 150,000 meals distributed across Indian states.",
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
    {
      id: "gowiththeflow",
      title: "Go With The Flow",
      description: "Sanitary Pad Drive Donation and menstrual hygiene education. Objective to provide sanitary pad kits and education PAN India; note distribution to remand homes.",
      image: gowiththeflowImage,
      icon: Target,
      stats: {
        beneficiaries: "—"
      },
      objectives: [
        "Provide sanitary pad kits and hygiene education across India",
        "Partner with schools, NGOs, and remand homes for distribution",
        "Train volunteers to deliver menstrual health workshops"
      ],
      testimonial: {
        quote: "Menstrual hygiene drives improve dignity and health outcomes for young women.",
        author: "Program Lead"
      },
      impact: {
        title: "Sanitary Access",
        description: "Distribution of sanitary kits and menstrual hygiene education across remand homes and communities.",
        image: gowiththeflowImage,
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Donate", description: "Support sanitary pad kit procurement and distribution." },
          { step: "2", title: "Volunteer", description: "Help run hygiene education sessions." },
          { step: "3", title: "Partner", description: "Work with us to scale education and distribution." }
        ]
      }
    },
    {
      id: "rootforo2",
      title: "Root For O2",
      description: "Plantation drives across states, especially post-disasters.",
      image: rootforo2Image,
      icon: Home,
      stats: {
        saplings: "100,000+"
      },
      objectives: [
        "Organize large-scale plantation events across districts",
        "Engage local communities and volunteers for maintenance",
        "Focus on disaster-affected areas for reforestation"
      ],
      testimonial: {
        quote: "Plantation drives help restore ecological balance and community resilience.",
        author: "Environmental Coordinator"
      },
      impact: {
        title: "Greening Our Future",
        description: "Planted over 100,000 saplings.",
        image: rootforo2Image
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Donate", description: "Support sapling procurement and on-ground logistics." },
          { step: "2", title: "Volunteer", description: "Join local plantation drives and support maintenance." },
          { step: "3", title: "Partner", description: "Collaborate on large-scale restoration projects." }
        ]
      }
    },
    {
      id: "storyoffrontline",
      title: "Story of FrontLine Warriors",
      description: "FB Live with frontline warriors; Frontline Warriors During COVID-19",
      image: storyoffrontlineImage,
      icon: Users,
      stats: {
        sessions: "—"
      },
      objectives: [
        "Host live sessions with frontline workers",
        "Showcase frontline stories and resilience",
        "Encourage community dialogue and support"
      ],
      testimonial: {
        quote: "Highlighting the efforts of frontline workers during crises.",
        author: "Program Coordinator"
      },
      impact: {
        title: "Frontline Stories",
        description: "Frontline Warriors During COVID-19",
        image: storyoffrontlineImage
      },
      getInvolved: {
        title: "Ways to Get Involved",
        steps: [
          { step: "1", title: "Attend", description: "Join live sessions and share insights." },
          { step: "2", title: "Share", description: "Spread frontline stories across your network." },
          { step: "3", title: "Support", description: "Support frontline initiatives through donations and advocacy." }
        ]
      }
    },
    {
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
        description: "Our community development program has completed over 300 projects, creating 2 K+ jobs and benefiting more than 100,000 people. We've built clean water systems, improved sanitation, and supported local businesses through microfinance initiatives. Till date 12,000+ entries from across Indian states (Indradhanush creative entries).",
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
    {
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
        "Implement preventive health programs",
        "Teacher & student skill-building: Canvas, Google for Education, Google Level 1/2",
        "Classroom pedagogy: Values, NEP 2020, AI in the classroom, career guidance"
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
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Our Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Core Programs & Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Through our comprehensive programs, we address the root causes of poverty
            and inequality while building sustainable pathways to prosperity.
          </p>

          {/* Program Dropdown */}
          <div className="mt-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-background">
                  Jump to a Program
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {programs.map((program) => (
                  <DropdownMenuItem key={program.id} asChild>
                    <Link to={`/program/${program.id}`} className="w-full">
                      {program.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-up`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-medium"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} fade-in-up stagger-1`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{program.title}</h3>
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