import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowDown, HiArrowRight, HiPlay, HiRefresh } from 'react-icons/hi';
import { GiBrain, GiDeliveryDrone, GiSatelliteCommunication, GiRobotLeg } from 'react-icons/gi';

const domains = [
  { no:'01', code:'AERO', title:'AEROSPACE', icon:GiDeliveryDrone, desc:'UAVs, flight systems, propulsion and autonomous platforms.', metric:'FLIGHT SYSTEMS', value:'84%' },
  { no:'02', code:'ROBO', title:'ROBOTICS', icon:GiRobotLeg, desc:'Embedded control, sensing, actuation and intelligent machines.', metric:'AUTONOMY', value:'76%' },
  { no:'03', code:'AIML', title:'AI / ML', icon:GiBrain, desc:'Vision, edge intelligence and autonomous decision systems.', metric:'EDGE AI', value:'91%' },
  { no:'04', code:'COMMS', title:'CYBER / RF', icon:GiSatelliteCommunication, desc:'Secure networks, RF systems and strategic communications.', metric:'SIGNAL', value:'88%' },
];

function RocketVisual({ replay }) {
  const [run, setRun] = useState(false);
  useEffect(() => { const t = setTimeout(() => setRun(true), 350); return () => clearTimeout(t); }, []);
  const restart = () => { setRun(false); requestAnimationFrame(() => setRun(true)); };
  const click = () => { restart(); replay?.(); };
  return (
    <div className="flight-visual">
      <div className="flight-grid" />
      <div className="flight-glow" />
      <div className="orbit orbit-1" /><div className="orbit orbit-2" />
      <div className="target-zone"><span>LANDING ZONE</span><b>ASTRA-01</b><i /></div>
      <div className="flight-axis x" /><div className="flight-axis y" />
      <div className="rocket-object" onClick={click} role="button" tabIndex={0} onKeyDown={(e)=>e.key==='Enter'&&click()} aria-label="Replay launch">
        <motion.div className="rocket-core" animate={run ? { y:[-20,-55,-120,-210,-250,-265], scale:[.9,.92,.95,1,1,1] } : { y:-20 }} transition={{ duration:3.8, ease:[.2,.75,.2,1] }}>
          <div className="rocket-nose"/><div className="rocket-shell"><span>ASTRA</span><small>NX-01</small><i /></div><div className="rocket-fin left"/><div className="rocket-fin right"/><div className="rocket-engine"><b/><b/><b/></div>
        </motion.div>
        <motion.div className="rocket-trail" animate={run ? { height:[40,70,110,160,190,210], opacity:[.3,.55,.8,1,.7,.35] } : { height:40 }} transition={{ duration:3.8 }} />
      </div>
      <div className="flight-readout top-left"><span>FLIGHT COMPUTER</span><b>ONLINE</b><small>GUIDANCE / NOMINAL</small></div>
      <div className="flight-readout top-right"><span>TARGET VECTOR</span><b>084°</b><small>RANGE / 4.2 KM</small></div>
      <div className="flight-readout bottom-left"><span>ALT</span><b>12,840 M</b><span>VEL</span><b>7.8 M</b></div>
      <div className="flight-readout bottom-right"><span>SYSTEM</span><b>READY</b><small>CLICK ROCKET TO REPLAY</small></div>
      <button className="flight-replay" onClick={click}><HiRefresh/> REPLAY LAUNCH</button>
    </div>
  );
}

function DefenseLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);
  const steps = [
    ['01','BOOT','ASTRA defence network initializing'],
    ['02','VECTOR ACQUIRED','Threat trajectory identified'],
    ['03','INTERCEPTOR LAUNCH','Guidance and propulsion online'],
    ['04','TARGET LOCK','Tracking solution confirmed'],
    ['05','INTERCEPTION','Threat neutralized / perimeter secure'],
  ];
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timers = [700,1500,2550,3500,4550].map((ms,i)=>setTimeout(()=>setPhase(i),ms));
    const end=setTimeout(()=>{setDone(true);setTimeout(onComplete,650)},5250);
    return()=>{timers.forEach(clearTimeout);clearTimeout(end);document.body.style.overflow='';};
  },[onComplete]);
  return <motion.div className={`pro-loader ${done?'loader-done':''}`} initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}>
    <div className="loader-grid"/><div className="loader-sweep"/>
    <header><strong>ASTRA // DEFENCE NETWORK</strong><span>SECURE BOOT 07.01</span></header>
    <div className="loader-brand"><small>ARMED SQUAD FOR TACTICAL READINESS & AWARENESS</small><h1>ASTRA<span>.</span></h1></div>
    <div className="loader-scene">
      <div className="loader-earth"/><div className="loader-orbit a"/><div className="loader-orbit b"/>
      <div className="threat"><span>TGT-047</span><i/></div>
      <div className="launch-silo"><span>A</span><i/></div>
      <motion.div className="interceptor-loader" animate={{x:phase>=2?[0,90,210,330,430][Math.min(phase,4)]:0,y:phase>=2?[120,80,25,-40,-95][Math.min(phase,4)]:150,rotate:phase>=2?[0,20,35,48,62][Math.min(phase,4)]:0,opacity:phase===4?[0,1,1,1,0]:1}} transition={{duration:phase>=2?1.05:.4,ease:'easeInOut'}}><b/><i/><em/></motion.div>
      <AnimatePresence>{phase===4&&<motion.div className="intercept-flash" initial={{scale:0,opacity:0}} animate={{scale:1,opacity:[0,1,0]}} transition={{duration:.9}}><span>INTERCEPTED</span></motion.div>}</AnimatePresence>
    </div>
    <div className="loader-info"><div className="loader-step"><small>{steps[phase][0]}</small><div><b>{steps[phase][1]}</b><p>{steps[phase][2]}</p></div></div><div className="loader-progress"><i style={{width:`${(phase+1)*20}%`}}/></div></div>
    <div className="loader-hud"><span>GRID <b>ONLINE</b></span><span>GUIDANCE <b>NOMINAL</b></span><span>NODE <b>BLR-01</b></span><span>STATUS <b>SECURE</b></span></div>
    <footer>DEFENCE / TECHNOLOGY / ENGINEERING <b>ALL SYSTEMS NOMINAL</b></footer>
  </motion.div>;
}

