import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/20 rounded-lg">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Krishi Jyoti</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              {t("Empowering farmers with AI-powered support, government scheme access, and personalized agricultural solutions for sustainable farming.")}
            </p>
            <div className="text-sm text-primary-foreground/60">
              <p>{t("Supporting commercial and domestic farmers")}</p>
              <p>{t("Available in multiple regional languages")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("Quick Links")}</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/schemes" className="hover:text-primary-foreground transition-colors">{t("Government Schemes")}</Link></li>
              <li><Link to="/climate" className="hover:text-primary-foreground transition-colors">{t("Climate Predictions")}</Link></li>
              <li><Link to="/disease-detection" className="hover:text-primary-foreground transition-colors">{t("Disease Detection")}</Link></li>
              <li><Link to="/voice-support" className="hover:text-primary-foreground transition-colors">{t("Voice Support")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("Contact")}</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@krishijyoti.gov</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-KRISHI-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{t("Agricultural Ministry, India")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Krishi Jyoti. {t("All rights reserved. A Government of India Initiative.")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;