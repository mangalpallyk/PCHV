import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CommonCTA from "@/components/CommonCTA";
import { Heart, Activity, Zap, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Arrhythmia = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const locations = [
    "Frisco", "Carrollton", "Allen", "McKinney", "Princeton", "Wylie",
    "The Colony", "Anna", "Celina", "Addison", "Lewisville", "Grapevine", "Flower Mound"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Arrhythmia Treatment by Dr. Kiran Mangalpally | Interventional Cardiologist in Frisco & Surrounding Areas</title>
        <meta name="description" content="Dr. Kiran Mangalpally, an Interventional Cardiologist serving Frisco, Carrollton, Allen, McKinney, and nearby cities, specializes in diagnosing and treating heart arrhythmias. Schedule a checkup today." />
        <link rel="canonical" href="/arrhythmia-treatment" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-blue-50 via-white to-backround py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Activity className="h-6 w-6" />
              <span className="text-lg font-medium">Arrhythmia Treatment</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Arrhythmia Treatment
            </h1>
            
            <p className="text-xl text-blue-600 font-medium">
              Dr. Kiran Mangalpally - Interventional Cardiologist
            </p>

            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-lg">
                Serving {locations.slice(0, 4).join(", ")} and surrounding areas
              </span>
            </div>

            {/* Image Section */}
            <div className="w-full mb-12">
              <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
                <img 
                  src="/lovable-uploads/arrhythmia.jpg" 
                  alt="Heart Arrhythmia Illustration"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              If you experience irregular heartbeats, fluttering sensations, or a racing heart, you may have an arrhythmia. Dr. Kiran Mangalpally specializes in diagnosing and treating arrhythmias, ensuring you receive the comprehensive care you need for optimal heart health.
            </p>

            <Button 
              onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule an Arrhythmia Evaluation
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* What Causes Arrhythmia */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">What Causes a Heart Arrhythmia?</h2>
                </div>
                <h3 className="text-xl font-semibold text-blue-600">Understanding Heart Rhythm Problems</h3>
                <p className="text-gray-600 leading-relaxed">
                  An arrhythmia occurs when the heart's electrical system doesn't function properly, causing the heartbeat to become too fast, too slow, or irregular. In any case, the heart becomes inefficient at pumping blood throughout the body.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">This malfunction can happen due to:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Blocked or delayed electrical signals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Malfunction of the heart's primary pacemaker</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Abnormal electrical pathways</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Other parts of the heart taking over as pacemakers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Heart arrhythmias can be triggered by:</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium text-blue-600">Lifestyle Factors:</h5>
                    <p className="text-gray-600 text-sm">Stress, smoking, excessive alcohol, caffeine, nicotine, or certain medications</p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-blue-600">Health Conditions:</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• High blood pressure</li>
                      <li>• Coronary heart disease</li>
                      <li>• Heart failure</li>
                      <li>• Previous heart attack</li>
                      <li>• Thyroid disorders</li>
                      <li>• Rheumatic heart disease</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Atrial Fibrillation */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Types of Arrhythmias: Atrial Fibrillation</h2>
                </div>
                <h3 className="text-xl font-semibold text-blue-600">What Is Atrial Fibrillation?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Atrial fibrillation (AFib) is one of the most common arrhythmias and is considered a serious condition. It develops when the electrical signals in the heart become disorganized, often due to high blood pressure, coronary heart disease, or inflammation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  During AFib, the heart's upper chambers beat rapidly and irregularly. This can cause blood clots, increasing the risk of stroke, and may also contribute to heart failure if not treated.
                </p>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">How Are Heart Arrhythmias Treated?</h2>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-6">Effective Treatments for Arrhythmia</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Dr. Kiran Mangalpally uses a range of treatment methods to help manage heart arrhythmias. Depending on your condition, treatment may involve:
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Medications</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Beta-blockers, calcium channel blockers, or digoxin can help regulate heart rhythm. Anticoagulants may be prescribed to reduce the risk of blood clots.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pacemaker</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For slow heart rhythms or certain arrhythmias, a pacemaker may be inserted under the skin. It sends electrical impulses to your heart to keep it beating normally.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">ICD Device</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If you have a life-threatening arrhythmia, an ICD (Implantable Cardioverter Defibrillator) may be recommended. It uses high-energy pulses to restore normal rhythm.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600">
                  Dr. Mangalpally works closely with each patient to determine the most effective treatment plan based on their condition and overall health.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Call to Action */}
      <CommonCTA 
        serviceName="Arrhythmia Treatment"
        subtitle="If you're experiencing symptoms of arrhythmia, it's essential to seek professional care."
        description="Dr. Kiran Mangalpally offers specialized arrhythmia treatment and heart care services in Frisco, Carrollton, Allen, McKinney, and surrounding cities. Don't wait to address any heart concerns — schedule an appointment with Dr. Mangalpally today."
      />
      <Footer />
    </div>
  );
};

export default Arrhythmia;
