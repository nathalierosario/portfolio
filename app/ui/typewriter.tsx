"use client";

import { useState, useEffect } from "react";
import { jetbrains_mono } from "@/app/ui/fonts";

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typewriterSpeed, setTypewriterSpeed] = useState(130);

  const taglines = [
    "Software Engineer",
    "Data Scientist",
    "Future Queen of the World",
  ];

  useEffect(() => {
    const handleTypewriter = () => {
      const i = taglineIndex % taglines.length;
      const tagline = taglines[i];

      setDisplayText(
        isDeleting
          ? tagline.substring(0, displayText.length - 1)
          : tagline.substring(0, displayText.length + 1)
      );

      setTypewriterSpeed(isDeleting ? 80 : 130);

      if (!isDeleting && displayText.length === tagline.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setTaglineIndex(taglineIndex + 1);
      }
    };

    const timer = setTimeout(handleTypewriter, typewriterSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, typewriterSpeed]);

  return (
    <div className={`${jetbrains_mono.className} inline-flex text-3xl text-zinc-500`}>
      <span>{displayText}</span>
      <span className="animate-blinking-cursor">|</span>
    </div>
  );
}
