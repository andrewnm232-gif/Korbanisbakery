import { Phone, MapPin } from 'lucide-react';

function Wheat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M15.47 12.53 17 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L17 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M19.47 8.53 21 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L21 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center border-2 border-terracotta bg-ink text-terracotta rounded-soft">
                <Wheat className="h-5 w-5" />
              </span>
              <span className="font-serif text-lg font-bold text-white">Korbani's Bakery</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/60">
              Family-owned, authentic Middle Eastern pita and deli foods,
              made from scratch for over thirty years.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">Visit Us</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=77+Swan+Street+Methuen+MA+01844"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-3 text-sand/60 transition-colors hover:text-terracotta"
            >
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" />
              <p className="text-sm leading-relaxed underline decoration-sand/20 underline-offset-4 hover:decoration-terracotta">
                77 Swan Street<br />Methuen, MA 01844
              </p>
            </a>
            <div className="mt-3 flex items-center gap-3 text-sand/60">
              <Phone className="h-5 w-5 flex-shrink-0 text-terracotta" />
              <a href="tel:9786862268" className="text-sm font-medium hover:text-terracotta">
                (978) 686-2268
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">Hours</p>
            <ul className="mt-4 space-y-1.5 text-sm text-sand/60">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="font-medium text-sand/80">6:30 AM – 5:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-sand/80">6:30 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-sumac">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/15 pt-6 text-center">
          <p className="text-xs text-sand/40">
            © {new Date().getFullYear()} Korbani's Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
