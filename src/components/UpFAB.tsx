import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function UpFAB() {
  const isScrolled = useScrollPosition(0.2);

  if (!isScrolled) return null;

  return (
    <Button
      variant="default"
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}
