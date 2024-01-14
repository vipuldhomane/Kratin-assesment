// HealthTips.js

import React from "react";
import healthTipImage from "../assets/healthy-tips.jpg";

const HealthTips = () => {
  const healthTips = [
    "Eat a balanced diet with plenty of fruits and vegetables.",
    "Stay hydrated by drinking at least 8 glasses of water a day.",
    "Engage in regular physical activity to keep your body active and healthy.",
    "Ensure you get enough quality sleep each night for overall well-being.",
    "Practice mindfulness and relaxation techniques to reduce stress.",
    "Connect with loved ones regularly for emotional support.",
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Health Tips and Resources
      </h1>
      <div className="mb-4">
        <img
          src={healthTipImage}
          alt="Health Tips"
          className="w-full h-[300px] object-cover rounded-md"
        />
      </div>
      <ul className="list-disc pl-4">
        {healthTips.map((tip, index) => (
          <li key={index} className="text-sm text-gray-700">
            {tip}
          </li>
        ))}
      </ul>
      {/* <div className="mt-6">
        <p className="text-sm text-gray-700">
          For more information, check out these resources:
        </p>
        <a
          href="#"
          className="text-indigo-600 hover:underline focus:outline-none focus:ring focus:border-blue-300"
        >
          - National Institute on Aging
        </a>
        <br />
        <a
          href="#"
          className="text-indigo-600 hover:underline focus:outline-none focus:ring focus:border-blue-300"
        >
          - Centers for Disease Control and Prevention
        </a>
      </div> */}
    </div>
  );
};

export default HealthTips;
