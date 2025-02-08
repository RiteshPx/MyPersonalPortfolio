import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh] text-white">
      <h2 className="text-3xl font-bold">FIND ME ON</h2>
      <p className="text-gray-400 mt-2">
        Feel free to <span className="text-blue-400">connect</span> with me
      </p>

      <div className="flex gap-6  text-xl mt-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <BiLinkExternal />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
