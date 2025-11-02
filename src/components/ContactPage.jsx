export default function ContactPage({ onApplicationClick }) {
  return (
    <section id="contact-page" className="py-32 bg-gradient-to-b from-victus-bg via-victus-dark to-victus-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-victus-violet rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-victus-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Info */}
          <div className="text-center md:text-left">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative w-64 h-64">
                <div className="w-full h-full rounded-3xl border-4 border-victus-violet/30 shadow-2xl overflow-hidden">
                  <img 
                    src="/shah-profile.jpg" 
                    alt="Shah - Director of Listing Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="font-display text-5xl md:text-6xl font-black mb-4">
              <span className="text-white block">Shah</span>
              <span className="text-gradient block">Director of Listing Services</span>
            </h1>

            {/* Contact Details */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-victus-violet to-victus-cyan flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:shah@victuscapital.io" 
                  className="text-victus-text-light hover:text-victus-cyan transition-colors text-lg"
                >
                  shah@victuscapital.io
                </a>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-victus-violet to-victus-cyan flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <a 
                  href="https://t.me/shahbasilSB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-victus-text-light hover:text-victus-cyan transition-colors text-lg"
                >
                  t.me/shahbasilSB
                </a>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-victus-cyan to-victus-violet flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <a 
                  href="https://x.com/ShahBasilSB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-victus-text-light hover:text-victus-cyan transition-colors text-lg"
                >
                  x.com/ShahBasilSB
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="bg-gradient-to-br from-victus-card/60 to-victus-dark/60 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              About Shah
            </h2>
            <div className="space-y-4 text-victus-text-light text-lg leading-relaxed">
              <p>
                Shah is the <span className="text-white font-semibold">Director of Listing Services</span> at Victus Launch, leading our end-to-end exchange listing operations.
              </p>
              <p>
                With extensive experience in the cryptocurrency exchange ecosystem, Shah manages direct relationships with Tier-1 and emerging exchanges, ensuring seamless listing processes for projects worldwide.
              </p>
              <p>
                His expertise spans <span className="text-victus-cyan">tokenomics optimization</span>, <span className="text-victus-cyan">compliance coordination</span>, <span className="text-victus-cyan">funding structures</span>, and <span className="text-victus-cyan">post-listing support</span>.
              </p>
              <p className="pt-4 border-t border-white/10">
                For partnerships, listing inquiries, or strategic consultations, reach out directly via email, Telegram, or X.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

