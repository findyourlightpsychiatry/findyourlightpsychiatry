"use client";

import Script from "next/script";
import { config } from "@/lib/config";
import { logger } from "@/lib/logger";

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.findyourlightpsychiatry.org";
  
  // Bellevue office address and coordinates
  const bellevueAddress = {
    "@type": "PostalAddress",
    streetAddress: "14535 Bel-Red Road, Suite 200",
    addressLocality: "Bellevue",
    addressRegion: "WA",
    postalCode: "98007",
    addressCountry: "US",
  };

  const bellevueGeo = {
    "@type": "GeoCoordinates",
    latitude: 47.6101,
    longitude: -122.2015,
  };

  // Queen Anne office address and coordinates
  const queenAnneAddress = {
    "@type": "PostalAddress",
    streetAddress: "200 First Ave West, #400",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98119",
    addressCountry: "US",
  };

  const queenAnneGeo = {
    "@type": "GeoCoordinates",
    latitude: 47.6231,
    longitude: -122.3611,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "PsychiatricClinic"],
    "@id": `${baseUrl}#organization`,
    name: config.businessName,
    description: "Compassionate, evidence-based mental health care for adults, children, and adolescents in Queen Anne Seattle, Bellevue, and throughout Washington State.",
    url: baseUrl,
    telephone: "+1-425-780-7460",
    email: config.email,
    address: [bellevueAddress, queenAnneAddress],
    areaServed: [
      {
        "@type": "City",
        name: "Seattle",
      },
      {
        "@type": "City",
        name: "Bellevue",
      },
      {
        "@type": "City",
        name: "Queen Anne",
      },
      {
        "@type": "State",
        name: "Washington",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Psychiatric Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Psychiatric Medication Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Psychotherapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SPRAVATO® Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Qb Testing for ADHD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Child and Adolescent Psychiatry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adult Psychiatry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Telehealth",
          },
        },
      ],
    },
    medicalSpecialty: [
      "Psychiatry",
      "Mental Health",
      "Psychiatric Medication Management",
      "Psychotherapy",
      "Child and Adolescent Psychiatry",
      "Adult Psychiatry",
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/findyourlightpsychiatry",
      "https://www.linkedin.com/company/findyourlightpsychiatry",
      "https://www.instagram.com/findyourlightpsychiatry",
    ],
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

  // LocalBusiness schema for Bellevue office
  const bellevueLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#bellevue-office`,
    name: `${config.businessName} - Bellevue Office`,
    description: "Psychiatric services in Bellevue, WA. Providing medication management, psychotherapy, SPRAVATO® treatment, and more.",
    url: `${baseUrl}/bellevue-psychiatrist`,
    telephone: "+1-425-780-7460",
    address: bellevueAddress,
    geo: bellevueGeo,
    areaServed: {
      "@type": "City",
      name: "Bellevue",
    },
    priceRange: "$$",
  };

  // LocalBusiness schema for Queen Anne office
  const queenAnneLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#queen-anne-office`,
    name: `${config.businessName} - Queen Anne Office`,
    description: "Psychiatric services in Queen Anne, Seattle, WA. Providing medication management, psychotherapy, SPRAVATO® treatment, and more.",
    url: `${baseUrl}/queen-anne-psychiatrist`,
    telephone: "+1-425-780-7460",
    address: queenAnneAddress,
    geo: queenAnneGeo,
    areaServed: {
      "@type": "City",
      name: "Seattle",
    },
    priceRange: "$$",
  };

  // Safely stringify JSON schemas - these are static data, not user input
  const organizationJson = JSON.stringify(organizationSchema);
  const healthcareProviderJson = JSON.stringify(healthcareProviderSchema);
  const bellevueJson = JSON.stringify(bellevueLocalBusiness);
  const queenAnneJson = JSON.stringify(queenAnneLocalBusiness);

  // Additional safety: validate that JSON stringification succeeded
  if (!organizationJson || !healthcareProviderJson || !bellevueJson || !queenAnneJson) {
    logger.error('Failed to stringify structured data schemas');
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
      <Script
        id="bellevue-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: bellevueJson }}
      />
      <Script
        id="queen-anne-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: queenAnneJson }}
      />
    </>
  );
}

