import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-ink pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38301350/pexels-photo-38301350.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="A generous spread of Middle Eastern dishes and warm bread"
          className="h-full w-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[636px] max-w-6xl flex-col items-center justify-center px-6 pb-16 text-center lg:px-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-sumac shadow-2xl shadow-ink/40">
          <WheatMark className="h-12 w-12 text-white" />
        </div>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
          Since 1994 · Methuen, Massachusetts
        </p>

        <h1 className="mt-8 max-w-5xl font-sans text-5xl font-black uppercase leading-[0.94] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
          Taste the tradition.
          <span className="block text-sand">Love every bite.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base font-medium uppercase tracking-[0.16em] text-white/85 sm:text-lg">
          Fresh pita bread · handmade deli foods · family recipes
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:9786862268"
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-sumac bg-sumac px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-sumac/30 transition-all hover:bg-white hover:text-sumac"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Order by phone
          </a>
          <a
            href="#services"
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ink"
          >
            View our menu
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/80">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=77+Swan+Street+Methuen+MA+01844"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <MapPin className="h-4 w-4 text-white" />
            77 Swan Street, Methuen, MA
          </a>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-white" />
            Mon–Fri 6:30am–5:30pm · Sat 6:30am–5pm
          </span>
        </div>
      </div>
    </section>
  );
}

function WheatMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 43V12" />
      <path d="M24 22 14 15" />
      <path d="M24 28 34 21" />
      <path d="M24 34 14 27" />
      <path d="M24 16 34 9" />
      <path d="M14 15c-5-1-7-4-7-8 5 0 8 3 7 8Z" />
      <path d="M34 21c5-1 7-4 7-8-5 0-8 3-7 8Z" />
      <path d="M14 27c-5-1-7-4-7-8 5 0 8 3 7 8Z" />
      <path d="M34 9c5-1 7-4 7-8-5 0-8 3-7 8Z" />
    </svg>
  );
}
