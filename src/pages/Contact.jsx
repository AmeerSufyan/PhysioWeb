import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 text-white bg-gradient-to-br from-teal-500 to-cyan-600">
      {/* Contact Card */}
      <div className="z-10 shadow-sm px-6 py-10 ">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Book Appointment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+923328214183"
            className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-[0_0_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,0,0,0.18)] transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">+92 332 8214183</p>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps?q=Railway+General+Hospital+Dhok+Hassu+Rawalpindi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-[0_0_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,0,0,0.18)] transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-gray-800">
              Railway General Hospital, Dhok Hassu, Rawalpindi
            </p>
          </a>

          {/* Timing */}
          <div className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-[0_0_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,0,0,0.18)] transition-all duration-300">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Timing</p>
            <p className="font-semibold text-gray-800">8:00 am - 5:00 pm</p>

            {/* Highlight Badge */}
            <span className="mt-1 px-3 py-1 text-xs font-semibold bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full shadow-sm">
              Sunday Closed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}