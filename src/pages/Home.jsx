import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "./images/physio1.jpg",
    "./images/physio2.jpg",
    "./images/physio3.jpg",
    "./images/physio4.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="h-full flex-shrink-0 relative"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Dr. Munaish Kumar
          </h1>

          <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto">
            Professional Physiotherapy, Rehabilitation & Pain Relief Services
          </p>
        </div>
      </div>
    </section>
  );
}