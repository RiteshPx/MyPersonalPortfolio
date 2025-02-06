import React from "react";
import HighlightText from "../subComponents/HighlightText";

function Header() {
  return (
    <nav className="flex justify-evenly items-center bg-black text-white p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div>
        <h1 className="text-2xl  font-bold"><HighlightText>Ritesh Parmar</HighlightText></h1>
      </div>
      <div className="flex justify-between space-x-28 mt-2">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#resume" className="hover:text-gray-400">Resume</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
}

export default Header;