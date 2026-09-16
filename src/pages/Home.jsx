import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="w-full"
      id="home"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <img
          src="/astra-logo.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none"
        />
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-rajdhani text-accent-amber tracking-[0.2em] uppercase text-sm font-semibold">
            ASTRA CLUB · BMSIT&M BENGALURU
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-black text-text-primary tracking-tactical mb-4 leading-none"
        >
          <span className="block">ASTRA</span>
          <span className="inline-block bg-accent-orange text-bg-base text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest mt-4 px-3 sm:px-5 py-2">WE ARE HIRING</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-10">
          <span className="text-xl md:text-2xl font-orbitron text-accent-amber tracking-widest">Tomorrow's defence, being engineered today</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => {
              const el = document.getElementById('register');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Register now
          </button>
          <button
            onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Explore Domains
          </button>
        </motion.div>
      </section>

    </motion.div>

  );
};

export default Home;
