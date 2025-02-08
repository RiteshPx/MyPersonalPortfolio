import React from "react";
import HighlightText from "../subComponents/HighlightText";
import { FaHome } from "react-icons/fa";
import { GiTv } from "react-icons/gi";
import { MdOutlineBook } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoManOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="flex justify-evenly items-center  text-white p-4 bg-black shadow-lg" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div>
        <h1 className="text-3xl font-extrabold"><HighlightText>Ritesh Parmar</HighlightText></h1>
      </div>
      <div className="flex justify-between font-semibold space-x-10 mt-2">
        <a href="#home" className=" hover:border-b-2 flex items-center hover:border-secondary transition duration-300"><FaHome className="mr-1"/>Home</a>
        <a href="#about" className="hover:border-b-2 flex items-center hover:border-secondary transition duration-300"><IoManOutline/>About</a>
        <a href="#projects" className=" hover:border-b-2 flex items-center hover:border-secondary transition duration-300"><GiTv className="mr-1"/>Projects</a>
        <a href="#resume" className=" hover:border-b-2 flex items-center hover:border-secondary transition duration-300"><MdOutlineBook className="mr-1"/>Resume</a>
        <a href="#contact" className=" hover:border-b-2 flex items-center hover:border-secondary transition duration-300"><RiContactsFill className="mr-1"/>Contact</a>
      </div>
    </nav>
  );
}

export default Header;