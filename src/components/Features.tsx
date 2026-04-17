"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🔍",
    title: "Market Intelligence",
    description: "AI-powered analysis of your local real estate market with real-time price trends and predictions.",
  },
  {
    icon: "🏠",
    title: "Property Matching",
    description: "Smart algorithms that find properties matching your criteria and preferences perfectly.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Comprehensive visualizations of market data, neighborhoods, and investment opportunities.",
  },
  {
    icon: "💰",
    title: "Price Prediction",
    description: "Advanced ML models predict property values and market trends with high accuracy.",
  },
  {
    icon: "📍",
    title: "Neighborhood Insights",
    description: "Discover schools, amenities, crime rates, and lifestyle factors for any location.",
  },
  {
    icon: "🤝",
    title: "Expert Guidance",
    description: "AI-powered recommendations and expert advice tailored to your specific needs.",
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to make smarter real estate decisions powered by cutting-edge AI technology
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
              }}
              className="group p-8 rounded-xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Animated icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.1,
                }}
                className="text-5xl mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl -z-10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
