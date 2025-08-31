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
        "A travel agency website for TZS International, showcasing travel packages and services with an engaging user interface.",
      projectTech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://dreamersclick.com/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Tasin Portfolio",
      projectLink: "https://tasin-beta.vercel.app/",
      projectDescription:
        "A professional portfolio website showcasing my work and skills with a clean and modern design.",
      projectTech: ["React", "Next.js", "CSS Modules", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://tasin-beta.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Animated Portfolio",
      projectLink: "https://tasinx10.vercel.app/",
      projectDescription:
        "A creative portfolio featuring smooth animations and transitions, built as a hackathon project.",
      projectTech: ["React", "Framer Motion", "CSS3", "Responsive Design"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://tasinx10.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Solo Lingo",
      projectLink: "https://solo-lingo.vercel.app/",
      projectDescription:
        "A language learning platform designed to help users learn new languages through interactive lessons.",
      projectTech: ["React", "Next.js", "MongoDB", "Node.js"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://solo-lingo.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Phone Portfolio",
      projectLink: "https://phone-portfolio.vercel.app/",
      projectDescription:
        "A creative portfolio designed to look like a smartphone interface, showcasing projects in a unique way.",
      projectTech: ["React", "CSS3", "Responsive Design", "Mobile-first"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://phone-portfolio.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "3D Portfolio",
      projectLink: "https://3d-portfolio-coral.vercel.app/",
      projectDescription:
        "An immersive 3D portfolio experience built with Three.js and React Three Fiber.",
      projectTech: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://3d-portfolio-coral.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Anime Website",
      projectLink: "https://anime-land-three.vercel.app/",
      projectDescription:
        "An anime streaming and discovery platform featuring infinite scrolling and a vast collection.",
      projectTech: ["React", "Next.js", "Infinite Scroll", "Anime API"],
      projectExternalLinks: {
        github: "",
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
    <div className="projects" id="work">
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
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            projectTech,
            projectExternalLinks,
          }) => (
            <motion.div
              key={projectName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="project"
            >
              <div className="project-info">
                <span className="project-info-overline">Featured Project</span>
                <h3 className="project-info-title">{projectName}</h3>
                <p className="project-info-description">{projectDescription}</p>
                <ul className="project-info-tech-list">
                  {projectTech.map((tech) => (
                    <li className="project-info-tech-list-item" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-info-links">
                  <a
                    href={projectExternalLinks.externalLink}
                    target="_blank"
                    className="project-info-links-item-link"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
