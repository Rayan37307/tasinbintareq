import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaRocket, 
  FaPalette, 
  FaCog,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend using modern technologies like React, Next.js, Node.js, and MongoDB.",
      features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"]
    },
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Responsive, mobile-optimized websites that work perfectly across all devices and screen sizes.",
      features: ["Responsive Design", "Mobile Optimization", "Touch Interactions", "Performance Tuning"]
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization for high-performance applications.",
      features: ["MongoDB/PostgreSQL", "Query Optimization", "Data Migration", "Backup Solutions"]
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques and best practices.",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup"]
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: FaCog,
      title: "DevOps & Deployment",
      description: "Seamless deployment and maintenance of your applications with modern DevOps practices.",
      features: ["CI/CD Pipelines", "Cloud Deployment", "Monitoring", "Automated Testing"]
    },
    {
      icon: FaShieldAlt,
      title: "Security Implementation",
      description: "Secure your application with industry-standard security practices and protocols.",
      features: ["Authentication", "Data Encryption", "Security Audits", "Compliance"]
    },
    {
      icon: FaChartLine,
      title: "Analytics & SEO",
      description: "Track performance and improve visibility with comprehensive analytics and SEO optimization.",
      features: ["Google Analytics", "SEO Optimization", "Performance Tracking", "Conversion Analysis"]
    }
  ];

  return (
    <motion.section
      className="services"
      id="services"
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
        <h2>Services I Offer</h2>
        <p className="services-subtitle">
          Comprehensive web development solutions tailored to your business needs
        </p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="service-icon">
              <service.icon />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="service-feature">
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="services-cta">
        <motion.a
          href="mailto:r11137307@gmail.com"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Discuss Your Project
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Services;
