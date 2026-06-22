"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

export default function TypingAnimation({
  words,
  className = "",
}: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(!document.hidden);
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (!isPageVisible) return;

    const currentWord = words[wordIndex];
    const isComplete = !isDeleting && text === currentWord;
    const delay = isComplete ? 2000 : isDeleting ? 50 : 100;

    const timeoutId = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        const nextText = currentWord.slice(0, Math.max(0, text.length - 1));
        setText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex((previous) => (previous + 1) % words.length);
        }
        return;
      }

      setText(currentWord.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isDeleting, isPageVisible, text, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-accent-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}
