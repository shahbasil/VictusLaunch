import { useState } from 'react'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import ServicesGrid from './components/ServicesGrid'
import Roadmap from './components/Roadmap'
import FundingSection from './components/FundingSection'
import Contact from './components/FAQ'
import LeadForm from './components/LeadForm'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showApplication, setShowApplication] = useState(false)
  const [exchangeName, setExchangeName] = useState('LISTING')

  return (
    <div className="min-h-screen">
      <Hero onContactClick={() => setShowModal(true)} />
      <TrustStrip />
      <ServicesGrid />
      <Roadmap />
      <FundingSection onContactClick={() => setShowModal(true)} />
      <Contact onApplicationClick={(exchange) => {
        setExchangeName(exchange || 'Listing')
        setShowApplication(true)
      }} />
      <LeadForm show={showModal} onClose={() => setShowModal(false)} />
      <ApplicationForm 
        show={showApplication} 
        onClose={() => setShowApplication(false)}
        exchangeName={exchangeName}
      />
      <Footer />
    </div>
  )
}

export default App

