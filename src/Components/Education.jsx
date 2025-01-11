import React from "react";
import Heading from "./Heading";

const Education = () => {
  return (
    <div className="min-h-fit bg-[#131718] pb-10 font-poppins flex xs:flex-col md:flex-row">
      {/* Education */}
      <div className="xs:w-full md:w-2/4 h-full">
        {/* heading */}
        <div className="xs:px-4 md:px-20 flex justify-center items-center">
          <Heading heading={"Education"} />
        </div>
        <div className="min-h-16 border-l-4 border-lime-400 ml-10">
          {/* side line */}
          <div></div>
          <div>
            <div className="m-10 pt-4">
              {/* dot */}
              <span className="w-4 h-4 bg-lime-400 rounded-full text-lime-400 relative right-[3.4rem] top-7">
                ooi
              </span>
              {/* education Name */}
              <div>
                <span className="text-lime-400">B.Tech (CSE)</span>
                <p className="text-lime-400">Khwaja Moinuddin Chishti Language University Lucknow</p>
                <p className="text-lime-400">2020 - 2024</p>
              </div>
            </div>
            <div className="m-10 pt-4">
              {/* dot */}
              <span className="w-4 h-4 bg-lime-400 rounded-full text-lime-400 relative right-[3.4rem] top-7">
                ooi
              </span>
              {/* education Name */}
              <div>
                <span className="text-lime-400">Intermediate</span>
                <p className="text-lime-400">Board of High School and Intermediate Education U. P.</p>
                <p className="text-lime-400">2018 - 2020</p>
              </div>
            </div>
            <div className="m-10 pt-4">
              {/* dot */}
              <span className="w-4 h-4 bg-lime-400 rounded-full text-lime-400 relative right-[3.4rem] top-7">
                ooi
              </span>
              {/* education Name */}
              <div>
                <span className="text-lime-400">High School</span>
                <p className="text-lime-400">Board of High School and Intermediate Education U. P.</p>
                <p className="text-lime-400">2016 - 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experiance */}
      <div className="xs:w-full md:w-2/4 h-full">
        {/* heading */}
        <div className="xs:px-4 md:px-20 flex justify-center items-center">
          <Heading heading={"Experiance"} />
        </div>
        <div className="min-h-16 border-l-4 border-lime-400 ml-10">
          {/* side line */}
          <div></div>
          <div>
            <div className="m-10 pt-4">
              {/* dot */}
              <span className="w-4 h-4 bg-lime-400 rounded-full text-lime-400 relative right-[3.4rem] top-7">
                ooi
              </span>
              {/* education Name */}
              <div>
                <span className="text-lime-400">Business Analyst</span>
                <p className="text-lime-400">Stanza Living</p>
                <p className="text-lime-400">June 2024 - Oct 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
