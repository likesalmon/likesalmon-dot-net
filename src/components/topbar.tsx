"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function TopBar() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonClasses = cn(
    "text-white font-exo text-lg font-bold",
    "hover:bg-slate-800 hover:cursor-pointer",
    "grow lg:px-10 py-4",
  );

  const buttons = [
    { id: "home", label: "Home", target: "hero" },
    { id: "about", label: "About", target: "about" },
    { id: "work", label: "Work", target: "work" },
    { id: "socials", label: "Socials", target: "socials" },
  ];

  return (
    <motion.div
      className="flex grow w-full justify-center bg-slate-900 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.75, duration: 0.5 }}
    >
      <h1 className="sr-only">Likesalmon Dot Net</h1>
      <div className="flex justify-center w-full max-w-lg">
        {buttons.map((button, index) => (
          <motion.button
            key={button.id}
            type="button"
            onClick={(e) => handleScroll(e, button.target)}
            className={buttonClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 + index * 0.1, duration: 0.3 }}
          >
            {button.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
