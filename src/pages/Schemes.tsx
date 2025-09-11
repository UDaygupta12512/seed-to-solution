import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, Percent, Tractor, Sprout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";

const Schemes = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleApplyScheme = (schemeName: string) => {
    toast({
      title: t("Application Initiated"),
      description: t("Your application for") + ` ${schemeName} ` + t("has been started. You will be redirected to the application portal."),
    });
  };

  const handleContactSupport = () => {
    toast({
      title: "Contact Support",
      description: "Connecting you to our support team for scheme assistance.",
    });
  };

  const handleDownloadGuidelines = () => {
    toast({
      title: "Download Started",
      description: "Scheme guidelines PDF is being downloaded.",
    });
  };
  const schemes = [
    {
      icon: DollarSign,
      title: "Minimum Support Price (MSP)",
      description: "Government guaranteed minimum price for crops including wheat, rice, cotton, and pulses.",
      benefits: ["Price guarantee", "Market stability", "Income security"],
      eligibility: "All registered farmers",
      status: "Active"
    },
    {
      icon: Percent,
      title: "Pradhan Mantri Kisan Samman Nidhi",
      description: "Direct income support of ₹6,000 per year to small and marginal farmers.",
      benefits: ["₹2,000 per installment", "3 installments/year", "Direct bank transfer"],
      eligibility: "Landholding up to 2 hectares",
      status: "Active"
    },
    {
      icon: Tractor,
      title: "Farm Mechanization Subsidy",
      description: "Subsidies on tractors, harvesters, and other farming equipment up to 50%.",
      benefits: ["Equipment subsidy", "Modern technology", "Increased productivity"],
      eligibility: "All farmers with valid documents",
      status: "Active"
    },
    {
      icon: Sprout,
      title: "Pesticide Subsidy Scheme",
      description: "Government subsidy on organic and chemical pesticides for crop protection.",
      benefits: ["Cost reduction", "Quality assurance", "Crop protection"],
      eligibility: "Registered farmers",
      status: "Active"
    },
    {
      icon: FileText,
      title: "Kisan Credit Card",
      description: "Easy access to credit for farming needs with flexible repayment options.",
      benefits: ["Low interest rates", "Quick approval", "Multiple purposes"],
      eligibility: "Farmers with land records",
      status: "Active"
    },
    {
      icon: DollarSign,
      title: "Crop Insurance Scheme",
      description: "Protection against crop loss due to natural disasters and weather conditions.",
      benefits: ["Risk coverage", "Premium subsidy", "Quick settlement"],
      eligibility: "All farmers",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("Government Schemes & Subsidies")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("Access comprehensive information about central and state government schemes, subsidies, and financial support available for farmers across India.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <scheme.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {scheme.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{scheme.title}</CardTitle>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {scheme.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">Eligibility:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                    </div>
                    <Button 
                      variant="agriculture" 
                      className="w-full"
                      onClick={() => handleApplyScheme(scheme.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Need Help with Applications?</CardTitle>
                <CardDescription>
                  Our team is here to help you navigate through the application process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={handleContactSupport}
                  >
                    Contact Support
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleDownloadGuidelines}
                  >
                    Download Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schemes;