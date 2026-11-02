
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full border-b border-gray-200 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Image
            src="/images/HireHub_icon.svg"
            alt="HireHub logo"
            width={81}
            height={40}
            priority
          />
        </motion.div>

        {/* Navigation tabs */}
        <motion.ul
          variants={navVariants}
          className="flex items-center gap-8 text-sm font-medium text-gray-600"
        >
          {["Jobs", "Companies"].map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="transition-colors hover:text-indigo-600"
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Register
          </motion.button>
        </motion.div>

      </div>
    </motion.nav>
  );
}

export default Navbar;
