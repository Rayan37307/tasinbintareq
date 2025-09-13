import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Services from "@/sections/Services";
import Achievements from "@/sections/Achievements";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Tasin Bin Tareq - Full-Stack Developer | React, Next.js, Node.js Expert</title>
        <meta name="description" content="Professional Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. 3+ years experience building scalable web applications. Available for freelance projects." />
        <meta name="keywords" content="Full-Stack Developer, React Developer, Next.js, Node.js, MongoDB, Web Development, Frontend Developer, Backend Developer, JavaScript, TypeScript" />
        <meta name="author" content="Tasin Bin Tareq" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tasin-portfolio.vercel.app/" />
        <meta property="og:title" content="Tasin Bin Tareq - Full-Stack Developer" />
        <meta property="og:description" content="Professional Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. 3+ years experience building scalable web applications." />
        <meta property="og:image" content="https://tasin-portfolio.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tasin-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Tasin Bin Tareq - Full-Stack Developer" />
        <meta property="twitter:description" content="Professional Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. 3+ years experience building scalable web applications." />
        <meta property="twitter:image" content="https://tasin-portfolio.vercel.app/og-image.jpg" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tasin-portfolio.vercel.app/" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Achievements />
            <Experience />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
