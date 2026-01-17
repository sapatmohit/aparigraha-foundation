import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Shield, Scale } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // remove leading slash

  const contentMap: Record<string, { title: string; subtitle: string; icon: React.ElementType }> = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we collect, use, and protect your data",
      icon: Shield
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Rules and regulations for using our website",
      icon: Scale
    },
    accessibility: {
      title: "Accessibility Statement",
      subtitle: "Our commitment to digital inclusion",
      icon: FileText
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "Information about how we use cookies",
      icon: FileText
    },
    finances: {
      title: "Financial Transparency",
      subtitle: "Details on our funding and expenditures",
      icon: FileText
    },
    safeguarding: {
      title: "Safeguarding Policy",
      subtitle: " protecting vulnerable populations",
      icon: Shield
    }
  };

  const currentContent = contentMap[path] || {
    title: "Legal Information",
    subtitle: "Important legal details",
    icon: FileText
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const Icon = currentContent.icon;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Card className="border-none shadow-lg bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2">Legal</Badge>
                <h1 className="text-3xl md:text-4xl font-bold">{currentContent.title}</h1>
                <p className="text-muted-foreground text-lg">{currentContent.subtitle}</p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                This is a placeholder for the <strong>{currentContent.title}</strong>. 
                In a production environment, this page would contain the full legal text prepared by your legal team.
              </p>
              
              <h3>1. Introduction</h3>
              <p>
                Welcome to Aparigraha Foundation. By accessing our website, you agree to these terms.
                Please read them carefully.
              </p>

              <h3>2. Use of Information</h3>
              <p>
                We value your privacy and are committed to protecting your personal data. 
                Any information collected is used solely for the purpose of improving our services and 
                communicating with you regarding our programs.
              </p>

              <h3>3. Contact Us</h3>
              <p>
                If you have any questions about this {currentContent.title.toLowerCase()}, please contact us at:
                <br />
                <strong>Email:</strong> info@aparigrahafoundation.org
                <br />
                <strong>Phone:</strong> +91 91363 56135 / 91520 16555
              </p>
              
              <div className="bg-muted/30 p-6 rounded-lg mt-8 border border-border">
                <p className="text-sm text-muted-foreground m-0">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalPage;
