import React from "react";
import homePageImage from "../assets/home-page-image.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../utility.css'

const Home = () => {
  return (
    <div className="md:min-h-[90vh] relative flex flex-col justify-center">
      {/* container for home page main image */}
      <div className="xs:h-[50vh] md:h-full w-full absolute -z-10">
        <img
          src={homePageImage}
          alt="home page image"
          className="xs:h-[50vh] md:h-[90vh] w-full"
        />
      </div>
     
      <div className="xs:px-4 xs:my-10 md:my-0 md:px-20">
        <div>
          <div className="xs:text-4xl md:text-7xl text-white font-extrabold">Farhan</div>
          <div className="text-2xl text-white">Data Analyst</div>
          <button className="xs:text-sm xs:px-3 xs:py-1 md:px-4 md:py-2 md:text-base cursor-pointer rounded-lg border-2 border-white outline-none mt-4 text-white bg-transparent hover:bg-white hover:text-black transition-colors">Resume</button>
           {/* social plateform links */}
          <ul className="flex gap-3 mt-4">
            <li className="xs:p-2 md:p-3 glass-effect text-white xs:text-xl md:text-3xl"><FaGithub/></li>
            <li className="xs:p-2 md:p-3 glass-effect text-white xs:text-xl md:text-3xl"><FaLinkedin/></li>
            <li className="xs:p-2 md:p-3 glass-effect text-white xs:text-xl md:text-3xl"><FaInstagram/></li>
            <li className="xs:p-2 md:p-3 glass-effect text-white xs:text-xl md:text-3xl"><FaXTwitter/></li>
            <li className="xs:p-2 md:p-3 glass-effect text-white xs:text-xl md:text-3xl"><FaKaggle/></li>

        </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;