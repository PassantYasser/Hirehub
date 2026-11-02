
"use client";

import React from "react";
import { motion } from "motion/react";

function Search() {
  return (
    <div className="bg-[#EEF2FF] overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col items-center justify-center gap-3 py-20"
      >
        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#0F172A] text-5xl font-bold"
        >
          Find your next job
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-[#475569] text-lg font-normal"
        >
          Search roles from companies hiring now.
        </motion.p>

        {/* Search Form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid w-[60%] grid-cols-[2fr_2fr_1fr] items-center gap-3 rounded-lg bg-white p-4 shadow-md"
        >
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Search
          </motion.button>
        </motion.div>

        {/* Job Types */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex gap-4 text-[#4338CA] text-xs font-medium"
        >
          {["Remote", "On-site", "Hybrid"].map((type) => (
            <motion.p
              key={type}
              whileHover={{ y: -3, scale: 1.1 }}
              className="cursor-pointer"
            >
              {type}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Search;
