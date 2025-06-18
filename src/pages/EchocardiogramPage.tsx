import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EchocardiogramPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Echocardiogram Test at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/echocardiogram.jpg" 
                alt="Echocardiogram Test Procedure"
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
              At Pulse Care Heart and Vascular, we offer echocardiogram testing to help diagnose and monitor heart conditions. Under the care of Dr. Kiran Mangalpally, a board-certified cardiologist in general and interventional cardiology, patients receive an in-depth look at how their heart is functioning through this important diagnostic test.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is an Echocardiogram?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              An echocardiogram is a non-invasive heart ultrasound test that uses sound waves to create real-time images of the heart. It shows how blood moves through the chambers and valves of the heart and helps evaluate heart structure and function.
            </p>
            <p className="text-lg text-gray-700 mb-3 font-medium">The test allows us to:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Measure how well the heart is pumping</li>
              <li>Assess valve movement and condition</li>
              <li>Detect fluid around the heart</li>
              <li>Evaluate heart wall motion</li>
              <li>Identify heart muscle damage</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This test is commonly used at cardiology clinics to examine patients who have symptoms of heart disease, abnormal test results, or chronic conditions such as high blood pressure or vascular issues.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">When Is an Echocardiogram Needed?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">An echocardiogram test may be recommended if you:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Have been experiencing shortness of breath</li>
              <li>Report chest discomfort</li>
              <li>Feel light-headed or have fainting episodes</li>
              <li>Have an irregular heartbeat</li>
              <li>Are being treated for high blood pressure</li>
              <li>Have had a heart attack or are at risk for one</li>
              <li>Are living with peripheral arterial disease (PAD)</li>
              <li>Are receiving care for varicose veins and have related circulatory concerns</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              The echocardiogram is a valuable tool to track heart function over time, monitor existing heart disease, or provide information for treatment decisions in interventional cardiology.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What to Expect During the Test</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, an echocardiogram is performed in the clinic. Here is what usually happens during the test:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You will lie on your left side on an exam table.</li>
              <li>A technician will apply gel to your chest and move a small device (transducer) across specific areas.</li>
              <li>The device sends sound waves into your body, which bounce off the heart and create images on a monitor.</li>
              <li>The test typically takes 30 to 60 minutes.</li>
              <li>Dr. Mangalpally will review the images and explain the results.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              There is no downtime or recovery period after the test.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Types of Echocardiograms We Offer</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At our clinic, the following echocardiogram tests may be used depending on your condition:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Transthoracic echocardiogram (TTE): The standard approach using an external probe on the chest</li>
              <li>Doppler echocardiogram: Measures blood flow and pressure through the heart valves</li>
              <li>Stress echocardiogram: Performed during or after physical exertion to evaluate how the heart performs under stress</li>
              <li>Follow-up echocardiograms: To monitor heart function in patients with chronic conditions such as PAD, valve disease, or heart failure</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Echocardiogram in the Context of PAD and Varicose Veins</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While peripheral arterial disease and varicose veins affect blood vessels in the limbs, they may signal broader circulatory system issues. Patients with PAD or chronic venous insufficiency often undergo an echocardiogram to check for heart-related causes of leg swelling, fatigue, or poor blood flow. This helps create a complete picture of both heart and vascular health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of Getting an Echocardiogram at Pulse Care Heart and Vascular</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>In-clinic echocardiogram testing available without referral delays</li>
              <li>Expert review and diagnosis by Dr. Kiran Mangalpally</li>
              <li>Integration of results with treatment plans for cardiology, PAD, and venous care</li>
              <li>Continuity of care in one location</li>
              <li>Direct answers to patient concerns and clear explanation of results</li>
            </ul>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule Your Echocardiogram Test Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              If you're experiencing heart-related symptoms or managing conditions such as high blood pressure, irregular heartbeat, PAD, or varicose veins, an echocardiogram can offer valuable insights. Early testing can help prevent complications and guide the right treatment.
            </p>
            <p className="text-lg leading-relaxed text-center">
              To book your echocardiogram appointment, contact Pulse Care Heart and Vascular today. We accept referrals and walk-in evaluations for patients in need of cardiac imaging or vascular-related testing.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EchocardiogramPage; 