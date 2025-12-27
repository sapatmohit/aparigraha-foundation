import ContactForm from "@/components/ContactForm";
import DonationModal from "@/components/DonationModal";
import VolunteerForm from "@/components/VolunteerForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
import { useState } from "react";

const EngagementSection = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showRecurringModal, setShowRecurringModal] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormSubject, setContactFormSubject] = useState("");
  const [contactFormMessage, setContactFormMessage] = useState("");
  const [selectedOpportunity, setSelectedOpportunity] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [isRecurring, setIsRecurring] = useState<boolean>(false);

  const donationOptions = [
    {
      amount: 50,
      impact: "Provide 1 plate of nashta and tea/ milk/ coffee",
      popular: false
    },
    {
      amount: 120,
      impact: "Provide 1 plate of lunch / dinner",
      popular: true
    },
    {
      amount: 500,
      impact: "Provide 1 packet of sanitary pads for 1 girl / woman ",
      popular: false
    },
    {
      amount: 800,
      impact: "Provide utilities for 1 person",
      popular: false
    },
    {
      amount: 1000,
      impact: "Provide 1 packet of adult diapers",
      popular: false
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Field Volunteer",
      location: "Various Countries",
      duration: "3-12 months",
      description: "Work directly with communities to implement development projects",
      requirements: ["Bachelor's degree", "2+ years experience", "Flexible schedule"]
    },
    {
      title: "Fundraising Coordinator",
      location: "Remote/Local",
      duration: "Ongoing",
      description: "Help organize fundraising events and campaigns in your area",
      requirements: ["Event planning experience", "Strong communication", "Marketing skills"]
    },
    {
      title: "Skills-Based Volunteer",
      location: "Remote",
      duration: "Flexible",
      description: "Contribute your professional skills in areas like design, IT, or consulting",
      requirements: ["Professional expertise", "5+ hours/week", "Reliable internet"]
    }
  ];

  const handleDonationClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsRecurring(false);
    setShowDonationModal(true);
  };

  const handleRecurringClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsRecurring(true);
    setShowRecurringModal(true);
  };

  const handleCustomDonationClick = () => {
    const customAmountInput = document.getElementById('custom-amount') as HTMLInputElement;
    if (customAmountInput && customAmountInput.value) {
      setSelectedAmount(Number(customAmountInput.value));
    }
    setIsRecurring(false);
    setShowDonationModal(true);
  };

  const handleCustomRecurringClick = () => {
    const customAmountInput = document.getElementById('custom-amount') as HTMLInputElement;
    if (customAmountInput && customAmountInput.value) {
      setSelectedAmount(Number(customAmountInput.value));
    }
    setIsRecurring(true);
    setShowRecurringModal(true);
  };

  const handleVolunteerClick = (opportunityTitle: string) => {
    setSelectedOpportunity(opportunityTitle);
    setShowVolunteerForm(true);
  };


  return (
    <section id="get-involved" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Get Involved
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our work and create lasting change.
            Whether through donations, volunteering, or partnerships, your contribution matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Donation Section */}
          <div className="lg:col-span-2">
            <Card className="impact-card fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  Make a Donation
                </CardTitle>
                <p className="text-muted-foreground">
                  Your financial support directly funds our programs and creates tangible impact in communities worldwide.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Amounts */}
                <div>
                  <h4 className="font-semibold mb-4">Choose an amount:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {donationOptions.map((option) => (
                      <div key={option.amount} className="flex flex-col gap-2">
                        <Button
                          variant={option.popular ? "default" : "outline"}
                          className={`relative flex-col h-[120px] p-4 text-wrap ${option.popular ? "ring-2 ring-secondary" : ""
                            }`}
                          onClick={() => handleDonationClick(option.amount)}
                        >
                          {option.popular && (
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                              Popular
                            </Badge>
                          )}
                          <span className="text-lg font-bold">₹{option.amount}</span>
                          <span className="text-xs text-center mt-1 opacity-80">
                            {option.impact}
                          </span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <h4 className="font-semibold mb-3">Or enter a custom amount:</h4>
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="text-lg"
                        id="custom-amount"
                        min="10"
                      />
                    </div>
                    <Button
                      className="btn-hero"
                      id="custom-amount-btn"
                      onClick={handleCustomDonationClick}
                    >
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-8"
                      onClick={handleCustomRecurringClick}
                    >
                      Setup monthly donation
                    </Button>
                  </div>
                </div>

                {/* Recurring Donation */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">💚 Make it monthly for greater impact</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Monthly donations help us plan long-term projects and provide stable support to communities.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedAmount(50); // Default to ₹50 for monthly
                      setIsRecurring(true);
                      setShowRecurringModal(true);
                    }}
                  >
                    Set up Monthly Donation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Impact */}
          <div className="fade-in-up stagger-1">
            <Card className="program-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">Impact Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">₹50</div>
                    <div className="text-sm text-muted-foreground">Your donation could provide:</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>✓ Clean water for 1 family (6 months)</li>
                      <li>✓ School meals for 10 children (1 week)</li>
                      <li>✓ Medical supplies for 5 patients</li>
                    </ul>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    95% of every rupee goes directly to programs
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary mr-3" />
              Volunteer Opportunities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your skills, time, and passion to make a direct difference in our programs and communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className={`program-card fade-in-up stagger-${index + 1}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {opportunity.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {opportunity.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Requirements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {opportunity.requirements.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleVolunteerClick(opportunity.title)}
                  >
                    Apply to Volunteer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <DonationModal
        open={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        onSuccess={() => {
          // Reset to default amount after successful donation
          setSelectedAmount(50);
        }}
        initialAmount={selectedAmount}
        isRecurring={false}
      />

      <DonationModal
        open={showRecurringModal}
        onClose={() => setShowRecurringModal(false)}
        onSuccess={() => {
          // Reset to default amount after successful donation
          setSelectedAmount(50);
        }}
        initialAmount={selectedAmount}
        isRecurring={true}
      />

      <VolunteerForm
        open={showVolunteerForm}
        onClose={() => setShowVolunteerForm(false)}
        opportunityTitle={selectedOpportunity}
      />

      <ContactForm
        open={showContactForm}
        onClose={() => {
          setShowContactForm(false);
          // Reset form data
          setContactFormSubject("");
          setContactFormMessage("");
        }}
        initialSubject={contactFormSubject}
        initialMessage={contactFormMessage}
      />
    </section>
  );
};

export default EngagementSection;