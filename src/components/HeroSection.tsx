import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary text-primary-foreground rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-primary-foreground rounded-full mr-2"></div>
            {t("AI-Powered Agricultural Support for Indian Farmers")}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            {t("Empowering Indian Farmers with")}{" "}
            <span className="text-primary">Krishi Jyoti</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("Get government scheme information, MSP rates, subsidies, climate predictions, disease detection, and voice-based support—all in one comprehensive platform designed for Indian agriculture.")}
          </p>
          
          <div className="flex justify-center mb-16">
            <Link to="/schemes">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                {t("Get Started")} →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;