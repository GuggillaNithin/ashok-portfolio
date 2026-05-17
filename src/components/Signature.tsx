import { motion } from "framer-motion";

export default function Signature({
  className = "",
  layoutId,
}: {
  className?: string;
  layoutId?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 20,
        mass: 0.9,
      }}
      className={`
        font-signature
        leading-none
        tracking-wide
        select-none
        ${className}
      `}
      style={{
        willChange: "transform",
        transform: "translate3d(0,0,0)",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <span
        className="
          block
          drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
        "
      >
        Ashok
      </span>
    </motion.div>
  );
}