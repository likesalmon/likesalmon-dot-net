import { useEffect, useState, useRef } from "react";

export function useScrollPosition(threshold = 0.2) {
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      threshold: threshold,
      rootMargin: "0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        setIsScrolled(!entry.isIntersecting);
      }
    }, options);

    // Create a sentinel element at the top of the page
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.height = "1px";
    document.body.appendChild(sentinel);

    observerRef.current.observe(sentinel);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      document.body.removeChild(sentinel);
    };
  }, [threshold]);

  return isScrolled;
}
