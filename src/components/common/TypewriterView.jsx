"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({
  text = "Electrify Your Drive...",
  speed = 80, // base typing speed
  deleteSpeed = 40, // base deleting speed
  pauseDuration = 1500, // pause at end
  loop = true,
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    // Add small random variation for natural typing
    const randomSpeed = speed + Math.random() * 80;
    const randomDelete = deleteSpeed + Math.random() * 30;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (loop) setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, randomDelete);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, randomSpeed);
      } else if (loop) {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    isPaused,
    text,
    speed,
    deleteSpeed,
    pauseDuration,
    loop,
  ]);

  return (
    <div className="inline-block">
      <span className="text-2xl md:text-5xl font-bold text-slate-800 dark:text-slate-200">
        {displayText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-blue-500"
          >
            |
          </motion.span>
        )}
      </span>
    </div>
  );
};

export default function TypewriterView() {
  return <TypewriterText />;
}
