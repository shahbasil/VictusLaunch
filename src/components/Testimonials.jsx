const testimonials = [
  {
    quote: 'Victus Launch streamlined our entire listing process. Reduced our listing cost by 40% and helped us retain over $500K in token value through strategic positioning.',
    author: 'J.K.',
    role: 'Founder, DeFi Project',
    badge: 'Binance',
  },
  {
    quote: 'The team\'s direct relationships with Tier-1 exchanges eliminated months of back-and-forth. We launched on OKX in record time.',
    author: 'M.R.',
    role: 'CEO, Infrastructure Protocol',
    badge: 'OKX',
  },
  {
    quote: 'Their funding structure and OTC support made launching feasible for us. Professional, responsive, and results-driven.',
    author: 'A.S.',
    role: 'CTO, Gaming Token',
    badge: 'MEXC',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-victus-card/50 to-victus-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-victus-text">Trusted by</span>{' '}
            <span className="text-gradient">industry leaders</span>
          </h2>
          <p className="text-xl text-victus-text-light max-w-3xl mx-auto">
            Real results from real projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-victus-card rounded-2xl p-8 border-2 border-victus-border hover:border-victus-violet/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="flex text-2xl mb-4">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-victus-cyan">{star}</span>
                  ))}
                </div>
                <p className="text-victus-text leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-victus-border">
                <div>
                  <p className="font-semibold text-victus-text">{testimonial.author}</p>
                  <p className="text-sm text-victus-text-light">{testimonial.role}</p>
                </div>
                <div className="px-3 py-1 bg-victus-violet/20 rounded-lg">
                  <p className="text-xs font-semibold text-victus-cyan">{testimonial.badge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

