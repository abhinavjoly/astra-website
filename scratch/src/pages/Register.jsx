import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-32 relative"
      id="register"
    >
      <div className="text-center mb-16 relative z-10">
        <span className="font-rajdhani text-accent-orange/60 tracking-[0.4em] uppercase text-xs mb-4 block font-black">
          Start_With_ASTRA
        </span>
        <h1 className="text-4xl md:text-7xl font-orbitron font-black mb-4 tracking-tighter italic">
          JOIN <span className="text-accent-orange">ASTRA</span>
        </h1>
        <span className="inline-block bg-accent-orange text-bg-base text-2xl sm:text-3xl md:text-4xl tracking-widest px-4 sm:px-5 py-2 mb-6 font-orbitron font-black uppercase">
          WE ARE HIRING
        </span>
        <p className="max-w-2xl mx-auto text-text-muted font-inter text-lg leading-relaxed">
          Be part of a student-led club building awareness, practical expertise, and meaningful connections across the defence technology ecosystem.
        </p>
        <div className="w-24 h-1 bg-accent-orange mx-auto mt-8" />
      </div>

      <div className="flex justify-center relative z-10 mb-12">
        <a
          href="https://forms.gle/EALvMDj2SKFrY9jXA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-accent-orange text-bg-base font-orbitron font-black tracking-widest uppercase hover:bg-accent-amber transition-all shadow-[0_0_30px_rgba(255,107,0,0.2)]"
        >
          APPLY HERE
          <HiArrowRight />
        </a>
      </div>

    </motion.div>
  );
};

export default Register;
