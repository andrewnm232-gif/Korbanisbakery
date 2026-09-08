import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria H.',
    location: 'Lawrence, MA',
    rating: 5,
    text: 'The pita bread is the best I have ever had — always fresh and soft. I have been coming here for years and the quality never changes. A true Methuen gem.',
  },
  {
    name: 'Joseph K.',
    location: 'Andover, MA',
    rating: 5,
    text: 'Their grape leaves and stuffed squash taste just like my grandmother used to make. You can tell everything is made with love and real tradition.',
  },
  {
    name: 'Diana R.',
    location: 'Lowell, MA',
    rating: 5,
    text: 'I ordered a large platter for a family gathering and everyone raved. The staff was so helpful when I called ahead. Highly recommend for catering!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Customer Love</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
            We have been proudly serving the Merrimack Valley community for over three decades.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative border-2 border-sand/60 bg-[#fffdf9] p-8 shadow-tactile transition-all duration-300 hover:-translate-y-1 hover:border-sumac/40 rounded-soft ${
                i === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-terracotta/30" />

              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-terracotta text-terracotta" />
                ))}
              </div>

              <p className="mt-5 text-base leading-relaxed text-charcoal/80">"{t.text}"</p>

              <div className="mt-6 flex items-center gap-3 border-t-2 border-sand/50 pt-5">
                <div className="flex h-11 w-11 items-center justify-center border-2 border-sumac bg-parchment text-sm font-bold text-sumac rounded-soft">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-charcoal/60">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
