"use client";

import Script from "next/script";
import { config } from "@/lib/config";

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://findyourlightpsychiatry.com";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}#organization`,
    name: config.businessName,
    description: "Compassionate, evidence-based mental health care for adults, children, and adolescents throughout Washington State.",
    url: baseUrl,
    telephone: config.phone,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.location,
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Washington",
    },
    medicalSpecialty: [
      "Psychiatry",
      "Mental Health",
      "Psychiatric Medication Management",
      "TMS Therapy",
      "Psychotherapy",
    ],
    priceRange: "$$",
  };

  const healthcareProviderSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "April Casselman",
    jobTitle: "Psychiatric Mental Health Nurse Practitioner",
    credential: "PMHNP-BC",
    worksFor: {
      "@id": `${baseUrl}#organization`,
    },
    medicalSpecialty: [
      "Psychiatry",
      "Mental Health",
      "Child and Adolescent Psychiatry",
      "Adult Psychiatry",
    ],
  };

  // Safely stringify JSON schemas - these are static data, not user input
  const organizationJson = JSON.stringify(organizationSchema);
  const healthcareProviderJson = JSON.stringify(healthcareProviderSchema);

  // Additional safety: validate that JSON stringification succeeded
  if (!organizationJson || !healthcareProviderJson) {
    console.error('Failed to stringify structured data schemas');
    return null;
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationJson }}
      />
      <Script
        id="healthcare-provider-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: healthcareProviderJson }}
      />
    </>
  );
}

