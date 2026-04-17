"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
        {/* Main footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Company info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">PropertyAI</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing real estate with AI-powered insights and intelligent property matching.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Features", "Pricing", "API", "Security"].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5, color: "#0ea5e9" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About", "Blog", "Careers", "Contact"].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5, color: "#0ea5e9" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Privacy", "Terms", "Cookies", "Compliance"].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5, color: "#0ea5e9" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500">
            © 2024 PropertyAI. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "GitHub", "Facebook"].map((social, idx) => (
              <motion.button
                key={idx}
                whileHover={{
                  y: -3,
                  color: "#0ea5e9",
                }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {social.charAt(0)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Animated background element */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>
    </footer>
  );
}
