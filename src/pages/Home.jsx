import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  HiArrowRight,
  HiArrowDown,
  HiLightningBolt,
  HiShieldCheck,
  HiChip,
  HiChevronRight,
} from 'react-icons/hi';
import { GiDeliveryDrone, GiBrain, GiSatelliteCommunication, GiRadarSweep } from 'react-icons/gi';

const domains = [
  { no: '01', code: 'AERO', title: 'Aerospace', icon: GiDeliveryDrone, text: 'UAVs, propulsion, flight systems and autonomous platforms.' },
  { no: '02', code: 'ROBO', title: 'Robotics', icon: HiChip, text: 'Embedded systems, sensing, control and intelligent machines.' },
  { no: '03', code: 'AIML', title: 'AI / ML', icon: GiBrain, text: 'Computer vision, edge intelligence and autonomous decision systems.' },
  { no: '04', code: 'COMMS', title: 'Cyber & Comms', icon: GiSatelliteCommunication, text: 'Secure networks, RF systems, cyber and strategic communication.' },
];

const pulses = ['DEFENCE', 'AEROSPACE', 'ROBOTICS', 'AI / ML', 'CYBER', 'EMBEDDED', 'AUTONOMY'];

function usePointerTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  return { x, y, rotateX: useTransform(sy, [-1, 1], [5, -5]), rotateY: useTransform(sx, [-1, 1], [-5, 5]) };
}

