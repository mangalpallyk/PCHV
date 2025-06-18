import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Board Certifications",
      description: "Certified in 5 medical specialties including Interventional Cardiology"
    },
    {
      icon: GraduationCap,
      title: "Medical Education",
      description: "Advanced training from prestigious medical institutions"
    },
    {
      icon: Heart,
      title: "Clinical Experience",
      description: "Over 24 years of dedicated cardiovascular practice"
    },
    {
      icon: Users,
      title: "Patient Care",
      description: "Thousands of patients treated with compassionate care"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Dr. Kiran Kumar Mangalpally, MD | Interventional Cardiologist</title>
        <meta name="description" content="Learn about Dr. Kiran Kumar Mangalpally, MD, board-certified interventional cardiologist with 24+ years of experience serving Frisco and surrounding areas." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-backround py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  About Dr. Kiran Kumar Mangalpally, MD
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  Board-Certified Interventional Cardiologist
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dedicated to providing exceptional cardiovascular care with evidence-based medicine and compassionate patient treatment.
                </p>
              </div>
            </div>
            
            <div className="relative w-full flex justify-center">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 lg:p-4 w-fit">
                <img 
                  src="/lovable-uploads/e11de330-58f7-4de9-93e5-400e2cd99ec9.png" 
                  alt="Dr. Kiran Kumar Mangalpally - Interventional Cardiologist"
                  className="w-full h-96 object-cover rounded-lg object-top mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Background
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Kiran Kumar Mangalpally is a board-certified interventional cardiologist with over 24 years of clinical experience in cardiovascular medicine. He is dedicated to providing comprehensive, evidence-based cardiac care to patients throughout Frisco, Carrollton, Allen, McKinney, and surrounding communities.
                  </p>
                  <p>
                    With expertise in interventional cardiology, Dr. Mangalpally specializes in advanced cardiac procedures including cardiac catheterization, angioplasty, stent placement, and complex coronary interventions. His approach combines cutting-edge medical technology with personalized patient care.
                  </p>
                  <p>
                    Dr. Mangalpally is committed to preventive cardiology and works closely with patients to develop comprehensive treatment plans that address not only immediate cardiac concerns but also long-term cardiovascular health and wellness.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Areas of Expertise
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interventional Cardiology</li>
                  <li>• Cardiac Catheterization</li>
                  <li>• Coronary Angioplasty & Stenting</li>
                  <li>• Heart Failure Management</li>
                  <li>• Hypertension Treatment</li>
                  <li>• Preventive Cardiology</li>
                  <li>• Emergency Cardiac Care</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Achievements & Recognition
              </h2>
              <div className="grid gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
