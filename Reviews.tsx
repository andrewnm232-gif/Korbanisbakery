import { useState } from 'react';
import { Star, Quote, ChevronDown } from 'lucide-react';

const reviews = [
  {
    name: 'Michelle Richardson',
    meta: 'Local Guide · 20 reviews · 15 photos',
    time: '5 years ago',
    text: 'If I could give this place a perfect 10 I would...5 is definitely not enough stars. The most AHHHMAZING FALAFEL WRAP I HAVE EVERRRRRRR HAD!!! Everything is made to order and just the way you love it...down to the tiniest detail!',
  },
  {
    name: 'Alexandra Soto',
    meta: 'Local Guide · 32 reviews · 8 photos',
    time: 'a year ago',
    text: "I've been coming here for about 10 plus years. They make the best kebee, best hummus and the pita bread is always soft, warm. Everyone is always friendly professional. I am Dominican and they always receive me and everyone that walks in like a family member. I give them a Million stars.",
  },
  {
    name: 'Anastasia Marie',
    meta: 'Local Guide · 32 reviews · 34 photos',
    time: '6 years ago',
    text: "If you're not getting your fresh-out-of-the-oven pita bread and all of your Lebanese goods here, what are you even doing? I come regularly to re-up on bread, hummus, lebneh and occasionally hit their counter for prepared foods.",
  },
  {
    name: 'April Wilson',
    meta: 'Local Guide · 35 reviews · 9 photos',
    time: '11 months ago',
    text: "I love visiting my family out east and bringing an extra suitcase specifically for the Syrian Bread from Korbani's. Such a great variety of items and their fresh food is AMAZING too!",
  },
  {
    name: 'Mia Sorcinelli',
    meta: 'Local Guide · 16 reviews',
    time: '10 years ago',
    text: "The people who work here are so kind and friendly. The food is amazing--best hummus and pita I've ever had. I can't stand any other hummus now. I also love the zaatar bread and veggie grape leaves. My children adore the hummus and eat it by the spoonful!",
  },
  {
    name: 'sarah madden',
    meta: 'Local Guide · 17 reviews · 13 photos',
    time: '2 years ago',
    text: "Korbani's is literally the best! The food is prepared daily and is always so fresh and everyone is soooo nice! I can't get enough of their hummus, and I can't eat any other hummus from anywhere else because no one else compares.",
  },
  {
    name: 'Nicole Allard',
    meta: 'Local Guide · 92 reviews · 58 photos',
    time: '5 years ago',
    text: 'Great prices, DELICIOUS food, and friendly staff. We all fought over the last piece of bread! The hummus, eggplant dip and grape leaves (offered in meat or vegetarian) are definitely going to be regulars in our house!',
  },
  {
    name: 'Kathleen Kelley',
    meta: 'Local Guide · 12 reviews',
    time: '3 years ago',
    text: "Korbani's is the most amazing, authentic Lebanese bakery and market anywhere! All their offerings are wonderful! Great place to pick up fresh bread, lunch wraps or fabulous dinner items.",
  },
  {
    name: 'Jimmy Abraham, Jr',
    meta: 'Local Guide · 103 reviews · 33 photos',
    time: 'a year ago',
    text: 'The very best, authentic Middle Eastern food to be found anywhere. The food is prepared on site and the bakery is family owned and operated. The bread is the best you can buy anywhere in New England. 5 Stars every time!',
  },
  {
    name: 'Ahmad A',
    meta: 'Local Guide · 523 reviews · 12,230 photos',
    time: '8 years ago',
    text: 'They make the best falafel sandwich in America. Ask for it. Ask for No onion.',
  },
  {
    name: 'Richard Kelley',
    meta: 'Local Guide · 43 reviews · 1 photo',
    time: 'a year ago',
    text: 'Never disappoints! Best bread, best AUTHENTIC food in the commonwealth, bar none. We drive almost two hours to go there. Great food! Outstanding people!',
  },
  {
    name: 'Omar Alazzawi',
    meta: 'Local Guide · 55 reviews · 19 photos',
    time: '7 years ago',
    text: 'After eating some of their hummus and falafel at my job event, i couldn\'t stop myself from driving all the way from lynn to them. Such a high quality food. Very clean and tasteful.',
  },
  {
    name: 'Mary Conant',
    meta: 'Local Guide · 646 reviews · 994 photos',
    time: '4 years ago',
    text: 'This is a great place to get all of your take home Lebanese food. The best Lebanese (pita) bread anywhere, always fresh. Also hummus, tabbouli, grape leaves with or without meat, kibbie and so many other choices. Very reasonable prices as well. You will not be disappointed.',
  },
  {
    name: 'Gloria Vela',
    meta: 'Local Guide · 18 reviews',
    time: '5 years ago',
    text: 'Best pita bread around, always fresh. Sometimes they do run out so get there earlier in the day. Also have a large variety of Lebanese food to take out, plus sandwiches they make fresh. It is also a Lebanese grocery store with a large selection of imported items. Family operated and they are very helpful and always pleasant.',
  },
  {
    name: 'Mary Bilodeau',
    meta: 'Local Guide · 26 reviews · 5 photos',
    time: 'a year ago',
    text: "Korbani's has the best Lebanese food! I just loaded up on my family's favorites last weekend. And we split a steak shawarma wrap because we were hangry. It was delicious. I will be stopping back for a wrap whenever I am in the neighborhood.",
  },
];

export default function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Google Reviews</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            More Reviews From Our Customers
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-terracotta text-terracotta" />
              ))}
            </div>
            <span className="text-lg font-bold text-ink">4.8</span>
            <span className="text-sm text-charcoal/60">· 550 reviews on Google</span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between border-2 border-sumac/30 bg-[#fffdf9] px-6 py-4 text-left transition-all hover:border-sumac rounded-soft"
          >
            <span className="text-sm font-bold text-sumac">
              {open ? 'Hide reviews' : 'Read a selection of our Google reviews'}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-sumac transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="break-inside-avoid border-2 border-sand/60 bg-[#fffdf9] p-6 shadow-warm transition-all duration-300 hover:border-sumac/40 rounded-soft"
                >
                  <Quote className="h-8 w-8 text-terracotta/30" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{r.text}</p>
                  <div className="mt-5 flex items-center gap-3 border-t-2 border-sand/50 pt-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-sumac bg-parchment text-sm font-bold text-sumac rounded-soft">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink">{r.name}</p>
                      <p className="text-xs text-charcoal/60">{r.meta}</p>
                    </div>
                    <span className="ml-auto text-xs text-charcoal/50">{r.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
