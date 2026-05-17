import { motion } from "motion/react";

export default function Signature({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      layoutId="navbar-logo"
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        font-signature
        text-3xl
        text-white
        tracking-wide
        select-none
        relative
        ${className}
      `}
    >
      <motion.span
        initial={{
          filter: "blur(10px)",
          opacity: 0,
        }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
      >
        Ashok
      </motion.span>
    </motion.div>
  );
}