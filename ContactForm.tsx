import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@korbani.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full border-2 border-sand/60 bg-[#fffdf9] px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 transition-all focus:border-sumac focus:outline-none focus:ring-2 focus:ring-sumac/20 rounded-soft';

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">
          {/* Info side — warm parchment with arches */}
          <div className="relative overflow-hidden border-2 border-sand/60 bg-[#fffdf9] p-10 pb-12 lg:p-12 rounded-soft">
            {/* Decorative arch */}
            <div className="pointer-events-none absolute -right-28 -top-28 z-0 hidden h-64 w-64 rounded-arch border-2 border-terracotta/20 sm:block" />

            <div className="relative z-10">
              <p className="section-kicker">Get In Touch</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Visit or Call Us
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/70">
                Have a question about our products or need to place a large order?
                Reach out — we would love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <a href="tel:9786862268" className="group flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-sumac bg-parchment text-sumac transition-colors group-hover:bg-sumac group-hover:text-white rounded-soft">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/50">Phone</p>
                    <p className="mt-0.5 text-lg font-bold text-sumac">(978) 686-2268</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=77+Swan+Street+Methuen+MA+01844"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-sumac bg-parchment text-sumac transition-colors group-hover:bg-sumac group-hover:text-white rounded-soft">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/50">Address</p>
                    <p className="mt-0.5 text-lg font-bold text-sumac underline decoration-sumac/30 underline-offset-4 group-hover:decoration-sumac">
                      77 Swan Street<br />Methuen, MA 01844
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-sumac bg-parchment text-sumac rounded-soft">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/50">Hours</p>
                    <p className="mt-0.5 text-sm leading-relaxed font-semibold text-charcoal">
                      Mon – Fri: 6:30 AM – 5:30 PM<br />
                      Sat: 6:30 AM – 5:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="border-2 border-sand/60 bg-parchment p-10 lg:p-12 rounded-soft">
            <h3 className="font-serif text-2xl font-bold text-ink">Send Us a Message</h3>
            <p className="mt-2 text-sm text-charcoal/70">
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center border-2 border-pistachio bg-pistachio/10 p-10 text-center rounded-soft">
                <CheckCircle2 className="h-14 w-14 text-pistachio" />
                <p className="mt-4 font-serif text-lg font-bold text-ink">Message Ready!</p>
                <p className="mt-1 text-sm text-charcoal/70">
                  Your email app should have opened with your message. Thank you for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-charcoal">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-charcoal">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(978) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2.5 border-2 border-sumac bg-sumac px-6 py-4 text-base font-semibold text-white shadow-warm transition-all hover:bg-ink hover:border-ink rounded-soft"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
