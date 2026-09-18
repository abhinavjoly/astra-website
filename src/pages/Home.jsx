import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowRight, HiLightningBolt, HiShieldCheck, HiChip } from 'react-icons/hi';
import { GiDeliveryDrone, GiBrain, GiSatelliteCommunication } from 'react-icons/gi';

const Home = () => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    ['01', 'DEFENCE', 'Technology & strategy'],
    ['02', 'BUILD', 'Hands-on engineering'],
    ['03', 'CONNECT', 'Industry & community'],
  ];

  const domains = [
    { icon: <GiDeliveryDrone />, title: 'Aerospace', text: 'UAVs, autonomous systems and flight technologies.' },
    { icon: <HiChip />, title: 'Robotics', text: 'Embedded systems, sensing and intelligent machines.' },
    { icon: <GiBrain />, title: 'AI / ML', text: 'Edge intelligence, computer vision and autonomy.' },
    { icon: <GiSatelliteCommunication />, title: 'Cyber & Comms', text: 'Secure communication and cyber technology.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id="home" className="astra-home">
      {/* HERO */}
      <section className="astra-hero relative min-h-[92vh] flex items-center px-6 md:px-10 lg:px-16 pt-24 pb-16 overflow-hidden">
        <div className="hero-radar" />
        <div className="hero-crosshair hero-crosshair-a" />
        <div className="hero-crosshair hero-crosshair-b" />

        <div className="hero-watermark">ASTRA</div>
        <div className="hero-vertical-label">DEFENCE TECHNOLOGY / STUDENT INNOVATION</div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .1 }} className="flex items-center gap-3 mb-7">
                <span className="status-dot" />
                <span className="font-rajdhani text-accent-orange tracking-[.25em] text-xs md:text-sm font-bold uppercase">System online</span>
                <span className="hero-divider" />
                <span className="font-rajdhani text-text-muted tracking-[.18em] text-xs uppercase">BMSIT&amp;M // BENGALURU</span>
              </motion.div>

              <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .2, duration: .7 }} className="hero-title">
                ASTRA<span className="hero-title-dot">.</span>
              </motion.h1>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .35 }} className="max-w-3xl">
                <p className="hero-tagline">Tomorrow's defence, <span>being engineered today.</span></p>
                <p className="hero-copy">A student-led defence technology club building practical systems, exploring emerging technologies and creating a community around engineering for national security.</p>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5 }} className="flex flex-wrap gap-4 mt-9">
                <button onClick={() => scrollTo('register')} className="tactical-btn tactical-btn-primary">
                  Register now <HiArrowRight />
                </button>
                <button onClick={() => scrollTo('domains')} className="tactical-btn tactical-btn-secondary">
                  Explore domains <HiArrowDown />
                </button>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .55, duration: .7 }} className="hero-console hidden md:block">
              <div className="console-top"><span>ASTRA // COMMAND</span><span>LIVE</span></div>
              <div className="console-grid">
                <div><small>LOCAL TIME</small><strong>{time}</strong></div>
                <div><small>STATUS</small><strong className="text-accent-orange">ACTIVE</strong></div>
                <div><small>NODE</small><strong>BLR-01</strong></div>
                <div><small>MODE</small><strong>BUILD</strong></div>
              </div>
              <div className="console-signal"><span /> <span /> <span /> <span /> <span /> <b>SIGNAL</b></div>
            </motion.div>
          </div>

          <div className="hero-bottom-grid mt-16 lg:mt-20">
            {stats.map(([num, title, desc]) => (
              <div key={num} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <div><strong>{title}</strong><small>{desc}</small></div>
              </div>
            ))}
            <div className="hero-scroll-hint"><span>SCROLL TO EXPLORE</span><HiArrowDown /></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="astra-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <React.Fragment key={group}>
              <span>DEFENCE TECHNOLOGY</span><i>◆</i><span>ENGINEERING</span><i>◆</i><span>AI &amp; AUTONOMY</span><i>◆</i><span>STRATEGIC AWARENESS</span><i>◆</i><span>BUILD THE FUTURE</span><i>◆</i>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section className="astra-mission section-pad">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="section-kicker"><span>01</span> Mission profile</div>
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24 items-start">
            <div>
              <h2 className="display-heading">Learn.<br /><span>Build.</span><br />Deploy.</h2>
            </div>
            <div className="mission-panel">
              <div className="mission-corner" />
              <HiShieldCheck className="mission-icon" />
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-rajdhani">ASTRA brings students together to understand, prototype and experiment with technologies relevant to modern defence and strategic systems.</p>
              <div className="mission-lines">
                <div><b>01</b><span>Hands-on projects</span></div>
                <div><b>02</b><span>Technical sessions</span></div>
                <div><b>03</b><span>Industry exposure</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS PREVIEW */}
      <section className="astra-domains-preview section-pad" id="domain-preview">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div><div className="section-kicker"><span>02</span> Areas of operation</div><h2 className="section-heading">Explore the <span>domains.</span></h2></div>
            <button onClick={() => scrollTo('domains')} className="inline-link">VIEW ALL DOMAINS <HiArrowRight /></button>
          </div>
          <div className="domain-preview-grid">
            {domains.map((domain, i) => (
              <motion.button key={domain.title} whileHover={{ y: -6 }} onClick={() => scrollTo('domains')} className="domain-preview-card text-left">
                <span className="domain-index">0{i + 1}</span>
                <div className="domain-icon">{domain.icon}</div>
                <h3>{domain.title}</h3>
                <p>{domain.text}</p>
                <span className="card-arrow"><HiArrowRight /></span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="astra-cta section-pad px-6 md:px-10 lg:px-16">
        <div className="cta-inner max-w-[1500px] mx-auto">
          <div className="cta-grid" />
          <div className="relative z-10">
            <div className="section-kicker"><span>03</span> Open invitation</div>
            <h2 className="cta-heading">Your next build<br /><span>starts here.</span></h2>
            <p>Join ASTRA, meet people who build, and work on ideas that go beyond the classroom.</p>
            <button onClick={() => scrollTo('register')} className="tactical-btn tactical-btn-primary mt-8">Enter ASTRA <HiArrowRight /></button>
          </div>
          <div className="cta-mark">A</div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
