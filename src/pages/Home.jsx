import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';
import {
  GiDeliveryDrone,
  GiRobotLeg,
  GiArtificialIntelligence,
  GiRadarSweep,
} from 'react-icons/gi';

const domainPreview = [
  { title: 'Aerospace', icon: <GiDeliveryDrone /> },
  { title: 'Robotics', icon: <GiRobotLeg /> },
  { title: 'AI & ML', icon: <GiArtificialIntelligence /> },
  { title: 'Cyber & RF', icon: <GiRadarSweep /> },
];

const Home = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div id="home">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl">
          <span className="label-badge text-accent-orange mb-6 block">
            BMSIT&amp;M · Defence Technology Club
          </span>

          <h1 className="font-orbitron font-black text-text-primary text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tighter mb-6">
            ASTRA
          </h1>

          <p className="font-rajdhani text-xl md:text-2xl text-text-primary/90 mb-4 max-w-2xl">
            Armed Squad for Tactical Readiness &amp; Awareness
          </p>

          <p className="text-text-muted font-inter text-base md:text-lg leading-relaxed max-w-xl mb-10">
            We're a student-run club for people who'd rather build the thing
            than just read about it — robotics, AI, cybersecurity, comms and
            aerospace, worked on in the open with whoever wants to learn.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('register')}
              className="px-8 py-4 bg-accent-orange text-bg-base font-orbitron font-bold tracking-tactical uppercase text-sm hover:bg-accent-amber transition-colors"
            >
              Join the Club
            </button>
            <button
              onClick={() => scrollTo('domains')}
              className="px-8 py-4 border border-custom-border text-text-primary font-orbitron font-bold tracking-tactical uppercase text-sm hover:border-accent-orange hover:text-accent-orange transition-colors inline-flex items-center gap-2"
            >
              See the Domains <HiArrowRight />
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to learn more"
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted hover:text-accent-orange transition-colors"
        >
          <span className="label-badge text-[10px]">Scroll</span>
          <HiArrowDown className="animate-bounce" />
        </button>
      </section>

      {/* Domain preview strip — quick orientation, full detail lives on the Domains section */}
      <section className="border-y border-custom-border bg-bg-surface">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-custom-border">
          {domainPreview.map((d) => (
            <button
              key={d.title}
              onClick={() => scrollTo('domains')}
              className="bg-bg-surface px-6 py-6 flex flex-col items-start gap-3 hover:bg-bg-elevated transition-colors text-left"
            >
              <span className="text-2xl text-accent-orange">{d.icon}</span>
              <span className="font-rajdhani uppercase tracking-badge text-sm text-text-primary">
                {d.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Short mission statement — sets up the About section that follows */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-6 py-24 max-w-3xl"
      >
        <p className="font-orbitron text-2xl md:text-4xl leading-snug text-text-primary">
          Engineering that's meant to leave the workbench —
          <span className="text-accent-orange"> prototypes, not slideshows.</span>
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
