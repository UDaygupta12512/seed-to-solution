import FeatureCard from "./FeatureCard";
import { 
  FileText, 
  Cloud, 
  Camera, 
  Mic, 
  DollarSign, 
  Sprout 
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const features = [
    {
      icon: FileText,
      title: "Government Schemes",
      description: t("Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment."),
      buttonText: t("View Schemes"),
      buttonVariant: "agriculture" as const,
      onClick: () => navigate("/schemes"),
    },
    {
      icon: Cloud,
      title: "Climate Predictions",
      description: t("Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields."),
      buttonText: t("Check Weather"),
      buttonVariant: "default" as const,
      onClick: () => navigate("/climate"),
    },
    {
      icon: Camera,
      title: "Disease Detection",
      description: t("Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations."),
      buttonText: t("Upload Plant Image"),
      buttonVariant: "hero" as const,
      onClick: () => navigate("/disease-detection"),
    },
    {
      icon: Mic,
      title: "Voice Support",
      description: t("Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages."),
      buttonText: t("Try Voice Support"),
      buttonVariant: "outline" as const,
      onClick: () => navigate("/voice-support"),
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: t("Get personalized recommendations based on your budget and farming needs for optimal resource allocation."),
      buttonText: t("Plan Budget"),
      buttonVariant: "agriculture" as const,
      onClick: () => navigate("/contact"),
    },
    {
      icon: Sprout,
      title: "Home Gardening",
      description: t("Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming."),
      buttonText: t("Start Gardening"),
      buttonVariant: "default" as const,
      onClick: () => navigate("/contact"),
    },
  ];

  return (
    <section className="py-16 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("Comprehensive Farming Solutions")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.title)}
              description={feature.description}
              buttonText={feature.buttonText}
              buttonVariant={feature.buttonVariant}
              onClick={feature.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;