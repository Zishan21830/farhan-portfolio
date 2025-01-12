import React from "react";
import Heading from "./Heading.jsx";
import { FaBroom, FaChartBar, FaBrain, FaDatabase } from "react-icons/fa";
import { TbChartHistogram } from "react-icons/tb";
import "../utility.css";

const dataAnalystServices = [
  {
    name: "Data Cleaning & Preparation",
    description:
      "Transforming raw data into a usable format by handling missing values, removing duplicates, and correcting inconsistencies.",
    tools: ["Python", "Pandas", "Excel", "SQL"],
    bgColor : 'bg-lime-300',
    headingColor : "text-gray-400",
    icon: FaBroom,
  },
  {
    name: "Data Visualization",
    description:
      "Creating insightful charts and dashboards to communicate trends, patterns, and key metrics effectively.",
    tools: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    bgColor : 'bg-white',
    headingColor : "text-gray-400",
    icon: FaChartBar,
  },
  {
    name: "Statistical Analysis",
    description:
      "Performing hypothesis testing, regression analysis, and other statistical techniques to draw meaningful conclusions.",
    tools: ["Python (SciPy, Statsmodels)", "SPSS"],
    bgColor : 'bg-lime-300',
    headingColor : "text-gray-400",
    icon: TbChartHistogram,
  },
  {
    name: "Predictive Modeling",
    description:
      "Building machine learning models to predict future outcomes based on historical data.",
    tools: ["Scikit-learn", "TensorFlow", "Keras", "Excel"],
    bgColor : 'bg-white',
    headingColor : "text-gray-400",
    icon: FaBrain,
  },
  {
    name: "Database Management",
    description:
      "Designing, maintaining, and querying databases to ensure efficient data storage and retrieval.",
    tools: ["SQL"],
    bgColor : 'bg-lime-100',
    headingColor : "text-gray-400",
    icon: FaDatabase,
  },
];

const Services = () => {
  return (
    <section className="min-h-fit bg-[#131718] pb-10 font-poppins" id="service">
      <div className="xs:px-4 md:px-20 flex justify-center items-center">
        <Heading heading={"Services"} />
      </div>
      <div className="flex gap-3  min-h-full flex-wrap justify-center items-center p-10">
        {dataAnalystServices.map((service, idx) => {
          return (
            <div className={`xs:min-h-[21rem] xs:w-[18rem] md:min-h-[21rem] md:w-[20rem] ${service.bgColor} pl-5 pt-5 rounded-md`} key={idx}>
              <div className="xs:w-16 xs:h-16  rounded-full bg-black flex justify-center items-center">
              <service.icon className={`xs:text-2xl md:text-4xl  text-lime-400`}/>
              </div>
              <h1 className={`${service.headingColor} font-bold xs:text-lg md:text-xl pt-2`}>{service.name}</h1>
              <p className={`text-sm mt-2`}>{service.description}</p>
              <div>
                <h2>Tools</h2>
                <div>
                  <div className="m-3 ml-0 flex flex-wrap">
                    {service.tools.map((tool, idx) => {
                      return (
                        <span className="bg-black text-lime-400 px-2 py-1 m-1 rounded-md text-sm" key={idx}>
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
