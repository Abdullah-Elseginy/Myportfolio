import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Contact = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const validateForm = (formData) => {
    const { user_name, user_email, subject, message } = formData;
    const formErrors = {};
    if (!user_name.trim()) formErrors.user_name = "Name is required.";
    if (!user_email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      formErrors.user_email = "Valid email is required.";
    }
    if (!subject.trim()) formErrors.subject = "Subject is required.";
    if (!message.trim()) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = Object.fromEntries(new FormData(formRef.current));
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      if (result.status === 200) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-primary flex flex-col items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Abdullah Elseginy</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-text-primary mb-8 text-center">
          Get In Touch
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-secondary p-8 rounded-xl shadow-2xl border border-secondary hover:border-accent/30 transition-colors duration-300"
        >
          <div className="mb-6">
            <label className="block text-text-secondary font-mono text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-text-primary transition-all"
              placeholder="Your Name"
            />
            {errors.user_name && (
              <p className="text-red-400 text-xs mt-1 font-mono">{errors.user_name}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-text-secondary font-mono text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-text-primary transition-all"
              placeholder="Your Email"
            />
            {errors.user_email && (
              <p className="text-red-400 text-xs mt-1 font-mono">{errors.user_email}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-text-secondary font-mono text-sm mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-text-primary transition-all"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1 font-mono">{errors.subject}</p>
            )}
          </div>

          <div className="mb-8">
            <label className="block text-text-secondary font-mono text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-text-primary transition-all resize-none"
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-accent/10 text-accent border border-accent rounded-lg hover:bg-accent hover:text-primary font-bold transition-all duration-300 flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader size={20} color="#64ffda" />
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-text-secondary font-mono mb-4">Or connect with me on</p>
          <div className="flex justify-center space-x-6 text-2xl text-text-secondary">
            <a href="https://facebook.com" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/1234567890" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
