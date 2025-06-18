import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Dr. Kiran Kumar Mangalpally, MD | Schedule Appointment</title>
        <meta name="description" content="Contact Dr. Kiran Kumar Mangalpally, MD for cardiovascular consultation. Located in Frisco, serving Carrollton, Allen, McKinney and surrounding areas." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className=" bg-gradient-to-b from-blue-50 via-white to-backround py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Contact Dr. Kiran Kumar Mangalpally, MD
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  Schedule Your Cardiovascular Consultation
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to take control of your heart health? Contact our office to schedule an appointment with Dr. Mangalpally.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="/lovable-uploads/e11de330-58f7-4de9-93e5-400e2cd99ec9.png" 
                  alt="Dr. Kiran Kumar Mangalpally - Interventional Cardiologist"
                  className="w-full h-[400px] object-cover rounded-xl object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <a href="tel:9452224111" className="flex items-start space-x-4 hover:opacity-80 transition-opacity">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">Call us to schedule your appointment</p>
                        <p className="text-blue-600 font-medium">945-222-4111</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Printer className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fax</h3>
                      <p className="text-gray-600">For faxing</p>
                      <p className="text-blue-600 font-medium">945-218-5475</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <a href="mailto:contact@pulsecarehv.com" className="flex items-start space-x-4 hover:opacity-80 transition-opacity">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">Send us a message</p>
                        <p className="text-blue-600 font-medium">contact@pulsecarehv.com</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Frisco</h3>
                      <p className="text-gray-600">Pulse Care Heart and Vascular</p>
                      <p className="text-gray-600">5350 Independence Pkwy STE 100<br />Frisco, TX 75035</p>
                      <h3 className="text-lg font-semibold text-gray-900 my-2">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday : 1:00 P.M. - 5:00 P.M.</p>
                        <p>THURSDAY: 1:00 P.M – 5:00 P.M</p>
                        <p>Office Hours- The office is closed on Saturday and Sunday</p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <div className="mt-8">
                          <div className="relative">
                            <a 
                              href="https://www.google.com/maps/place/5350+Independence+Pkwy+STE+100,+Frisco,+TX+75035,+USA/@33.1218295,-96.7517499,17z/data=!3m1!4b1!4m6!3m5!1s0x864c3d1542866439:0x60b1c0a66145df02!8m2!3d33.1218295!4d-96.7500183!16s%2Fg%2F11n7_ym9sh?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                              <img 
                                src="/lovable-uploads/Map.png"
                                alt="Map to Pulse Care Heart and Vascular - 5350 Independence Pkwy STE 100, Frisco, TX 75035"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Click+to+View+Map";
                                }}
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                <span className="opacity-0 hover:opacity-100 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow-lg transition-opacity duration-300">
                                  View on Google Maps
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* --- New Location Section (Please update details below) --- */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Carrollton</h3>
                      <p className="text-gray-600">Pulse Care Heart and Vascular</p>
                      <p className="text-gray-600">4333 N. Josey Ln, Plaza 2, Ste # 204</p>
                      <p className="text-gray-600">Carrollton, TX 75010</p>
                      <h3 className="text-lg font-semibold text-gray-900 my-2">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>TUESDAY: 8:00 A.M – 12:00 P.M</p>
                        <p>WEDNESDAY: 1:00 P.M – 5:00 P.M</p>
                        <p>Office Hours- The office is closed on Saturday and Sunday</p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <div className="mt-8">
                          <div className="relative">
                            <a 
                              href="https://www.google.com/maps/place/4333+N+Josey+Ln+2,+Suite+204,+Carrollton,+TX+75010,+USA/@33.0280451,-96.8885311,17.43z/data=!3m1!5s0x864c2506f2d1a025:0xd5771e36b4e10bfa!4m6!3m5!1s0x864c25065ddfc191:0xe960700531ac7d86!8m2!3d33.0281266!4d-96.8863791!16s%2Fg%2F11tcbxjwt6?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                              <img 
                                src="/lovable-uploads/map-2.png" 
                                alt="Map to New Office Location (Update Alt Text)"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Click+to+View+Map";
                                }}
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                <span className="opacity-0 hover:opacity-100 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow-lg transition-opacity duration-300">
                                  View on Google Maps
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --- End of New Location Section --- */}

                  
                </div>
                
                
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Areas We Serve
              </h2>
              <p className="text-gray-600 mb-6">
                Dr. Kiran Kumar Mangalpally provides cardiovascular care to patients throughout the Dallas-Fort Worth metroplex, including:
              </p>
              <div className="grid grid-cols-3 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>• Addison</li>
                  <li>• Allen</li>
                  <li>• Bartonville</li>
                  <li>• Carrollton</li>
                  <li>• Coppell</li>
                  <li>• Copper Canyon</li>
                  <li>• Corinth</li>
                  <li>• Dallas</li>
                  <li>• Double Oak</li>
                  <li>• Farmers Branch</li>
                  <li>• Flower Mound</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Frisco</li>
                  <li>• Grapevine</li>
                  <li>• Hackberry</li>
                  <li>• Hebron</li>
                  <li>• Hickory Creek</li>
                  <li>• Highland Park</li>
                  <li>• Highland Village</li>
                  <li>• Irving</li>
                  <li>• Krugerville</li>
                  <li>• Lake Dallas</li>
                  <li>• Lewisville</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Little Elm</li>
                  <li>• Lucas</li>
                  <li>• McKinney</li>
                  <li>• Plano</li>
                  <li>• Prosper</li>
                  <li>• Richardson</li>
                  <li>• Roanoke</li>
                  <li>• Sachse</li>
                  <li>• The Colony</li>
                  <li>• University Park</li>
                  <li>• Wylie</li>
                </ul>
              </div>
              
              {/* <div className="mt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                  Schedule Appointment
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
