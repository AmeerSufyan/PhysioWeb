import { ShieldCheck, Cpu, TrendingUp } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-16 flex justify-center px-6">
      
      <div className="grid gap-6   rounded-2xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 ">
          Why Choose Us
        </h2>

        {/* Intro */}
        <p className="text-left md:text-center text-gray-500">
          We deliver professional physiotherapy care focused on recovery, strength, and long-term wellness.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-3  gap-8  ">

          {/* Advanced Physiotherapy */}
          <div className="shadow-lg rounded-2xl p-4 bg-white hover:scale-105 transition">
            <Cpu className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-1 rounded-xl " />
            <div>
              <h3 className="font-semibold text-gray-800">
                Advanced Physiotherapy
              </h3>
              <p className="text-sm text-gray-500">
              We use advanced physiotherapy techniques and evidence-based treatments to ensure effective pain relief, faster healing, and long-term recovery. Our modern approach helps restore movement, reduce discomfort, and improve overall physical performance.
              </p>
            </div>
          </div>

          {/* Qualified Staff */}
          <div className="shadow-lg rounded-2xl p-4 bg-white hover:scale-105 transition">
            <ShieldCheck className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-1 rounded-xl " />
            <div>
              <h3 className="font-semibold text-gray-800">
                Qualified & Skilled Physiotherapists
              </h3>
              <p className="text-sm text-gray-500">
                Our team consists of highly qualified, experienced, and skilled physiotherapists who provide personalized care based on each patient’s condition. We focus on accurate diagnosis, proper treatment planning, and safe rehabilitation for better results.
              </p>
            </div>
          </div>

          {/* Success Rate */}
          <div className="shadow-lg rounded-2xl p-4 bg-white hover:scale-105 transition">
            <TrendingUp className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-1 rounded-xl " />
            <div>
              <h3 className="font-semibold text-gray-800">
                High Success Rate
              </h3>
              <p className="text-sm text-gray-500">
               We are trusted for our high success rate in treating pain, injuries, and mobility issues. Most of our patients experience noticeable improvement in a short time, with long-term recovery and reduced risk of recurrence through proper guided therapy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}