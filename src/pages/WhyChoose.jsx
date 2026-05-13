export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10 ">
        <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 backdrop-blur rounded-xl shadow hover:scale-105 transition">✔ 2+ Years Experience</div>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 backdrop-blur rounded-xl shadow hover:scale-105 transition">✔ Advanced Techniques</div>
        <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 backdrop-blur rounded-xl shadow hover:scale-105 transition">✔ Personalized Care</div>
      </div>
    </section>
  );
}