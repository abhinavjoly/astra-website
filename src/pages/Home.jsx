import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HiArrowDown, HiArrowRight, HiLightningBolt, HiPlay, HiRefresh, HiShieldCheck } from 'react-icons/hi';
import { GiBrain, GiDeliveryDrone, GiSatelliteCommunication, GiRobotLeg } from 'react-icons/gi';

const domains = [
  { code: 'AERO', no: '01', title: 'AEROSPACE', icon: GiDeliveryDrone, desc: 'UAVs, flight systems, propulsion and autonomous platforms.' },
  { code: 'ROBO', no: '02', title: 'ROBOTICS', icon: GiRobotLeg, desc: 'Embedded control, sensing, actuation and intelligent machines.' },
  { code: 'AIML', no: '03', title: 'AI / ML', icon: GiBrain, desc: 'Vision, edge intelligence and autonomous decision systems.' },
  { code: 'COMMS', no: '04', title: 'CYBER / RF', icon: GiSatelliteCommunication, desc: 'Secure networks, RF systems and strategic communications.' },
];

const telemetry = ['ALT 0000 M', 'VEL 000 KM/H', 'FUEL 100%', 'NODE BLR-01'];

function Rocket({ landing, replay }) {
  return (
    <div className={`rocket-stage ${landing ? 'is-landing' : ''}`} onClick={replay} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && replay()} aria-label="Replay rocket landing">
      <div className="rocket-sky-grid" />
      <div className="rocket-stars">{Array.from({ length: 34 }).map((_, i) => <i key={i} style={{ '--i': i }} />)}</div>
      <div className="rocket-orbit-line orbit-left" />
      <div className="rocket-orbit-line orbit-right" />
      <div className="rocket-altitude">ALTITUDE<br /><strong>0000</strong><span>M</span></div>
      <div className="rocket-target"><span>LANDING ZONE</span><b>ASTRA-01</b></div>
      <motion.div className="rocket" animate={landing ? { y: [ -250, -190, -125, -60, 0, 8, 0 ], rotate: [ -3, 1, -1, 1, 0, 0, 0 ] } : { y: 0 }} transition={{ duration: 4.2, ease: [0.18, 0.8, 0.25, 1] }}>
        <div className="rocket-fin fin-left" /><div className="rocket-fin fin-right" />
        <div className="rocket-body"><div className="rocket-window" /><div className="rocket-band" /><span>ASTRA</span></div>
        <div className="rocket-engine"><i /><i /><i /></div>
      </motion.div>
      <div className="landing-pad"><span className="pad-ring" /><span className="pad-mark">A</span><b>TOUCHDOWN</b></div>
      <div className="rocket-flame" />
      <div className="dust dust-a" /><div className="dust dust-b" /><div className="dust dust-c" />
      <div className="rocket-readout">FLIGHT COMPUTER <strong>ONLINE</strong><br />GUIDANCE <strong>NOMINAL</strong><br />LANDING <strong>ARMED</strong></div>
    </div>
  );
}

