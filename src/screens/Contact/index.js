import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners"; // Import a loading spinner
import toast from "react-hot-toast"; // Import React Hot Toast
import { Helmet } from "react-helmet";

const Contact = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  console.log("service template id: " + templateId)
  const [isLoading, setIsLoading] = useState(false); // To show loading spinner
  const [errors, setErrors] = useState({}); // To store error messages for form fields
  const formRef = useRef(); // Reference to the form element

  const validateForm = (formData) => {
    const { user_name, user_email, subject, message } = formData;
    const formErrors = {};
    if (!user_name.trim()) {
      formErrors.user_name = "Name is required.";
    }
    if (!user_email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      formErrors.user_email = "Valid email is required.";
    }
    if (!subject.trim()) {
      formErrors.subject = "Subject is required.";
    }
    if (!message.trim()) {
      formErrors.message = "Message is required.";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({}); // Clear previous errors

    const formData = Object.fromEntries(new FormData(formRef.current));
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set the errors
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
        formRef.current.reset(); // Clear the form
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
    <div className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-light-pink mb-6">Contact Me</h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-mint-blue p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            className="block text-light-pink font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue focus:outline-none transition-all duration-300 focus:shadow-lg text-gray-800"
            placeholder="Your Name"
          />
          {errors.user_name && (
            <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-light-pink font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue focus:outline-none transition-all duration-300 focus:shadow-lg text-gray-800"
            placeholder="Your Email"
          />
          {errors.user_email && (
            <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-light-pink font-medium mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue focus:outline-none transition-all duration-300 focus:shadow-lg text-gray-800"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-light-pink font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue focus:outline-none transition-all duration-300 focus:shadow-lg text-gray-800"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-mint-green text-white rounded-lg hover:bg-opacity-80 flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader size={24} color="#ffffff" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-light-pink">
          Follow Me
        </h2>
        <div className="flex justify-center space-x-6 text-3xl text-mint-green">
          <a href="https://facebook.com" className="hover:text-mint-green">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="hover:text-mint-green">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="hover:text-mint-green">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/1234567890" className="hover:text-mint-green">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
    </div>
  );
};

export default Contact;
