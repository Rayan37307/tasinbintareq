import React from "react";
import { motion } from "framer-motion";
import { 
  FaTrophy, 
  FaGraduationCap, 
  FaCode, 
  FaUsers, 
  FaStar,
  FaCertificate,
  FaRocket,
  FaHeart
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: FaCode,
      title: "20+ Projects Built",
      description: "Full-stack applications ranging from simple CRUD apps to complex e-commerce platforms",
      metric: "20+",
      color: "#9d00ff"
    },
    {
      icon: FaUsers,
      title: "Community Engagement",
      description: "Active participant in developer communities and coding forums",
      metric: "500+",
      color: "#ff6b6b"
    },
    {
      icon: FaStar,
      title: "100+ GitHub Stars",
      description: "Open-source projects and contributions to the developer community",
      metric: "100+",
      color: "#4ecdc4"
    },
    {
      icon: FaCertificate,
      title: "15+ Certifications",
      description: "Completed courses in React, Node.js, MongoDB, and modern web technologies",
      metric: "15+",
      color: "#45b7d1"
    },
    {
      icon: FaRocket,
      title: "3+ Years Learning",
      description: "Continuous self-improvement and skill development in web development",
      metric: "3+",
      color: "#96ceb4"
    },
    {
      icon: FaHeart,
      title: "Code Reviews",
      description: "Helping fellow developers through code reviews, debugging, and technical discussions",
      metric: "50+",
      color: "#feca57"
    }
  ];

  const learningJourney = [
    {
      year: "2021",
      title: "Started Learning",
      description: "Began my self-taught journey with HTML, CSS, and JavaScript fundamentals"
    },
    {
      year: "2022",
      title: "MERN Stack Mastery",
      description: "Mastered React, Node.js, Express, and MongoDB through building real projects"
    },
    {
      year: "2023",
      title: "Advanced Technologies",
      description: "Learned Next.js, TypeScript, and modern development practices"
    },
    {
      year: "2024",
      title: "Advanced Projects",
      description: "Built complex full-stack applications and contributed to open-source projects"
    }
  ];

  return (
    <motion.section
      className="achievements"
      id="achievements"
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
        <h2>My Achievements & Learning Journey</h2>
        <p className="achievements-subtitle">
          Self-taught developer with a passion for continuous learning and growth
        </p>
      </div>
      
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="achievement-icon" style={{ color: achievement.color }}>
              <achievement.icon />
            </div>
            <div className="achievement-metric">{achievement.metric}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="learning-journey">
        <h3 className="journey-title">My Learning Timeline</h3>
        <div className="journey-container">
          {learningJourney.map((milestone, index) => (
            <motion.div
              key={index}
              className="journey-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="journey-year">{milestone.year}</div>
              <div className="journey-content">
                <h4 className="journey-milestone-title">{milestone.title}</h4>
                <p className="journey-milestone-description">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;
