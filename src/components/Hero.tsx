"use client";
import Image from "next/image";
import Section from "./Section";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <Section
      className="items-center justify-center gap-6 md:gap-12 relative px-4 py-8 -mt-[60px]"
      id="hero"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Image
          src="/salmon-icon-380x338.png"
          alt="Likesalmon"
          width={380}
          height={338}
          className="max-w-full"
        />
      </motion.div>
      <motion.div
        className="font-exo text-2xl md:text-4xl font-bold text-center leading-relaxed text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Developer & UI Designer{" "}
        <span className="bg-gradient-to-r from-teal-500 to-fuchsia-500 bg-clip-text text-transparent inline-block">
          Ammon* Morris
        </span>
        <br /> bridges the divide between technology and design.
      </motion.div>
      <motion.div
        className="font-exo text-lg md:text-2xl font-bold text-center font-light text-fuchsia-400"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        * Pronounced /ˈæmən/ - like &quot;salmon&quot;
      </motion.div>
    </Section>
  );
}
