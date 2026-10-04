"use client";

import { motion } from "framer-motion";

export default function Home() {
  const handleOpen = () => {
    console.log("Birthday surprise opened!");
  };

  return (
    <main className="scene-one">
      <div className="ambient-glow" />

      {/* Floating flowers */}
      <div className="petals" aria-hidden="true">
        <span>🌸</span>
        <span>🌷</span>
        <span>🌸</span>
        <span>🌼</span>
        <span>🌷</span>
        <span>🌸</span>
      </div>

      <motion.div
        className="scene-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Teddy */}
        <motion.div
          className="teddy"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="teddy-ear left" />
          <div className="teddy-ear right" />

          <div className="teddy-head">
            <div className="eye left-eye" />
            <div className="eye right-eye" />

            <div className="teddy-muzzle">
              <div className="nose" />
              <div className="mouth" />
            </div>
          </div>

          <div className="teddy-body">
            <div className="teddy-belly" />
          </div>

          {/* Flower held by teddy */}
          <motion.div
            className="flower"
            animate={{
              rotate: [-12, -7, -12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>🌸</span>
            <div className="stem" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
          }}
        >
          <p className="eyebrow">A little surprise for you</p>

          <h1>
            Hey Shabnam
            <span>🌸</span>
          </h1>

          <p className="subtitle">
            I made a little something for you.
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          className="surprise-button"
          onClick={handleOpen}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          aria-label="Open your birthday surprise"
        >
          <span>✨</span>
          Open Your Surprise
        </motion.button>
      </motion.div>
    </main>
  );
}