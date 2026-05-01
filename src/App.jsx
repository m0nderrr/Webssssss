import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const navLinks = ['Home', 'Projects', 'Services', 'Studio', 'Contact']

const projects = [
  { n: '01', title: 'Olive Residence', category: 'Residential', year: '2026', desc: 'A secluded hillside villa shaped around courtyards and filtered daylight.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80' },
  { n: '02', title: 'Sandstone Courtyard', category: 'Hospitality', year: '2025', desc: 'A calm retreat anchored by tactile stone textures and shaded walkways.', img: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80' },
  { n: '03', title: 'The Green Atrium', category: 'Commercial', year: '2024', desc: 'A workplace ecosystem with layered gardens and adaptable collaborative zones.', img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80' },
  { n: '04', title: 'Beige Horizon Villa', category: 'Luxury Living', year: '2026', desc: 'A coastal home balancing minimal planes, warm tones, and panoramic views.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80' },
]

const services = ['Residential Architecture', 'Commercial Design', 'Interior Architecture', 'Landscape Integration', '3D Visualization', 'Project Consultation']

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } }

function Preloader({ done }) {
  useEffect(() => { const t = setTimeout(done, 2900); return () => clearTimeout(t) }, [done])
  return <motion.div className="fixed inset-0 z-[100] bg-beige flex items-center justify-center overflow-hidden" exit={{ opacity: 0 }}>
    <motion.div className="text-center text-olive">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center justify-center gap-3 font-display tracking-[0.3em]"><span className="w-8 h-[1px] bg-olive"/>ATELIER VERDE</motion.div>
      <motion.svg width="320" height="70" viewBox="0 0 320 70" className="mx-auto mb-8"><motion.path d="M6 60 L60 12 L140 48 L220 18 L314 58" fill="none" stroke="#2F3A2D" strokeWidth="1.4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.3 }}/></motion.svg>
      <motion.h1 className="font-display text-4xl md:text-6xl tracking-editorial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>DESIGNING QUIET LUXURY</motion.h1>
    </motion.div>
    <motion.div className="absolute inset-x-0 bottom-0 h-1/2 bg-olive" initial={{ y: '100%' }} animate={{ y: ['100%', '88%', '100%'] }} transition={{ duration: 2.7, times: [0, 0.7, 1] }} />
  </motion.div>
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const yImg = useTransform(scrollYProgress, [0, 0.4], ['0%', '8%'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const serviceRows = useMemo(() => services.map((s) => ({ name: s, desc: 'Context-driven design with restrained, timeless detailing.' })), [])

  return <div className="bg-ivory text-charcoal font-body">
    <AnimatePresence>{!loaded && <Preloader done={() => setLoaded(true)} />}</AnimatePresence>
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[92%] max-w-7xl transition-all duration-300 ${scrolled ? 'bg-ivory/85 backdrop-blur border border-stone shadow-sm' : 'bg-transparent' } rounded-full px-5 py-3`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-olive"/><span className="font-display tracking-[0.2em] text-sm">ATELIER VERDE</span></div>
        <nav className="hidden md:flex items-center gap-7 text-sm">{navLinks.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-sage">{n}</a>)}</nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:block border border-olive text-olive px-4 py-2 rounded-full text-sm hover:bg-olive hover:text-ivory transition">Start a Project</button>
          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)}>{mobileOpen ? <FiX/> : <FiMenu/>}</button>
        </div>
      </div>
      {mobileOpen && <div className="md:hidden mt-3 pt-3 border-t border-stone grid gap-2">{navLinks.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="py-1">{n}</a>)}</div>}
    </header>

    <main>
      <section id="home" className="min-h-screen pt-36 pb-20 px-5 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-end">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <p className="text-xs tracking-[0.3em] text-sage mb-5">RESIDENTIAL / COMMERCIAL / INTERIOR</p>
          <h1 className="font-display text-[3.1rem] sm:text-[4.8rem] lg:text-[7rem] leading-[0.9] tracking-[0.03em]">ARCHITECTURE<br/>SHAPED BY<br/><span className="text-sage">NATURE</span></h1>
          <p className="mt-7 max-w-md text-charcoal/75">Based on timeless materiality and modern restraint, we craft spaces that age with grace.</p>
          <div className="mt-8 flex flex-wrap gap-3"><button className="px-6 py-3 rounded-full bg-olive text-ivory">Explore Projects</button><button className="px-6 py-3 rounded-full border border-charcoal/30">Book Consultation</button></div>
        </motion.div>
        <motion.div style={{ y: yImg }} className="relative h-[62vh] rounded-[28px] overflow-hidden shadow-editorial"><motion.img initial={{ scale: 1.12, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 0.25 }} src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" /><div className="absolute bottom-5 left-5 bg-ivory/85 px-4 py-2 rounded-full text-xs tracking-wider">Green + Beige Identity</div></motion.div>
      </section>

      <section className="py-24 px-5 md:px-10 text-center"><motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 28 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-3xl md:text-5xl leading-[1.2] font-display">We design <span className="text-sage">spaces</span> that feel <span className="text-beige">calm</span>, functional, and deeply connected to their surroundings.</motion.p></section>

      <section id="projects" className="py-20 px-5 md:px-10 max-w-7xl mx-auto">
        <h2 className="font-display text-5xl mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-12 gap-6">{projects.map((p,i)=><motion.article key={p.title} whileHover={{ y: -8 }} className={`group overflow-hidden rounded-2xl bg-white border border-stone/70 shadow-sm ${i===0?'md:col-span-7':'md:col-span-5'}`}><div className="overflow-hidden h-64"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/></div><div className="p-6"><p className="text-xs tracking-[0.3em] text-sage mb-2">{p.n}</p><h3 className="font-display text-3xl mb-2">{p.title}</h3><p className="text-sm mb-1">{p.category} · {p.year}</p><p className="text-charcoal/70 text-sm">{p.desc}</p></div></motion.article>)}</div>
      </section>

      <section id="services" className="py-20 bg-stone/35 px-5 md:px-10"><div className="max-w-6xl mx-auto"><h2 className="font-display text-5xl mb-8">Services</h2>{serviceRows.map((s, idx)=><div key={s.name} className="group border-t border-charcoal/15 py-6 grid md:grid-cols-3 gap-4 hover:bg-sage/20 transition px-2"><p className="text-sm text-sage">0{idx+1}</p><h3 className="font-display text-2xl">{s.name}</h3><p className="text-sm text-charcoal/70 flex justify-between items-start gap-3">{s.desc}<FiArrowUpRight className="mt-1"/></p></div>)}</div></section>

      <section id="studio" className="py-24 px-5 md:px-10 max-w-6xl mx-auto"><h2 className="font-display text-6xl mb-8">WHY CHOOSE US?</h2>{['Thoughtful Planning','Natural Material Palette','Modern Minimalist Design','Functional Luxury'].map((item,i)=><div key={item} className="border-t border-charcoal/20 py-8 grid md:grid-cols-12 gap-4"><p className="md:col-span-2 text-sage">0{i+1}</p><h3 className="md:col-span-4 font-display text-2xl">{item}</h3><p className="md:col-span-6 text-charcoal/70">Every decision is rooted in proportion, context, and longevity so each project feels effortless in daily life.</p></div>)}</section>

      <section className="py-24 px-5 md:px-10 bg-olive text-ivory"><div className="max-w-6xl mx-auto"><h2 className="font-display text-5xl mb-10">Process</h2><div className="grid md:grid-cols-4 gap-6">{['Discover','Concept','Design Development','Delivery'].map((step,i)=><motion.div key={step} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:25}} viewport={{once:true}} transition={{delay:i*0.1}} className="border-t border-ivory/40 pt-4"><p className="text-xs mb-2">0{i+1}</p><h3 className="font-display text-2xl">{step}</h3></motion.div>)}</div></div></section>

      <section id="contact" className="py-24 px-5 md:px-10"><div className="max-w-6xl mx-auto rounded-3xl bg-beige p-10 md:p-14 text-olive"><h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Let’s design a space that lasts.</h2><button className="mt-8 px-6 py-3 rounded-full bg-olive text-ivory">Start Your Project</button><div className="mt-10 grid md:grid-cols-3 gap-4 text-sm"><p>email@example.com</p><p>+000 000 000</p><p>Location</p></div></div></section>
    </main>

    <footer className="px-5 md:px-10 pb-10"><div className="max-w-7xl mx-auto pt-8 border-t border-stone flex flex-wrap justify-between gap-3 text-sm"><p className="font-display tracking-[0.2em]">ATELIER VERDE</p><p>Instagram · Behance · LinkedIn</p><p>© 2026 Atelier Verde</p></div></footer>
  </div>
}
