
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
        "@id": "http://localhost:3000/",
        "url": "http://localhost:3000/",
        "name": "SpiritualHome",
        "isPartOf": { "@id": "http://localhost:3000/#website" },
        "about": { "@id": "http://localhost:3000/#organization" },
        "primaryImageOfPage": { "@id": "http://localhost:3000/#primaryimage" },
        "image": { "@id": "http://localhost:3000/#primaryimage" },
        "thumbnailUrl": "http://localhost:3000/og_image.jpg",
        "datePublished": "2023-07-02T18:30:00+00:00",
        "dateModified": "2024-09-24T05:11:20+00:00",
        "breadcrumb": { "@id": "http://localhost:3000/#breadcrumb" },
        "inLanguage": "en-US",
        "potentialAction": [
          { "@type": "ReadAction", "target": ["http://localhost:3000/"] }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "http://localhost:3000/#primaryimage",
        "url": "http://localhost:3000/og_image.jpg",
        "contentUrl": "http://localhost:3000/og_image.jpg",
        "width": 1280,
        "height": 720
      },
      {
        "@type": "BreadcrumbList",
        "@id": "http://localhost:3000/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "http://localhost:3000/#website",
        "url": "http://localhost:3000/",
        "name": "SpiritualHome",
        "description": "",
        "publisher": { "@id": "http://localhost:3000/#organization" },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "http://localhost:3000/?s={search_term_string}"
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
        "@id": "http://localhost:3000/#organization",
        "name": "SpiritualHome",
        "url": "http://localhost:3000/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "http://localhost:3000/#/schema/logo/image/",
          "url": "http://localhost:3000/logo.png",
          "contentUrl": "http://localhost:3000/logo.png",
          "width": 280,
          "height": 100,
          "caption": "SpiritualHome"
        },
        "image": { "@id": "http://localhost:3000/#/schema/logo/image/" }
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
          href="http://localhost:3000/sitemap.xml"
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
          content=" "
        />
        <link rel="canonical" href="http://localhost:3000/" />
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
          content="http://localhost:3000/"
        />
        <meta
          property="og:site_name"
          content="SpiritualHome"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/og_image.jpg"
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
          content=" "
        />
        <meta
          name="twitter:image"
          content="http://localhost:3000/og_image.jpg"
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
        <LiveBroadcast
          onVideoPlay={handleVideoPlay}
          onVideoPause={handleVideoPause}
        />
        {/* Ensure correct path to the audio file in the public directory */}
        <BackgroundAudio
          audioSrc="https://res.cloudinary.com/db36kfuq3/video/upload/v1729776318/audio_hpuowa.mp3"
          isVideoPlaying={isVideoPlaying}
        />
        <QuoteOfTheDay />
      </main>
    </>
  );
}
