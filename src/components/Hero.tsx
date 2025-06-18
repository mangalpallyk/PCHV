import { Button } from "@/components/ui/button";
import { Heart, Shield, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-16 bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Pulse Care Heart and Vascular</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dr. Kiran Kumar{" "}
                <span className="text-gray-900 relative">
                  Mangalpally, MD
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded"></div>
                </span>
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                Board-Certified Interventional Cardiologist
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Providing evidence-based cardiovascular care with over 24 years of clinical experience. 
                Specializing in interventional cardiology, heart failure management, and comprehensive cardiac care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Schedule Consultation
              </Button>
              {/* <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Button> */}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Board-Certified in 5 Specialties</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Serving Frisco & Surrounding Areas</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 transform rotate-0 hover:rotate-2 transition-all duration-500 hover:shadow-3xl hover:scale-105">
              <img 
                src="/lovable-uploads/e11de330-58f7-4de9-93e5-400e2cd99ec9.png" 
                alt="Dr. Kiran Kumar Mangalpally - Interventional Cardiologist"
                className="w-full h-[600px] object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">24+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
