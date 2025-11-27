/**
 * Application configuration
 * Centralized configuration with environment variable support
 */

export const config = {
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(206) 555-1234",
  phoneLink: process.env.NEXT_PUBLIC_PHONE_LINK || "tel:+12065551234",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@findyourlightpsychiatry.com",
  location: process.env.NEXT_PUBLIC_LOCATION || "Seattle, Washington",
  businessName: "Find Your Light Psychiatry PLLC",
  businessType: "Psychiatric Practice",
  // Pricing (can be moved to environment variables if needed)
  pricing: {
    initialEvaluation: process.env.NEXT_PUBLIC_PRICE_INITIAL || "$325",
    followUpVisit: process.env.NEXT_PUBLIC_PRICE_FOLLOWUP || "$175",
  },
  // Copyright year (auto-updated)
  copyrightYear: new Date().getFullYear(),
} as const;

