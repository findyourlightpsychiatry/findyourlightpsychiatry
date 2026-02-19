/**
 * Application configuration
 * Centralized configuration with environment variable support
 */

export const config = {
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(425) 780-7460",
  phoneLink: process.env.NEXT_PUBLIC_PHONE_LINK || "tel:+14257807460",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@findyourlightpsychiatry.org",
  location: process.env.NEXT_PUBLIC_LOCATION || "Seattle, Washington",
  businessName: "Find Your Light Psychiatry PLLC",
  businessType: "Psychiatric Practice",
  // Pricing (can be moved to environment variables if needed)
  pricing: {
    initialEvaluation: process.env.NEXT_PUBLIC_PRICE_INITIAL || "$325",
    followUpVisit: process.env.NEXT_PUBLIC_PRICE_FOLLOWUP || "$175",
  },
  // Copyright year
  copyrightYear: 2026,
} as const;

