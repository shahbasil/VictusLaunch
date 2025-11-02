
export default function Hero({ onContactClick }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-victus-dark via-victus-purple/30 to-victus-charcoal/50">
      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
            <span className="block text-victus-text">List your project</span>
            <span className="block text-gradient">on any centralized exchange.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-victus-text-light max-w-3xl mx-auto leading-relaxed">
            End-to-end exchange listing solutions — consulting, OTC funding, market making, and post-listing protection.
          </p>

          <p className="text-sm text-victus-text-light pt-4 animate-slide-up">
            Trusted by exchange teams and accredited partners.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-victus-violet/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-victus-violet rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

