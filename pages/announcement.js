import Head from 'next/head';

// import HeroSection from '../components/HeroSection';
// import LatestVideos from '../components/LatestVideos';
import Announcement from "../components/Announcement";
import styles from '../styles/Home.module.css';

const AnnouncementSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "http://localhost:3000/announcement/",
      url: "http://localhost:3000/announcement/",
      name: "SpiritualHome - Announcement",
      isPartOf: { "@id": "http://localhost:3000/#website" },
      primaryImageOfPage: {
        "@id": "http://localhost:3000/announcement/#primaryimage",
      },
      image: { "@id": "http://localhost:3000/announcement/#primaryimage" },
      thumbnailUrl: "http://localhost:3000/Announcement.jpg",
      breadcrumb: {
        "@id": "http://localhost:3000/announcement/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "http://localhost:3000/announcement/#primaryimage",
      url: "http://localhost:3000/Announcement.jpg",
      contentUrl: "http://localhost:3000/Announcement.jpg",
      width: 1280,
      height: 720,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "http://localhost:3000/announcement/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "http://localhost:3000/",
        },
        { "@type": "ListItem", position: 2, name: "SpiritualHome - Announcement" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "http://localhost:3000/#website",
      url: "http://localhost:3000/",
      name: "SpiritualHome",
      description: "",
      publisher: { "@id": "http://localhost:3000/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "http://localhost:3000/?s={search_term_string}",
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
      "@id": "http://localhost:3000/#organization",
      name: "SpiritualHome",
      url: "http://localhost:3000/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "http://localhost:3000/#/schema/logo/image/",
        url: "http://localhost:3000/logo.png",
        contentUrl: "http://localhost:3000/logo.png",
        width: 280,
        height: 100,
        caption: "SpiritualHome",
      },
      image: { "@id": "http://localhost:3000/#/schema/logo/image/" },
    },
  ],
});


export default function Home() {
  return (
    <>
      <Head>
        <title>SpiritualHome - Announcement</title>
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
          content="SpiritualHome "
        />
        <meta
          name="description"
          content=" "
        />
        <link rel="canonical" href="http://localhost:3000/announcement" />
        <meta
          name="google-site-verification"
          content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="SpiritualHome - Announcement"
        />
        <meta
          property="og:url"
          content="http://localhost:3000/announcement"
        />
        <meta
          property="og:site_name"
          content="SpiritualHome - Announcement"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/Announcement.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SpiritualHome - Announcement"
        />
        <meta
          name="twitter:description"
          content=" "
        />
        <meta
          name="twitter:image"
          content="http://localhost:3000/Announcement.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: AnnouncementSchema }}
        />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
          crossOrigin="anonymous"
        ></script> */}
      </Head>

   
      <main className={styles.main}>
      <div
        className="shadow-lg flex items-center justify-center"
        role="navigation"
      >
        <ul
          id="menu-header-menu"
          className="menu flex flex-wrap justify-center"
        >
            <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-248" className="menu-operating-systems">
              <a
                href="/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl "
              >
                Home<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-248" className="menu-operating-systems">
              <a
                href="../daily-mass/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Daily Mass<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-11605" className="menu-3dcad">
              <a
                href="../adoration/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Adoration<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-11610" className="menu-graphicdesign">
            <a
                href="../hymns-collection/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Hymns Collection  <span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-11610" className="menu-graphicdesign">
              <a
                href="../programs/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Programs<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-196" className="menu-multimedia">
              <a
                href="../priest-ordination/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Priest Ordination<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-161" className="menu-development">
              <a
                href="../wedding-ceremony/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Wedding Ceremony<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-161" className="menu-development">
              <a
                href="../announcement/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Announcement<span className="p"></span>
              </a>
            </li>
          </button>
          <button className="border border-gray-500 bg-gray-200 p-2 m-1 hover:bg-orange-100 rounded-xl">
            <li id="menu-item-35" className="menu-home active">
              <a
                href="../orbituary/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Orbituary (Funeral) <span className="p"></span>
              </a>
            </li>
          </button>
        
        </ul>
      </div>
        {/* <HeroSection /> */}
        {/* <LatestVideos /> */}
        <Announcement />
      </main>
    
    </>
  );
}
