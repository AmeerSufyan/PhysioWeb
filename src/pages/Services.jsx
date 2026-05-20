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
    title: "Dry Needling",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-4  text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {s.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}