import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      info: "support@smartfarm.gov.in",
      description: "Get help via email within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      info: "1800-FARM-HELP (1800-3276-4357)",
      description: "24/7 helpline for urgent farming queries"
    },
    {
      icon: MapPin,
      title: "Office Address",
      info: "Ministry of Agriculture & Farmers Welfare, New Delhi - 110001",
      description: "Visit our office for in-person assistance"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Extended support during farming seasons"
    }
  ];

  const supportTeam = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Agricultural Officer",
      specialization: "Crop Management & Disease Control",
      email: "rajesh.kumar@smartfarm.gov.in"
    },
    {
      name: "Priya Sharma",
      role: "Technology Support Lead",
      specialization: "App Support & Technical Issues",
      email: "priya.sharma@smartfarm.gov.in"
    },
    {
      name: "Dr. Anand Singh",
      role: "Climate & Weather Expert",
      specialization: "Weather Forecasting & Climate Advice",
      email: "anand.singh@smartfarm.gov.in"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our agricultural experts and support team. 
              We're here to help you with all your farming needs and questions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center bg-gradient-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{contact.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{contact.info}</p>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your query or issue..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Team */}
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    Our Expert Team
                  </CardTitle>
                  <CardDescription>
                    Meet our agricultural experts ready to assist you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {supportTeam.map((member, index) => (
                      <div key={index} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-primary">{member.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-2">{member.specialization}</p>
                        <Button variant="outline" size="sm">
                          <Mail className="h-3 w-3 mr-1" />
                          Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Technical Issues:</strong> Contact our tech support team for app-related problems
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Scheme Applications:</strong> Get help with government scheme applications and documentation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Farming Advice:</strong> Consult our agricultural experts for crop-specific guidance
                    </p>
                  </div>
                  <Button variant="agriculture" className="w-full mt-4">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <Card className="max-w-2xl mx-auto mt-12 bg-gradient-hero border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-primary-foreground">🚨 Emergency Agricultural Support</h3>
              <p className="mb-6 text-lg text-primary-foreground/90">For urgent farming emergencies and pest outbreaks</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="agriculture" size="lg" className="text-lg font-semibold shadow-lg">
                  📞 Call Emergency Helpline
                </Button>
                <Button variant="agriculture" size="lg" className="text-lg font-semibold shadow-lg">
                  💬 WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;