import { Award, Activity, Heart } from "lucide-react";

const features = [
  {
    title: "2+ Years Experience",
    icon: <Award className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Advanced Techniques",
    icon: <Activity className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Personalized Care",
    icon: <Heart className="w-8 h-8 text-red-500" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24  text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4
                       hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {f.icon}
            <h3 className="text-lg font-semibold text-gray-700">
              {f.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}