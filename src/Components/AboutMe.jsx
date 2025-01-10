import React from "react";
import Heading from "./Heading";
import aboutPageImage from "../assets/favicon.png";
import ISpeakData from "../assets/ISpeakData.png";

const AboutMe = () => {
  return (
    <section className="bg-[#141819] w-full min-h-fit">
      {/* heaidng */}
      <div className="xs:px-4 md:px-20">
        <Heading heading={"About Me"} />
      </div>
      {/* Lower container to holds the main information of about me page */}
      <div className="flex xs:flex-col md:flex-row w-full min-h-[80vh]">
        <div className="xs:w-full md:w-2/5 h-full">
            <img src={aboutPageImage} alt="About page side image" className="pb-6"/>
            
        </div>
        <div className="xs:w-full md:w-2/3 min-h-[50vh] flex justify-center items-center">
            <div className="flex flex-col xs:items-center">
            <img src={ISpeakData} alt="baad me type kronga" className="w-[18rem] h-[18rem]"/>
            <p className="xs:text-justify md:text-left py-5 text-white w-3/4 leading-relaxed tracking-wide">
            I am a passionate and detail-oriented <b className="font-playwrite">Data Analyst</b> with a strong foundation in <b className="font-playwrite">data visualization</b>, <b className="font-playwrite">statistical analysis</b>, and <b className="font-playwrite">problem-solving</b>. Recently graduated with a B.Tech in Computer Science, I have developed a keen interest in using data to drive meaningful insights and inform strategic decisions. My academic journey has equipped me with solid technical skills in tools like <b className="font-playwrite">Excel</b>, <b className="font-playwrite">SQL</b>, <b className="font-playwrite">Python</b> with libraries like <b className="font-playwrite">Pandas</b>, <b className="font-playwrite">NumPy</b>, and <b className="font-playwrite">Matplotlib</b>, and <b className="font-playwrite">Tableau</b> for creating impactful visualizations.
            </p>
            
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
