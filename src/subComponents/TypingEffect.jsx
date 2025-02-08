import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingEffect() {
  const words = ["Software Engineer (MERN)", "React & Node.js Developer", "Computer Science Student", "Web Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (charIndex === words[wordIndex].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === 0 && deleting) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(words[wordIndex].substring(0, charIndex));
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="flex flex-col items-start justify-center h-8">
      <motion.h1 
        className="text-4xl font-bold" 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
