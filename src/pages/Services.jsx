import { useState, useEffect } from "react";

const services = [
  {
    title: "Back Pain Treatment",
    img: "./images/back-pain.jpg",
  },
  {
    title: "Sports Injury Rehab",
    img: "./images/sports-injury.jpg",
  },
  {
    title: "Post Surgery Rehab",
    img: "./images/post-surgery.jpg",
  },
  {
    title: "Neurological Therapy",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    title: "Manual Therapy",
    img: "./images/manual-therapy.jpg",
  },
  {
    title: "Neuro Rehabilitation",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  },

  // Add more services here
  {
    title: "Ortho Rehabilitation",
    img: "./images/neck-pain.jpg",
  },
  {
    title: "Cardio Pulmonery Rehabilitation",
    img: "./images/joint.jpg",
  },
  {
    title: "Peadiatric Rehabilitation",
    img: "./images/posture.jpg",
  },
   {
    title: "Amputation Rehabilitation",
    img: "./images/posture.jpg",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  // Preload all service images quietly in the background
  useEffect(() => {
    services.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });
  }, []);

  const displayedServices = showAll
    ? services
    : services.slice(0, 6);

  return (
    <section id="services" className="text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-6">
        {displayedServices.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden  transition duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {s.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {services.length > 6 && (
        <div className="mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-gray-400 rounded-lg transition  bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>
      )}
    </section>
  );
}