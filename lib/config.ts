/**
 * Contact Configuration
 * 
 * This file centralizes all contact information for the website.
 * Values are loaded from environment variables (.env.local) with fallback defaults.
 * 
 * To update contact information:
 * 1. Edit .env.local file in the project root
 * 2. Restart the development server
 */

// Phone Configuration
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '905111111111';
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '0511 111 1111';
export const PHONE_LINK = `tel:+${PHONE_NUMBER}`;
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;

// Email Configuration
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@market.com';
export const EMAIL_LINK = `mailto:${EMAIL}`;

// Address Configuration
export const ADDRESS_LINE1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || 'Altınkum, Gazi Mustafa Kemal Blv.';
export const ADDRESS_LINE2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || 'Konyaaltı / Antalya';
export const ADDRESS_FULL = process.env.NEXT_PUBLIC_ADDRESS_FULL || 'Altınkum, Konyaaltı, Antalya';
export const MAP_LINK = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS_FULL)}`;

// Business Hours Configuration
export const HOURS_WEEKDAY = process.env.NEXT_PUBLIC_HOURS_WEEKDAY || 'Pazartesi - Cumartesi: 08:00 - 20:00';
export const HOURS_WEEKEND = process.env.NEXT_PUBLIC_HOURS_WEEKEND || 'Pazar: 09:00 - 18:00';
export const HOURS_EMERGENCY = process.env.NEXT_PUBLIC_HOURS_EMERGENCY || 'Acil Servis: 24/7';

// Social Media Configuration
export const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';

// Business Information
export const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Akdeniz Yapı Market';
export const BUSINESS_TAGLINE = process.env.NEXT_PUBLIC_BUSINESS_TAGLINE || 'Konyaaltı Anahtar & Çilingir';

// Map Embed Configuration
export const MAP_EMBED_URL = process.env.NEXT_PUBLIC_MAP_EMBED_URL || 
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.2!2d30.6!3d36.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUyJzQ4LjAiTiAzMMKwMzYnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890';

// Contact object for easy import
export const contactInfo = {
  phone: {
    number: PHONE_NUMBER,
    display: PHONE_DISPLAY,
    link: PHONE_LINK,
  },
  whatsapp: {
    link: WHATSAPP_LINK,
  },
  email: {
    address: EMAIL,
    link: EMAIL_LINK,
  },
  address: {
    line1: ADDRESS_LINE1,
    line2: ADDRESS_LINE2,
    full: ADDRESS_FULL,
    mapLink: MAP_LINK,
  },
  hours: {
    weekday: HOURS_WEEKDAY,
    weekend: HOURS_WEEKEND,
    emergency: HOURS_EMERGENCY,
  },
  social: {
    facebook: FACEBOOK_URL,
    instagram: INSTAGRAM_URL,
  },
  business: {
    name: BUSINESS_NAME,
    tagline: BUSINESS_TAGLINE,
  },
  map: {
    embedUrl: MAP_EMBED_URL,
  },
};

export default contactInfo;
