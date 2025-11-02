// Email service utility
// Currently uses mailto fallback - you can integrate EmailJS, Formspree, or your own backend API

export const sendApplicationEmail = async (formData, exchangeName) => {
  const emailBody = `New Exchange Listing Application

Exchange: ${exchangeName}
Project Name: ${formData.projectName}
Email: ${formData.email}
Contact (${formData.messenger}): ${formData.contact}

---
This email was sent from the Victus Launch application form.`

  // Option 1: Use mailto link (works immediately, opens user's email client)
  // This will open the default email client with pre-filled data
  const mailtoLink = `mailto:shah@victuscapital.io?subject=${encodeURIComponent(`New ${exchangeName} Application - ${formData.projectName}`)}&body=${encodeURIComponent(emailBody)}`
  
  // Try to open mailto (may be blocked by some browsers)
  try {
    window.location.href = mailtoLink
  } catch (e) {
    console.error('Mailto failed:', e)
  }

  // Log to console for manual checking
  console.log('📧 Application Email Details:')
  console.log('To: shah@victuscapital.io')
  console.log('Subject:', `New ${exchangeName} Application - ${formData.projectName}`)
  console.log('Body:', emailBody)
  console.log('---')
  console.log('To set up automatic email sending:')
  console.log('1. Sign up at https://emailjs.com or https://formspree.io')
  console.log('2. Update this file with your service credentials')
  console.log('3. See commented code below for integration examples')

  // Option 2: EmailJS Integration (recommended)
  // npm install @emailjs/browser
  // Sign up at https://emailjs.com and get your keys
  /*
  import emailjs from '@emailjs/browser'
  
  const serviceId = 'YOUR_SERVICE_ID'
  const templateId = 'YOUR_TEMPLATE_ID'
  const publicKey = 'YOUR_PUBLIC_KEY'
  
  try {
    await emailjs.send(serviceId, templateId, {
      to_email: 'shah@victuscapital.io',
      subject: `New ${exchangeName} Application - ${formData.projectName}`,
      message: emailBody,
      exchange: exchangeName,
      project_name: formData.projectName,
      contact_email: formData.email,
      messenger_type: formData.messenger,
      contact_info: formData.contact,
    }, publicKey)
    return { success: true }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
  */

  // Option 3: Formspree Integration
  // Sign up at https://formspree.io and get your form ID
  /*
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _to: 'shah@victuscapital.io',
        _subject: `New ${exchangeName} Application - ${formData.projectName}`,
        exchange: exchangeName,
        project_name: formData.projectName,
        contact_email: formData.email,
        messenger_type: formData.messenger,
        contact_info: formData.contact,
      }),
    })
    return await response.json()
  } catch (error) {
    console.error('Formspree error:', error)
    return { success: false, error }
  }
  */

  // Option 4: Your own backend API
  /*
  try {
    const response = await fetch('https://your-api.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'shah@victuscapital.io',
        subject: `New ${exchangeName} Application - ${formData.projectName}`,
        body: emailBody,
      }),
    })
    return await response.json()
  } catch (error) {
    console.error('API error:', error)
    return { success: false, error }
  }
  */

  return { success: true }
}

