import React from "react";
import before1 from "../assets/cj1.jpg";
import after1 from "../assets/cj2.jpg";
import results from "../assets/roc2.jpg";
import results2 from "../assets/roc1.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Body. Transform Your Life.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join our gym and see real results with our personalized programs.
        </p>
      <a
  href="https://www.facebook.com/dominic.salazar.71/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition">
    Book a Session
  </button>
</a>

      </section>

      {/* BEFORE & AFTER GALLERY */}
<section className="py-16 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-12">Client Transformations</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">

    {/* First Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 w-full sm:w-[700px]">
      <div className="flex h-80">
        <img
          src={before1}
          alt="Before"
          className="w-1/2 h-full object-cover rounded-l-lg"
        />
        <img
          src={after1}
          alt="After"
          className="w-1/2 h-full object-cover rounded-r-lg"
        />
      </div>
      <div className="p-6 text-center">
        <p className="text-gray-700 italic mb-2">"I achieved my fitness goals thanks to the coaching!"</p>
        <p className="font-semibold">– Cj M.</p>
      </div>
    </div>

    {/* Second Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 w-full sm:w-[700px]">
      <div className="flex h-80">
        <img
          src={results2}
          alt="Before"
          className="w-1/2 h-full object-cover rounded-l-lg"
        />
        <img
          src={results}
          alt="After"
          className="w-1/2 h-full object-cover rounded-r-lg"
        />
      </div>
      <div className="p-6 text-center">
        <p className="text-gray-700 italic mb-2">"I achieved my fitness goals thanks to the coaching!"</p>
        <p className="font-semibold">– Rochele L.</p>
      </div>
    </div>

  </div>

  {/* Button to Clients Page */}
 <div className="mt-10 text-center">
  <Link
    to="/client"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded transition"
  >
    See All Clients
  </Link>
</div>

</section>






 {/* SERVICES */}
<section className="py-16 px-6 bg-gray-200">
  <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>

  <div className="flex flex-col md:flex-row gap-8 justify-center">

    <div className="bg-white p-10 rounded shadow text-center w-full md:w-96">
      <h3 className="text-2xl font-semibold mb-4">Online Coaching</h3>
      <p className="text-gray-700">Train anytime, anywhere with personalized online guidance.</p>
    </div>

    <div className="bg-white p-10 rounded shadow text-center w-full md:w-96">
      <h3 className="text-2xl font-semibold mb-4">Nutrition Coaching</h3>
      <p className="text-gray-700">Personalized meal plans to support your fitness journey.</p>
    </div>

  </div>
</section>




      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center bg-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
        <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

    </div>
  );
}
