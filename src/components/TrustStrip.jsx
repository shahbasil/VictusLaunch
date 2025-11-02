export default function TrustStrip() {
  return (
    <section className="py-32 bg-victus-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-victus-violet rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-victus-cyan rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Clean paragraph */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed font-light tracking-wide animate-fade-in">
            We can list your project on{' '}
            <span className="font-bold bg-gradient-to-r from-victus-violet via-cyan-400 to-victus-violet bg-clip-text text-transparent animate-gradient">
              any centralized exchange
            </span>
            {' '}— from Tier-1 giants to emerging markets.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-victus-text-light leading-relaxed mt-8 font-light">
            No matter which exchange you name,{' '}
            <span className="font-bold text-white">Victus Launch</span> makes it possible.
          </p>
        </div>
      </div>
    </section>
  )
}

