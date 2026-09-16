// NEW CONTENT TO PORT BACK
// FROM CURRENT About.jsx

const focusAreas = [
  { label: "Defence Systems", icon: <GiShield /> },
  { label: "UAVs & Drones", icon: <GiDeliveryDrone /> },
  { label: "Robotics", icon: <GiRobotLeg /> },
  { label: "Cybersecurity", icon: <GiSecurityGate /> },
  { label: "AI in Defence", icon: <GiBrain /> }
];

const teamMembers = [
  { name: "Vaibhav Pandey",     role: "President",                  photo: "/team_heads/ID CARD_page-0008.jpg" },
  { name: "Sharath Y Kudachi",  role: "Vice President",             photo: "/team_heads/ID CARD_page-0015.jpg" },
  { name: "Rakshak M. K.",      role: "Chief Secretary",            photo: "/team_heads/ID CARD_page-0017.jpg" },
  { name: "Sagar Sahoo",        role: "Secretary",                  photo: "/team_heads/ID CARD_page-0006.jpg" },
  { name: "Sushant Bichha",     role: "Treasurer",                  photo: "/team_heads/ID CARD_page-0013.jpg" },
  { name: "Reyyi Shreyash",     role: "Technical Team Head",        photo: "/team_heads/ID CARD_page-0019.jpg" },
  { name: "Varnika Kirani",     role: "Tech. Team Vice Head",       photo: "/team_heads/ID CARD_page-0009.jpg" },
  { name: "Arshad Alam",        role: "Event Team Head",            photo: "/team_heads/ID CARD_page-0011.jpg" },
  { name: "Rakshitha G",        role: "Event Team Vice Head",       photo: "/team_heads/ID CARD_page-0016.jpg" },
  { name: "Sneha C.",           role: "Media Team Head",            photo: "/team_heads/ID CARD_page-0001.jpg" },
  { name: "Siddhartha Patel",   role: "Media Team Vice Head",       photo: "/team_heads/ID CARD_page-0007.jpg" },
  { name: "Prarthana Dilip",    role: "Marketing Team Head",        photo: "/team_heads/ID CARD_page-0003.jpg" },
  { name: "Rakshitha Bhat",     role: "Marketing Team Vice Head",   photo: "/team_heads/ID CARD_page-0018.jpg" },
];

{/* Section C - Intel Gallery */}
<section className="snap-section px-6 overflow-hidden relative z-10 pt-60">
  <ScrollReveal variant="fadeIn">
    <div className="text-center mb-24 flex flex-col items-center">
      <span className="font-rajdhani text-accent-orange/40 text-[10px] tracking-[0.8em] mb-4 uppercase font-black">Visual_Dossier</span>
      <h2 className="text-5xl md:text-8xl font-orbitron font-black uppercase tracking-tighter italic">Mission Gallery</h2>
    </div>

    <div className="relative flex w-full">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          }
        }}
        className="flex space-x-12 min-w-max pb-20 group/marquee"
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`${i}-${num}`} className="w-[500px] h-72 border border-white/5 group relative overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src={`/gallery/inauguration-${num}.jpg`}
                  alt={`Intelligence Capture ${num}`}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-1000"
                  onError={(e) => { e.target.src = `https://picsum.photos/seed/${num + 80}/800/600`; }}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </ScrollReveal>
</section>

{/* Section D - High Command */}
<section className="snap-section px-6 overflow-hidden relative z-10 pt-60 pb-60">
  <ScrollReveal variant="slideUp">
    <div className="text-center mb-32 flex flex-col items-center">
      <span className="font-rajdhani text-accent-orange/40 text-[10px] tracking-[0.8em] mb-4 uppercase font-black">Strategic_Leadership</span>
      <h2 className="text-5xl md:text-8xl font-orbitron font-black uppercase tracking-tighter italic">High Command</h2>
    </div>

    <div className="relative w-full overflow-hidden">
      <div className="marquee-track gap-12 py-10">
        {[...teamMembers, ...teamMembers].map((member, idx) => (
          <div key={idx} className="flex-shrink-0 w-80 bg-white/[0.01] border border-white/10 group relative overflow-hidden pb-10 transition-all duration-500 hover:border-accent-orange/40">
            <div className="w-full h-96 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="px-10 pt-10 text-left">
              <h3 className="text-lg font-orbitron font-black text-text-primary mb-3 uppercase italic leading-none">{member.name}</h3>
              <span className="font-rajdhani text-[11px] uppercase tracking-[0.3em] text-accent-orange/60 font-black italic">[{member.role.toUpperCase()}]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ScrollReveal>
</section>
