
import React from "react";

function Certifications() {
  const certifications = [
    {
      title: "TCS Career Edge",
      issuer: "TCS iON",
      image: "/tcs ion.jpeg",
    },
    {
      title: "MERN Stack Development",
      issuer: "Arudan Technologies",
      image: "/arudan technologies.jpeg",
    },
  ];

  return (
    <section id="certifications" name="Certifications" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {certifications.map((certificate, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">
              {certificate.title}
            </h3>

            <p className="text-gray-600 mb-6">
              Issued by: {certificate.issuer}
            </p>

            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="w-full max-w-md mx-auto h-64 object-contain rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;