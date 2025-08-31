import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
      <div className="about-grid-info">
  <p className="about-grid-info-text">
    👋 Hey there! My name is <span className="font-semibold">Tasinbin Tareq</span>, 
    and I’m a passionate <span className="font-semibold">Full-Stack Web Developer</span>.  
    My journey started 3+ years ago when I built my very first project using the 
    <span className="font-semibold"> MERN stack</span> 🚀 — and ever since, I’ve been crafting 
    modern, scalable, and user-friendly web applications.
  </p>

  <p className="about-grid-info-text">
    💡 Today, I specialize in designing and developing high-quality digital solutions 
    that help businesses grow 📈 and users enjoy seamless experiences.  
    I work extensively with <span className="font-semibold">Next.js</span> ⚡ and other 
    modern frameworks to build production-ready applications.
  </p>

  <p className="about-grid-info-text">
    🔭 Beyond coding, I love exploring new technologies in 
    <span className="font-semibold"> AI 🤖, DevOps ⚙️, and Mobile Development 📱</span> — 
    constantly learning to stay future-proof in this fast-moving industry.
  </p>

  <p className="about-grid-info-text">
    🌍 I also enjoy contributing to open-source projects 🛠️ and building side projects 
    that challenge me to grow as a developer while sharing my knowledge with the community.
  </p>

  <p className="about-grid-info-text">
    ⚡ Here are a few technologies I’ve been working with recently:
  </p>

  <ul className="about-grid-info-list grid grid-cols-2 sm:grid-cols-3 gap-2">
    <li className="about-grid-info-list-item">⚛️ React.js</li>
    <li className="about-grid-info-list-item">🔗 Next.js</li>
    <li className="about-grid-info-list-item">🟢 Node.js</li>
    <li className="about-grid-info-list-item">🚂 Express.js</li>
    <li className="about-grid-info-list-item">🍃 MongoDB</li>
    <li className="about-grid-info-list-item">📦 Zustand</li>
    <li className="about-grid-info-list-item">🎨 Tailwind CSS</li>
    <li className="about-grid-info-list-item">📝 TypeScript</li>
    <li className="about-grid-info-list-item">🔑 JWT Auth</li>
  </ul>
</div>

        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/about.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
