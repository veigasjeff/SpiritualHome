
// pages/index.js
import { useState } from "react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import LiveBroadcast from "../components/LiveBroadcast";
import QuoteOfTheDay from "../components/QuoteOfTheDay";
import BackgroundAudio from "../components/BackgroundAudio";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to handle when the video starts and stops
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const SpiritualHome = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://spiritualhome.vercel.app/",
        "url": "https://spiritualhome.vercel.app/",
        "name": "SpiritualHome",
        "isPartOf": { "@id": "https://spiritualhome.vercel.app/#website" },
        "about": { "@id": "https://spiritualhome.vercel.app/#organization" },
        "primaryImageOfPage": { "@id": "https://spiritualhome.vercel.app/#primaryimage" },
        "image": { "@id": "https://spiritualhome.vercel.app/#primaryimage" },
        "thumbnailUrl": "https://spiritualhome.vercel.app/og_image.jpg",
        "datePublished": "2023-07-02T18:30:00+00:00",
        "dateModified": "2024-09-24T05:11:20+00:00",
        "breadcrumb": { "@id": "https://spiritualhome.vercel.app/#breadcrumb" },
        "inLanguage": "en-US",
        "potentialAction": [
          { "@type": "ReadAction", "target": ["https://spiritualhome.vercel.app/"] }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://spiritualhome.vercel.app/#primaryimage",
        "url": "https://spiritualhome.vercel.app/og_image.jpg",
        "contentUrl": "https://spiritualhome.vercel.app/og_image.jpg",
        "width": 1280,
        "height": 720
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://spiritualhome.vercel.app/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://spiritualhome.vercel.app/#website",
        "url": "https://spiritualhome.vercel.app/",
        "name": "SpiritualHome",
        "description": "",
        "publisher": { "@id": "https://spiritualhome.vercel.app/#organization" },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://spiritualhome.vercel.app/?s={search_term_string}"
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              "valueRequired": true,
              "valueName": "search_term_string"
            }
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://spiritualhome.vercel.app/#organization",
        "name": "SpiritualHome",
        "url": "https://spiritualhome.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://spiritualhome.vercel.app/#/schema/logo/image/",
          "url": "https://spiritualhome.vercel.app/android-chrome-192x192.png",
          "contentUrl": "https://spiritualhome.vercel.app/android-chrome-192x192.png",
          "width": 280,
          "height": 100,
          "caption": "SpiritualHome"
        },
        "image": { "@id": "https://spiritualhome.vercel.app/#/schema/logo/image/" }
      }
    ]
  });
  
  return (
    <>
      <Head>
        <title>SpiritualHome - Your Spiritual Journey Starts Here</title>
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
          content="SpiritualHome,"
        />
        <meta
          name="description"
          content="Welcome to SpiritualHome, a sanctuary for those seeking deeper meaning and connection in their lives. Our platform is dedicated to providing resources, guidance, and community for individuals on their spiritual journeys. "
        />
        <link rel="canonical" href="https://spiritualhome.vercel.app/" />
        <meta
          name="google-site-verification"
          content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="SpiritualHome."
        />
        <meta
          property="og:url"
          content="https://spiritualhome.vercel.app/"
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
          dangerouslySetInnerHTML={{ __html: SpiritualHome }}
        />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
          crossOrigin="anonymous"
        ></script> */}
      </Head>

      <main className={styles.main}>
        <HeroSection />
        {/* Ensure that VideoGrid handles video play/pause events */}
        <QuoteOfTheDay />
        <LiveBroadcast
          onVideoPlay={handleVideoPlay}
          onVideoPause={handleVideoPause}
        />
        {/* Ensure correct path to the audio file in the public directory */}
        <BackgroundAudio
          audioSrc="https://res.cloudinary.com/db36kfuq3/video/upload/v1729776318/audio_hpuowa.mp3"
          isVideoPlaying={isVideoPlaying}
        />
      
      </main>
    </>
  );
}
