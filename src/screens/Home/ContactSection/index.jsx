import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../../../assets/utils/Data";
import { useMediaQuery } from "react-responsive";

function ContactSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="px-12 py-12 text-center bg-mint-green">
      <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
        Contact Me
      </h2>
      <p className="text-lg text-light-pink mb-4">
        If you are interested in working with me or just want to chat, feel free
        to reach out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {links.map((link, index) => (
          <motion.div
            key={link.title}
            className={`flex items-center justify-center self-center bg-mint-blue border-light-pink border-2 p-2 rounded-lg my-3 shadow-lg transition-all duration-500 transform hover:bg-black`}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Animate every time it scrolls into view
            whileHover={{ scale: 1.04 }} // Scale the card on hover
          >
            <Link
              to={link.href}
              target={link.title !== "Send Email" ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center flex-col font-bold text-light-pink"
            >
              {link.icon}
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Optionally hide content for mobile */}
      {isMobile && <p>This is visible only on mobile</p>}
    </section>
  );
}

export default ContactSection;
