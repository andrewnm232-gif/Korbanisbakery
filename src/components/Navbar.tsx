import { useState } from 'react';
import { Phone, Menu, X, Wheat } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#services' },
  { label: 'Catering', href: '#contact' },
  { label: 'Locations', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_18px_rgba(32,27,24,0.08)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sumac bg-white text-sumac">
            <Wheat className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-ink">
            Korbani's Bakery
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-charcoal/10 bg-parchment/60 p-1 md:flex">
          {links.map((l, index) => (
            <a
              key={`${l.label}-${index}`}
              href={l.href}
              className={`rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
                index === 0
                  ? 'bg-sumac text-white shadow-md shadow-sumac/20'
                  : 'text-charcoal/80 hover:bg-white hover:text-sumac'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="tel:9786862268"
            className="flex items-center gap-2 rounded-full border-2 border-sumac bg-sumac px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-md shadow-sumac/20 transition-all hover:bg-ink hover:border-ink"
          >
            <Phone className="h-4 w-4" />
            Order Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand/40 bg-parchment md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-sand/40 hover:text-sumac"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:9786862268"
              className="mt-2 flex items-center justify-center gap-2 border-2 border-sumac bg-white px-5 py-3 text-sm font-semibold text-sumac rounded-soft"
            >
              <Phone className="h-4 w-4" />
              Call (978) 686-2268
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
