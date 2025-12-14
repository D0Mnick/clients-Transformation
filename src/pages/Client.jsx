import React from "react";
import clientsData from "../data/clientsData";

export default function Clients() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Client Transformations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clientsData.map((client, index) => (
          <div key={index} className="bg-white rounded shadow overflow-hidden">
            
            {/* Before & After Images */}
          <div className="grid grid-cols-2">
  <img
    src={client.before}
    className="w-full h-72 md:h-80 object-cover"
  />
  <img
    src={client.after}
    className="w-full h-72 md:h-80 object-cover"
  />
</div>


            {/* Testimonial */}
            <div className="p-6 text-center">
              <p className="text-gray-700 mb-2">
                &quot;{client.testimonial}&quot;
              </p>
              <p className="font-semibold mt-2">– {client.name}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
