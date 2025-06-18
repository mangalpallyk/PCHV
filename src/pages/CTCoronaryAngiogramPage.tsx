import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CTCoronaryAngiogramPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">CT Coronary Angiogram at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/ct-coronary-angiogram.jpg" 
                alt="CT Coronary Angiogram Procedure"
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
              At Pulse Care Heart and Vascular, we offer the CT Coronary Angiogram (CTCA) to help identify early signs of coronary artery disease and other heart-related conditions. This non-invasive test allows us to view detailed images of the heart and its blood vessels to detect blockages, narrowing, or other concerns that may affect blood flow.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is a CT Coronary Angiogram?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A CT Coronary Angiogram is a specialized imaging test that uses a computed tomography (CT) scanner along with contrast dye to take clear pictures of the coronary arteries—the blood vessels that supply the heart muscle. Unlike traditional catheter-based angiography, CTCA does not require inserting a catheter into the blood vessels.
            </p>
            <p className="text-lg text-gray-700 mb-3 font-medium">This test is used to:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Check for blockages or narrowing in the coronary arteries</li>
              <li>Investigate chest pain or discomfort</li>
              <li>Evaluate symptoms that may be related to heart disease</li>
              <li>Measure calcium buildup in the coronary arteries</li>
              <li>Assess overall coronary artery health in people at risk for heart problems</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">When Is CT Coronary Angiography Recommended?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">A CT Coronary Angiogram may be recommended if:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You have chest pain, tightness, or pressure</li>
              <li>You've had abnormal results from a stress test or echocardiogram</li>
              <li>Your risk of heart disease is moderate or uncertain</li>
              <li>You have a family history of coronary artery disease</li>
              <li>You are living with peripheral arterial disease (PAD) or varicose veins, and your doctor needs to evaluate your coronary circulation</li>
              <li>You are experiencing unexplained symptoms such as shortness of breath or fatigue</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This test helps in early detection and can support decisions about further testing or treatment.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How the Test Works</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, the CT Coronary Angiogram is performed in a step-by-step process:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Preparation: You may be asked to avoid caffeine and certain medications before the test. A beta blocker may be given to slow your heart rate to improve image clarity.</li>
              <li>Contrast Injection: A contrast dye is injected into a vein in your arm. This highlights the coronary arteries during the scan.</li>
              <li>CT Scan: You lie still in the CT scanner. The scan takes detailed cross-sectional images of your heart and blood vessels.</li>
              <li>Image Review: Dr. Mangalpally reviews the images to look for blockages, plaque buildup, or narrowing of the arteries.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              The entire test usually takes less than 30 minutes, and you can return home the same day.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">CT Coronary Angiogram and Vascular Conditions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People with peripheral arterial disease (PAD) or varicose veins may also be at risk for coronary artery problems. A CT Coronary Angiogram can be part of a broader vascular assessment. While PAD affects blood flow in the limbs, it may occur alongside coronary artery disease. Understanding the condition of the heart's arteries helps provide a complete view of cardiovascular health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of CT Coronary Angiogram at Pulse Care Heart and Vascular</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Non-invasive imaging with detailed results</li>
              <li>Expert interpretation by Dr. Kiran Mangalpally</li>
              <li>Quick procedure with same-day results</li>
              <li>Integration with other cardiac and vascular care</li>
              <li>Early detection of potential heart problems</li>
              <li>Comprehensive evaluation of coronary arteries</li>
            </ul>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule Your CT Coronary Angiogram Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              If you've been recommended for a CT Coronary Angiogram or are concerned about your heart health, contact Pulse Care Heart and Vascular to schedule your consultation.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Early detection and prevention are key to maintaining heart health. Let our experienced team help you take this important step in understanding your cardiovascular health.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CTCoronaryAngiogramPage; 