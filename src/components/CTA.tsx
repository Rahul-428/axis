"use client";

import { motion } from "framer-motion";

export default function CTA() {
  const floatingBoxVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-black to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Real Estate Journey?
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of satisfied users making smarter property decisions with AI-powered insights
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl transition-all"
          >
            Start Free Trial →
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(34, 211, 238, 0.8)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-lg border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg hover:bg-cyan-500/10 transition-all"
          >
            Schedule Demo
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Floating card 1 */}
          <motion.div
            variants={floatingBoxVariants}
            animate="animate"
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute left-10 top-32 w-40 h-32 p-4 rounded-lg border border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm hidden md:block"
          >
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-sm font-semibold text-white">Smart Matching</div>
            <div className="text-xs text-gray-400">Find your perfect property</div>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            variants={floatingBoxVariants}
            animate="animate"
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute right-10 top-40 w-40 h-32 p-4 rounded-lg border border-purple-500/30 bg-slate-900/80 backdrop-blur-sm hidden md:block"
          >
            <div className="text-3xl mb-2">📈</div>
            <div className="text-sm font-semibold text-white">Market Trends</div>
            <div className="text-xs text-gray-400">Real-time predictions</div>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-gray-400 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span>
            <span>Free for 30 days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
