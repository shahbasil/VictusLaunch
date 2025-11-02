import { useState } from 'react'
import { sendApplicationEmail } from '../utils/emailService'

export default function ApplicationForm({ show, onClose, exchangeName = 'LISTING' }) {
  const [formData, setFormData] = useState({
    messenger: 'telegram', // 'telegram' or 'whatsapp'
    contact: '',
    email: '',
    projectName: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!show) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Send email
      await sendApplicationEmail(formData, exchangeName)
      
      // Also log to console for debugging
      console.log('Application submitted:', {
        exchange: exchangeName,
        ...formData,
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        onClose()
        setFormData({ messenger: 'telegram', contact: '', email: '', projectName: '' })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again or contact us directly at shah@victuscapital.io')
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-victus-dark rounded-3xl p-8 max-w-lg w-full relative border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl text-white hover:text-victus-cyan transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 text-white">
              Application Submitted!
            </h3>
            <p className="text-victus-text-light">
              We'll contact you on your chosen messenger shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-white text-center">
              SUBMIT APPLICATION FOR {exchangeName}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Messenger Selection */}
              <div>
                <label className="block text-white mb-4 font-semibold">
                  CHOOSE MESSENGER TO CONTACT YOU:
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, messenger: 'telegram' })}
                    className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                      formData.messenger === 'telegram'
                        ? 'bg-blue-600 border-blue-500'
                        : 'bg-victus-card border-white/10 hover:border-blue-500/50'
                    }`}
                  >
                    <svg className="w-10 h-10 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, messenger: 'whatsapp' })}
                    className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                      formData.messenger === 'whatsapp'
                        ? 'bg-gray-700 border-gray-600'
                        : 'bg-victus-card border-white/10 hover:border-gray-600/50'
                    }`}
                  >
                    <svg className="w-10 h-10 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="@username or mobile number"
                  required
                  className="w-full px-4 py-4 bg-victus-card border border-white/20 rounded-xl text-white placeholder-victus-text-light focus:border-victus-cyan focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-4 bg-victus-card border border-white/20 rounded-xl text-white placeholder-victus-text-light focus:border-victus-cyan focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="Project name"
                  required
                  className="w-full px-4 py-4 bg-victus-card border border-white/20 rounded-xl text-white placeholder-victus-text-light focus:border-victus-cyan focus:outline-none transition-colors"
                />
              </div>

              {/* reCAPTCHA Disclaimer */}
              <p className="text-xs text-victus-text-light text-center">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="underline hover:text-victus-cyan">Privacy Policy</a> and{' '}
                <a href="#" className="underline hover:text-victus-cyan">Terms of Service</a>.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'CONTACT ME'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

