"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(Math.round(currentProgress), 100));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center
        rounded-full bg-white shadow-(--shadow-red) transition-all duration-300 hover:scale-110 
        ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"}`}
    >
      <svg
        className="absolute inset-0 -rotate-90"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="rgba(229,231,235,0.8)"
          strokeWidth="4"
        />

        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.15s linear",
          }}
        />
      </svg>

      <div className="relative flex flex-col items-center justify-center">
        <ArrowUp className="h-4 w-4 text-primary" />

        <span className="text-[10px] font-bold text-primary">{progress}%</span>
      </div>
    </button>
  );
}
