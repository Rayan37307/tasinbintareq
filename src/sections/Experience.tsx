import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Self-Taught Journey",
      role: "Full-Stack Developer",
      url: "https://github.com/tasinbin",
      start: "2021",
      end: "Present",
      shortDescription: [
        "Self-taught developer with 3+ years of intensive learning and project building using modern web technologies.",
        "Mastered the MERN stack through building 20+ full-stack applications, from simple CRUD apps to complex e-commerce platforms.",
        "Continuously learning and implementing the latest technologies including React, Next.js, Node.js, MongoDB, and TypeScript.",
        "Built a strong foundation in both frontend and backend development through hands-on project experience.",
      ],
    },
    {
      name: "Coding Bootcamps & Courses",
      role: "Self-Directed Learner",
      url: "https://www.linkedin.com/in/tasinbin",
      start: "2021",
      end: "Present",
      shortDescription: [
        "Completed multiple comprehensive coding bootcamps and online courses in web development, including React, Node.js, and MongoDB specializations.",
        "Participated in coding challenges and hackathons, consistently ranking in top performers and winning recognition for innovative solutions.",
        "Built a systematic learning approach through structured courses, hands-on projects, and continuous practice.",
        "Developed expertise in modern web technologies through intensive self-study and practical application.",
      ],
    },
    {
      name: "Open Source Contributions",
      role: "Contributor & Maintainer",
      url: "https://github.com/tasinbin",
      start: "2021",
      end: "Present",
      shortDescription: [
        "Active contributor to open-source projects, helping improve developer tools and libraries used by thousands of developers.",
        "Maintained several personal open-source projects with 100+ stars and active community engagement.",
        "Collaborated with developers worldwide on various projects, improving my code review and collaboration skills.",
        "Built reusable components and utilities that are used in multiple projects across different domains.",
      ],
    },
    {
      name: "Freelance Projects",
      role: "Independent Developer",
      url: "https://tasin-portfolio.vercel.app",
      start: "2022",
      end: "Present",
      shortDescription: [
        "Completed 15+ freelance projects for clients ranging from small businesses to startups, delivering high-quality web solutions.",
        "Specialized in building responsive, modern web applications using React, Next.js, and Node.js with focus on user experience.",
        "Managed client relationships, project timelines, and delivered projects on time with excellent client satisfaction.",
        "Gained experience in project management, client communication, and understanding business requirements.",
      ],
    },
    {
      name: "Learning & Certifications",
      role: "Continuous Learner",
      url: "https://www.linkedin.com/in/tasinbin",
      start: "2021",
      end: "Present",
      shortDescription: [
        "Completed multiple online courses and certifications in web development, including React, Node.js, and MongoDB specializations.",
        "Participated in coding bootcamps and hackathons, winning recognition for innovative project solutions.",
        "Stayed updated with latest industry trends and technologies through continuous learning and experimentation.",
        "Built a strong portfolio showcasing diverse projects across different domains and technology stacks.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>My Journey & Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
