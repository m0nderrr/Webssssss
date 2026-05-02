import { FiArrowUpRight, FiHome, FiMenu, FiSearch, FiUser, FiX } from 'react-icons/fi'
import { useState } from 'react'

const navLinks = ['Home', 'Properties', 'Buy', 'Rent', 'Find Agent', 'Contact']

const stats = [
  ['10K', 'Happy clients'],
  ['5K', 'Properties sold'],
  ['15+', 'Cities covered'],
]

const features = [
  ['Instant', 'Property Search', 'Discover homes and apartments with just a few clicks.'],
  ['Verified', 'Pro Listings', '100% verified and updated property details.'],
  ['Smart', 'Investing Insights', 'Personalized recommendations to grow your wealth.'],
  ['Real Time', 'Property Updates', 'Get instant alerts on new listings and price changes.'],
]

const heroImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90'
const detailImage = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 flex items-center justify-between gap-4 text-[10px] uppercase tracking-wide">
      <a href="#home" className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 bg-paper">
        <FiHome className="text-base" />
      </a>

      <nav className="hidden items-center gap-7 md:flex">
        {navLinks.map((link, index) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="group flex items-center gap-5 text-ink/60 transition hover:text-ink">
            <span className={index === 0 ? 'text-ink' : ''}>{link}</span>
            {index < navLinks.length - 1 && <span className="h-1 w-1 rounded-full bg-sky" />}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-2 md:flex">
        <button className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper" aria-label="Search">
          <FiSearch />
        </button>
        <button className="flex h-8 items-center gap-2 rounded-full border border-ink/20 px-3">
          <FiUser />
          Sign In
        </button>
      </div>

      <button className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-12 grid gap-2 rounded-[18px] border border-ink/10 bg-paper p-4 shadow-poster md:hidden">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="rounded-full bg-soft px-4 py-3">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function StatColumn() {
  return (
    <div className="grid gap-5 text-right">
      {stats.map(([value, label]) => (
        <div key={label}>
          <p className="font-display text-3xl leading-none tracking-normal md:text-4xl">{value}</p>
          <p className="mt-1 text-[9px] uppercase tracking-wide text-ink/55">{label}</p>
        </div>
      ))}
    </div>
  )
}

function FeatureCard({ item, index }) {
  const [lineOne, lineTwo, copy] = item
  const dark = index === 1

  return (
    <article className={`group flex min-h-36 flex-col justify-between rounded-[14px] p-5 transition ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-56 text-right font-display text-2xl uppercase leading-[0.9] tracking-normal">
          {lineOne}
          <br />
          {lineTwo}
        </h3>
        <FiArrowUpRight className={`mt-1 shrink-0 text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1 ${dark ? 'text-sky' : 'text-sky-dark'}`} />
      </div>
      <p className={`max-w-48 text-[10px] uppercase leading-snug ${dark ? 'text-paper/55' : 'text-ink/45'}`}>{copy}</p>
    </article>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-frame px-3 py-5 text-ink antialiased sm:px-6 md:py-12">
      <main id="home" className="mx-auto max-w-[1180px] overflow-hidden rounded-none bg-soft p-4 shadow-poster sm:p-6 lg:p-7">
        <Header />

        <section className="relative pt-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_150px]">
            <div>
              <div className="grid items-start gap-4 md:grid-cols-[180px_1fr]">
                <div className="order-2 mt-3 md:order-1 md:mt-32">
                  <p className="mb-3 w-max rounded-full border border-ink/20 bg-paper px-3 py-1 text-[10px] uppercase tracking-wide">Best real estate agency</p>
                  <p className="max-w-44 text-[10px] uppercase leading-snug text-ink/70">
                    Find your dream home, explore premium properties, and invest with confidence through City Arcade.
                  </p>
                </div>

                <div className="order-1 md:order-2">
                  <h1 className="font-display text-[5.4rem] uppercase leading-[0.74] tracking-normal sm:text-[8rem] md:text-[10.5rem] lg:text-[12rem]">
                    City
                    <span className="block pl-[20%]">Arcade</span>
                  </h1>
                </div>
              </div>

              <div className="relative -mt-3 overflow-hidden rounded-[18px] md:-mt-12">
                <img src={heroImage} alt="Modern modular residence" className="h-[360px] w-full object-cover grayscale-[15%] sm:h-[480px] lg:h-[520px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-paper/10" />
                <p className="absolute bottom-5 left-5 max-w-60 font-display text-2xl uppercase leading-none text-paper">
                  Future of living
                  <br />
                  with City Arcade
                </p>
              </div>
            </div>

            <aside className="hidden pt-24 lg:block">
              <StatColumn />
            </aside>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 lg:hidden">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-[14px] bg-paper p-4 text-center">
                <p className="font-display text-3xl leading-none tracking-normal">{value}</p>
                <p className="mt-1 text-[9px] uppercase tracking-wide text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="properties" className="px-2 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-4xl font-display text-4xl uppercase leading-[1.02] tracking-normal md:text-6xl">
            A modern real estate platform, City Arcade incorporates
            <span className="block text-ink/35">advanced digital tools and trusted</span>
            <span className="block text-ink/35">local expertise</span>
          </h2>
        </section>

        <section id="buy" className="grid gap-4 lg:grid-cols-[1fr_1.06fr]">
          <div className="grid gap-4">
            {features.map((item, index) => (
              <FeatureCard key={item[1]} item={item} index={index} />
            ))}
          </div>

          <div className="overflow-hidden rounded-[16px] bg-paper">
            <img src={detailImage} alt="Luxury home exterior" className="h-full min-h-[430px] w-full object-cover grayscale" />
          </div>
        </section>

        <section id="find-agent" className="mt-4 grid overflow-hidden rounded-[16px] bg-bluegray md:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[240px] overflow-hidden">
            <img src={heroImage} alt="Glass residence detail" className="absolute inset-0 h-full w-full object-cover object-left-bottom" />
          </div>
          <div className="flex min-h-[240px] flex-col justify-between p-6 text-right">
            <div>
              <h2 className="font-display text-5xl uppercase leading-[0.82] tracking-normal md:text-7xl">
                Why
                <br />
                CityArcade?
              </h2>
              <a href="#contact" className="mt-3 inline-flex rounded-full border border-ink/20 px-4 py-2 text-[10px] uppercase tracking-wide">
                Why choose us
              </a>
            </div>
            <p className="max-w-64 self-start text-left text-[10px] uppercase leading-snug text-ink/60">
              Stay updated with property valuations, neighborhood trends, and verified local agents.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
