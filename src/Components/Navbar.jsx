import React, { useState } from "react";
import { FaAlignRight, FaRegUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LuProjector, LuBrainCircuit, LuPhone, LuSettings, LuGraduationCap} from "react-icons/lu";

const Navbar = () => {
    let [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(m=>!m);
    }
  return (
    <nav className="h-16 w-full flex justify-between items-center xs:px-4 md:px-16 lg:px-20 py-2 bg-black overflow-x-hidden">
      {/* logo */}
      <div className="text-xl text-white font-playwrite font-semibold">
        <span>Farhan</span>
        <span>;</span>
      </div>
      {/* features */}
        <ul className={`${mobileMenu ? 'block' : 'hidden'} xs:absolute xs:top-20 xs:rounded-md xs:right-4 xs:bg-black xs:px-10 xs:py-3 xs:h-3/4 ${mobileMenu ? 'w-3/5' : ''} md:flex md:p-0 md:right-0 md:relative md:top-0 md:gap-4 lg:gap-10 font-poppins text-white md:text-lg z-50`}>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><FaRegUser className="text-lg"/><span>About</span></li>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><LuGraduationCap className="text-lg"/><span>Education</span></li>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><LuBrainCircuit className="text-xl"/><span>Skills</span></li>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><LuSettings className="text-xl"/><span>Services</span></li>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><LuProjector className="text-xl"/><span>Projects</span></li>
          <li className="xs:mb-4 md:mb-0 flex items-center gap-3 cursor-pointer"><LuPhone className="text-xl"/><span>Contact</span></li>
        </ul>
        {/* Mobile menu */}
        <div className="text-white text-2xl xs:flex md:hidden" onClick={handleMobileMenu}>
            <FaAlignRight className={mobileMenu ? 'hidden' : 'block'}/>
            <RxCross2 className={mobileMenu ? 'block' : 'hidden'}/>
        </div>
    </nav>
  );
};

export default Navbar;
