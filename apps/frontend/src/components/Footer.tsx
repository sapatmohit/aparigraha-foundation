import ContactForm from "@/components/ContactForm";
import DonationModal from "@/components/DonationModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Calendar,
    Facebook,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Youtube
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showRecurringModal, setShowRecurringModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const quickLinks = [
    { title: "About Us", href: "/#about" },
    { title: "Our Programs", href: "/#programs" },
    { title: "Impact Reports", href: "/#impact" },
    { title: "Get Involved", href: "/#get-involved" },
    { title: "Latest News", href: "/#news" },
    { title: "Contact Us", href: "/#contact" }
  ];

  const programs = [
    { title: "Meal To Heal", href: "/program/mealtoheal" },
    { title: "AurSunao", href: "/program/aursunao" },
    { title: "Indradhanush", href: "/program/indradhanush" },
    { title: "Go With The Flow", href: "/program/gowiththeflow" },
    { title: "Pragya", href: "/program/pragya" },
    { title: "Root For O2", href: "/program/rootforo2" }
  ];

  const policies = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Accessibility Statement", href: "/accessibility" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Financial Transparency", href: "/finances" },
    { title: "Safeguarding Policy", href: "/safeguarding" }
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@aparigrahafoundation9966/featured", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/74165852/admin/dashboard/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aparigrahafoundation/?hl=en", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/groups/aparigrahafoundation/posts/493054418681698/", label: "Facebook" }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "warning"
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "warning"
      });
      return;
    }

    setIsSubscribing(true);

    try {
      // In a real implementation, you would send this to your backend
      // console.log("Subscribing email:", email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "success"
      });

      // Reset email field
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "There was an issue subscribing. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with Our Impact
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Get monthly updates on our programs, success stories, and ways to get involved.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
              />
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                type="submit"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Aparigraha Foundation</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering communities worldwide through sustainable education, healthcare,
              and development programs that create lasting positive change.
            </p>

            {/* Donate Buttons */}
            <div className="flex flex-col gap-2 mb-6">
              <Button
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => setShowDonationModal(true)}
              >
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="w-full border-secondary text-secondary-dark hover:bg-secondary/10"
                onClick={() => setShowRecurringModal(true)}
              >
                Setup AutoPay
              </Button>
            </div>

            {/* Contact Info - updated per Aparigraha email */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div className="text-sm">
                  <p>Contact us - 9136356135 / 9152016555</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm">Email - info@aparigrahafoundation.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-13 w-12 text-secondary mt-0.5" />
                <span className="text-sm">
                  <a href="https://www.google.com/maps/search/?api=1&query=33+Ground+Floor+Citi+Mall+Oshiwara+Link+Road+Andheri+West+Mumbai+400053" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Visit us - 33, Ground Floor, Citi Mall, Oshiwara Link Road, Andheri (W), Mumbai - 400053, Maharashtra, India
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-sm">Office hours - Monday to Sunday 10:00 am to 8:00 pm</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.title}>
                  <Link
                    to={program.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Policies</h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.title}>
                  <Link
                    to={policy.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Certifications</h5>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>• GuideStar Platinum Seal</p>
                <p>• Charity Navigator 4-Star</p>
                <p>• BBB Accredited Charity</p>
                <p>• UN Consultative Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-light/20" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2026 Aparigraha Foundation. All rights reserved. 
          </div>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>
              <a href="https://www.vupune.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Made by Students of Vishwakarma University, Pune
                  </a>
            </span>
          </div>
        </div>
      </div>

      <DonationModal
        open={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        initialAmount={100}
        isRecurring={false}
      />

      <DonationModal
        open={showRecurringModal}
        onClose={() => setShowRecurringModal(false)}
        initialAmount={50}
        isRecurring={true}
      />

      <ContactForm
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </footer>
  );
};

export default Footer;