import React from "react";
import { FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-400">
              Contact Me
            </span>
          </h2>
          <p className="text-[#ADB7BE] text-lg mt-16">
            I’d love to hear from you! Reach out through any of the following
            platforms:
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-[#181818] rounded-lg p-8">
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-600" size={32} />
              <a
                href="https://www.linkedin.com/in/cs-jaeho-han/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADB7BE] text-lg hover:text-white break-all"
              >
                LinkedIn
              </a>
            </li>

            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600" size={32} />
              <a
                href="mailto:reachme@jaeho.me"
                className="text-[#ADB7BE] text-lg hover:text-white break-all"
              >
                Email me
              </a>
            </li>

            <li className="flex items-center space-x-4">
              <FaDiscord className="text-blue-600" size={32} />
              <span className="text-[#ADB7BE] text-lg break-all">echo321</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
