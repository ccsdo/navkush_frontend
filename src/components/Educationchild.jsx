import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    left: "40% less likely to fall into poverty",
    right: "50% more likely to complete higher education",
  },
  {
    left: "Reduces chances of child labor by 30%",
    right: "Twice as likely to secure stable employment",
  },
  {
    left: "Improves health and nutrition outcomes",
    right: "Increases future family income by up to 25%",
  },
  {
    left: "Builds stronger and fairer communities",
    right: "Breaks the cycle of illiteracy for the next generation",
  },
];

const Educationchild = () => {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/image/child-education.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Heading Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#11616f] mb-10 drop-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Educating a Child Creates a Brighter Future for All
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-4">
          {stats.map((pair, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-lg md:text-xl font-semibold text-[#11616f] bg-white/60 px-4 py-2 rounded-full shadow-sm">
                  {pair.left}
                </span>
              </motion.div>

              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 + 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-lg md:text-xl font-semibold text-[#ff6d4d] bg-white/60 px-4 py-2 rounded-full shadow-sm">
                  {pair.right}
                </span>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educationchild;
