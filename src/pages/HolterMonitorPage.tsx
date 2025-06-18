import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HolterMonitorPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Holter Monitor Test at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/holter-monitor.jpg" 
                alt="Holter Monitor Device"
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
              At Pulse Care Heart and Vascular, we offer the Holter monitor test to help track and evaluate the rhythm and electrical activity of your heart over a continuous period of time. This test can give detailed insights that a standard in-office ECG might miss, especially if symptoms come and go.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is a Holter Monitor?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A Holter monitor is a small, portable device that records your heart's electrical activity for 24 to 48 hours or longer. It continuously monitors and captures your heart rhythm as you go about your normal daily activities. This helps detect irregular heartbeats, episodes of fast or slow heart rate, and any changes in rhythm that might not appear during a short ECG.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why You May Need a Holter Monitor</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">Dr. Kiran Mangalpally may recommend a Holter monitor if you experience:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Irregular heartbeats</li>
              <li>Dizziness or lightheadedness</li>
              <li>Palpitations</li>
              <li>Unexplained fainting spells</li>
              <li>Shortness of breath</li>
              <li>Discomfort in the chest</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              It can also be used to evaluate how well medications or pacemakers are working and to monitor symptoms related to general cardiology conditions, peripheral arterial disease, or other vascular-related issues.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How the Test Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Device Placement</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Small electrodes are attached to your chest, connected by wires to a lightweight recording device. The setup is non-invasive and worn on a belt or shoulder strap.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Wearing the Monitor</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You will wear the monitor continuously, including during sleep. You are encouraged to go about your normal routine while wearing it, but you may be asked to avoid showering or activities that could interfere with the equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tracking Your Symptoms</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You may be asked to keep a log of any symptoms—such as dizziness, skipped beats, or chest pressure—and note the time they occur. This log will be compared to the data recorded by the monitor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Returning the Monitor</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After the monitoring period is over, you will return the device to our clinic. The data is then analyzed by Dr. Mangalpally to determine if there are any concerning patterns or irregularities in your heartbeat.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What the Holter Monitor Can Help Detect</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Atrial fibrillation or flutter</li>
              <li>Bradycardia (slow heart rate)</li>
              <li>Tachycardia (fast heart rate)</li>
              <li>Irregular rhythm due to stress or activity</li>
              <li>Heart pauses or blocks</li>
              <li>Effects of medications on your heart rhythm</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              These results may guide further testing, medication adjustments, or other care decisions tailored to your heart health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Who May Benefit from This Test</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">This test is commonly used for patients with:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Known or suspected heart rhythm conditions</li>
              <li>A history of fainting or unexplained falls</li>
              <li>Symptoms that don't appear during a routine visit</li>
              <li>Vascular complications, such as those related to peripheral artery disease</li>
              <li>Other chronic cardiovascular conditions being monitored by Dr. Mangalpally</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why Choose Pulse Care Heart and Vascular</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team focuses on careful testing, timely results, and individual attention. With a special focus on general and interventional cardiology, peripheral arterial disease, and vascular health, Dr. Mangalpally uses tools like the Holter monitor to better understand how your heart is functioning in real life—not just in the clinic.
            </p>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule an Evaluation</h2>
            <p className="text-lg mb-6 leading-relaxed text-center">
              If you've been experiencing symptoms or have been referred for heart rhythm testing, our team is here to help. Contact Pulse Care Heart and Vascular to learn more about the Holter monitor test or to schedule an appointment.
            </p>
            <div className="space-y-4 text-center">
              <p className="text-lg">📞 Call us at: 945-222-4111</p>
              <p className="text-lg">✉️ Email: contact@pulsecarehv.com</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Frisco Location:</h3>
                <p className="text-lg">5350 Independence Pkwy, Ste #100</p>
                <p className="text-lg">Frisco, TX 75035</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Carrollton Location:</h3>
                <p className="text-lg">4333 N. Josey Ln, Plaza 2, Ste #204</p>
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

export default HolterMonitorPage; 