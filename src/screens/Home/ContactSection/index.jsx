import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="px-6 py-20 bg-primary text-center" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <span className="text-accent">04.</span> What's Next?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>

          <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Get In Touch
          </h3>
          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <motion.a
            href="mailto:abdullah.ahmed.elseginy@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-lg"
          >
            <FaEnvelope />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
