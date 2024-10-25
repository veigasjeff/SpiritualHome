import React from 'react';
import Head from 'next/head';
import SocialSharing from "../components/SocialSharing";

const AboutSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://spiritualhome.vercel.app/about/",
      url: "https://spiritualhome.vercel.app/about/",
      name: "SpiritualHome - About",
      isPartOf: { "@id": "https://spiritualhome.vercel.app/#website" },
      primaryImageOfPage: {
        "@id": "https://spiritualhome.vercel.app/about/#primaryimage",
      },
      image: { "@id": "https://spiritualhome.vercel.app/about/#primaryimage" },
      thumbnailUrl: "https://spiritualhome.vercel.app/og_image.jpg",
      breadcrumb: {
        "@id": "https://spiritualhome.vercel.app/about/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://spiritualhome.vercel.app/about/#primaryimage",
      url: "https://spiritualhome.vercel.app/og_image.jpg",
      contentUrl: "https://spiritualhome.vercel.app/og_image.jpg",
      width: 1280,
      height: 720,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://spiritualhome.vercel.app/about/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://spiritualhome.vercel.app/",
        },
        { "@type": "ListItem", position: 2, name: "SpiritualHome - About" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://spiritualhome.vercel.app/#website",
      url: "https://spiritualhome.vercel.app/",
      name: "SpiritualHome",
      description: "",
      publisher: { "@id": "https://spiritualhome.vercel.app/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://spiritualhome.vercel.app/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://spiritualhome.vercel.app/#organization",
      name: "SpiritualHome",
      url: "https://spiritualhome.vercel.app/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://spiritualhome.vercel.app/#/schema/logo/image/",
        url: "https://spiritualhome.vercel.app/android-chrome-192x192.png",
        contentUrl: "https://spiritualhome.vercel.app/android-chrome-192x192.png",
        width: 280,
        height: 100,
        caption: "SpiritualHome",
      },
      image: { "@id": "https://spiritualhome.vercel.app/#/schema/logo/image/" },
    },
  ],
});

const About = () => {
  return (
    <>
    <Head>
      <title>SpiritualHome - About</title>
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="https://spiritualhome.vercel.app/sitemap.xml"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta
        name="keywords"
       content="spiritualhome, spiritual, devotional, retreats, prayers, religious, worship, faith, daily prayers"
      />
      <meta
        name="description"
        content="Welcome to SpiritualHome, a sanctuary for those seeking deeper meaning and connection in their lives. Our platform is dedicated to providing resources, guidance, and community for individuals on their spiritual journeys. "
      />
      <link rel="canonical" href="https://spiritualhome.vercel.app/about" />
      <meta
        name="google-site-verification"
        content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="SpiritualHome."
      />
      <meta
        property="og:url"
        content="https://spiritualhome.vercel.app/about"
      />
      <meta
        property="og:site_name"
        content="SpiritualHome"
      />
      <meta
        property="og:image"
        content="https://spiritualhome.vercel.app/og_image.jpg"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="SpiritualHome"
      />
      <meta
        name="twitter:description"
        content="Welcome to SpiritualHome, a sanctuary for those seeking deeper meaning and connection in their lives. Our platform is dedicated to providing resources, guidance, and community for individuals on their spiritual journeys. "
      />
      <meta
        name="twitter:image"
        content="https://spiritualhome.vercel.app/og_image.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: AboutSchema }}
      />
    
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <SocialSharing />
    <div className="about-container" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ color: '#4a4a4a' }}>About SpiritualHome</h1>
      <p style={{ color: '#333', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        Welcome to SpiritualHome, a sanctuary for those seeking deeper meaning and connection in their lives. Our platform is dedicated to providing resources, guidance, and community for individuals on their spiritual journeys.
      </p>
      <p style={{ color: '#333', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        At SpiritualHome, we believe in the power of mindfulness, meditation, and self-discovery. We offer articles, courses, and tools designed to help you explore your spirituality and connect with your inner self.
      </p>
      <p style={{ color: '#333', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        Join us as we embark on a journey of growth, enlightenment, and community. Together, we can create a more harmonious world.
      </p>
    </div>
    </>
  );
};

export default About;
