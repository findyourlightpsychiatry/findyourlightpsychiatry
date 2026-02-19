import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.findyourlightpsychiatry.org";

const queenAnneStructuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "PsychiatricClinic"],
  name: "Find Your Light Psychiatry PLLC - Queen Anne Office",
  description: "Psychiatric services in Queen Anne, Seattle, WA. Providing medication management, psychotherapy, SPRAVATO® treatment, ADHD testing, and child/adolescent psychiatry.",
  url: `${baseUrl}/queen-anne-psychiatrist`,
  telephone: "+1-425-780-7460",
  address: {
    "@type": "PostalAddress",
    streetAddress: "200 First Ave West, #400",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98119",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6231,
    longitude: -122.3611,
  },
  areaServed: {
    "@type": "City",
    name: "Seattle",
  },
  priceRange: "$$",
  medicalSpecialty: [
    "Psychiatry",
    "Mental Health",
    "Psychiatric Medication Management",
    "Psychotherapy",
    "Child and Adolescent Psychiatry",
    "Adult Psychiatry",
  ],
};

export const metadata: Metadata = {
  title: "Psychiatrist in Queen Anne, Seattle - Find Your Light Psychiatry",
  description: "Find Your Light Psychiatry offers comprehensive psychiatric services in Queen Anne, Seattle. Medication management, psychotherapy, SPRAVATO® treatment, ADHD testing, and child/adolescent care. Located at 200 First Ave West, #400.",
  keywords: [
    "psychiatrist Queen Anne",
    "psychiatrist in Queen Anne",
    "Queen Anne psychiatrist",
    "mental health Queen Anne",
    "psychiatric services Queen Anne",
    "psychiatrist Seattle",
    "psychiatrist near me Queen Anne",
    "psychiatric medication management Queen Anne",
    "SPRAVATO Queen Anne",
    "ADHD testing Queen Anne",
  ],
  alternates: {
    canonical: "/queen-anne-psychiatrist",
  },
  openGraph: {
    title: "Psychiatrist in Queen Anne, Seattle - Find Your Light Psychiatry",
    description: "Comprehensive psychiatric services in Queen Anne, Seattle. Medication management, psychotherapy, SPRAVATO® treatment, and more. Located at 200 First Ave West, #400.",
    url: "/queen-anne-psychiatrist",
    images: [
      {
        url: "/images/services-picture.jpeg",
        width: 1200,
        height: 630,
        alt: "Find Your Light Psychiatry - Queen Anne Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychiatrist in Queen Anne, Seattle - Find Your Light Psychiatry",
    description: "Comprehensive psychiatric services in Queen Anne, Seattle. Located at 200 First Ave West, #400.",
  },
};

export default function QueenAnnePsychiatristPage() {
  return (
    <>
      <Script
        id="queen-anne-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(queenAnneStructuredData),
        }}
      />
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="relative w-full">
          {/* Top Section with Title - White background */}
          <div className="relative z-30 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12">
              {/* Header Section - Centered */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#D4AF37] mb-6 sm:mb-8 leading-tight tracking-tight">
                  Psychiatrist in Queen Anne, Seattle
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive psychiatric care in the heart of Queen Anne, Seattle
                </p>
              </div>
            </div>
          </div>

          {/* Background Image Section */}
          <div className="relative w-full -mt-12 sm:-mt-16 md:-mt-20" style={{ paddingBottom: '144px' }}>
            <div className="absolute left-0 right-0 z-0" style={{ top: '-15vh', height: 'calc(140vh + 144px)' }}>
              <Image
                src="/images/contact-page-background.jpeg"
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
                style={{ objectPosition: 'center 40%' }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/8 to-white/12"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-transparent to-white/8"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/4 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-[32rem] bg-gradient-to-b from-white via-white/98 via-white/95 via-white/90 via-white/80 via-white/65 via-white/45 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 via-white/25 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-36">
              {/* Location Info Section */}
              <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/70">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                    Our Queen Anne Office
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-3">
                        Location
                      </h3>
                      <address className="not-italic text-base sm:text-lg text-gray-700 leading-relaxed">
                        <p className="font-semibold">200 First Ave West, #400</p>
                        <p>Seattle, WA 98119</p>
                        <p className="mt-4">
                          <a
                            href="tel:+14257807460"
                            className="text-[#059669] hover:text-[#047857] font-semibold transition-colors duration-300 underline underline-offset-2"
                          >
                            425-780-7460
                          </a>
                        </p>
                      </address>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-3">
                        Services Offered
                      </h3>
                      <ul className="space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed list-disc list-inside ml-2">
                        <li>Psychiatric Medication Management</li>
                        <li>Psychotherapy & Supportive Counseling</li>
                        <li>SPRAVATO® Treatment for Treatment-Resistant Depression</li>
                        <li>Qb Testing for ADHD</li>
                        <li>Child & Adolescent Psychiatry</li>
                        <li>Adult & Geriatric Psychiatry</li>
                        <li>CBT & TF-CBT</li>
                        <li>Telehealth Appointments</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-3">
                        About Queen Anne, Seattle
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our Queen Anne office is conveniently located in the heart of Seattle, serving patients throughout the Queen Anne neighborhood and surrounding areas. We provide a calm, private environment for in-person appointments, with easy access to parking and public transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
                <ContactForm />
              </div>

              {/* CTA Section */}
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/70">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    Request an appointment at our Queen Anne office or learn more about our services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#059669] text-white rounded-2xl hover:bg-[#047857] transition-all duration-500 ease-out font-semibold text-base sm:text-lg shadow-[0_4px_16px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.4)] transform hover:-translate-y-1 min-h-[52px] flex items-center justify-center"
                    >
                      Request Appointment
                    </Link>
                    <Link
                      href="/services"
                      className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#059669] border-2 border-[#059669] rounded-2xl hover:bg-[#059669] hover:text-white transition-all duration-500 ease-out font-semibold text-base sm:text-lg min-h-[52px] flex items-center justify-center"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

