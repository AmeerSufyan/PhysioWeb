import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "./images/physio1.jpg",
    "./images/physio2.jpg",
    "./images/physio3.jpg",
    "./images/physio4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const ready = loadedCount >= images.length;

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden group bg-gradient-to-br from-teal-600 to-cyan-700"
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
            className="h-full flex-shrink-0 relative bg-gradient-to-br from-teal-600 to-cyan-700"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt=""
              fetchpriority={i === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Dr. Munaish Kumar
          </h1>

          <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto">
            Professional Physiotherapy, Rehabilitation & Pain Relief Services
          </p>
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute sm:left-4 top-[58%] -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white active:scale-95 transition-all duration-300"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-1 sm:right-4 top-[58%] -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white active:scale-95 transition-all duration-300"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}