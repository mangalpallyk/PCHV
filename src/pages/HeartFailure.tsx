import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CommonCTA from "@/components/CommonCTA";
import { Heart, Activity, Pill, Stethoscope, Zap, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeartFailure = () => {
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
        <title>Heart Failure Management with Dr. Kiran Mangalpally | Interventional Cardiologist</title>
        <meta name="description" content="Dr. Kiran Mangalpally, an experienced interventional cardiologist, offers comprehensive heart failure management in Frisco, McKinney, and nearby areas. Schedule an appointment for a thorough heart checkup and treatment plan." />
        <link rel="canonical" href="/heart-failure-management" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-blue-50 via-white to-backround py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Heart className="h-6 w-6" />
              <span className="text-lg font-medium">Heart Failure Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Heart Failure Management
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

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Heart failure is a chronic condition that requires specialized care and management. Dr. Kiran Mangalpally provides comprehensive heart failure treatment plans tailored to each patient's individual needs, helping you manage symptoms and improve your quality of life.
            </p>

            {/* Image Section */}
            <div className="w-full mb-12">
              <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
                <img 
                  src="/lovable-uploads/heart-failure.jpg" 
                  alt="Heart Failure Treatment"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>

            <Button 
              onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule a Heart Evaluation
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* What is Heart Failure */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">What is Heart Failure?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Heart failure, also known as congestive heart failure, occurs when the heart is unable to pump enough blood to meet the body's oxygen and nutrient demands. This condition can affect either side of the heart and can lead to fluid buildup in the lungs, abdomen, and other parts of the body. While heart failure does not mean that the heart will stop functioning immediately, it is a chronic condition that worsens over time without proper management.
              </p>
            </div>

            {/* Causes of Heart Failure */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Causes of Heart Failure</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Heart failure typically develops when another health condition damages the heart. Some common causes include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Heart attack and coronary artery disease</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High blood pressure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Damaged heart muscles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inflammation of heart muscles</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Faulty heart valves</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Diabetes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Thyroid imbalances</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High iron levels in the blood</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Management Approach */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">How Heart Failure is Managed by Dr. Kiran Mangalpally</h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Dr. Kiran Mangalpally tailors treatment plans for heart failure based on individual health needs and the severity of the condition. The management approach may include the following:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Pill className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Medications for Heart Failure</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    A range of medications can help improve heart function and manage symptoms:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• ACE Inhibitors: Help to lower blood pressure</li>
                    <li>• Aldosterone Antagonists: Reduce blood volume</li>
                    <li>• Digoxin: Strengthens heartbeats</li>
                    <li>• Vasodilators: Dilate blood vessels</li>
                    <li>• Beta-blockers: Slow heart rate</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lifestyle Changes</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Healthy lifestyle changes are vital in managing heart failure:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Reducing sodium intake</li>
                    <li>• Eating a balanced diet</li>
                    <li>• Staying active</li>
                    <li>• Maintaining healthy weight</li>
                    <li>• Avoiding excessive alcohol</li>
                    <li>• Limiting added sugars</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Devices</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    For patients with irregular heartbeats, medical devices may be recommended:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Pacemakers</li>
                    <li>• Implantable cardioverter defibrillators (ICD)</li>
                    <li>• Cardiac resynchronization therapy (CRT)</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Surgery for Heart Failure</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Surgical interventions may be necessary to improve heart function:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Coronary artery bypass graft</li>
                    <li>• Heart valve surgery</li>
                    <li>• Ventricular restoration</li>
                    <li>• Heart transplant (if needed)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <CommonCTA 
              serviceName="Heart Failure Management"
              subtitle="If you are experiencing symptoms like fatigue or shortness of breath, Dr. Kiran Mangalpally can help you evaluate your heart health and develop a personalized treatment plan."
              description="Early diagnosis and effective management are essential for preventing heart failure from worsening. Contact Dr. Mangalpally's office today to schedule an appointment."
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <ServicesOverview />

      <Footer />
    </div>
  );
};

export default HeartFailure;
