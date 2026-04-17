"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setMousePosition({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden flex items-center justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center px-4 md:px-0 max-w-5xl"
      >
        {/* Animated badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block"
        >
          <motion.div
            className="px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-sm font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
            }}
          >
            🚀 AI-Powered Real Estate Intelligence
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Smart Property Intelligence
          </span>
          <br />
          for Your Local Market
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Harness the power of AI to discover perfect properties, get real-time market insights, and make informed decisions in your area.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12"
        >
          {[
            { label: "Properties Analyzed", value: "100K+" },
            { label: "Cities Covered", value: "50+" },
            { label: "Market Insights", value: "Real-Time" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-lg border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm"
              whileHover={{
                borderColor: "rgba(34, 211, 238, 0.6)",
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
              }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:shadow-lg transition-all"
          >
            Start Exploring →
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(34, 211, 238, 0.8)",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg hover:bg-cyan-500/10 transition-all"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-20"
        >
          <motion.div
            className="w-20 h-20 mx-auto rounded-lg border border-purple-500/30 bg-purple-500/5 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 rounded-lg border border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-cyan-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
