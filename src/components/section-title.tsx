"use client";
import { motion } from "motion/react";

interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-center my-6"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-exo bg-gradient-to-r from-teal-500 to-fuchsia-500 bg-clip-text text-transparent inline-block leading-loose">
        {props.title}
      </h2>
    </motion.div>
  );
}
