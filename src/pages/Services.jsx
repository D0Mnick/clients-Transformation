import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-10">My Coaching Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Personalized Online Training */}
        <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/services/personal-training" className="hover:text-blue-500 transition">
              Personalized Online Training
            </Link>
          </h3>
          <p>Tailored workout plans you can do anywhere, designed for your goals and fitness level.</p>
        </div>

        {/* Online Coaching */}
        <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/services/online-coaching" className="hover:text-blue-500 transition">
              Online Coaching
            </Link>
          </h3>
<p>Step-by-step guidance and a personalized workout plan sent to you to help achieve your fitness goals.</p>


        </div>

        {/* Nutrition Guidance */}
        <div className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/services/nutrition-guidance" className="hover:text-blue-500 transition">
              Nutrition Guidance
            </Link>
          </h3>
          <p>Custom meal plans and nutrition tips to complement your training and maximize results.</p>
        </div>

      </div>

    </div>
  );
}
