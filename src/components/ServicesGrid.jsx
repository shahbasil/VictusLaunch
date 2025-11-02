import OutlineIcon from './OutlineIcon'

export default function ServicesGrid() {
  const benefits = [
    { iconName: 'fastest', title: 'Fastest Listing Process', description: 'Streamlined workflows for rapid exchange approvals' },
    { iconName: 'reverse', title: 'Reverse Rejections', description: 'Transform declined applications into approved listings' },
    { iconName: 'cheapest', title: 'Cheapest Deals', description: 'Optimized pricing for maximum value at minimum cost' },
    { iconName: 'guaranteed', title: 'Guaranteed Approval', description: 'Highest success rates across all exchanges' },
    { iconName: 'packaging', title: 'Professional Packaging', description: 'Premium project presentation and positioning' },
    { iconName: 'lifetime', title: 'Lifetime Support', description: 'Ongoing assistance beyond the initial listing' },
    { iconName: 'protection', title: 'Token Protection', description: 'Advanced safeguards against market manipulation' },
    { iconName: 'compliance', title: 'Compliance & Docs', description: 'Complete legal packaging and documentation' },
    { iconName: 'relationships', title: 'Direct Relationships', description: 'Established connections with exchange teams' },
    { iconName: 'market', title: 'Market Making', description: 'Expert liquidity management and strategy' },
    { iconName: 'monitoring', title: '24/7 Monitoring', description: 'Round-the-clock support and oversight' },
    { iconName: 'post', title: 'Post-Listing Care', description: 'Comprehensive post-launch protection' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-victus-card/50 to-victus-bg relative overflow-hidden">
      {/* Wavy Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8A3BFF" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 300 50, 600 80 T 1200 70"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            className="animate-wave"
          />
          <path 
            d="M 0 200 Q 400 150, 800 180 T 1200 170"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            className="animate-wave"
            style={{ animationDelay: '0.5s' }}
          />
          <path 
            d="M 0 300 Q 350 250, 700 280 T 1200 270"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            className="animate-wave"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-victus-text">Why Victus</span>{' '}
            <span className="text-gradient">Launch</span>
          </h2>
          <p className="text-xl text-victus-text-light max-w-3xl mx-auto">
            The most trusted partner for centralized exchange listings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Glowing Dots */}
              <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-pulse-glow"></div>
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>

              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <OutlineIcon name={benefit.iconName} />
                </div>
                <h3 className="font-display text-base font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors text-center">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

