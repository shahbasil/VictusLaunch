import { useState } from 'react'

export default function LeadForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    projectName: '',
    tokenSymbol: '',
    stage: 'dev',
    exchanges: '',
    budget: '',
    email: '',
    telegram: '',
    deck: null,
    honeypot: '', // Anti-spam
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!show) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, deck: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      alert('Spam detected')
      return
    }

    setSubmitting(true)

    // Here you would integrate with HubSpot/Pipedrive/Slack/Google Sheets
    // For now, we'll just simulate the submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      
      // Log to console (replace with actual API call)
      console.log('Form submitted:', formData)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        onClose()
        setFormData({
          projectName: '',
          tokenSymbol: '',
          stage: 'dev',
          exchanges: '',
          budget: '',
          email: '',
          telegram: '',
          deck: null,
          honeypot: '',
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-victus-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl text-victus-text-light hover:text-victus-text transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 text-victus-text">
              Thank you!
            </h3>
            <p className="text-victus-text-light">
              We'll be in touch within 24 hours to schedule your free consultation.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl font-bold mb-2 text-victus-text">
              Free Consultation Request
            </h2>
            <p className="text-victus-text-light mb-8">
              Fill out the form below and we'll schedule a call to discuss your listing strategy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label htmlFor="projectName" className="block text-sm font-semibold mb-2 text-victus-text">
                  Project Name *
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                  placeholder="Your project name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tokenSymbol" className="block text-sm font-semibold mb-2 text-victus-text">
                    Token Symbol *
                  </label>
                  <input
                    type="text"
                    id="tokenSymbol"
                    name="tokenSymbol"
                    value={formData.tokenSymbol}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                    placeholder="BTC, ETH, etc."
                  />
                </div>

                <div>
                  <label htmlFor="stage" className="block text-sm font-semibold mb-2 text-victus-text">
                    Current Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                  >
                    <option value="dev">Development</option>
                    <option value="testnet">Testnet</option>
                    <option value="live">Live (DEX/CEX)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="exchanges" className="block text-sm font-semibold mb-2 text-victus-text">
                  Target Exchanges *
                </label>
                <input
                  type="text"
                  id="exchanges"
                  name="exchanges"
                  value={formData.exchanges}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                  placeholder="Binance, OKX, KuCoin, etc."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-victus-text">
                  Estimated Listing Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="<10k">Less than $10K</option>
                  <option value="10k-50k">$10K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value=">1m">More than $1M</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-victus-text">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telegram" className="block text-sm font-semibold mb-2 text-victus-text">
                    Telegram Handle
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                    placeholder="@username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="deck" className="block text-sm font-semibold mb-2 text-victus-text">
                  Pitch Deck (Optional)
                </label>
                <input
                  type="file"
                  id="deck"
                  name="deck"
                  onChange={handleFileChange}
                  accept=".pdf,.ppt,.pptx"
                  className="w-full px-4 py-3 border-2 border-victus-border rounded-lg focus:border-victus-violet focus:outline-none transition-colors"
                />
                <p className="text-xs text-victus-text-light mt-2">PDF or PowerPoint, max 10MB</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gradient-to-r from-victus-violet to-victus-cyan text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitting ? 'Submitting...' : 'Submit Consultation Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

