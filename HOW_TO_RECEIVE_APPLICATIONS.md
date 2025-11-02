# How to Receive Applications from Your Website

## Current Setup (Temporary)
Right now, when someone submits an application, it:
- Opens their email client with a pre-filled email to you
- Logs the application data in the browser console
- Shows a success message

**This is NOT automatic** - you need to set up a proper email service.

---

## Recommended: EmailJS (Free Tier Available)

### Quick Setup Steps:

1. **Sign Up at EmailJS**
   - Go to https://emailjs.com
   - Create a free account (200 emails/month free)

2. **Connect Your Email**
   - Add your email service (Gmail, Outlook, etc.)
   - Follow their setup wizard

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template
   - Use these variables:
     - `{{to_email}}` → shah@victuscapital.io
     - `{{subject}}` → Email subject
     - `{{message}}` → Full email body
     - `{{exchange}}` → Exchange name
     - `{{project_name}}` → Project name
     - `{{contact_email}}` → User's email
     - `{{messenger_type}}` → Telegram/WhatsApp
     - `{{contact_info}}` → Contact handle/number

4. **Get Your Keys**
   - Service ID (from Email Service)
   - Template ID (from Email Templates)
   - Public Key (from Account → General)

5. **Update Code**
   - Run: `npm install @emailjs/browser`
   - Open `src/utils/emailService.js`
   - Uncomment the EmailJS section (lines 37-63)
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`
   - Comment out the mailto section (lines 15-35)
   - Save and rebuild

6. **Test It**
   - Fill out the application form
   - Submit it
   - Check your inbox!

---

## Alternative: Formspree (Even Easier)

### Quick Setup:

1. **Sign Up**
   - Go to https://formspree.io
   - Free tier: 50 submissions/month

2. **Create Form**
   - Click "New Form"
   - Set recipient to: shah@victuscapital.io
   - Get your Form ID (looks like: xpzngqkv)

3. **Update Code**
   - Open `src/utils/emailService.js`
   - Uncomment the Formspree section (lines 65-89)
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Comment out the mailto section
   - Save and rebuild

4. **Done!**
   - Submissions will automatically email you

---

## Testing Your Setup

**Development:**
```bash
npm run dev
```
Open the site, submit the form, check for emails.

**Production:**
```bash
npm run build
```
Deploy to your hosting, test the live form.

---

## What You'll Receive

When someone submits an application, you'll get an email like:

```
Subject: New LISTING Application - Project Name

New Exchange Listing Application

Exchange: LISTING
Project Name: Their Project Name
Email: applicant@example.com
Contact (telegram): @theirhandle

---
This email was sent from the Victus Launch application form.
```

---

## Need Help?

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Formspree Docs:** https://formspree.io/docs/
- **Console logs:** Press F12 in browser to see form data while testing

---

## Quick Choice

**Choose EmailJS if:** You want more control and customization
**Choose Formspree if:** You want the quickest setup (5 minutes)

Both have free tiers perfect for starting!

