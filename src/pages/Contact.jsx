import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24  relative flex justify-center"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 "></div>

      {/* Contact Card */}
      <div className="relative z-10 bg-blue-50 shadow-2xl rounded-2xl p-10 w-full max-w-6xl -mt-24">

        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Book Appointment
        </h2>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-green-100 p-4 rounded-full">
              <Phone className="text-green-600 w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">+923328214183</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-blue-100 p-4 rounded-full">
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-gray-800">
              Railway General Hospital, Dhok Hassu, Rawalpindi
            </p>
          </div>

          {/* Timing */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Clock className="text-yellow-600 w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">Timing</p>
            <p className="font-semibold text-gray-800">
              10:00 am - 4:00 pm
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}