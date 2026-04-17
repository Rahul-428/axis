"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "First-time Home Buyer",
    image: "👩‍💼",
    text: "PropertyAI helped me navigate the complex market and find my perfect apartment in just 2 weeks. The insights were invaluable!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Property Investor",
    image: "👨‍💼",
    text: "The predictive analytics saved me thousands by identifying undervalued properties before the market caught up.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Real Estate Agent",
    image: "👩‍🔬",
    text: "My clients love the AI insights. It makes consultations more productive and clients feel more confident in their decisions.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-black to-slate-900">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #0ea5e9 0%, transparent 50%), radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join satisfied users who've transformed their real estate journey with PropertyAI
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-3xl">
            {/* Main testimonial */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-2xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-md text-center mb-8"
            >
              <div className="text-6xl mb-6">
                {testimonials[activeIndex].image}
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {Array(testimonials[activeIndex].rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
              </div>
              <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-cyan-400">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex
                      ? "bg-cyan-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: "Users", value: "50K+" },
            { label: "Success Rate", value: "98%" },
            { label: "Avg Satisfaction", value: "4.9/5" },
            { label: "Support Available", value: "24/7" },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -5,
                borderColor: "rgba(34, 211, 238, 0.6)",
              }}
              className="p-6 rounded-lg border border-cyan-500/20 bg-slate-900/50 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
