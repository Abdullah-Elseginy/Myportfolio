import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen p-6 text-white">
            <h1 className="text-3xl font-bold text-light-pink mb-6">Contact Me</h1>
            <form className="max-w-lg mx-auto bg-mint-blue p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-light-pink font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-light-pink font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-light-pink font-medium mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue"
                        placeholder="Subject"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-light-pink font-medium mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-mint-blue"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-mint-green text-white rounded-lg hover:bg-opacity-80"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-light-pink">Follow Me</h2>
                <div className="flex justify-center space-x-6 text-3xl text-mint-green">
                    <a href="https://facebook.com" className="hover:text-mint-blue">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" className="hover:text-mint-blue">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" className="hover:text-mint-blue">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/1234567890" className="hover:text-mint-blue">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
