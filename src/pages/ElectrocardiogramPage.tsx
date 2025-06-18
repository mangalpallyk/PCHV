import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ElectrocardiogramPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          
          
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Electrocardiogram (EKG/ECG) Test at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/electrocardiogram.jpg" 
                alt="Electrocardiogram Test Procedure"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 pt-0  min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              If you're searching for a reliable EKG test near you, Pulse Care Heart and Vascular offers in-clinic electrocardiogram testing to evaluate and monitor heart health. Led by Dr. Kiran Mangalpally, our clinic provides cardiology services that include diagnosing heart rhythm irregularities, detecting past heart attacks, and monitoring overall cardiac function.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is an Electrocardiogram (EKG or ECG)?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              An electrocardiogram, also known as an ECG or EKG test, is a painless, non-invasive diagnostic test that records the electrical activity of the heart. It is one of the most commonly used tests in cardiology clinics to assess heart rhythm and detect abnormalities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Pulse Care Heart and Vascular, the EKG is performed in our clinic under the supervision of Dr. Kiran Mangalpally, who specializes in general cardiology and interventional cardiology. This test plays a vital role in early detection of heart conditions and in guiding the next steps for treatment.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">When Is an EKG Test Recommended?</h2>
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                <p className="text-lg text-gray-700 mb-3 font-medium">An EKG test may be recommended if you are experiencing:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
                  <li>Chest pain or tightness</li>
                  <li>Irregular heartbeat or skipped beats</li>
                  <li>Shortness of breath</li>
                  <li>Light-headedness or fainting episodes</li>
                  <li>Rapid heartbeats or palpitations</li>
                  <li>Fatigue without known cause</li>
                  <li>History of heart disease or high blood pressure</li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-3 font-medium">It is also used for:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 pl-4 space-y-2">
                  <li>Pre-surgical heart evaluations</li>
                  <li>Monitoring side effects of heart medications</li>
                  <li>Screening for coronary artery disease</li>
                  <li>Checking for signs of a previous heart attack</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">EKG Testing at Our Heart Clinic: What to Expect</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">If you book an EKG appointment at our clinic, here's what you can expect:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You'll lie on an examination table while electrodes (small adhesive patches) are placed on your chest, arms, and legs</li>
              <li>These electrodes connect to the EKG machine, which records your heart's electrical signals</li>
              <li>The test usually takes around 10 minutes</li>
              <li>There is no discomfort or recovery time needed after the test</li>
              <li>The results are analyzed by Dr. Kiran Mangalpally, who considers your medical history and symptoms to interpret the data and recommend next steps if needed</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How an EKG Supports Your Heart Health Plan</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">The electrocardiogram test helps diagnose a wide range of cardiovascular conditions, including:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Arrhythmia (abnormal heart rhythms)</li>
              <li>Atrial fibrillation</li>
              <li>Bradycardia or tachycardia</li>
              <li>Signs of blocked arteries</li>
              <li>Past heart attacks (silent or known)</li>
              <li>Changes in heart structure</li>
              <li>Electrolyte imbalances affecting the heart</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Pulse Care Heart and Vascular, this test is often the first step in your heart health evaluation and guides whether additional testing—like a stress test, echocardiogram, or cardiac catheterization—is required.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">EKG Test for Patients with PAD and Varicose Veins</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Although peripheral arterial disease and varicose veins are primarily circulation issues in the limbs, they may be linked with broader cardiovascular risks. An EKG test can help rule out or detect underlying heart issues in patients being treated for PAD or varicose veins at our clinic. This helps us offer a full, integrated approach to vascular and cardiac health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of Getting an EKG at Pulse Care Heart and Vascular</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>EKGs are conducted on-site with minimal wait time</li>
              <li>Supervised by Dr. Kiran Mangalpally, a board-certified cardiologist</li>
              <li>Diagnostic insights tailored to your overall heart and vascular health</li>
              <li>Convenient scheduling for EKGs and follow-up consultations</li>
              <li>Integration with care for PAD and varicose veins</li>
            </ul>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule Your EKG Test Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              Whether you're experiencing symptoms or have been referred by your primary care doctor, Pulse Care Heart and Vascular offers quick, accurate EKG testing with expert review by Dr. Kiran Mangalpally.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Contact us today to schedule your electrocardiogram test and take an important step in monitoring your heart health.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ElectrocardiogramPage; 