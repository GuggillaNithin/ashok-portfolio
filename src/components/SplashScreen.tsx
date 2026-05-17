import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinish(true);

      setTimeout(() => {
        onComplete();
      }, 1600);
    }, 3600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: finish ? 0 : 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
    >
      {/* Background cinematic glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: finish ? 0 : 0.12,
          scale: finish ? 1.8 : 1,
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-white blur-[140px]" />
      </motion.div>

      {/* Main center container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          layoutId="navbar-logo"
          initial={{
            scale: 1.35,
            y: 0,
          }}
          animate={{
            scale: finish ? 0.34 : 1.35,
            x: finish ? -46 + "%" : "0%",
            y: finish ? -44 + "%" : "0%",
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Signature glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.45],
            }}
            transition={{
              duration: 2.5,
            }}
            className="absolute inset-0 blur-3xl"
          >
            <div className="h-full w-full rounded-full bg-white/40" />
          </motion.div>

          {/* SVG Signature */}
          <svg
            width="520"
            height="220"
            viewBox="0 0 520 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Real logo text fade-in */}
            <motion.text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-signature text-[92px]"
              initial={{
                opacity: 0,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: [0, 1],
                filter: [
                  "blur(12px)",
                  "blur(0px)",
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              Ashok
            </motion.text>
          </svg>
        </motion.div>
      </div>

      {/* Cinematic noise */}
      <motion.div
        animate={{
          opacity: finish ? 0 : 0.035,
        }}
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </motion.div>
  );
}