"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Explorer",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic property search",
      "Limited market insights",
      "2 saved searches",
      "Community support",
      "Mobile app access",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For active buyers and sellers",
    features: [
      "Advanced property analysis",
      "Real-time market alerts",
      "Unlimited saved searches",
      "Neighborhood deep-dive reports",
      "Price prediction tools",
      "Priority email support",
      "Portfolio tracking",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For developers and teams",
    features: [
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced analytics",
      "Unlimited queries",
      "24/7 phone support",
      "White-label options",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #0ea5e9 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #0ea5e9 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your real estate journey
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -20,
                boxShadow: "0 30px 60px rgba(34, 211, 238, 0.2)",
              }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-cyan-500 bg-slate-900 shadow-2xl"
                  : "border border-gray-700 bg-slate-900/50"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan name and price */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-cyan-400">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features list */}
              <div className="mb-8 space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <motion.div
                    key={featureIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ delay: featureIdx * 0.1, duration: 2 }}
                      className="text-cyan-400"
                    >
                      ✓
                    </motion.span>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg"
                    : "border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Not sure which plan is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all"
          >
            View FAQs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
