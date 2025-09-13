import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Ready to Build Something Amazing?</h2>
      <h2 className="contact-sub-title">Let's Work Together</h2>
      <p className="contact-text">
        I'm always excited to discuss new opportunities and interesting projects. 
        Whether you need a full-stack web application, a modern portfolio, or have 
        a unique idea you'd like to bring to life, I'm here to help make it happen. 
        Let's create something extraordinary together!
      </p>
      <div className="contact-cta">
        <Button link="mailto:r11137307@gmail.com" text="Start Your Project" />
      </div>
    </motion.div>
  );
}

export default Contact;
