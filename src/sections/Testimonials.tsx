import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Developer & Mentor",
      company: "Tech Community",
      content: "Tasin's dedication to learning and building quality projects is impressive. His code is clean, well-documented, and shows deep understanding of modern web development principles.",
      rating: 5,
      project: "Code Review & Mentorship"
    },
    {
      name: "Maria Garcia",
      role: "Fellow Developer",
      company: "Open Source Community",
      content: "Working with Tasin on open-source projects has been amazing. His problem-solving skills and willingness to help others learn makes him a valuable team member.",
      rating: 5,
      project: "Open Source Collaboration"
    },
    {
      name: "James Wilson",
      role: "Fellow Developer",
      company: "Coding Community",
      content: "Tasin's code quality and problem-solving approach is impressive. His projects are well-structured and his explanations are clear. Great developer to collaborate with!",
      rating: 5,
      project: "Code Collaboration"
    },
    {
      name: "Sarah Lee",
      role: "Freelance Client",
      company: "Small Business Owner",
      content: "Tasin built my business website and exceeded expectations. He was professional, responsive, and delivered exactly what I needed. Highly recommend for any web project!",
      rating: 5,
      project: "Business Website"
    }
  ];

  return (
    <motion.section
      className="testimonials"
      id="testimonials"
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
        <h2>What Clients Say</h2>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
                <span className="project-tag">{testimonial.project}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonials;
