import Head from 'next/head';
import LiveBroadcast from "../components/LiveBroadcast";
// import HeroSection from '../components/HeroSection';
// import LatestVideos from '../components/LatestVideos';
import Programs from "../components/Programs";
import styles from '../styles/Home.module.css';
import QuoteOfTheDay from "../components/QuoteOfTheDay";

const ProgramsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://spiritualhome.vercel.app/programs/",
      url: "https://spiritualhome.vercel.app/programs/",
      name: "SpiritualHome - Programs",
      isPartOf: { "@id": "https://spiritualhome.vercel.app/#website" },
      primaryImageOfPage: {
        "@id": "https://spiritualhome.vercel.app/programs/#primaryimage",
      },
      image: { "@id": "https://spiritualhome.vercel.app/programs/#primaryimage" },
      thumbnailUrl: "https://spiritualhome.vercel.app/Programs.jpg",
      breadcrumb: {
        "@id": "https://spiritualhome.vercel.app/programs/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://spiritualhome.vercel.app/programs/#primaryimage",
      url: "https://spiritualhome.vercel.app/Programs.jpg",
      contentUrl: "https://spiritualhome.vercel.app/Programs.jpg",
      width: 1280,
      height: 720,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://spiritualhome.vercel.app/programs/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://spiritualhome.vercel.app/",
        },
        { "@type": "ListItem", position: 2, name: "SpiritualHome - Programs" },
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

export default function Home() {
  return (
    <>
      <Head>
        <title>SpiritualHome - Programs</title>
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
        <link rel="canonical" href="https://spiritualhome.vercel.app/programs" />
        <meta
          name="google-site-verification"
          content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="SpiritualHome - Programs"
        />
        <meta
          property="og:url"
          content="https://spiritualhome.vercel.app/programs"
        />
        <meta
          property="og:site_name"
          content="SpiritualHome - Programs"
        />
        <meta
          property="og:image"
          content="https://spiritualhome.vercel.app/Programs.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SpiritualHome - Programs"
        />
        <meta
          name="twitter:description"
          content="Welcome to SpiritualHome, a sanctuary for those seeking deeper meaning and connection in their lives. Our platform is dedicated to providing resources, guidance, and community for individuals on their spiritual journeys. "
        />
        <meta
          name="twitter:image"
          content="https://spiritualhome.vercel.app/Programs.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ProgramsSchema }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SocialSharing />
   
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
                href="../live-broadcast/"
                className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl"
              >
                Live Broadcast<span className="p"></span>
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
        <QuoteOfTheDay />
        <LiveBroadcast />
      </main>
    
    </>
  );
}