const Home = () => {
  const heroRef = useRef(null);
  const [landing, setLanding] = useState(true);
  const [activeDomain, setActiveDomain] = useState(0);
  const [time, setTime] = useState('00:00:00');
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [launched, setLaunched] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const rocketParallax = useTransform(progress, [0, 0.25], [0, -80]);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setLanding(false), 5200);
    return () => clearTimeout(id);
  }, [landing]);

  const move = (e) => {
    const r = heroRef.current?.getBoundingClientRect(); if (!r) return;
    setPointer({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const replay = () => { setLanding(false); requestAnimationFrame(() => setLanding(true)); };
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const launch = () => {
    setLaunched(true);
    setLanding(false);
    setTimeout(() => setLanding(true), 900);
    setTimeout(() => setLaunched(false), 5200);
  };

  const particles = useMemo(() => Array.from({ length: 18 }), []);

  return (
    <motion.div id="home" className="astra-hyper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="cursor-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} />
      <div className="scroll-progress"><span style={{ transform: `scaleY(${scrollYProgress.get?.() || 0})` }} /></div>

      <section ref={heroRef} onMouseMove={move} className={`hyper-hero ${launched ? 'launch-mode' : ''}`}>
        <div className="hero-noise" /><div className="hero-grid" /><div className="hero-vignette" />
        <div className="hero-corner tl">ASTRA / FLIGHT 001<br /><b>EXPERIMENTAL SYSTEMS</b></div>
        <div className="hero-corner tr">13.1341° N<br />77.5694° E</div>
        <div className="hero-side-label">DEFENCE // TECHNOLOGY // ENGINEERING // BENGALURU</div>

        <div className="hero-copy">
          <motion.div className="hero-kicker" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}><span /> SYSTEM ONLINE <b>07.4ms</b></motion.div>
          <motion.h1 initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8 }}>
            AST<span>R</span>A<em>.</em>
          </motion.h1>
          <div className="hero-under"><span>ARMED SQUAD FOR TACTICAL READINESS & AWARENESS</span><i /></div>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .25 }}>
            <strong>BUILD THE FUTURE.</strong><br />
            A student defence-tech collective turning engineering into real systems.
          </motion.p>
          <div className="hero-actions">
            <button className="hyper-hot" onClick={launch}><HiPlay /> INITIATE FLIGHT</button>
            <button className="hyper-line" onClick={() => scrollTo('about')}>EXPLORE ASTRA <HiArrowDown /></button>
          </div>
        </div>

        <motion.div className="hero-rocket-wrap" style={{ y: rocketParallax }}>
          <Rocket landing={landing} replay={replay} />
          <button className="replay-flight" onClick={replay}><HiRefresh /> REPLAY LANDING</button>
        </motion.div>

        <div className="hero-telemetry">
          <div className="telemetry-time"><span>LOCAL SYSTEM TIME</span><strong>{time}</strong></div>
          {telemetry.map((t, i) => <div key={t}><span>{t.split(' ')[0]}</span><b>{t.split(' ')[1]}</b></div>)}
          <div className="signal"><span>SIGNAL</span><i>{Array.from({ length: 12 }).map((_, i) => <b key={i} style={{ height: `${8 + ((i * 7) % 24)}px` }} />)}</i><em>98%</em></div>
        </div>

        <div className="hero-bottom-command"><span>SCROLL TO DESCEND</span><div><b>01</b> MISSION <b>02</b> DOMAINS <b>03</b> REGISTER</div><HiArrowDown /></div>
      </section>

      <section className="impact-strip">
        <div className="impact-track">{[...Array(2)].flatMap(() => ['DEFENCE', 'AEROSPACE', 'ROBOTICS', 'AI / ML', 'CYBER', 'EMBEDDED', 'AUTONOMY', 'STRATEGY']).map((x, i) => <React.Fragment key={i}><span>{x}</span><b>◆</b></React.Fragment>)}</div>
      </section>

      <section className="hyper-section mission-panel" id="mission">
        <div className="section-number">01</div><div className="section-line"><span>MISSION CONTROL</span><i /></div>
        <div className="mission-grid">
          <div className="mission-copy"><p className="overline">THE ASTRA DIRECTIVE</p><h2>DON'T JUST<br /><span>LEARN IT.</span><br />BUILD IT.</h2><p>ASTRA exists to make defence technology tangible. Learn the systems, prototype the idea, test it and put it in the hands of people who can push it further.</p><button className="hyper-line" onClick={() => scrollTo('about')}>READ THE MISSION <HiArrowRight /></button></div>
          <div className="mission-console">
            <div className="console-header"><span>MISSION / LIVE</span><b>● ACTIVE</b></div>
            <div className="console-orbit"><div className="console-sweep" /><div className="console-core"><HiShieldCheck /><span>ASTRA</span></div>{particles.map((_, i) => <i key={i} style={{ '--p': i }} />)}</div>
            <div className="console-data"><span>IDEATE <b>100%</b></span><span>PROTOTYPE <b>76%</b></span><span>TEST <b>54%</b></span><span>DEPLOY <b>28%</b></span></div>
          </div>
        </div>
      </section>

      <section className="hyper-section domain-command" id="domain-preview">
        <div className="section-number">02</div><div className="section-line"><span>AREAS OF OPERATION</span><i /></div>
        <div className="domain-command-head"><div><p className="overline">SELECT A SYSTEM</p><h2>CHOOSE<br /><span>YOUR DOMAIN.</span></h2></div><div className="domain-readout">SYSTEMS ONLINE<br /><strong>04 / 04</strong></div></div>
        <div className="domain-console">
          <div className="domain-tabs">{domains.map((d, i) => { const Icon = d.icon; return <button key={d.code} onMouseEnter={() => setActiveDomain(i)} onFocus={() => setActiveDomain(i)} onClick={() => setActiveDomain(i)} className={activeDomain === i ? 'active' : ''}><span>{d.no}</span><Icon /><strong>{d.title}</strong><em>{d.code}</em></button>; })}</div>
          <div className="domain-main">
            <div className="domain-main-bg" />
            <div className="domain-big-number">{domains[activeDomain].no}</div>
            <div className="domain-icon-wrap">{React.createElement(domains[activeDomain].icon)}</div>
            <p className="overline">CAPABILITY // {domains[activeDomain].code}</p>
            <h3>{domains[activeDomain].title}</h3><p>{domains[activeDomain].desc}</p>
            <div className="domain-meter"><span>READINESS</span><i><b style={{ width: `${82 + activeDomain * 4}%` }} /></i><strong>{82 + activeDomain * 4}%</strong></div>
            <button className="hyper-hot small" onClick={() => scrollTo('domains')}>ENTER DOMAIN <HiArrowRight /></button>
          </div>
        </div>
      </section>

      <section className="hyper-section velocity-section">
        <div className="velocity-bg"><div className="velocity-ring r1" /><div className="velocity-ring r2" /><div className="velocity-ring r3" /></div>
        <div className="velocity-copy"><p className="overline">03 / ENGINEERING VELOCITY</p><h2>IDEAS MOVE<br /><span>FAST HERE.</span></h2><p>From first-year experiments to serious engineering builds, ASTRA is designed around action — workshops, projects, competitions and people who actually make things.</p></div>
        <div className="velocity-stats"><div><strong>24/7</strong><span>BUILD MINDSET</span></div><div><strong>04</strong><span>CORE DOMAINS</span></div><div><strong>∞</strong><span>EXPERIMENTS</span></div></div>
      </section>

      <section className="hyper-section terminal-zone">
        <div className="terminal-glitch">ASTRA_OS</div>
        <div className="terminal-window"><div className="terminal-bar"><span>ASTRA // SECURE TERMINAL</span><b>● ● ●</b></div><div className="terminal-lines"><p><i>01</i> root@astra:~$ <strong>scan --systems</strong></p><p className="ok">[OK] aerospace interface detected</p><p className="ok">[OK] robotics stack responding</p><p className="ok">[OK] AI inference core online</p><p className="ok">[OK] communications mesh linked</p><p><i>06</i> root@astra:~$ <strong className="cursor-type">build --future</strong></p></div><button onClick={() => scrollTo('register')} className="terminal-cta"><HiLightningBolt /> ACCESS ASTRA <HiArrowRight /></button></div>
      </section>

      <section className="hyper-final">
        <div className="final-sun" /><div className="final-grid" />
        <div className="final-copy"><p className="overline">04 / NEXT OPERATOR</p><h2>YOUR<br /><span>MISSION</span><br />STARTS NOW.</h2><p>Bring the curiosity. Bring the prototype. Bring the impossible-looking idea.</p><button className="hyper-hot" onClick={() => scrollTo('register')}>JOIN ASTRA <HiArrowRight /></button></div>
        <div className="final-code">ASTRA<br /><small>BMSIT&amp;M // BENGALURU</small></div>
      </section>
    </motion.div>
  );
};

export default Home;
