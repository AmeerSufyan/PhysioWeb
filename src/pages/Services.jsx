const services = [
  "Back Pain Treatment",
  "Sports Injury Rehab",
  "Post Surgery Rehab",
  "Neurological Therapy",
  "Manual Therapy",
  "Dry Needling",
];

export default function Services() {
  return (
    <section id="services" className="py-20 text-center shadow">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 backdrop-blur rounded-xl shadow hover:scale-105 transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}