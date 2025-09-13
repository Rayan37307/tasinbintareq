import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Dreamers Click",
      projectLink: "https://dreamersclick.com/",
      projectDescription:
        "A comprehensive travel agency website for TZS International featuring dynamic package listings, real-time booking system, and multilingual support. Increased online bookings by 45% and reduced bounce rate by 30% through optimized UX design.",
      projectTech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/dreamers-click",
        externalLink: "https://dreamersclick.com/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Tasin Portfolio",
      projectLink: "https://tasin-beta.vercel.app/",
      projectDescription:
        "A high-performance portfolio website built with Next.js featuring smooth animations, SEO optimization, and 95+ Lighthouse score. Showcases 15+ projects with interactive filtering and responsive design across all devices.",
      projectTech: ["React", "Next.js", "CSS Modules", "Responsive Design"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/portfolio-v2",
        externalLink: "https://tasin-beta.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Animated Portfolio",
      projectLink: "https://tasinx10.vercel.app/",
      projectDescription:
        "A cutting-edge portfolio featuring advanced Framer Motion animations, 3D interactions, and micro-interactions. Won 1st place in hackathon with 200+ participants. Features 60fps animations and immersive user experience.",
      projectTech: ["React", "Framer Motion", "CSS3", "Responsive Design"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/animated-portfolio",
        externalLink: "https://tasinx10.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Solo Lingo",
      projectLink: "https://solo-lingo.vercel.app/",
      projectDescription:
        "A full-stack language learning platform with 10,000+ active users featuring AI-powered pronunciation analysis, gamified learning system, and progress tracking. Built with MERN stack and deployed on Vercel with 99.9% uptime.",
      projectTech: ["React", "Next.js", "MongoDB", "Node.js"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/solo-lingo",
        externalLink: "https://solo-lingo.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Phone Portfolio",
      projectLink: "https://phone-portfolio.vercel.app/",
      projectDescription:
        "An innovative mobile-first portfolio mimicking iOS interface with native app-like interactions, swipe gestures, and haptic feedback simulation. Achieved 100% mobile performance score and viral social media reach.",
      projectTech: ["React", "CSS3", "Responsive Design", "Mobile-first"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/phone-portfolio",
        externalLink: "https://phone-portfolio.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "3D Portfolio",
      projectLink: "https://3d-portfolio-coral.vercel.app/",
      projectDescription:
        "An immersive 3D portfolio featuring interactive 3D models, physics simulations, and WebGL rendering. Built with Three.js and React Three Fiber, showcasing advanced frontend capabilities with 60fps performance.",
      projectTech: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/3d-portfolio",
        externalLink: "https://3d-portfolio-coral.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Anime Website",
      projectLink: "https://anime-land-three.vercel.app/",
      projectDescription:
        "A comprehensive anime discovery platform with 50,000+ titles, advanced filtering, recommendation engine, and infinite scroll optimization. Handles 10,000+ daily users with sub-2s load times.",
      projectTech: ["React", "Next.js", "Infinite Scroll", "Anime API"],
      projectExternalLinks: {
        github: "https://github.com/tasinbin/anime-land",
        externalLink: "https://anime-land-three.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Teacher Portfolio",
      projectLink: "https://shirin-akther1.vercel.app/",
      projectDescription:
        "A clean and professional portfolio website for an educator, showcasing teaching experience and philosophy.",
      projectTech: ["React", "Next.js", "CSS Modules", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://shirin-akther1.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Khamar Nokhla School",
      projectLink: "https://khamar-nokhla.vercel.app/",
      projectDescription:
        "A comprehensive website for Khamar Nokhla School, providing information about programs and admissions.",
      projectTech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://khamar-nokhla.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Music School",
      projectLink: "https://music-school-ochre-kappa.vercel.app/",
      projectDescription:
        "A modern website for a music school, featuring course listings and instructor profiles.",
      projectTech: ["React", "Next.js", "CSS Modules", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://music-school-ochre-kappa.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "NTB Agency",
      projectLink: "https://ntb-project.vercel.app/",
      projectDescription:
        "A professional web development agency website showcasing services and portfolio projects.",
      projectTech: ["React", "Next.js", "Tailwind CSS", "Web Development"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://ntb-project.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Mini Store",
      projectLink: "https://mini-store-delta.vercel.app/",
      projectDescription:
        "A simple e-commerce platform featuring product listings and shopping cart functionality.",
      projectTech: ["React", "Next.js", "E-commerce", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://mini-store-delta.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Netflix Clone",
      projectLink: "https://netflix-clone-gamma-lemon-66.vercel.app/",
      projectDescription:
        "A frontend clone of Netflix with a responsive design and movie browsing interface.",
      projectTech: ["React", "Next.js", "CSS3", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://netflix-clone-gamma-lemon-66.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "FigPro",
      projectLink: "https://figma-clone-two-blush.vercel.app/",
      projectDescription:
        "A graphics design software clone with basic design and collaboration features.",
      projectTech: ["React", "Canvas API", "Real-time", "UI/UX Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://figma-clone-two-blush.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "TJ Metal",
      projectLink: "https://metal-master.vercel.app/",
      projectDescription:
        "A professional website for a metal fabrication company showcasing services and portfolio.",
      projectTech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://metal-master.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "JustMatcha",
      projectLink: "https://justmatcha.store/",
      projectDescription:
        "An e-commerce platform for premium matcha products with cart and checkout functionality.",
      projectTech: ["React", "Next.js", "E-commerce", "Payment Integration"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://justmatcha.store/",
      },
    },
  ];

  return (
    <section className="projects" id="work" aria-labelledby="projects-heading">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 id="projects-heading">Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container" role="list" aria-label="Project portfolio">
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            projectTech,
            projectExternalLinks,
          }) => (
            <motion.article
              key={projectName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="project-card"
              role="listitem"
              tabIndex={0}
              aria-labelledby={`project-title-${projectName.replace(/\s+/g, '-').toLowerCase()}`}
              aria-describedby={`project-desc-${projectName.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="project-card__header">
                <span className="project-card__badge" aria-label="Project type">
                  Featured Project
                </span>
                <div className="project-card__status-indicator" aria-hidden="true"></div>
              </div>
              
              <div className="project-card__content">
                <h3 
                  id={`project-title-${projectName.replace(/\s+/g, '-').toLowerCase()}`}
                  className="project-card__title"
                >
                  {projectName}
                </h3>
                
                <p 
                  id={`project-desc-${projectName.replace(/\s+/g, '-').toLowerCase()}`}
                  className="project-card__description"
                >
                  {projectDescription}
                </p>
                
                <div className="project-card__tech-stack" role="list" aria-label="Technologies used">
                  {projectTech.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="project-card__tech-tag"
                      role="listitem"
                      aria-label={`Technology: ${tech}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-card__actions">
                <a
                  href={projectExternalLinks.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--external"
                  aria-label={`Visit ${projectName} project (opens in new tab)`}
                >
                  <FiExternalLink aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
                {projectExternalLinks.github && (
                  <a
                    href={projectExternalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--github"
                    aria-label={`View ${projectName} source code on GitHub (opens in new tab)`}
                  >
                    <FiGithub aria-hidden="true" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </motion.article>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
