import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Message sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>

      <div className="max-w-3xl mx-auto bg-white rounded shadow p-8">
        <p className="text-gray-700 mb-6 text-center">
          Have questions or ready to start your fitness journey? Fill out the form below or reach out directly via email or WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition w-full"
          >
            Send Message
          </button>
        </form>

        {/* Optional direct contact */}
        <div className="text-center mt-6">
          <p className="text-gray-700 mb-2">Or contact me directly:</p>
          <p className="text-blue-500 font-semibold">
            Email: dominicksalazar788@yahoo.com
          </p>
          <p className="text-blue-500 font-semibold">
  Contact me via{" "}
  <a
    href="https://wa.me/639957657606"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    WhatsApp
  </a>{" "}
  or call me at{" "}
  <a href="tel:+639957657606" className="underline">
    0995-765-7606
  </a>
</p>

        </div>

      </div>

    </div>
  );
}
