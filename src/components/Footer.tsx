import { Phone, Mail, MapPin , Printer } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/logo.jpg" 
                alt="Dr. Kiran Kumar Mangalpally Logo"
                className="h-auto w-24 rounded-lg"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing exceptional cardiovascular care with compassion, expertise, and dedication to patient wellness.
            </p>
            <Link to="/testimonials" className="text-blue-600 hover:text-white transition-colors text-sm mt-20">Patient Testimonials</Link>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2">
                <Link to="/electrocardiogram-ekg-ecg" className="block text-gray-400 hover:text-white transition-colors text-sm">Electrocardiogram (EKG/ECG)</Link>
                <Link to="/echocardiogram" className="block text-gray-400 hover:text-white transition-colors text-sm">Echocardiogram</Link>
                <Link to="/cardiac-catheterization" className="block text-gray-400 hover:text-white transition-colors text-sm">Cardiac Catheterization</Link>
                <Link to="/ct-coronary-angiogram" className="block text-gray-400 hover:text-white transition-colors text-sm">CT Coronary Angiogram</Link>
                <Link to="/cardiac-mri" className="block text-gray-400 hover:text-white transition-colors text-sm">Cardiac MRI</Link>
                <Link to="/coronary-calcium-score" className="block text-gray-400 hover:text-white transition-colors text-sm">Coronary Calcium Score</Link>
                <Link to="/holter-monitor-test" className="block text-gray-400 hover:text-white transition-colors text-sm">Holter Monitor Test</Link>
                <Link to="/mobile-cardiac-telemetry" className="block text-gray-400 hover:text-white transition-colors text-sm">Mobile Cardiac Telemetry</Link>
                <Link to="/stress-test" className="block text-gray-400 hover:text-white transition-colors text-sm">Stress Test</Link>
                  {/* <a href="https://portal.kareo.com/pp-webapp/app/new/login" className="block text-gray-400 hover:text-white transition-colors text-sm">Patient Portal</a>
                  <a href="https://checkout.square.site/merchant/MLDHW1SP9YEAH/checkout/VDQBX5MICP6N2A2A7B3Q5OQA" className="block text-gray-400 hover:text-white transition-colors text-sm">Pay your bill</a>
                  <a href="https://practice.kareo.com/pulsecarehv" className="block text-gray-400 hover:text-white transition-colors text-sm">Schedule an appointment</a>
                  <Link to="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
                  <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link> */}
              </div>
            </div>
            
            {/* Common Cardiac Conditions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Common Cardiac Conditions</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/arrhythmia-treatment" className="block text-gray-400 hover:text-white transition-colors">Arrhythmia</Link>
                <Link to="/heart-failure-management" className="block text-gray-400 hover:text-white transition-colors">Heart Failure Management</Link>
                <Link to="/hypertension-treatment" className="block text-gray-400 hover:text-white transition-colors">Hypertension Treatment</Link>
                <Link to="/diagnostic-cardiology" className="block text-gray-400 hover:text-white transition-colors">Diagnostic Cardiology</Link>
                <Link to="/coronary-artery-disease-treatment" className="block text-gray-400 hover:text-white transition-colors">Coronary Artery Disease</Link>
                <Link to="/vascular-disease-treatment" className="block text-gray-400 hover:text-white transition-colors">Vascular Disease Treatment</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <a href="tel:9452224111" className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-400">945-222-4111</span>
                  </div>
                </a>
                <div className="flex items-center space-x-3 text-sm">
                  <Printer className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-400">945-218-5475</span>
                </div>
                <a href="mailto:contact@pulsecarehv.com" className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-400">contact@pulsecarehv.com</span>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <a href="https://www.google.com/maps?sca_esv=ba2fc44af14fa769&sxsrf=AE3TifOoktJL26Kx_xyQOhD_mESMhAg23Q:1749538696578&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJHB1bHNlIGNhcmUgaGVhcnQgYW5kIHZhc2N1bGFyIEZSSVNDTzIFECEYoAEyBRAhGKABMgUQIRifBUjtHlDHAliRHHACeACQAQCYAfQBoAG6DqoBBTAuNC41uAEDyAEA-AEBmAIKoALNDcICBxAjGLADGCfCAgoQABiwAxjWBBhHwgIEECMYJ8ICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiABBiiBMICBBAhGBXCAgcQIRigARgKmAMAiAYBkAYIkgcFMi4yLjagB5wqsgcFMC4yLja4B8UNwgcFMC45LjHIBxY&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kfval61oPUyGMbcqnvM8m_Yo&daddr=5350+Independence+Pkwy+STE+100,+Frisco,+TX+75035,+United+States "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-400 text-wrap">5350 Independence Pkwy, Ste # 100 , Frisco, TX – 75035</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <a href="https://www.google.com/maps/dir//4333+N+Josey+Ln+II+Ste+204,+Carrollton,+TX+75010,+United+States/@33.0539429,-96.8899675,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864c25688659cd59:0x4885eb8726820e50!2m2!1d-96.8863588!2d33.0282838?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-400 text-wrap">4333 N. Josey Ln, Plaza 2, Ste # 204, Carrollton, TX – 75010</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dr. Kiran Kumar Mangalpally, MD. All rights reserved. | Providing exceptional cardiovascular care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
