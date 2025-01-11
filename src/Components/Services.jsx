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
    benefits: [
      "Improves data quality",
      "Ensures accurate analysis",
      "Saves time in processing",
    ],
    icon: FaBroom,
  },
  {
    name: "Data Visualization",
    description:
      "Creating insightful charts and dashboards to communicate trends, patterns, and key metrics effectively.",
    tools: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    benefits: [
      "Improves decision-making",
      "Simplifies complex data",
      "Enhances data storytelling",
    ],
    icon: FaChartBar,
  },
  {
    name: "Statistical Analysis",
    description:
      "Performing hypothesis testing, regression analysis, and other statistical techniques to draw meaningful conclusions.",
    tools: ["R", "Python (SciPy, Statsmodels)", "SPSS"],
    benefits: [
      "Identifies trends and correlations",
      "Supports data-driven strategies",
      "Validates business hypotheses",
    ],
    icon: TbChartHistogram,
  },
  {
    name: "Predictive Modeling",
    description:
      "Building machine learning models to predict future outcomes based on historical data.",
    tools: ["Scikit-learn", "TensorFlow", "Keras", "Excel"],
    benefits: [
      "Forecasts trends",
      "Optimizes business operations",
      "Reduces risks",
    ],
    icon: FaBrain,
  },
  {
    name: "Database Management",
    description:
      "Designing, maintaining, and querying databases to ensure efficient data storage and retrieval.",
    tools: ["SQL", "MongoDB", "PostgreSQL"],
    benefits: [
      "Organizes large datasets",
      "Improves data accessibility",
      "Ensures data integrity",
    ],
    icon: FaDatabase,
  },
];

const Services = () => {
  return (
    <div className="min-h-fit bg-[#131718] pb-10 font-poppins">
      <div className="xs:px-4 md:px-20 flex justify-center items-center">
        <Heading heading={"Services"} />
      </div>
      <div className="flex gap-3  min-h-full flex-wrap justify-center items-center p-10">
        {dataAnalystServices.map((s) => {
          return (
            <div className="min-h-[22rem] w-[22rem] bg-lime-400 p-2 pl-5 pt-5 rounded-md">
              <div className="w-20 h-20 rounded-full bg-black flex justify-center items-center">
              <s.icon className="text-4xl  text-lime-400 "/>
              </div>
              <h1 className="text-gray-400 font-bold text-xl pt-2">{s.name}</h1>
              <p className="text-sm mt-2">{s.description}</p>
              <div>
                <h2>Tools</h2>
                <div>
                  <div className="m-3 ml-0 flex flex-wrap">
                    {s.tools.map((tool) => {
                      return (
                        <span className="bg-black text-lime-400 px-2 py-1 m-1 rounded-md text-sm">
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
    </div>
  );
};

export default Services;
