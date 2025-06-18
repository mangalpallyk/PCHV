import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeartMRIPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Cardiac MRI at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/heart-mri.jpg" 
                alt="Cardiac MRI Procedure"
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
              At Pulse Care Heart and Vascular, we provide Cardiac MRI testing as part of our diagnostic and treatment approach for individuals with heart-related conditions. This imaging test uses magnetic resonance technology to create clear and detailed pictures of the heart and surrounding blood vessels. It helps us evaluate the structure and function of the heart and detect a wide range of cardiovascular conditions.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is a Cardiac MRI?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A Cardiac MRI, also called Cardiac MRI, is a non-invasive imaging test that uses radio waves and a magnetic field to create images of the heart. Unlike X-rays or CT scans, a Cardiac MRI does not use radiation. It provides detailed images of the heart muscle, chambers, valves, and major blood vessels.
            </p>
            <p className="text-lg text-gray-700 mb-3 font-medium">This test is used to assess:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Heart size and shape</li>
              <li>Blood flow through the heart and major vessels</li>
              <li>Heart muscle damage from heart attacks</li>
              <li>Heart valve function</li>
              <li>Congenital heart conditions</li>
              <li>Scarring or inflammation of heart tissue</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              It is also used to monitor heart conditions over time and evaluate the results of treatments or procedures.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">When Is a Cardiac MRI Recommended?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">A Cardiac MRI may be recommended if:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You have symptoms such as chest discomfort, shortness of breath, or unexplained fatigue</li>
              <li>You have known or suspected coronary artery disease or heart failure</li>
              <li>You have had a heart attack and need further evaluation</li>
              <li>Other tests, such as echocardiograms or stress tests, have shown unclear results</li>
              <li>You have structural heart issues or congenital heart disease</li>
              <li>You are living with peripheral arterial disease (PAD) or varicose veins, and your cardiologist needs a comprehensive assessment of your heart and blood flow</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cardiac MRI is often used in combination with other tests to form a complete picture of your cardiovascular health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How the Cardiac MRI Test Works</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, the Cardiac MRI procedure is performed in a step-by-step process:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Preparation: You will be asked about any metal implants or devices, as MRI uses a strong magnet. In some cases, a contrast agent may be used to improve the quality of the images.</li>
              <li>Positioning: You will lie on a table that slides into the MRI machine.</li>
              <li>Imaging Process: The machine takes images of your heart while you lie still. The test can take from 30 minutes to over an hour, depending on the type of images needed.</li>
              <li>Monitoring: A technician monitors you throughout the test. In some cases, your heart rate or breathing may be tracked during the scan.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              After the scan, Dr. Mangalpally reviews the images to understand the structure and function of your heart and guides any further steps based on the findings.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why Cardiac MRI Is Important</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Cardiac MRI provides detailed information that is not always available through other imaging tests. It is especially useful for identifying:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Damage caused by a heart attack</li>
              <li>Muscle thickening or thinning</li>
              <li>Fluid around the heart</li>
              <li>Heart tumors or masses</li>
              <li>Blood flow problems related to peripheral arterial disease or other vascular issues</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This makes it a valuable tool for creating a personalized treatment plan for both heart and vascular health.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Role in Peripheral Arterial Disease and Varicose Veins Care</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For patients with PAD or varicose veins, the Cardiac MRI can help determine if these vascular issues are linked to larger circulation or heart problems. Conditions like PAD often occur alongside heart disease, so imaging the heart can reveal how well blood is moving throughout the body and whether additional treatment or monitoring is needed.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Happens After the Test?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">Once your Cardiac MRI is complete, Dr. Mangalpally will explain the results and walk you through any next steps. This may include:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Adjusting medications</li>
              <li>Recommending lifestyle changes</li>
              <li>Suggesting further diagnostic testing</li>
              <li>Referring for interventional procedures if needed</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every care plan is developed with your long-term health in mind, using accurate information from your Cardiac MRI.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Cardiac MRI at Pulse Care Heart and Vascular</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, we focus on providing high-quality imaging and detailed assessments to support early diagnosis and effective treatment. The Cardiac MRI test is one of the tools we use to better understand heart conditions and vascular disease.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Kiran Mangalpally brings experience in general and interventional cardiology, and works closely with each patient to ensure that decisions are based on accurate and current information. Whether you're managing a heart condition or living with PAD or varicose veins, a Cardiac MRI may be an important part of your care.
            </p>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule Your Cardiac MRI Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              If you are experiencing symptoms that may be linked to heart disease or vascular conditions, or if you have been advised to get more detailed imaging of your heart, contact Pulse Care Heart and Vascular to schedule a consultation.
            </p>
            <p className="text-lg leading-relaxed text-center">
              A Cardiac MRI may help uncover important information that supports your care plan.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeartMRIPage; 