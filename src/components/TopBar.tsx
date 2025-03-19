"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

  return (
    <div className="flex grow justify-center bg-slate-900 z-10">
      <h1 className="sr-only">Likesalmon Dot Net</h1>
      <div className="flex justify-center w-full max-w-lg">
        <button type="button" onClick={(e) => handleScroll(e, "hero")} className={buttonClasses}>
          Home
        </button>
        <button type="button" onClick={(e) => handleScroll(e, "about")} className={buttonClasses}>
          About
        </button>
        <button type="button" onClick={(e) => handleScroll(e, "work")} className={buttonClasses}>
          Work
        </button>
        <button type="button" onClick={(e) => handleScroll(e, "socials")} className={buttonClasses}>
          Socials
        </button>
      </div>
    </div>
  );
}
