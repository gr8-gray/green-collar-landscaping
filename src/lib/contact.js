// Single source of truth for Green Collar Landscaping's public business
// identity: phone, Instagram, hours, service area.
//
// WHY THIS FILE EXISTS: the phone number used to be hardcoded in 6 files with
// two competing tel: formats (tel:253-212-6752 vs tel:+12532126752). If the
// number ever changes, change it HERE and nowhere else in src/.
//
// TRAPS:
// - index.html (LocalBusiness JSON-LD) and README.md cannot import JS, so the
//   number is intentionally duplicated there — update them by hand.
// - The E2E suite pins every rendered tel: href to digits /^1?2532126752$/
//   (e2e/home.spec.ts). PHONE_TEL must keep matching that or CI goes red.
// - PHONE_TEL is E.164 (+1...) on purpose: it dials correctly from any device
//   and any locale; the local 253-212-6752 form was the drift-prone variant.

export const PHONE_DIGITS = '2532126752'
export const PHONE_DISPLAY = '(253) 212-6752'
export const PHONE_TEL = 'tel:+12532126752'

export const INSTAGRAM_HANDLE = '@greencollarlandscaping_'
export const INSTAGRAM_URL =
  'https://www.instagram.com/greencollarlandscaping_?igsh=emtmZmg4OXdjcnJx'

// Rendered in the footer (App.jsx) and the contact card (Contact.jsx).
// Keep labels bare — render sites add their own ":" and layout.
export const BUSINESS_HOURS = [
  { days: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { days: 'Saturday', hours: '8:00 AM - 4:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
]
