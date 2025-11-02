export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-victus-dark text-white py-12 border-t border-victus-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-victus-text-light text-sm">
            Victus Launch © {currentYear}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="mailto:shah@victuscapital.io" 
              className="text-victus-text-light hover:text-victus-cyan transition-colors text-sm"
            >
              shah@victuscapital.io
            </a>
            <a 
              href="https://x.com/ShahBasilSB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-victus-text-light hover:text-victus-cyan transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


