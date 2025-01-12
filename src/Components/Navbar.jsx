import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FaAlignRight, FaRegUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import {
  LuProjector,
  LuBrainCircuit,
  LuPhone,
  LuSettings,
  LuGraduationCap,
} from "react-icons/lu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const smoothScrollOption = {
    smooth : true,
    duration : 1000,
  }

  const handleMobileMenu = () => {
    setMobileMenu((m) => !m);
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="h-16 w-full flex justify-between items-center xs:px-4 md:px-8 lg:px-12 xl:px-20 py-2 bg-black overflow-x-hidden">
      {/* logo */}
      <div className="text-xl text-white font-playwrite font-semibold">
        <span>Farhan</span>
        <span>;</span>
      </div>
      {/* features */}
      <ul
        ref={menuRef}
        className={`${
          mobileMenu ? "block" : "hidden"
        } xs:absolute xs:top-20 xs:rounded-md xs:right-4 xs:bg-black xs:px-10 xs:py-3 xs:h-fit ${
          mobileMenu ? "w-fit" : ""
        } lg:flex lg:p-0 lg:right-0 lg:relative lg:top-0 lg:gap-8 xl:gap-10 font-poppins text-white md:text-lg z-50`}
      >
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="about"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <FaRegUser className="text-lg" />
            <span>About</span>
          </Link>
        </li>
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="education"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <LuGraduationCap className="text-lg" />
            <span>Education</span>
          </Link>
        </li>
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="skill"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <LuBrainCircuit className="text-xl" />
            <span>Skills</span>
          </Link>
        </li>
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="service"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <LuSettings className="text-xl" />
            <span>Services</span>
          </Link>
        </li>
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="project"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <LuProjector className="text-xl" />
            <span>Projects</span>
          </Link>
        </li>
        <li className="xs:py-5 lg:py-0 flex items-center gap-3 cursor-pointer">
          <Link
            to="contact"
            smooth={smoothScrollOption.smooth}
            duration={smoothScrollOption.duration}
            className="flex items-center gap-3"
          >
            <LuPhone className="text-xl" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      {/* Mobile menu */}
      <div
        className="text-white text-2xl xs:flex lg:hidden"
        onClick={handleMobileMenu}
      >
        <FaAlignRight className={mobileMenu ? "hidden" : "block"} />
        <RxCross2 className={mobileMenu ? "block" : "hidden"} />
      </div>
    </nav>
  );
};

export default Navbar;
