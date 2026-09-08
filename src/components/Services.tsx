import { Salad, Sandwich, Phone } from 'lucide-react';

const services = [
  {
    icon: 'wheat',
    title: 'Traditional Pita Bread',
    description:
      'Authentic Middle Eastern pita baked fresh daily, the old-fashioned way — soft, warm, and made from scratch.',
    image: 'https://images.pexels.com/photos/25070490/pexels-photo-25070490.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'salad',
    title: 'Deli Foods & Specialties',
    description:
      'Grape leaves, cabbage rolls, stuffed squash, and more — each dish handcrafted with time-honored family recipes.',
    image: 'https://images.pexels.com/photos/8197794/pexels-photo-8197794.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'sandwich',
    title: 'Fresh Sandwiches',
    description:
      'Made-to-order sandwiches using our own freshly baked pita and premium deli ingredients for a true taste of home.',
    image: 'https://images.pexels.com/photos/37331094/pexels-photo-37331094.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'phone',
    title: 'Large Orders & Catering',
    description:
      'Planning a big event? Call ahead for pricing on large orders and we will prepare everything fresh for your gathering.',
    image: 'https://images.pexels.com/photos/11161419/pexels-photo-11161419.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    wheat: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 16 8" />
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M15.47 12.53 17 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L17 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M19.47 8.53 21 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L21 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      </svg>
    ),
    salad: <Salad className={className} />,
    sandwich: <Sandwich className={className} />,
    phone: <Phone className={className} />,
  };
  return <>{icons[name]}</>;
}

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial header */}
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="section-kicker">What We Offer</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Made From Scratch,
              <span className="text-sumac"> Every Day</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-charcoal/70">
            For over thirty years, our family has been making traditional Middle Eastern
            breads and deli foods the way they were meant to be made.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((s, i) => {
            const span =
              i === 0 ? 'lg:col-span-5' :
              i === 1 ? 'lg:col-span-7' :
              i === 2 ? 'lg:col-span-7' :
              'lg:col-span-5';
            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden border-2 border-sand/60 bg-[#fffdf9] shadow-tactile transition-all duration-300 hover:-translate-y-1 hover:border-sumac/40 rounded-soft ${span}`}
              >
                <div className="relative h-56 overflow-hidden rounded-arch">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start gap-4 p-7">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-sumac/30 bg-parchment text-sumac rounded-soft transition-colors group-hover:border-sumac group-hover:bg-sumac group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{s.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
