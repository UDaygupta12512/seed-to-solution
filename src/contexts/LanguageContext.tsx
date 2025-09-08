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
    "Contact": "Contact",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.",
    "View Schemes": "View Schemes",
    "Check Weather": "Check Weather",
    "Upload Plant Image": "Upload Plant Image",
    "Try Voice Support": "Try Voice Support",
    "Plan Budget": "Plan Budget",
    "Start Gardening": "Start Gardening",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.",
    "Access farming support in your preferred language for better understanding and communication": "Access farming support in your preferred language for better understanding and communication",
    "Voice support and text assistance available in all listed languages": "Voice support and text assistance available in all listed languages"
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
    "Contact": "संपर्क",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "एमएसपी योजनाओं, केंद्रीय और राज्य सरकारी ऋण, कीटनाशकों और कृषि उपकरणों पर सब्सिडी का उपयोग करें।",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "बेहतर उत्पादन के लिए अपनी फसलों की प्रभावी योजना बनाने हेतु एआई-संचालित मौसम पूर्वानुमान और जलवायु अंतर्दृष्टि प्राप्त करें।",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "पौधों की छवियां अपलोड करें और तत्काल उपचार सिफारिशों के लिए एआई-संचालित विश्लेषण के साथ तुरंत बीमारियों का पता लगाएं।",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "अपनी भाषा में प्रश्न पूछें और तत्काल एआई-संचालित उत्तर प्राप्त करें। कई क्षेत्रीय भाषाओं का समर्थन करता है।",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "इष्टतम संसाधन आवंटन के लिए अपने बजट और कृषि आवश्यकताओं के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "छोटे पैमाने की खेती के लिए अनुकूलित सलाह के साथ घरेलू किसानों और घरेलू सब्जी बागान के लिए एकदम सही।",
    "View Schemes": "योजनाएं देखें",
    "Check Weather": "मौसम जांचें",
    "Upload Plant Image": "पौधे की छवि अपलोड करें",
    "Try Voice Support": "आवाज सहायता आजमाएं",
    "Plan Budget": "बजट योजना",
    "Start Gardening": "बागवानी शुरू करें",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "टिकाऊ कृषि के लिए सरकारी सहायता से लेकर एआई-संचालित अंतर्दृष्टि तक, सूचित कृषि निर्णय लेने के लिए आपको जो कुछ भी चाहिए।",
    "Access farming support in your preferred language for better understanding and communication": "बेहतर समझ और संचार के लिए अपनी पसंदीदा भाषा में कृषि सहायता प्राप्त करें",
    "Voice support and text assistance available in all listed languages": "सूचीबद्ध सभी भाषाओं में आवाज सहायता और पाठ सहायता उपलब्ध है"
  },
  ML: {
    "Agricultural AI Assistant": "കാർഷിക AI സഹായി",
    "Smart Farming Solutions": "സ്മാർട്ട് കൃഷി പരിഹാരങ്ങൾ",
    "Comprehensive Farming Solutions": "സമഗ്ര കൃഷി പരിഹാരങ്ങൾ",
    "Government Schemes": "സർക്കാർ പദ്ധതികൾ",
    "Climate Predictions": "കാലാവസ്ഥാ പ്രവചനങ്ങൾ",
    "Disease Detection": "രോഗ കണ്ടെത്തൽ",
    "Voice Support": "ശബ്ദ പിന്തുണ",
    "Budget Planning": "ബജറ്റ് ആസൂത്രണം",
    "Home Gardening": "വീട്ടുതോട്ടം",
    "Multi-Language Support": "മൾട്ടി-ഭാഷാ പിന്തുണ",
    "Get Started": "ആരംഭിക്കുക",
    "Home": "ഹോം",
    "Schemes": "പദ്ധതികൾ",
    "Climate": "കാലാവസ്ഥ",
    "Contact": "ബന്ധപ്പെടുക",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP പദ്ധതികൾ, കേന്ദ്ര-സംസ്ഥാന സർക്കാർ വായ്പകൾ, കീടനാശിനികൾക്കും കൃഷി ഉപകരണങ്ങൾക്കും സബ്സിഡികൾ എന്നിവ ലഭ്യമാക്കുക.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "മികച്ച വിളവിനായി നിങ്ങളുടെ വിളകൾ ഫലപ്രദമായി ആസൂത്രണം ചെയ്യുന്നതിന് AI-പവർഡ് കാലാവസ്ഥാ പ്രവചനങ്ങളും കാലാവസ്ഥാ ഉൾക്കാഴ്ചകളും നേടുക.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "ചെടികളുടെ ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുകയും ഉടനടി ചികിത്സാ ശുപാർശകൾക്കായി AI-പവർഡ് വിശകലനം ഉപയോഗിച്ച് രോഗങ്ങൾ തൽക്ഷണം കണ്ടെത്തുകയും ചെയ്യുക.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിക്കുകയും തൽക്ഷണ AI-പവർഡ് ഉത്തരങ്ങൾ നേടുകയും ചെയ്യുക. ഒന്നിലധികം പ്രാദേശിക ഭാഷകളെ പിന്തുണയ്ക്കുന്നു.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "ഒപ്റ്റിമൽ റിസോഴ്സ് അലോക്കേഷനായി നിങ്ങളുടെ ബജറ്റും കൃഷി ആവശ്യങ്ങളും അടിസ്ഥാനമാക്കി വ്യക്തിഗതമാക്കിയ ശുപാർശകൾ നേടുക.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "ചെറുകിട കൃഷിക്കുള്ള അനുയോജ്യമായ ഉപദേശങ്ങളോടെ ഗാർഹിക കർഷകർക്കും വീട്ടുപച്ചക്കറി കൃഷിക്കും അനുയോജ്യം.",
    "View Schemes": "പദ്ധതികൾ കാണുക",
    "Check Weather": "കാലാവസ്ഥ പരിശോധിക്കുക",
    "Upload Plant Image": "ചെടിയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
    "Try Voice Support": "ശബ്ദ പിന്തുണ പരീക്ഷിക്കുക",
    "Plan Budget": "ബജറ്റ് ആസൂത്രണം ചെയ്യുക",
    "Start Gardening": "തോട്ടപ്പണി ആരംഭിക്കുക",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "സുസ്ഥിര കൃഷിക്കായി സർക്കാർ പിന്തുണയിൽ നിന്ന് AI-പവർഡ് ഉൾക്കാഴ്ചകൾ വരെ, വിവേചനബുദ്ധിയുള്ള കൃഷി തീരുമാനങ്ങൾ എടുക്കാൻ നിങ്ങൾക്ക് ആവശ്യമായതെല്ലാം.",
    "Access farming support in your preferred language for better understanding and communication": "മികച്ച ധാരണയ്ക്കും ആശയവിനിമയത്തിനുമായി നിങ്ങളുടെ ഇഷ്ട ഭാഷയിൽ കൃഷി പിന്തുണ ലഭ്യമാക്കുക",
    "Voice support and text assistance available in all listed languages": "ലിസ്റ്റ് ചെയ്ത എല്ലാ ഭാഷകളിലും ശബ്ദ പിന്തുണയും ടെക്സ്റ്റ് സഹായവും ലഭ്യമാണ്"
  },
  TE: {
    "Agricultural AI Assistant": "వ్యవసాయ AI సహాయకుడు",
    "Smart Farming Solutions": "స్మార్ట් వ్యవసాయ పరిష్కారాలు",
    "Comprehensive Farming Solutions": "సమగ్ర వ్యవసాయ పరిష్కారాలు",
    "Government Schemes": "ప్రభుత్వ పథకాలు",
    "Climate Predictions": "వాతావరణ అంచనాలు",
    "Disease Detection": "వ్యాధి గుర్తింపు",
    "Voice Support": "వాయిస్ మద్దతు",
    "Budget Planning": "బడ్జెట్ ప్రణాళిక",
    "Home Gardening": "గృహ తోటపని",
    "Multi-Language Support": "బహుభాషా మద్దతు",
    "Get Started": "ప్రారంభించండి",
    "Home": "ముఖ్యపేజీ",
    "Schemes": "పథకాలు",
    "Climate": "వాతావరణం",
    "Contact": "సంప్రదించండి",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP పథకాలు, కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ రుణాలు, పురుగుమందులు మరియు వ్యవసాయ పరికరాలపై సబ్సిడీలను పొందండి.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "మెరుగైన దిగుబడి కోసం మీ పంటలను సమర్థవంతంగా ప్రణాళిక చేసుకోవడానికి AI-శక్తితో కూడిన వాతావరణ అంచనాలు మరియు వాతావరణ అంతర్దృష్టులను పొందండి.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "వెంటనే చికిత్సా సిఫార్సుల కోసం AI-శక్తితో కూడిన విశ్లేషణతో మొక్కల చిత్రాలను అప్లోడ్ చేసి వ్యాధులను తక్షణమే కనుగొనండి.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "మీ స్వంత భాషలో ప్రశ్నలు అడిగి తక్షణ AI-శక్తితో కూడిన సమాధానాలను పొందండి. అనేక ప్రాంతీయ భాషలకు మద్దతు ఇస్తుంది.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "సరైన వనరుల కేటాయింపు కోసం మీ బడ్జెట్ మరియు వ్యవసాయ అవసరాల ఆధారంగా వ్యక్తిగతీకరించిన సిఫార్సులను పొందండి.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "చిన్న-స్థాయి వ్యవసాయానికి అనుకూలీకరించిన సలహాలతో గృహ రైతులు మరియు గృహ కూరగాయల తోటల కోసం సరైనది.",
    "View Schemes": "పథకాలను చూడండి",
    "Check Weather": "వాతావరణం తనిఖీ చేయండి",
    "Upload Plant Image": "మొక్కల చిత్రం అప్లోడ్ చేయండి",
    "Try Voice Support": "వాయిస్ మద్దతు ప్రయత్నించండి",
    "Plan Budget": "బడ్జెట్ ప్రణాళిక చేయండి",
    "Start Gardening": "తోటపని ప్రారంభించండి",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "స్థిరమైన వ్యవసాయం కోసం ప్రభుత్వ మద్దతు నుండి AI-శక్తితో కూడిన అంతర్దృష్టుల వరకు, సమాచారిత వ్యవసాయ నిర్ణయాలు తీసుకోవడానికి మీకు అవసరమైనవన్నీ.",
    "Access farming support in your preferred language for better understanding and communication": "మెరుగైన అవగాహన మరియు కమ్యూనికేషన్ కోసం మీ ఇష్ట భాషలో వ్యవసాయ మద్దతును పొందండి",
    "Voice support and text assistance available in all listed languages": "జాబితా చేయబడిన అన్ని భాషలలో వాయిస్ మద్దతు మరియు వచన సహాయం అందుబాటులో ఉన్నాయి"
  },
  TA: {
    "Agricultural AI Assistant": "விவசாய AI உதவியாளர்",
    "Smart Farming Solutions": "ஸ்மார்ட் விவசாய தீர்வுகள்",
    "Comprehensive Farming Solutions": "விரிவான விவசாய தீர்வுகள்",
    "Government Schemes": "அரசு திட்டங்கள்",
    "Climate Predictions": "காலநிலை கணிப்புகள்",
    "Disease Detection": "நோய் கண்டறிதல்",
    "Voice Support": "குரல் ஆதரவு",
    "Budget Planning": "பட்ஜெட் திட்டமிடல்",
    "Home Gardening": "வீட்டுத் தோட்டம்",
    "Multi-Language Support": "பல மொழி ஆதரவு",
    "Get Started": "தொடங்குங்கள்",
    "Home": "முகப்பு",
    "Schemes": "திட்டங்கள்",
    "Climate": "காலநிலை",
    "Contact": "தொடர்பு",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP திட்டங்கள், மத்திய மற்றும் மாநில அரசு கடன்கள், பூச்சிக்கொல்லிகள் மற்றும் விவசாய உபகரணங்களில் மானியங்களை அணுகவும்.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "சிறந்த விளைச்சலுக்காக உங்கள் பயிர்களை திறம்பட திட்டமிட AI-இயங்கும் வானிலை முன்னறிவிப்புகள் மற்றும் காலநிலை நுண்ணறிவுகளைப் பெறுங்கள்.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "உடனடி சிகிச்சை பரிந்துரைகளுக்காக AI-இயங்கும் பகுப்பாய்வுடன் தாவர படங்களை பதிவேற்றி நோய்களை உடனடியாக கண்டறியுங்கள்.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "உங்கள் சொந்த மொழியில் கேள்விகள் கேட்டு உடனடி AI-இயங்கும் பதில்களைப் பெறுங்கள். பல பிராந்திய மொழிகளை ஆதரிக்கிறது.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "உகந்த வள ஒதுக்கீட்டிற்காக உங்கள் பட்ஜெட் மற்றும் விவசாய தேவைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெறுங்கள்.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "சிறிய அளவிலான விவசாயத்திற்கான தனிப்பயன் ஆலோசனையுடன் உள்நாட்டு விவசாயிகள் மற்றும் வீட்டு காய்கறி தோட்டத்திற்கு சரியானது.",
    "View Schemes": "திட்டங்களைப் பார்க்கவும்",
    "Check Weather": "வானிலையைச் சரிபார்க்கவும்",
    "Upload Plant Image": "தாவர படத்தைப் பதிவேற்றவும்",
    "Try Voice Support": "குரல் ஆதரவை முயற்சிக்கவும்",
    "Plan Budget": "பட்ஜெட் திட்டமிடவும்",
    "Start Gardening": "தோட்டம் தொடங்கவும்",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "நிலையான விவசாயத்திற்கான அரசு ஆதரவு முதல் AI-இயங்கும் நுண்ணறிவு வரை, தகவலறிந்த விவசாய முடிவுகளை எடுக்க உங்களுக்கு தேவையான அனைத்தும்.",
    "Access farming support in your preferred language for better understanding and communication": "சிறந்த புரிதல் மற்றும் தொடர்புக்காக உங்கள் விருப்ப மொழியில் விவசாய ஆதரவை அணுகவும்",
    "Voice support and text assistance available in all listed languages": "பட்டியலிடப்பட்ட அனைத்து மொழிகளிலும் குரல் ஆதரவு மற்றும் உரை உதவி கிடைக்கும்"
  },
  KN: {
    "Agricultural AI Assistant": "ಕೃಷಿ AI ಸಹಾಯಕ",
    "Smart Farming Solutions": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    "Comprehensive Farming Solutions": "ಸಮಗ್ರ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    "Government Schemes": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    "Climate Predictions": "ಹವಾಮಾನ ಮುನ್ನೋಟಗಳು",
    "Disease Detection": "ರೋಗ ಪತ್ತೆ",
    "Voice Support": "ಧ್ವನಿ ಬೆಂಬಲ",
    "Budget Planning": "ಬಜೆಟ್ ಯೋಜನೆ",
    "Home Gardening": "ಮನೆ ತೋಟಗಾರಿಕೆ",
    "Multi-Language Support": "ಬಹು-ಭಾಷಾ ಬೆಂಬಲ",
    "Get Started": "ಪ್ರಾರಂಭಿಸಿ",
    "Home": "ಮುಖ್ಯಪುಟ",
    "Schemes": "ಯೋಜನೆಗಳು",
    "Climate": "ಹವಾಮಾನ",
    "Contact": "ಸಂಪರ್ಕ",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP ಯೋಜನೆಗಳು, ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರಿ ಸಾಲಗಳು, ಕೀಟನಾಶಕಗಳು ಮತ್ತು ಕೃಷಿ ಉಪಕರಣಗಳ ಮೇಲೆ ಸಬ್ಸಿಡಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "ಉತ್ತಮ ಇಳುವರಿಗಾಗಿ ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಯೋಜಿಸಲು AI-ಚಾಲಿತ ಹವಾಮಾನ ಮುನ್ನೋಟಗಳು ಮತ್ತು ಹವಾಮಾನ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "ತಕ್ಷಣದ ಚಿಕಿತ್ಸಾ ಸಲಹೆಗಳಿಗಾಗಿ AI-ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ಸಸ್ಯ ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ರೋಗಗಳನ್ನು ತಕ್ಷಣವೇ ಪತ್ತೆ ಮಾಡಿ.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "ನಿಮ್ಮ ಸ್ವಂತ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ ಮತ್ತು ತಕ್ಷಣ AI-ಚಾಲಿತ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ. ಅನೇಕ ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "ಅತ್ಯುತ್ತಮ ಸಂಪನ್ಮೂಲ ಹಂಚಿಕೆಗಾಗಿ ನಿಮ್ಮ ಬಜೆಟ್ ಮತ್ತು ಕೃಷಿ ಅಗತ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತೀಕರಿಸಿದ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "ಸಣ್ಣ-ಪ್ರಮಾಣದ ಕೃಷಿಗೆ ಅನುಗುಣವಾದ ಸಲಹೆಯೊಂದಿಗೆ ದೇಶೀಯ ರೈತರು ಮತ್ತು ಮನೆ ತರಕಾರಿ ತೋಟಕ್ಕೆ ಪರಿಪೂರ್ಣ.",
    "View Schemes": "ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "Check Weather": "ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಿ",
    "Upload Plant Image": "ಸಸ್ಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    "Try Voice Support": "ಧ್ವನಿ ಬೆಂಬಲವನ್ನು ಪ್ರಯತ್ನಿಸಿ",
    "Plan Budget": "ಬಜೆಟ್ ಯೋಜನೆ ಮಾಡಿ",
    "Start Gardening": "ತೋಟಗಾರಿಕೆ ಪ್ರಾರಂಭಿಸಿ",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "ಸುಸ್ಥಿರ ಕೃಷಿಗಾಗಿ ಸರ್ಕಾರಿ ಬೆಂಬಲದಿಂದ AI-ಚಾಲಿತ ಒಳನೋಟಗಳವರೆಗೆ, ತಿಳುವಳಿಕೆಯುಳ್ಳ ಕೃಷಿ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ಎಲ್ಲವೂ.",
    "Access farming support in your preferred language for better understanding and communication": "ಉತ್ತಮ ತಿಳುವಳಿಕೆ ಮತ್ತು ಸಂವಹನಕ್ಕಾಗಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ಕೃಷಿ ಬೆಂಬಲವನ್ನು ಪ್ರವೇಶಿಸಿ",
    "Voice support and text assistance available in all listed languages": "ಪಟ್ಟಿ ಮಾಡಲಾದ ಎಲ್ಲಾ ಭಾಷೆಗಳಲ್ಲಿ ಧ್ವನಿ ಬೆಂಬಲ ಮತ್ತು ಪಠ್ಯ ಸಹಾಯ ಲಭ್ಯವಿದೆ"
  },
  MR: {
    "Agricultural AI Assistant": "कृषी AI सहाय्यक",
    "Smart Farming Solutions": "स्मार्ट शेती समाधाने",
    "Comprehensive Farming Solutions": "सर्वसमावेशक शेती समाधाने",
    "Government Schemes": "सरकारी योजना",
    "Climate Predictions": "हवामान अंदाज",
    "Disease Detection": "रोग ओळख",
    "Voice Support": "आवाज समर्थन",
    "Budget Planning": "बजेट नियोजन",
    "Home Gardening": "घरगुती बागकाम",
    "Multi-Language Support": "बहु-भाषा समर्थन",
    "Get Started": "सुरुवात करा",
    "Home": "मुख्यपृष्ठ",
    "Schemes": "योजना",
    "Climate": "हवामान",
    "Contact": "संपर्क",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP योजना, केंद्रीय आणि राज्य सरकारी कर्जे, कीटकनाशके आणि शेती उपकरणांवर अनुदाने मिळवा.",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "चांगल्या उत्पादनासाठी तुमच्या पिकांचे प्रभावी नियोजन करण्यासाठी AI-चालित हवामान अंदाज आणि हवामान अंतर्दृष्टी मिळवा.",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "तत्काळ उपचार शिफारशींसाठी AI-चालित विश्लेषणासह वनस्पतींची प्रतिमा अपलोड करा आणि रोग तत्काळ शोधा.",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "तुमच्या स्वतःच्या भाषेत प्रश्न विचारा आणि तत्काळ AI-चालित उत्तरे मिळवा. अनेक प्रादेशिक भाषांना समर्थन देते.",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "इष्टतम संसाधन वाटपासाठी तुमच्या बजेट आणि शेती गरजांवर आधारित वैयक्तिकृत शिफारशी मिळवा.",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "लहान-प्रमाणातील शेतीसाठी तयार केलेल्या सल्ल्यासह देशी शेतकरी आणि घरगुती भाजी लागवडीसाठी योग्य.",
    "View Schemes": "योजना पहा",
    "Check Weather": "हवामान तपासा",
    "Upload Plant Image": "वनस्पती प्रतिमा अपलोड करा",
    "Try Voice Support": "आवाज समर्थन वापरून पहा",
    "Plan Budget": "बजेट नियोजन करा",
    "Start Gardening": "बागकाम सुरू करा",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "शाश्वत शेतीसाठी सरकारी समर्थनापासून AI-चालित अंतर्दृष्टीपर्यंत, माहितीपूर्ण शेती निर्णय घेण्यासाठी तुम्हाला आवश्यक असलेले सर्वकाही.",
    "Access farming support in your preferred language for better understanding and communication": "चांगल्या समजूतीसाठी आणि संवादासाठी तुमच्या पसंतीच्या भाषेत शेती समर्थन मिळवा",
    "Voice support and text assistance available in all listed languages": "सूचीबद्ध सर्व भाषांमध्ये आवाज समर्थन आणि मजकूर सहाय्य उपलब्ध आहे"
  },
  BN: {
    "Agricultural AI Assistant": "কৃষি AI সহায়ক",
    "Smart Farming Solutions": "স্মার্ট কৃষি সমাধান",
    "Comprehensive Farming Solutions": "ব্যাপক কৃষি সমাধান",
    "Government Schemes": "সরকারি প্রকল্প",
    "Climate Predictions": "জলবায়ু পূর্বাভাস",
    "Disease Detection": "রোগ নির্ণয়",
    "Voice Support": "ভয়েস সাপোর্ট",
    "Budget Planning": "বাজেট পরিকল্পনা",
    "Home Gardening": "বাড়ির বাগান",
    "Multi-Language Support": "বহু-ভাষা সমর্থন",
    "Get Started": "শুরু করুন",
    "Home": "হোম",
    "Schemes": "প্রকল্প",
    "Climate": "জলবায়ু",
    "Contact": "যোগাযোগ",
    "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.": "MSP প্রকল্প, কেন্দ্রীয় ও রাজ্য সরকারি ঋণ, কীটনাশক ও কৃষি যন্ত্রপাতিতে ভর্তুকি অ্যাক্সেস করুন।",
    "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.": "উন্নত ফলনের জন্য আপনার ফসল কার্যকরভাবে পরিকল্পনা করতে AI-চালিত আবহাওয়ার পূর্বাভাস এবং জলবায়ু অন্তর্দৃষ্টি পান।",
    "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.": "তাৎক্ষণিক চিকিৎসার সুপারিশের জন্য AI-চালিত বিশ্লেষণের সাথে উদ্ভিদের ছবি আপলোড করুন এবং তাৎক্ষণিকভাবে রোগ সনাক্ত করুন।",
    "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.": "আপনার নিজের ভাষায় প্রশ্ন জিজ্ঞাসা করুন এবং তাৎক্ষণিক AI-চালিত উত্তর পান। একাধিক আঞ্চলিক ভাষা সমর্থন করে।",
    "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.": "সর্বোত্তম সম্পদ বরাদ্দের জন্য আপনার বাজেট এবং কৃষি প্রয়োজনের উপর ভিত্তি করে ব্যক্তিগতকৃত সুপারিশ পান।",
    "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.": "ছোট আকারের কৃষিকাজের জন্য তৈরি পরামর্শ সহ গৃহস্থালি কৃষক এবং গৃহস্থালি শাকসবজি চাষের জন্য নিখুঁত।",
    "View Schemes": "প্রকল্প দেখুন",
    "Check Weather": "আবহাওয়া পরীক্ষা করুন",
    "Upload Plant Image": "উদ্ভিদের ছবি আপলোড করুন",
    "Try Voice Support": "ভয়েস সাপোর্ট চেষ্টা করুন",
    "Plan Budget": "বাজেট পরিকল্পনা করুন",
    "Start Gardening": "বাগান করা শুরু করুন",
    "Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.": "টেকসই কৃষির জন্য সরকারি সহায়তা থেকে AI-চালিত অন্তর্দৃষ্টি পর্যন্ত, তথ্যপূর্ণ কৃষি সিদ্ধান্ত নিতে আপনার যা প্রয়োজন তার সবকিছু।",
    "Access farming support in your preferred language for better understanding and communication": "ভাল বোঝাপড়া এবং যোগাযোগের জন্য আপনার পছন্দের ভাষায় কৃষি সহায়তা অ্যাক্সেস করুন",
    "Voice support and text assistance available in all listed languages": "তালিকাভুক্ত সমস্ত ভাষায় ভয়েস সাপোর্ট এবং টেক্সট সহায়তা উপলব্ধ"
  }
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