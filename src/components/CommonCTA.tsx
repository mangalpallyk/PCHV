import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

interface CommonCTAProps {
  title?: string;
  subtitle?: string;
  description?: string;
  serviceName?: string;
  locations?: string[];
}

const CommonCTA = ({ 
  title = "Schedule a Consultation with Dr. Kiran Kumar Mangalpally",
  subtitle,
  description,
  serviceName,
  locations = [
    "Frisco", "Carrollton", "Allen", "McKinney", "Princeton", "Wylie",
    "The Colony", "Anna", "Celina", "Addison", "Lewisville", "Grapevine", "Flower Mound"
  ]
}: CommonCTAProps) => {
  
  const defaultDescription = serviceName 
    ? `Expert ${serviceName.toLowerCase()} care serving ${locations.slice(0, 4).join(", ")} and surrounding areas. Dr. Mangalpally provides comprehensive cardiovascular treatment with personalized care for each patient.`
    : `Expert cardiovascular care serving ${locations.slice(0, 4).join(", ")} and surrounding areas. Dr. Mangalpally provides comprehensive treatment with personalized care for each patient.`;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-xl mb-6 opacity-90">
            {subtitle}
          </p>
        )}
        
        <p className="text-lg mb-8 opacity-80 max-w-4xl mx-auto leading-relaxed">
          {description || defaultDescription}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
            onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </Button>
          
        </div>
        
        <p className="text-sm opacity-75">
          Same-day appointments often available. Call for urgent consultations.
        </p>
      </div>
    </div>
  );
};

export default CommonCTA; 