export default function FundingSection({ onContactClick }) {
  return (
    <section className="py-32 bg-gradient-to-br from-victus-dark via-victus-purple/20 to-victus-charcoal relative overflow-hidden">
      {/* Structured Background */}
      <div className="absolute inset-0">
        {/* Gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A3BFF" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#00D1FF" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGrad)" strokeWidth="2"/>
          <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#lineGrad)" strokeWidth="2"/>
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#lineGrad)" strokeWidth="2"/>
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#lineGrad)" strokeWidth="2"/>
        </svg>

        {/* Vector waves */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,150 Q300,100 600,120 T1200,110 L1200,200 L0,200 Z" fill="url(#waveGradient)"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A3BFF" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#00D1FF" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="gridPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8A3BFF" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#gridPattern)"/>
          </svg>
        </div>

        {/* Subtle orbs */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-victus-violet/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-transparent to-victus-cyan/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-white">
            Funding & OTC Solutions
          </h2>
          
          {/* Why paragraph */}
          <p className="text-xl md:text-2xl text-victus-text-light max-w-5xl mx-auto leading-relaxed mb-16">
            Our goal is to <span className="text-gradient font-semibold">empower projects</span> to afford every listing they aim for. Even if a project lacks liquidity for major listings, our custom OTC and funding solutions bridge the gap — enabling <span className="text-white font-medium">continuous growth and exchange expansion</span>.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-cyan to-victus-violet flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Placement Hedging</h4>
                <p className="text-white/80 text-sm leading-relaxed">Secure hedging strategies for all centralized exchanges</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-violet to-victus-cyan flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Deal Structures</h4>
                <p className="text-white/80 text-sm leading-relaxed">Convertible notes, SAFE agreements, and custom structures</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-cyan to-victus-violet flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Milestone-Based</h4>
                <p className="text-white/80 text-sm leading-relaxed">All funding tied to specific listing milestones</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-violet to-victus-cyan flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Escrow Protection</h4>
                <p className="text-white/80 text-sm leading-relaxed">Secure escrow services when needed for protection</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-cyan to-victus-violet flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Investor Access</h4>
                <p className="text-white/80 text-sm leading-relaxed">Direct intros to accredited investors and OTC desks</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-victus-cyan/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-victus-violet to-victus-cyan flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3">Range Scale</h4>
                <p className="text-white/80 text-sm leading-relaxed">Flexible deals from $100k to $10M+ based on needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

