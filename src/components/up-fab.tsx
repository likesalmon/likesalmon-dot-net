"use client";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function UpFAB() {
  const isScrolled = useScrollPosition(0.2);

  return (
    <Button
      variant="default"
      size="icon"
      className={`fixed top-8 left-8 rounded-full shadow-lg transition-all duration-300 ${
        isScrolled ? "opacity-100 visible cursor-pointer" : "opacity-0 invisible"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-5" strokeWidth={3} />
    </Button>
  );
}
