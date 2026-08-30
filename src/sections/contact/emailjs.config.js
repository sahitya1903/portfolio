/* ─────────────────────────────────────────────────────────────
   EmailJS config — set these in your .env file:
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
   The site runs fine without them; the contact form just won't send.
───────────────────────────────────────────────────────────── */
export const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
export const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
export const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
