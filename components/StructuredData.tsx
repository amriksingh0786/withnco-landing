import React from 'react';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'withnco',
    url: 'https://withnco.studio',
    logo: 'https://withnco.studio/opengraph-image',
    description:
      'Engineering partners who embed with your team, understand your context, and build like founders. Not vendors. Not contractors. Partners.',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@withnco.studio',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'withnco',
    url: 'https://withnco.studio',
    logo: 'https://withnco.studio/opengraph-image',
    description:
      'Engineering partners who embed with your team, understand your context, and build like founders. Not vendors. Not contractors. Partners.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    priceRange: '$$',
    serviceType: [
      'Software Development',
      'MVP Development',
      'Web Application Development',
      'Mobile App Development',
      'Startup Engineering',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