export default function Home(){
  const heroRef=useRef(null); const [loading,setLoading]=useState(true); const [active,setActive]=useState(0); const [time,setTime]=useState('00:00:00'); const [pointer,setPointer]=useState({x:50,y:50}); const [launch,setLaunch]=useState(false);
  const finish=useCallback(()=>setLoading(false),[]);
  useEffect(()=>{const tick=()=>setTime(new Date().toLocaleTimeString('en-IN',{hour12:false}));tick();const id=setInterval(tick,1000);return()=>clearInterval(id)},[]);
  const move=e=>{const r=heroRef.current?.getBoundingClientRect();if(r)setPointer({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})};
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  const replay=()=>{setLaunch(false);requestAnimationFrame(()=>setLaunch(true));setTimeout(()=>setLaunch(false),4000)};
  const particles=useMemo(()=>Array.from({length:28}),[]);
  const ActiveIcon = domains[active].icon;
  return <>
    {loading&&<DefenseLoader onComplete={finish}/>} 
    <div id="home" className="astra-pro">
      <div className="pointer-light" style={{left:`${pointer.x}%`,top:`${pointer.y}%`}}/>
      <div className="pro-progress"/>
      <section ref={heroRef} onMouseMove={move} className={`pro-hero ${launch?'hero-launch':''}`}>
        <div className="hero-grid-pro"/><div className="hero-particles">{particles.map((_,i)=><i key={i} style={{'--n':i}}/>)}</div>
        <div className="hero-meta left">ASTRA / NX-01<br/><b>DEFENCE R&amp;D COLLECTIVE</b></div><div className="hero-meta right">BMSIT&amp;M // BENGALURU<br/><b>13.1341° N / 77.5694° E</b></div>
        <div className="hero-layout">
          <div className="hero-main">
            <div className="eyebrow"><i/> SYSTEM ONLINE <b>07.4 MS</b></div>
            <h1>ASTR<span>A</span><em>.</em></h1>
            <div className="hero-rule"><span>ARMED SQUAD FOR TACTICAL READINESS &amp; AWARENESS</span><i/></div>
            <h2>BUILD THE <strong>FUTURE.</strong></h2>
            <p>A student defence-tech collective turning engineering into real systems — from autonomous machines and aerospace platforms to AI, RF and cyber.</p>
            <div className="hero-actions"><button className="btn-primary" onClick={()=>go('register')}><HiPlay/> INITIATE MISSION</button><button className="btn-secondary" onClick={()=>go('domains')}>EXPLORE DOMAINS <HiArrowRight/></button></div>
            <div className="hero-stats"><div><small>DOMAINS</small><b>04</b></div><div><small>PROJECTS</small><b>10+</b></div><div><small>MISSION</small><b>BUILD</b></div></div>
          </div>
          <div className="hero-flight"><RocketVisual replay={replay}/></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><button onClick={()=>go('about')}><HiArrowDown/></button><span>01 / MISSION PROFILE</span><span>02 / DOMAINS</span><span>03 / REGISTER</span></div>
      </section>
      <div className="pro-marquee"><div>{['DEFENCE TECHNOLOGY','AEROSPACE','AI & AUTONOMY','ROBOTICS','CYBER / RF','STRATEGIC AWARENESS'].map((x,i)=><span key={i}>{x}<b>◆</b></span>)}</div></div>
      <section className="mission-pro" id="about"><div className="section-tag">01 <span>MISSION PROFILE</span></div><div className="mission-grid"><div><p className="display-line">ENGINEERING<br/><strong>WITH PURPOSE.</strong></p><p className="muted">ASTRA is built around one idea: give students a place to move beyond theory and build systems that matter.</p><button className="text-link" onClick={()=>go('contact')}>MEET THE COLLECTIVE <HiArrowRight/></button></div><div className="mission-visual"><div className="radar"><i/><i/><i/><b>A</b></div><div className="radar-data"><span>PERIMETER</span><b>SECURE</b><span>READINESS</span><b>94%</b><span>ACTIVE NODES</span><b>04</b></div></div></div></section>
      <section className="domains-pro" id="domains"><div className="section-tag">02 <span>MISSION DOMAINS</span></div><div className="domain-head"><h2>CHOOSE YOUR<br/><strong>VECTOR.</strong></h2><p>Select a domain. The system will load its focus profile.</p></div><div className="domain-console"><div className="domain-list">{domains.map((d,i)=>{const Icon=d.icon;return <button key={d.code} className={active===i?'active':''} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)}><span>{d.no}</span><Icon/><div><b>{d.title}</b><small>{d.code}</small></div><HiArrowRight/></button>})}</div><AnimatePresence mode="wait"><motion.div key={domains[active].code} className="domain-detail" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}><div className="domain-orbit"><div className="domain-icon"><ActiveIcon /></div><span>ASTRA / {domains[active].code}</span></div><div><small>ACTIVE VECTOR</small><h3>{domains[active].title}</h3><p>{domains[active].desc}</p><div className="meter"><span style={{width:domains[active].value}}/></div><div className="detail-foot"><b>{domains[active].value}</b><span>{domains[active].metric}</span></div></div></motion.div></AnimatePresence></div></section>
      <section className="command-pro" id="register"><div className="command-top"><span>03 / ACCESS TERMINAL</span><b>SECURE CHANNEL</b></div><div className="command-body"><div><small>READY WHEN YOU ARE</small><h2>ENTER<br/><strong>ASTRA.</strong></h2><p>Build. Experiment. Compete. Connect with people working at the edge of engineering.</p><button className="btn-primary" onClick={()=>go('contact')}>REQUEST ACCESS <HiArrowRight/></button></div><div className="terminal"><div className="terminal-bar"><span>ASTRA.OS</span><i/><i/><i/></div><div className="terminal-body"><p>&gt; initialise_member()</p><p>&gt; scan_domains()</p><p>&gt; establish_channel<span className="cursor">_</span></p><p className="ok">ACCESS WINDOW OPEN</p><button onClick={()=>go('contact')}>[ ENTER ASTRA ]</button></div></div></div></section>
    </div>
  </>;
}
