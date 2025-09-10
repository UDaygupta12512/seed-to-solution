import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, Languages, Play, Square } from "lucide-react";
import { useState } from "react";

const VoiceSupport = () => {
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "हिंदी", code: "hi", flag: "🇮🇳" },
    { name: "മലയാളം", code: "ml", flag: "🇮🇳" },
    { name: "తెలుగు", code: "te", flag: "🇮🇳" },
    { name: "தமிழ்", code: "ta", flag: "🇮🇳" },
    { name: "ಕನ್ನಡ", code: "kn", flag: "🇮🇳" },
    { name: "মराठী", code: "mr", flag: "🇮🇳" },
    { name: "বাংলা", code: "bn", flag: "🇮🇳" },
  ];

  const commonQuestions = [
    {
      category: "Weather",
      questions: [
        "What's the weather forecast for this week?",
        "When should I water my crops?",
        "Is it a good time to harvest?"
      ]
    },
    {
      category: "Diseases",
      questions: [
        "My tomato leaves have brown spots, what should I do?",
        "How to prevent fungal infections?",
        "What pesticide should I use for aphids?"
      ]
    },
    {
      category: "Schemes",
      questions: [
        "How do I apply for PM-KISAN scheme?",
        "What documents do I need for crop insurance?",
        "Tell me about MSP rates for wheat"
      ]
    },
    {
      category: "General",
      questions: [
        "Best time to plant rice in my region?",
        "How to improve soil fertility?",
        "What crops are suitable for my budget?"
      ]
    }
  ];

  const conversationHistory = [
    {
      id: 1,
      question: "What's the best fertilizer for wheat crops?",
      answer: "For wheat crops, I recommend using NPK fertilizer with ratio 120:60:40 kg per hectare. Apply nitrogen in 3 splits...",
      timestamp: "10:30 AM",
      language: "English"
    },
    {
      id: 2,
      question: "मेरी फसल में कीड़े लगे हैं, क्या करूं?",
      answer: "आपकी फसल में कीड़े लगने पर आप नीम का तेल या इमिडाक्लोप्रिड का छिड़काव कर सकते हैं...",
      timestamp: "9:45 AM",
      language: "हिंदी"
    }
  ];

  const handleStartListening = () => {
    setIsListening(true);
    // Simulate listening
    setTimeout(() => {
      setIsListening(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Voice Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ask questions in your own language and get instant AI-powered answers. 
              Supports multiple regional languages for better understanding and communication.
            </p>
          </div>

          {/* Language Selection */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Languages className="h-8 w-8" />
                Select Your Language
              </CardTitle>
              <CardDescription>Choose your preferred language for voice interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map((language) => (
                  <Button
                    key={language.code}
                    variant={selectedLanguage === language.name ? "agriculture" : "outline"}
                    onClick={() => setSelectedLanguage(language.name)}
                    className="h-16 flex flex-col items-center gap-1 text-sm"
                  >
                    <span className="text-xl">{language.flag}</span>
                    {language.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Voice Interface */}
          <Card className="max-w-2xl mx-auto mb-12 bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Voice Assistant</CardTitle>
              <CardDescription>
                Press and hold to speak, or tap the microphone button
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Button
                    variant={isListening ? "destructive" : "agriculture"}
                    size="lg"
                    onClick={handleStartListening}
                    className="w-24 h-24 rounded-full text-2xl"
                  >
                    {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg font-medium text-primary">
                    {isListening ? "Listening..." : "Tap to speak"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Speaking in: <span className="font-medium text-primary">{selectedLanguage}</span>
                  </p>
                </div>

                {isListening && (
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-8 bg-primary animate-pulse rounded"></div>
                    <div className="w-2 h-6 bg-primary animate-pulse rounded" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-10 bg-primary animate-pulse rounded" style={{animationDelay: '0.4s'}}></div>
                    <div className="w-2 h-7 bg-primary animate-pulse rounded" style={{animationDelay: '0.6s'}}></div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Common Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonQuestions.map((category, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.questions.map((question, qIndex) => (
                        <Button
                          key={qIndex}
                          variant="ghost"
                          className="w-full text-left justify-start text-sm h-auto p-3 text-muted-foreground hover:text-primary"
                        >
                          <Play className="h-3 w-3 mr-2 flex-shrink-0" />
                          {question}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conversation History */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Recent Conversations</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {conversationHistory.map((conversation) => (
                <Card key={conversation.id} className="bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-primary/20">
                          {conversation.language}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-primary mb-1 flex items-center gap-2">
                            <Mic className="h-4 w-4" />
                            Question:
                          </h4>
                          <p className="text-muted-foreground">{conversation.question}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-1 flex items-center gap-2">
                            <Volume2 className="h-4 w-4" />
                            Answer:
                          </h4>
                          <p className="text-muted-foreground">{conversation.answer}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Listen Again
                        </Button>
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Need Help?</CardTitle>
                <CardDescription>
                  Learn how to use voice support effectively or contact our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Voice Tutorial
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact Support
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

export default VoiceSupport;