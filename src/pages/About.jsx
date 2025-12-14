import React from "react";
import coach from '../assets/coach3.png'; // Import the image
import certificate from '../assets/certificate.jpg'; // Import the image
import certificate1 from '../assets/cartificate1.jpg'; // Import the image

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16">

      {/* HERO / INTRO */}
<section className="text-center mb-16 px-4">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>

  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
    I’m an online fitness coach certified in fitness training with experience at
    Anytime Fitness. I create personalized, easy-to-follow workout programs
    focused on real, sustainable results—helping people transform their bodies
    and lives anytime, anywhere.
  </p>
</section>
{/* CERTIFICATIONS */}
<section className="mb-16 text-center">
  <h2 className="text-3xl font-bold mb-6">Certifications & Credentials</h2>

  <div className="flex flex-wrap justify-center gap-6">
    <div className="bg-white p-6 rounded-xl shadow w-72">
      <img
        src={certificate}
        alt="Fitness Certification"
        className="w-full h-40 object-contain mb-4"
      />
      <p className="font-semibold">Certified Fitness Trainer</p>
      <p className="text-sm text-gray-600">Anytime Fitness</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow w-72">
      <img
        src={certificate1}
        alt="Online Coaching Certificate"
        className="w-full h-40 object-contain mb-4"
      />
   <p className="font-semibold">Lifestyle-Based Meal Planning</p>
<p className="text-sm text-gray-600">
  Nutrition plans designed for long-term success
</p>

    </div>
  </div>
</section>




      {/* PERSONAL BRAND / EXPERIENCE */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
  <img
  src={coach}
  alt="Coach"
  className="w-72 h-96 object-cover rounded-2xl shadow-xl mx-auto md:mx-0"
/>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Why Online Coaching?</h2>
          <p className="text-gray-700 mb-4">
            Online coaching allows you to train at your own pace, from the comfort of your home. I provide step-by-step guidance, tailored programs, and continuous support to keep you motivated.
          </p>

          <h2 className="text-3xl font-bold mb-4">My Approach</h2>
          <p className="text-gray-700">
            I focus on sustainable results through a combination of workouts, nutrition advice, and habit-building. Every plan is personalized based on your goals and lifestyle.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-700 mb-4">
              "I never thought I could achieve this from home! The coaching was clear, supportive, and effective."
            </p>
            <p className="font-semibold">– Val M.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-700 mb-4">
              "Thanks to the personalized online plan, I finally hit my fitness goals. Highly recommended!"
            </p>
            <p className="font-semibold">– Rochelle L.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-500 text-white py-16 rounded">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
        <p className="mb-6">Join me online and get a personalized coaching plan today.</p>
        <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

    </div>
  );
}