const Home = () => {
  const [time, setTime] = useState('00:00:00');
  const [activeDomain, setActiveDomain] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const tilt = usePointerTilt();

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const move = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setMouse({ x: px * 100, y: py * 100 });
    tilt.x.set(px * 2 - 1);
    tilt.y.set(py * 2 - 1);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="home" className="astra-x">
      {/* ===================== HERO ===================== */}
      <section ref={heroRef} onMouseMove={move} className="x-hero">
        <div className="x-noise" />
        <div className="x-grid" />
        <div className="x-spotlight" style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }} />
        <div className="x-scan" />
        <div className="x-coordinate">13°08'03"N<br />77°34'10"E</div>
        <div className="x-side-label">ASTRA / DEFENCE TECHNOLOGY / 2026</div>

        <div className="x-orbit x-orbit-1" />
        <div className="x-orbit x-orbit-2" />
        <div className="x-orbit x-orbit-3" />
        <motion.div style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }} className="x-core">
          <div className="x-core-ring ring-a" />
          <div className="x-core-ring ring-b" />
          <div className="x-core-ring ring-c" />
          <div className="x-core-crosshair"><span /><span /></div>
          <div className="x-core-logo">A</div>
          <div className="x-core-readout">TARGET / LOCKED</div>
        </motion.div>

        <div className="x-hero-content">
          <motion.div className="x-status" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <span className="live-dot" /> SYSTEM ONLINE <b>//</b> BMSIT&amp;M, BENGALURU
          </motion.div>

          <motion.div initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .12 }}>
            <p className="x-eyebrow">STUDENT DEFENCE TECHNOLOGY CLUB</p>
            <h1 className="x-title"><span>AST</span><i>R</i><span>A</span><em>.</em></h1>
            <div className="x-title-line"><span /> <b>ENGINEERED FOR TOMORROW</b> <span /></div>
          </motion.div>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .3 }} className="x-lead">
            We don't wait for the future of defence.<br />
            <strong>We prototype it.</strong>
          </motion.p>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .42 }} className="x-actions">
            <button className="x-btn x-btn-hot" onClick={() => scrollTo('register')}><span>JOIN ASTRA</span><HiArrowRight /></button>
            <button className="x-btn x-btn-ghost" onClick={() => scrollTo('domains')}><span>ENTER SYSTEM</span><HiArrowDown /></button>
          </motion.div>
        </div>

        <div className="x-command">
          <div className="x-command-head"><span>ASTRA / COMMAND</span><span className="command-live">● LIVE</span></div>
          <div className="x-command-big">{time}</div>
          <div className="x-command-grid">
            <span>NODE<strong>BLR-01</strong></span>
            <span>MODE<strong>BUILD</strong></span>
            <span>STATUS<strong className="orange">ACTIVE</strong></span>
            <span>THREAT<strong>NONE</strong></span>
          </div>
          <div className="x-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><b>SIGNAL 98%</b></div>
        </div>

        <div className="x-bottom-stats">
          <div><b>01</b><strong>LEARN</strong><small>Understand the mission.</small></div>
          <div><b>02</b><strong>BUILD</strong><small>Turn theory into hardware.</small></div>
          <div><b>03</b><strong>DEPLOY</strong><small>Test ideas in the real world.</small></div>
          <button onClick={() => scrollTo('about')}><span>SCROLL</span><HiArrowDown /></button>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <section className="x-marquee" aria-label="ASTRA domains">
        <div className="x-marquee-track">
          {[...pulses, ...pulses].map((p, i) => <React.Fragment key={`${p}-${i}`}><span>{p}</span><b>✦</b></React.Fragment>)}
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="x-section x-mission">
        <div className="x-section-meta"><span>01</span><b>MISSION PROFILE</b><i /></div>
        <div className="x-mission-layout">
          <div className="x-section-intro">
            <p className="x-mini">NOT ANOTHER COLLEGE CLUB.</p>
            <h2>MAKE<br /><span>THINGS</span><br />MATTER.</h2>
            <p className="x-body">ASTRA is a student engineering community focused on defence technology, emerging systems and hands-on experimentation.</p>
          </div>
          <div className="x-mission-visual">
            <div className="mission-radar"><span className="radar-sweep" /><span className="radar-dot d1" /><span className="radar-dot d2" /><span className="radar-dot d3" /></div>
            <div className="mission-center"><HiShieldCheck /><b>MISSION<br />ACTIVE</b></div>
            <div className="mission-data"><span>01 / IDEATE</span><span>02 / PROTOTYPE</span><span>03 / TEST</span><span>04 / DEPLOY</span></div>
          </div>
        </div>
      </section>

      {/* ===================== DOMAINS ===================== */}
      <section className="x-section x-domain-section" id="domain-preview">
        <div className="x-section-meta"><span>02</span><b>AREAS OF OPERATION</b><i /></div>
        <div className="x-domain-head">
          <div><p className="x-mini">PICK YOUR WEAPON.</p><h2>DOMAINS<span>.</span></h2></div>
          <button className="x-text-link" onClick={() => scrollTo('domains')}>VIEW ALL <HiArrowRight /></button>
        </div>
        <div className="x-domain-stage">
          <div className="x-domain-list">
            {domains.map((d, i) => {
              const Icon = d.icon;
              return <button key={d.title} className={`x-domain-row ${activeDomain === i ? 'is-active' : ''}`} onMouseEnter={() => setActiveDomain(i)} onFocus={() => setActiveDomain(i)} onClick={() => scrollTo('domains')}>
                <span>{d.no}</span><strong>{d.title}</strong><em>{d.code}</em><HiChevronRight />
              </button>;
            })}
          </div>
          <motion.div key={activeDomain} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="x-domain-display">
            <div className="domain-display-grid" />
            <div className="domain-display-orbit" />
            {React.createElement(domains[activeDomain].icon, { className: 'domain-display-icon' })}
            <div className="domain-display-code">{domains[activeDomain].code} // 0{activeDomain + 1}</div>
            <h3>{domains[activeDomain].title}</h3>
            <p>{domains[activeDomain].text}</p>
            <div className="domain-display-footer"><span>CAPABILITY ACTIVE</span><b>98.4%</b></div>
          </motion.div>
        </div>
      </section>

      {/* ===================== INTERACTIVE TERMINAL ===================== */}
      <section className="x-terminal-section">
        <div className="terminal-aura" />
        <div className="x-terminal-wrap">
          <div className="x-terminal-top"><span>ASTRA_OS / TERMINAL</span><span>SECURE CHANNEL</span></div>
          <div className="x-terminal-body">
            <div className="terminal-prompt"><span>root@astra:~$</span> initialise_future()</div>
            <div className="terminal-output">
              <p><i>[OK]</i> defence systems loaded</p>
              <p><i>[OK]</i> engineering network connected</p>
              <p><i>[OK]</i> student operators detected</p>
              <p><i>[READY]</i> waiting for next builder<span className="cursor">_</span></p>
            </div>
            <button onClick={() => scrollTo('register')} className="terminal-button"><HiLightningBolt /> ACCESS ASTRA <HiArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="x-final">
        <div className="final-grid" />
        <div className="final-number">ASTRA<span>.</span></div>
        <div className="final-content">
          <p className="x-mini">03 / OPEN INVITATION</p>
          <h2>WHAT WILL<br /><span>YOU BUILD?</span></h2>
          <p>Bring curiosity. Bring engineering. Bring the idea you've been waiting to make real.</p>
          <button onClick={() => scrollTo('register')} className="x-btn x-btn-hot"><span>REGISTER NOW</span><HiArrowRight /></button>
        </div>
        <div className="final-orbit" />
      </section>
    </motion.div>
  );
};

export default Home;
