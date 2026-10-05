"use client";







import { AnimatePresence, motion } from "framer-motion";



import { useRef, useState, type CSSProperties } from "react";







export default function Home() {



  const [scene, setScene] = useState(1);



  const [blast, setBlast] = useState(false);



  const [candlesOut, setCandlesOut] = useState(false);



  const [memoryIndex, setMemoryIndex] = useState(0);

  const [letterOpen, setLetterOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);







  const openSurprise = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.45;
      void audio.play().then(() => {
        setMusicPlaying(true);
      }).catch(() => {
        setMusicPlaying(false);
      });
    }

    setBlast(true);







    setTimeout(() => {



      setScene(2);



      setBlast(false);



    }, 1800);



  };







  const blowCandles = () => {



    setCandlesOut(true);



  };







  return (



    <main className="birthday-page">

      <audio
        ref={audioRef}
        src="/happy-birthday.mp3"
        loop
        preload="auto"
        aria-hidden="true"
      />

      {(musicPlaying || scene > 1) && (
        <motion.button
          type="button"
          className="music-toggle"
          aria-label={musicPlaying ? "Pause birthday music" : "Play birthday music"}
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;

            if (audio.paused) {
              void audio.play().then(() => setMusicPlaying(true));
            } else {
              audio.pause();
              setMusicPlaying(false);
            }
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="music-icon">{musicPlaying ? "♫" : "🔇"}</span>
          <span>{musicPlaying ? "Music" : "Play music"}</span>
        </motion.button>
      )}



      <AnimatePresence mode="wait">







        {/* =====================================================



            SCENE 1 — SURPRISE



        ===================================================== */}







        {scene === 1 && !blast && (



          <motion.section



            key="scene-one"



            className="scene-one"



            initial={{ opacity: 0 }}



            animate={{ opacity: 1 }}



            exit={{ opacity: 0, scale: 1.04 }}



            transition={{ duration: 0.6 }}



          >



            <div className="ambient-glow glow-one" />



            <div className="ambient-glow glow-two" />







            <div className="floating-petals">



              <span>🌸</span>



              <span>🌷</span>



              <span>🌼</span>



              <span>🌸</span>



              <span>🌷</span>



              <span>🌼</span>



            </div>







            <div className="scene-one-content">







              <div className="teddy-wrapper">



                <div className="teddy">







                  <div className="teddy-ear teddy-ear-left" />



                  <div className="teddy-ear teddy-ear-right" />







                  <div className="teddy-head">



                    <div className="teddy-eye teddy-eye-left" />



                    <div className="teddy-eye teddy-eye-right" />







                    <div className="teddy-muzzle">



                      <div className="teddy-nose" />



                      <div className="teddy-mouth" />



                    </div>







                    <div className="teddy-cheek teddy-cheek-left" />



                    <div className="teddy-cheek teddy-cheek-right" />



                  </div>







                  <div className="teddy-body">



                    <div className="teddy-belly">



                      <span>♡</span>



                    </div>



                  </div>







                  <div className="teddy-arm teddy-arm-left" />



                  <div className="teddy-arm teddy-arm-right" />







                  <div className="teddy-leg teddy-leg-left" />



                  <div className="teddy-leg teddy-leg-right" />







                  <div className="teddy-flower">



                    <span className="flower-center">🌸</span>



                    <span className="flower-stem" />



                  </div>







                </div>



              </div>







              <motion.p



                className="surprise-label"



                initial={{ opacity: 0, y: 15 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.2 }}



              >



                A LITTLE SURPRISE FOR YOU



              </motion.p>







              <motion.h1



                initial={{ opacity: 0, y: 20 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.35 }}



              >



                Hey Shabnam Aapi🌸



              </motion.h1>







              <motion.p



                className="surprise-text"



                initial={{ opacity: 0, y: 15 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.5 }}



              >



                I made a little something for you.



              </motion.p>







              <motion.button



                className="surprise-button"



                onClick={openSurprise}



                initial={{ opacity: 0, y: 20 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.7 }}



                whileHover={{ scale: 1.04 }}



                whileTap={{ scale: 0.96 }}



              >



                ✨ Open Your Surprise



              </motion.button>







            </div>



          </motion.section>



        )}











        {/* =====================================================



            BIRTHDAY BLAST



        ===================================================== */}







        {blast && (



          <motion.section



            key="birthday-blast"



            className="birthday-blast"



            initial={{ opacity: 0 }}



            animate={{ opacity: 1 }}



            exit={{ opacity: 0 }}



          >



            <div className="blast-flash" />







            <div className="flower-explosion">



              <span>🌸</span>



              <span>🌷</span>



              <span>🌼</span>



              <span>🌺</span>



              <span>🌸</span>



              <span>🌷</span>



              <span>🌼</span>



              <span>🌺</span>



              <span>🌸</span>



              <span>🌷</span>



              <span>🌼</span>



              <span>🌺</span>



            </div>







            <div className="blast-confetti">



              {Array.from({ length: 45 }).map((_, index) => (



                <span



                  key={index}



                  style={



                    {



                      "--x": `${((index * 37) % 200) - 100}px`,



                      "--y": `${-80 - ((index * 53) % 380)}px`,



                      "--r": `${(index * 47) % 360}deg`,



                    } as CSSProperties



                  }



                />



              ))}



            </div>







            <motion.div



              className="birthday-reveal"



              initial={{ scale: 0.5, opacity: 0 }}



              animate={{ scale: 1, opacity: 1 }}



              transition={{



                duration: 0.8,



                type: "spring",



                bounce: 0.4,



              }}



            >



              <motion.div



                className="birthday-sparkle"



                animate={{



                  rotate: [0, 15, -15, 0],



                  scale: [1, 1.2, 1],



                }}



                transition={{



                  duration: 1.4,



                  repeat: Infinity,



                }}



              >



                ✨



              </motion.div>







              <h2>TODAY IS YOUR DAY</h2>



              <h3>HAPPY BIRTHDAY</h3>



              <h4>SHABNAM PRAVEEN</h4>







              <p>



                May your day be filled with happiness,



                laughter & love. 💗



              </p>



            </motion.div>



          </motion.section>



        )}











        {/* =====================================================



            SCENE 2 — BIRTHDAY REVEAL



        ===================================================== */}







        {scene === 2 && !blast && (



          <motion.section



            key="scene-two"



            className="scene-two"



            initial={{ opacity: 0 }}



            animate={{ opacity: 1 }}



            transition={{ duration: 0.8 }}



          >







            <div className="side-flowers left-flowers">



              <span>🌷</span>



              <span>🌸</span>



              <span>🌼</span>



              <span>🌷</span>



            </div>







            <div className="side-flowers right-flowers">



              <span>🌸</span>



              <span>🌼</span>



              <span>🌷</span>



              <span>🌸</span>



            </div>







            <div className="birthday-stars">



              <span>✦</span>



              <span>✧</span>



              <span>✦</span>



              <span>✧</span>



            </div>







            <div className="scene-two-orb orb-left" />



            <div className="scene-two-orb orb-right" />







            <div className="scene-two-content">







              <motion.p



                className="scene-two-label"



                initial={{ opacity: 0, y: -10 }}



                animate={{ opacity: 1, y: 0 }}



              >



                TODAY IS ALL ABOUT YOU



              </motion.p>







              <motion.h1



                initial={{ opacity: 0, y: 25 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.2 }}



              >



                HAPPY



              </motion.h1>







              <motion.h1



                initial={{ opacity: 0, y: 25 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 0.35 }}



              >



                BIRTHDAY



              </motion.h1>







              <motion.h2



                initial={{ opacity: 0, scale: 0.9 }}



                animate={{ opacity: 1, scale: 1 }}



                transition={{ delay: 0.6 }}



              >



                SHABNAM PRAVEEN



              </motion.h2>







              <motion.div



                className="birthday-heart"



                initial={{ scale: 0 }}



                animate={{ scale: 1 }}



                transition={{



                  delay: 0.8,



                  type: "spring",



                }}



              >



                💗



              </motion.div>







              <motion.p



                className="birthday-subtitle"



                initial={{ opacity: 0 }}



                animate={{ opacity: 1 }}



                transition={{ delay: 1 }}



              >



                Your special birthday journey has just begun...



              </motion.p>







              <motion.button



                className="continue-button"



                onClick={() => {



                  setCandlesOut(false);



                  setScene(3);



                }}



                initial={{ opacity: 0, y: 15 }}



                animate={{ opacity: 1, y: 0 }}



                transition={{ delay: 1.1 }}



                whileHover={{ scale: 1.04 }}



                whileTap={{ scale: 0.96 }}



              >



                Continue ✨



              </motion.button>







            </div>



          </motion.section>



        )}











        {/* =====================================================

            SCENE 3 — MAKE A WISH

        ===================================================== */}



        {scene === 3 && (

          <motion.section

            key="scene-three"

            className="scene-three"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.7 }}

          >

            <div className="cake-glow cake-glow-one" />

            <div className="cake-glow cake-glow-two" />



            <div className="cake-flower cake-flower-1">🌸</div>

            <div className="cake-flower cake-flower-2">🌷</div>

            <div className="cake-flower cake-flower-3">🌼</div>

            <div className="cake-flower cake-flower-4">🌸</div>



            <div className="cake-sparkle sparkle-1">✦</div>

            <div className="cake-sparkle sparkle-2">✧</div>

            <div className="cake-sparkle sparkle-3">✦</div>

            <div className="cake-sparkle sparkle-4">✧</div>



            <div className="scene-three-content">

              <motion.p

                className="scene-three-label"

                initial={{ opacity: 0, y: -15 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.15 }}

              >

                A LITTLE MOMENT JUST FOR YOU

              </motion.p>



              <motion.h1

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.25 }}

              >

                Make a wish, Shabnam ✨

              </motion.h1>



              <div className={`wish-main ${candlesOut ? "wish-complete" : "wish-before"}`}>
                <AnimatePresence mode="wait">
                  {!candlesOut && (
                    <motion.p
                      key="wish-instruction"
                      className="wish-instruction"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      Close your eyes, make a beautiful wish,
                      <br />
                      and blow the candles. 💗
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.div
                  className="birthday-cake"
                  initial={{ opacity: 0, y: 35, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.2,
                  }}
                >
                  <div className="cake-candles">
                    {[0, 1, 2].map((index) => (
                      <div className={`candle candle-${index + 1}`} key={index}>
                        <AnimatePresence mode="wait">
                          {!candlesOut ? (
                            <motion.div
                              key="flame"
                              className="flame"
                              animate={{
                                opacity: 1,
                                scale: [1, 1.08, 0.96, 1],
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.45,
                                y: -8,
                                transition: { duration: 0.28 },
                              }}
                              transition={{
                                scale: {
                                  duration: 0.8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }}
                            >
                              <span />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="smoke"
                              className="candle-smoke"
                              initial={{ opacity: 0, y: 8, scale: 0.65 }}
                              animate={{
                                opacity: [0, 0.75, 0],
                                y: -30,
                                scale: [0.65, 1, 1.18],
                              }}
                              transition={{ duration: 1.4, ease: "easeOut" }}
                            >
                              〰
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="candle-stick" />
                      </div>
                    ))}
                  </div>

                  <div className="cake-top">
                    <div className="cake-heart-row">
                      <span>♡</span>
                      <span>♡</span>
                      <span>♡</span>
                      <span>♡</span>
                    </div>
                    <div className="cake-cream cream-1" />
                    <div className="cake-cream cream-2" />
                    <div className="cake-cream cream-3" />
                    <div className="cake-cream cream-4" />
                  </div>

                  <div className="cake-middle">
                    <div className="cake-drip drip-1" />
                    <div className="cake-drip drip-2" />
                    <div className="cake-drip drip-3" />
                    <div className="cake-drip drip-4" />
                    <div className="cake-drip drip-5" />
                  </div>

                  <div className="cake-bottom">
                    <div className="cake-bottom-stars">✦ &nbsp; ✦ &nbsp; ✦</div>
                  </div>

                  <div className="cake-plate" />
                </motion.div>

                <AnimatePresence mode="wait">
                  {!candlesOut ? (
                    <motion.div
                      key="blow-section"
                      className="blow-section"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.25 }}
                    >
                      <button
                        className="blow-button"
                        onClick={blowCandles}
                        type="button"
                      >
                        🕯️ Blow the Candles
                      </button>
                      <p>Tap the button when you've made your wish ✨</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="wish-after"
                      className="wish-after"
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.65, delay: 0.15 }}
                    >
                      <p className="wish-instruction wish-after-line">
                        Your wish has been sent to the stars. ✨
                      </p>

                      <div className="wish-success-icon">💗</div>
                      <div className="wish-success-sparkles">✦ ✨ ✦</div>

                      <h2>
                        May your wish
                        <br />
                        come true!
                      </h2>

                      <p className="wish-success-text">
                        And may this year bring you happiness,
                        <br />
                        love and beautiful moments.
                      </p>

                      <div className="wish-flowers">🌸 &nbsp; 🌷 &nbsp; 🌸</div>

                      <motion.button
                        className="continue-button wish-continue"
                        onClick={() => {
                          setCandlesOut(false);
                          setScene(4);
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Continue to My Letter 💌
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </motion.section>

        )}



        {/* =====================================================

            SCENE 4 — BROTHER'S LETTER

        ===================================================== */}

        {scene === 4 && (
          <motion.section
            key="scene-four-letter"
            className="scene-letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="letter-glow letter-glow-one" />
            <div className="letter-glow letter-glow-two" />

            <div className="letter-flowers" aria-hidden="true">
              <span className="letter-flower flower-one">🌸</span>
              <span className="letter-flower flower-two">🌷</span>
              <span className="letter-flower flower-three">🌼</span>
              <span className="letter-flower flower-four">🌸</span>
              <span className="letter-flower flower-five">🌷</span>
            </div>

            <div className="letter-sparkles" aria-hidden="true">
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
              <span>✧</span>
            </div>

            <div className="letter-scene-content">
              <motion.p
                className="letter-label"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                💌 A LITTLE MESSAGE FOR YOU 💌
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                From your brother <span>❤️</span>
              </motion.h1>

              <motion.p
                className="letter-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                There are some things that are better written than said.
              </motion.p>

              <div className="letter-stage">
                <AnimatePresence mode="wait">
                  {!letterOpen ? (
                    <motion.div
                      key="sealed-letter"
                      className="envelope-wrapper"
                      initial={{ opacity: 0, scale: 0.85, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -20 }}
                      transition={{
                        delay: 0.35,
                        duration: 0.7,
                        type: "spring",
                        bounce: 0.2,
                      }}
                    >
                      <motion.div
                        className="envelope"
                        whileHover={{ y: -8, rotate: -1 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="envelope-back" />
                        <div className="envelope-paper">
                          <span>For Shabnam 💗</span>
                        </div>
                        <div className="envelope-flap">
                          <div className="flap-inner" />
                        </div>
                        <div className="envelope-front">
                          <div className="envelope-fold-left" />
                          <div className="envelope-fold-right" />
                          <div className="envelope-fold-bottom" />
                        </div>
                        <div className="envelope-seal">💗</div>
                      </motion.div>

                      <motion.button
                        className="open-letter-button"
                        type="button"
                        onClick={() => setLetterOpen(true)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        💌 Open My Letter
                      </motion.button>

                      <p className="letter-tap-hint">
                        A little something from your brother ✨
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="opened-letter"
                      className="letter-paper-open"
                      initial={{ opacity: 0, y: 50, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.75, type: "spring", bounce: 0.15 }}
                    >
                      <div className="letter-paper-inner">
                        <div className="letter-paper-decoration top-left">🌸</div>
                        <div className="letter-paper-decoration top-right">🌷</div>

                        <div className="letter-paper-heading">
                          Dear Shabnam,
                        </div>

                        <div className="letter-body">
                          <p>
                            Happy Birthday to the most wonderful sister. ❤️
                          </p>

                          <p>
                            I may not always say it, but I want you to know
                            how special you are to me. You are not just my
                            sister, you are someone who makes our family
                            happier and our lives more beautiful.
                          </p>

                          <p>
                            I hope this new year of your life brings you
                            countless reasons to smile, beautiful memories,
                            and everything your heart wishes for.
                          </p>

                          <p>
                            Keep believing in yourself, keep smiling,
                            and never stop being the amazing person you are. 🌸
                          </p>
                        </div>

                        <div className="letter-signature">
                          <span>With lots of love,</span>
                          <strong>Your Brother ❤️</strong>
                        </div>

                        <div className="letter-bottom-flowers">
                          🌸 &nbsp; 🌷 &nbsp; 🌸
                        </div>
                      </div>

                      <motion.button
                        className="letter-continue-button"
                        type="button"
                        onClick={() => {
                          setLetterOpen(false);
                          setScene(5);
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Continue to Memories 💗
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.section>
        )}


        {/* =====================================================

            SCENE 5 — MEMORIES

        ===================================================== */}



        {scene === 5 && (
          <motion.section
            key="scene-five"
            className="scene-four"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="memory-stars" aria-hidden="true">
              <span className="star star-1">✦</span>
              <span className="star star-2">·</span>
              <span className="star star-3">✦</span>
              <span className="star star-4">·</span>
              <span className="star star-5">✦</span>
              <span className="star star-6">·</span>
              <span className="star star-7">✦</span>
              <span className="star star-8">·</span>
              <span className="star star-9">✦</span>
              <span className="star star-10">·</span>
              <span className="star star-11">✦</span>
              <span className="star star-12">·</span>
            </div>

            <div className="memory-orb memory-orb-one" />
            <div className="memory-orb memory-orb-two" />

            <div className="scene-four-content">
              <motion.p
                className="scene-four-label"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✦ A FEW LITTLE MEMORIES ✦
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >
                Moments worth
                <br />
                remembering <span>♡</span>
              </motion.h1>

              <motion.p
                className="scene-four-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.24 }}
              >
                Some moments, some smiles, one little collection.
              </motion.p>

              <div className="memory-stage">
                {[
                  {
                    src: "/photos/photo1.jpg",
                    title: "A beautiful moment",
                    caption: "Some moments deserve to stay forever. ✨",
                  },
                  {
                    src: "/photos/photo2.jpg",
                    title: "Smiles worth keeping",
                    caption: "A little happiness captured in time. 💗",
                  },
                  {
                    src: "/photos/photo3.jpg",
                    title: "One happy day",
                    caption: "The kind of day we wish could last longer. 🌸",
                  },
                  {
                    src: "/photos/photo4.jpg",
                    title: "A memory close to my heart",
                    caption: "And many more beautiful moments to come. 🌷",
                  },
                ].map((photo, index) => {
                  const total = 4;
                  const offset = (index - memoryIndex + total) % total;
                  const isActive = offset === 0;
                  const isNext = offset === 1;
                  const isPrevious = offset === total - 1;
                  const visible = isActive || isNext || isPrevious;

                  return (
                    <motion.article
                      key={photo.src}
                      className={`memory-card ${
                        isActive ? "memory-card-active" : ""
                      } ${visible ? "memory-card-visible" : ""}`}
                      initial={{ opacity: 0, scale: 0.92, y: 24 }}
                      animate={{
                        opacity: isActive ? 1 : visible ? 0.34 : 0,
                        scale: isActive ? 1 : 0.78,
                        x: isActive ? 0 : isNext ? "42%" : isPrevious ? "-42%" : 0,
                        y: isActive ? 0 : 16,
                        rotate: isActive ? 0 : isNext ? 3.5 : isPrevious ? -3.5 : 0,
                      }}
                      transition={{
                        duration: 0.58,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => setMemoryIndex(index)}
                    >
                      <div className="memory-photo-wrap">
                        <img
                          src={photo.src}
                          alt={`Memory ${index + 1}`}
                          className="memory-photo"
                          onError={(event) => {
                            event.currentTarget.style.opacity = "0";
                          }}
                        />
                        <div className="memory-photo-shine" />
                        <div className="memory-photo-label">
                          MEMORY {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="memory-card-info">
                        <div className="memory-counter">
                          ✦ {String(index + 1).padStart(2, "0")} / 04 ✦
                        </div>
                        <h2>{photo.title}</h2>
                        <p>{photo.caption}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="memory-controls">
                <button
                  className="memory-arrow"
                  type="button"
                  aria-label="Previous memory"
                  onClick={() =>
                    setMemoryIndex((memoryIndex - 1 + 4) % 4)
                  }
                >
                  ←
                </button>

                <div className="memory-dots">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show memory ${index + 1}`}
                      className={`memory-dot ${
                        memoryIndex === index ? "active" : ""
                      }`}
                      onClick={() => setMemoryIndex(index)}
                    />
                  ))}
                </div>

                <button
                  className="memory-arrow"
                  type="button"
                  aria-label="Next memory"
                  onClick={() => setMemoryIndex((memoryIndex + 1) % 4)}
                >
                  →
                </button>
              </div>

              <p className="memory-hint">Tap the arrows to explore ✨</p>

              <motion.button
                className="continue-button memory-continue"
                type="button"
                onClick={() => setScene(6)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                One Last Surprise 🎁
              </motion.button>
            </div>
          </motion.section>
        )}


        {/* =====================================================

            SCENE 6 — FINAL SURPRISE

        ===================================================== */}

        {scene === 6 && (
          <motion.section
            key="scene-six"
            className="final-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="final-scene-glow final-glow-one" />
            <div className="final-scene-glow final-glow-two" />

            <div className="final-scene-content">
              <motion.div
                className="final-teddy"
                animate={{ y: [0, -8, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🧸
              </motion.div>

              <motion.p
                className="final-label"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                WAIT... ONE LAST THING ✨
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Happy Birthday,
                <br />
                Shabnam ❤️
              </motion.h1>

              <motion.div
                className="final-gift"
                animate={{ y: [0, -7, 0], rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                🎁
              </motion.div>

              <p className="final-message">
                You deserve all the happiness in the world.
                <br />
                Keep smiling, keep shining, and never stop being you. 🌸
              </p>

              <motion.button
                className="continue-button final-replay-button"
                type="button"
                onClick={() => {
                  setCandlesOut(false);
                  setLetterOpen(false);
                  setMemoryIndex(0);
                  setScene(1);
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                🌸 Replay Your Birthday
              </motion.button>
            </div>
          </motion.section>
        )}

      </AnimatePresence>

    </main>
  );
}
