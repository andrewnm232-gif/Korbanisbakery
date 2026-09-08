import { Check, Heart, Award, Clock } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Family Owned', text: 'Three decades of family tradition in every bite.' },
  { icon: Award, title: 'Made From Scratch', text: 'No shortcuts — everything is prepared the old-fashioned way.' },
  { icon: Clock, title: 'Fresh Daily', text: 'Bread and deli foods baked and prepared every single day.' },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side — overlapping arches */}
          <div className="relative">
            {/* Back arch — terracotta outline */}
            <div className="absolute -top-6 -left-6 h-full w-full rounded-arch border-2 border-terracotta/30" />
            {/* Main image arch */}
            <div className="relative overflow-hidden rounded-arch border-2 border-sand/60 shadow-warm">
              <img
                src="https://images.pexels.com/photos/9482666/pexels-photo-9482666.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Freshly baked artisan bread on a floured surface"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 border-2 border-sumac bg-[#fffdf9] px-7 py-5 text-center shadow-tactile rounded-soft sm:-right-6">
              <p className="font-serif text-4xl font-bold text-sumac">30+</p>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.16em] text-charcoal/60">Years of Tradition</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-kicker">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              A Family Tradition of
              <span className="text-sumac"> Authentic Middle Eastern Baking</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70">
              <p>
                Korbani's Bakery is a family-owned business that has been making traditional
                Middle Eastern pita and deli foods for over thirty years. From the bread to
                the deli foods — grape leaves, cabbage rolls, stuffed squash and more — we
                take pride in making all our products from scratch, the old-fashioned way.
              </p>
              <p>
                If you are looking for authentic Middle Eastern pita, deli foods, or a
                sandwich, our location is easily accessible from Route 495. For pricing or
                large orders, please call ahead.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                'All products made from scratch daily',
                'Traditional family recipes passed down for generations',
                'Easily accessible from Route 495 in Methuen',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border-2 border-pistachio bg-pistachio/10 text-pistachio rounded-soft">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-sand/50 pt-8">
              {values.map((v) => (
                <div key={v.title}>
                  <v.icon className="h-7 w-7 text-sumac" />
                  <p className="mt-2 text-sm font-bold text-ink">{v.title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-charcoal/60">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
