import { motion } from "framer-motion";
import { useEffect } from "react";
import Signature from "./Signature";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
      "
      style={{
        willChange: "opacity",
        transform: "translateZ(0)",
      }}
    >
      {/* Soft cinematic glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          bg-white
          blur-[80px]
        "
      />

      {/* Logo */}
      <div
        className="relative"
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        <Signature
          layoutId="navbar-logo"
          className="
            text-white
            text-7xl
            sm:text-8xl
            md:text-[110px]
          "
        />
      </div>

      {/* Noise texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </motion.div>
  );
}
