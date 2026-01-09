import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BarChart3,
    Calendar,
    Download,
    Eye,
    FileText,
    Globe,
    GraduationCap,
    Heart,
    Home,
    Share2,
    TrendingUp,
    Users
} from "lucide-react";

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      number: "3,00,000 +",
      label: "Lives transformed",
      description: "Individuals directly impacted by our programs.",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      number: "25000 +",
      label: "Students Educated",
      description: "Children and adults provided with quality education opportunities",
      color: "text-secondary"
    },
    {
      icon: Heart,
      number: "7500+",
      label: "Healthcare",
      description: "People who received medical care through our health programs",
      color: "text-accent"
    },
    {
      icon: Home,
      number: "3000+",
      label: "Plants planted",
      description: "Contributing to a greener planet with every sapling.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "2000+",
      label: "Jobs Created",
      description: "Employment opportunities generated through our development programs",
      color: "text-secondary"
    },
    {
      icon: Globe,
      number: "45+",
      label: "Countries Connected",
      description: "Nations where we've implemented successful development projects",
      color: "text-accent"
    }
  ];

  const annualReports = [
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our achievements, programs, and financial transparency",
      size: "2.4 MB",
      highlights: [
        "Expanded programs to 5 new countries",
        "Reached 25% more beneficiaries than 2022",
        "Achieved 98% program effectiveness rating"
      ]
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      description: "Detailed breakdown of our global expansion and program outcomes",
      size: "2.1 MB",
      highlights: [
        "Launched 3 new flagship programs",
        "Established partnerships with 15 organizations",
        "Improved operational efficiency by 30%"
      ]
    },
    {
      year: "2021",
      title: "Annual Impact Report 2021",
      description: "Our response to global challenges and community resilience building",
      size: "1.9 MB",
      highlights: [
        "Adapted programs for pandemic response",
        "Supported 150,000+ individuals through crisis",
        "Maintained 95% funding efficiency"
      ]
    }
  ];

  const financialDocuments = [
    {
      title: "Consolidated Financial Statements 2023",
      description: "Audited financial statements showing income, expenditures, and fund allocation",
      size: "1.8 MB",
      type: "Financial"
    },
    {
      title: "Donor Transparency Report 2023",
      description: "Detailed breakdown of donation usage and impact per funding source",
      size: "1.5 MB",
      type: "Financial"
    },
    {
      title: "Independent Auditor's Report",
      description: "Third-party verification of our financial practices and accountability",
      size: "1.2 MB",
      type: "Financial"
    }
  ];

  const programReports = [
    {
      title: "Education Program Evaluation",
      description: "Third-party assessment of educational outcomes and learning improvements",
      size: "3.2 MB",
      program: "Education"
    },
    {
      title: "Healthcare Impact Assessment",
      description: "Analysis of health outcomes and community health improvements",
      size: "2.8 MB",
      program: "Healthcare"
    },
    {
      title: "Community Development Review",
      description: "Evaluation of infrastructure projects and sustainable development impact",
      size: "3.5 MB",
      program: "Community"
    }
  ];

  const policyDocuments = [
    {
      title: "Safeguarding Policies",
      description: "Our commitment to protecting vulnerable populations and ethical practices",
      size: "1.2 MB",
      category: "Governance"
    },
    {
      title: "Environmental Sustainability Policy",
      description: "Our approach to environmentally responsible development projects",
      size: "0.9 MB",
      category: "Governance"
    },
    {
      title: "Code of Conduct",
      description: "Ethical standards and professional behavior guidelines for all staff",
      size: "0.7 MB",
      category: "Governance"
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "UN Sustainable Development Goals Recognition",
      description: "Awarded for outstanding contribution to SDG 4 (Quality Education)"
    },
    {
      year: "2022",
      title: "GuideStar Platinum Seal",
      description: "Highest level of transparency and accountability certification"
    },
    {
      year: "2021",
      title: "Community Choice Award",
      description: "Voted #1 NGO for community development by beneficiary communities"
    }
  ];

  // Function to handle document download
  const handleDownload = (title: string) => {
    console.log(`Downloading ${title}`);
    // In a real implementation, this would trigger the actual document download
  };

  return (
    <section id="impact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Our Impact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Measuring What Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparency and accountability drive everything we do. Here's how we're 
            making a measurable difference in communities worldwide.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <Card key={stat.label} className={`impact-card text-center fade-in-up stagger-${index % 3 + 1}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`counter ${stat.color} mb-2`}>{stat.number}</div>
                <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Transparency & Reports - Enhanced */}
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <FileText className="h-8 w-8 text-primary mr-3" />
              Transparency & Reports
            </h3>
            <p className="text-muted-foreground mb-8">
              We believe in complete transparency. Access our detailed reports, 
              financial statements, and program evaluations to see exactly how 
              your support creates lasting change.
            </p>
            
            <Tabs defaultValue="annual" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="annual">Annual Reports</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="annual">
                <div className="space-y-4 mt-4">
                  {annualReports.map((report, index) => (
                    <Card key={report.title} className={`program-card cursor-pointer hover:shadow-medium transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                              <span className="text-sm font-medium text-primary">{report.year}</span>
                            </div>
                            <h4 className="font-semibold mb-2">{report.title}</h4>
                            <p className="text-muted-foreground text-sm mb-3">{report.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {report.highlights.map((highlight, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                            <span className="text-xs text-primary font-medium">{report.size}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-4"
                              onClick={() => handleDownload(report.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="financial">
                <div className="space-y-4 mt-4">
                  {financialDocuments.map((doc, index) => (
                    <Card key={doc.title} className={`program-card cursor-pointer hover:shadow-medium transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <BarChart3 className="h-4 w-4 text-muted-foreground mr-2" />
                              <span className="text-sm font-medium text-primary">{doc.type}</span>
                            </div>
                            <h4 className="font-semibold mb-2">{doc.title}</h4>
                            <p className="text-muted-foreground text-sm mb-2">{doc.description}</p>
                            <span className="text-xs text-primary font-medium">{doc.size}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-4"
                              onClick={() => handleDownload(doc.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="programs">
                <div className="space-y-4 mt-4">
                  {programReports.map((report, index) => (
                    <Card key={report.title} className={`program-card cursor-pointer hover:shadow-medium transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <GraduationCap className="h-4 w-4 text-muted-foreground mr-2" />
                              <span className="text-sm font-medium text-primary">{report.program} Program</span>
                            </div>
                            <h4 className="font-semibold mb-2">{report.title}</h4>
                            <p className="text-muted-foreground text-sm mb-2">{report.description}</p>
                            <span className="text-xs text-primary font-medium">{report.size}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-4"
                              onClick={() => handleDownload(report.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="policies">
                <div className="space-y-4 mt-4">
                  {policyDocuments.map((doc, index) => (
                    <Card key={doc.title} className={`program-card cursor-pointer hover:shadow-medium transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                              <span className="text-sm font-medium text-primary">{doc.category}</span>
                            </div>
                            <h4 className="font-semibold mb-2">{doc.title}</h4>
                            <p className="text-muted-foreground text-sm mb-2">{doc.description}</p>
                            <span className="text-xs text-primary font-medium">{doc.size}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-4"
                              onClick={() => handleDownload(doc.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Recognition & Achievements */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <TrendingUp className="h-8 w-8 text-secondary mr-3" />
              Recognition & Awards
            </h3>
            <p className="text-muted-foreground mb-8">
              Our commitment to excellence and impact has been recognized by 
              leading organizations and the communities we serve worldwide.
            </p>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.year} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {achievement.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Financial Efficiency */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <BarChart3 className="h-8 w-8 text-accent mr-3" />
                Financial Efficiency
              </h3>
              <p className="text-muted-foreground mb-6">
                We ensure maximum impact of every donation through responsible financial management.
              </p>
              <Card className="program-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Program Expenses</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: "92%"}}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Funds directly supporting our programs</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Administrative Costs</span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{width: "5%"}}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Operational and administrative expenses</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fundraising Costs</span>
                        <span className="text-sm font-medium">3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-accent h-2.5 rounded-full" style={{width: "3%"}}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Costs to raise funds for our mission</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">95% efficiency rating</span> - 95¢ of every dollar donated goes directly to our programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="impact-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">See Our Impact in Action</h3>
              <p className="text-muted-foreground mb-6">
                Want to learn more about our programs and see detailed impact metrics? 
                Download our comprehensive annual report.
              </p>
              <Button className="btn-hero">
                <Download className="mr-2 h-5 w-5" />
                Download Annual Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;