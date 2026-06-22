"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

export default function TypingAnimation({ words, className = "" }: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      const nextText = currentWord.slice(0, text.length + 1);
      const isComplete = nextText.length === currentWord.length;

      timeoutId = setTimeout(() => {
        setText(nextText);
        if (isComplete) {
          // Pause before deleting — use a single chained timeout
          timeoutId = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    } else {
      const nextText = currentWord.slice(0, text.length - 1);
      timeoutId = setTimeout(() => {
        setText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-accent-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}
