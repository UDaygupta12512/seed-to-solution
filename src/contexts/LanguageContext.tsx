import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  name: string;
  code: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
}

const languages = [
  { name: "English", code: "EN" },
  { name: "हिंदी", code: "HI" },
  { name: "മലയാളം", code: "ML" },
  { name: "తెలుగు", code: "TE" },
  { name: "தமிழ்", code: "TA" },
  { name: "ಕನ್ನಡ", code: "KN" },
  { name: "मराठी", code: "MR" },
  { name: "বাংলা", code: "BN" },
];

const translations = {
  EN: {
    "Agricultural AI Assistant": "Agricultural AI Assistant",
    "Smart Farming Solutions": "Smart Farming Solutions",
    "Comprehensive Farming Solutions": "Comprehensive Farming Solutions",
    "Government Schemes": "Government Schemes",
    "Climate Predictions": "Climate Predictions",
    "Disease Detection": "Disease Detection",
    "Voice Support": "Voice Support",
    "Budget Planning": "Budget Planning",
    "Home Gardening": "Home Gardening",
    "Multi-Language Support": "Multi-Language Support",
    "Get Started": "Get Started",
    "Home": "Home",
    "Schemes": "Schemes",
    "Climate": "Climate",
    "Contact": "Contact"
  },
  HI: {
    "Agricultural AI Assistant": "कृषि एआई सहायक",
    "Smart Farming Solutions": "स्मार्ट कृषि समाधान",
    "Comprehensive Farming Solutions": "व्यापक कृषि समाधान",
    "Government Schemes": "सरकारी योजनाएं",
    "Climate Predictions": "जलवायु भविष्यवाणी",
    "Disease Detection": "रोग की पहचान",
    "Voice Support": "आवाज सहायता",
    "Budget Planning": "बजट योजना",
    "Home Gardening": "घरेलू बागवानी",
    "Multi-Language Support": "बहु-भाषा समर्थन",
    "Get Started": "शुरू करें",
    "Home": "होम",
    "Schemes": "योजनाएं",
    "Climate": "जलवायु",
    "Contact": "संपर्क"
  },
  // Add more translations as needed for other languages
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { currentLanguage, translations } = useLanguage();
  
  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.EN[key] || key;
  };
  
  return { t };
};