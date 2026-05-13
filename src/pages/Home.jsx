import { motion } from "framer-motion";

export default function Hero() {
  const image =
    "https://images.unsplash.com/photo-1516549655169-df83a0774514";

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Physiotherapy"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Dr. Munish Kumar
        </h1>

        <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto">
          Professional Physiotherapy, Rehabilitation & Pain Relief Services
        </p>

      
      </motion.div>
    </section>
  );
}