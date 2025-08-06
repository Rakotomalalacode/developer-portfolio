"use client";

import { motion } from "framer-motion";

type SplitTextScatterProps = {
  text: string;
  className?: string;
};

const SplitTextScatter: React.FC<SplitTextScatterProps> = ({ text, className }) => {
  const letters = text.split("");

  return (
    <motion.div className={`relative inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            opacity: 0,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.05,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitTextScatter;
