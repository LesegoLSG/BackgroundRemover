import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import Logo1 from "../assets/Logo1.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "who we are", "erase in motion"];

  const handleNavigateActive = (section) => {
    const homeSection = document.getElementById(section);

    if (homeSection) {
      const position = homeSection.offsetTop;
      scroll.scrollTo(position, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      // Update active section
      setActiveSection(section);
      // Optionally close the mobile menu if it's open
      setIsOpen(false);
    }
  };
  //Navigate to home section on logo click
  const handleLogoClick = () => {
    handleNavigateActive("home");
  };
  return (
    <header className=" shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-gradient-to-b from-blue-500 to-indigo-600  ">
        {/* Logo */}
        <div className="w-24 h-6 flex text-2xl cursor-pointer items-center gap-2">
          <img
            src={Logo1}
            alt="logo"
            className=""
            onClick={() => handleLogoClick()}
          />
        </div>
        {/* Menu Icons */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!isOpen ? <IoMenu size={25} /> : <IoCloseCircleOutline size={25} />}
        </div>

        {/* NavLinks */}
        <ul
          className={`md:flex text-white  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                      duration-500 ease-in ${
                        isOpen ? "top-12" : "top-[-490px]"
                      } `}
        >
          {sections.map((section) => (
            <li key={section} className="my-7 md:my-0 md:ml-8">
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                // offset={-80}
                className={`text-white text-sm hover:text-gray-400 duration-500 cursor-pointer ${
                  activeSection === section ? "font-bold text-action" : ""
                }`}
                onClick={() => handleNavigateActive(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
