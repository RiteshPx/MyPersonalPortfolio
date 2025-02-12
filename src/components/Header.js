import React,{useEffect}from "react";
import HighlightText from "../subComponents/HighlightText";
import { FaHome } from "react-icons/fa";
import { GiTv } from "react-icons/gi";
import { MdOutlineBook } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoManOutline } from "react-icons/io5";

function Header() {

  
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-evenly items-center text-white p-4 bg-black shadow-lg w-full" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div className="mb-4 md:mb-0 flex justify-between w-full md:w-auto">
        <h1 className="text-3xl font-extrabold font-lobster"><HighlightText>Ritesh Parmar</HighlightText></h1>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`flex-col md:flex-row justify-between font-semibold space-y-4 md:space-y-0 md:space-x-10 mt-2 ${isOpen ? 'flex' : 'hidden'} md:flex`} style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
        <a href="#home" className="hover:text-secondary hover:border-b-2 flex items-center transition duration-300"><FaHome className="mr-1"/>Home</a>
        <a href="#about" className="hover:text-secondary hover:border-b-2 flex items-center transition duration-300"><IoManOutline className="mr-1"/>About</a>
        <a href="#projects" className="hover:text-secondary hover:border-b-2 flex items-center transition duration-300"><GiTv className="mr-1"/>Projects</a>
        <a href="#resume" className="hover:text-secondary hover:border-b-2 flex items-center transition duration-300"><MdOutlineBook className="mr-1"/>Resume</a>
        <a href="#contact" className="hover:text-secondary hover:border-b-2 flex items-center transition duration-300"><RiContactsFill className="mr-1"/>Contact</a>
      </div>
    </nav>
  );
}

export default Header;