import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileCardiacTelemetryPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Mobile Cardiac Telemetry (MCT) at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/mct-device.jpg" 
                alt="Mobile Cardiac Telemetry Device"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 pt-0 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Mobile Cardiac Telemetry, also known as MCT, is one of the advanced tools used at Pulse Care Heart and Vascular to monitor irregular heart rhythms in real-time. This test helps evaluate how your heart functions outside of the clinical setting, over several days, while you go about your normal daily routine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              MCT is a form of extended ECG monitoring that records and transmits heart rhythm data continuously, allowing healthcare providers to observe heart activity during symptoms or at rest. This monitoring helps identify rhythm disturbances that may not occur during shorter tests.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is MCT Used For?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">Mobile Cardiac Telemetry is typically used when:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>A patient reports symptoms like fainting, palpitations, or dizziness</li>
              <li>An irregular heart rhythm is suspected</li>
              <li>Prior tests like in-office ECG or 24-hour Holter monitor did not capture symptoms</li>
              <li>Monitoring is needed for patients with a history of atrial fibrillation, bradycardia, tachycardia, or pause events</li>
              <li>Evaluation is required for those at risk of cardiovascular complications linked to peripheral arterial disease or vascular health concerns</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Kiran Mangalpally may recommend MCT when continuous and remote heart rhythm data is necessary to make accurate decisions about treatment or further tests.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How MCT Monitoring Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Device Setup</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The MCT device is small and wearable. Electrodes are placed on your chest, and the device is worn for up to 30 days depending on your doctor's instructions. It records your heart's electrical activity and sends it securely to a monitoring center.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Continuous Monitoring</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike standard monitors, MCT provides automatic, real-time transmission of abnormal rhythm events as they occur. These readings are reviewed by clinical technicians and reported to your cardiologist.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Symptom Tracking</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you feel symptoms like fluttering, skipped beats, or faintness, you can press a button on the device to mark the event. You may also be asked to keep a diary to note activities and symptoms to help match the data with what you were experiencing at that time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Report Generation</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After the monitoring period ends, Dr. Mangalpally will review a full report of your heart rhythm patterns. This helps him identify issues that require care or ongoing monitoring.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Can MCT Detect?</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Atrial fibrillation or flutter</li>
              <li>Supraventricular tachycardia (SVT)</li>
              <li>Ventricular tachycardia</li>
              <li>Bradycardia (slow heart rate)</li>
              <li>Irregular heart rhythm changes linked to vascular disease</li>
              <li>Pause events that may explain fainting or dizziness</li>
              <li>Effects of medications on heart rhythm</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              MCT is particularly useful for detecting infrequent or brief rhythm issues that standard in-clinic tests might miss.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why Choose Pulse Care Heart and Vascular for MCT Monitoring</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dr. Kiran Mangalpally and the team at Pulse Care Heart and Vascular bring focused attention to heart rhythm disorders. With a strong background in general cardiology, interventional care, and vascular-related conditions such as peripheral arterial disease and varicose veins, the clinic uses mobile cardiac telemetry to improve early diagnosis and personalized care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your data is handled securely and reviewed thoroughly, ensuring that all relevant rhythm findings are considered in your ongoing treatment plan.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Preparing for Your MCT Test</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You will receive detailed instructions on how to wear and manage the device</li>
              <li>You'll be encouraged to continue regular daily activities unless advised otherwise</li>
              <li>Avoid getting the device wet unless it's a waterproof model</li>
              <li>Note any symptoms, including time and activity, during episodes</li>
            </ul>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule an Appointment</h2>
            <p className="text-lg mb-6 leading-relaxed text-center">
              If you're experiencing symptoms like an irregular heartbeat, unexplained dizziness, or have been referred for cardiac rhythm testing, we can help. Contact us to learn more about Mobile Cardiac Telemetry or to schedule your visit.
            </p>
            <div className="space-y-4 text-center">
              <p className="text-lg">📞 Phone: 945-222-4111</p>
              <p className="text-lg">✉️ Email: contact@pulsecarehv.com</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Frisco Clinic</h3>
                <p className="text-lg">5350 Independence Pkwy, Suite #100</p>
                <p className="text-lg">Frisco, TX 75035</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Carrollton Clinic</h3>
                <p className="text-lg">4333 N. Josey Ln, Plaza 2, Suite #204</p>
                <p className="text-lg">Carrollton, TX 75010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileCardiacTelemetryPage; 