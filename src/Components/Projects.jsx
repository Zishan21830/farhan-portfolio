import React from "react";
import Heading from "./Heading";
import "../utility.css";
import { FaGithub} from "react-icons/fa";

const dataAnalysisProjects = [
  {
    projectName: "Sales Data Analysis",
    description:
      "A project that analyzes sales data to identify trends, customer behavior, and product performance over time.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/597px-SARS-CoV-2_without_background.png",
    githubLink: "https://github.com/username/sales-data-analysis",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
  },
  {
    projectName: "Customer Churn Prediction",
    description:
      "A machine learning project to predict customer churn based on historical customer data.",
    imageLink: "https://www.slideteam.net/wp/wp-content/uploads/2022/11/Customer-Churn-Analysis-based-on-Multiple-Web-Pages.png",
    githubLink: "https://github.com/username/customer-churn-prediction",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    projectName: "Covid-19 Data Visualization",
    description:
      "Visualizing Covid-19 case trends across different regions using interactive dashboards.",
    imageLink: "https://www.splunk.com/content/dam/splunk-blogs/images/2020/03/DatatoCOVID19_blog_1.png",
    githubLink: "https://github.com/username/covid19-data-visualization",
    techStack: ["Python", "Plotly", "Dash", "Pandas", "GeoPandas"],
  },
  {
    projectName: "Stock Price Prediction",
    description:
      "A time-series analysis project to predict stock prices using machine learning techniques.",
    imageLink: "https://www.slidegeeks.com/media/catalog/product/cache/1280x720/F/u/Fundamental_Trend_Analysis_Of_Stock_Market_Dashboard_Professional_PDF_Slide_1_1.jpg",
    githubLink: "https://github.com/username/stock-price-prediction",
    techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
  },
];

const Projects = () => {
  return ( 
    <section className="min-h-fit bg-[#131718] pb-10" id="project">
      <div className="xs:px-4 xs:py-10 md:py-0 md:px-20 flex justify-center items-center">
        <Heading heading={"Projects"} />
      </div>
      <div className="scene flex justify-center flex-wrap gap-5 w-full h-full text-white p-5">
        {dataAnalysisProjects.map((project) => {
          return (
            <div className="card rounded-md xs:h-[28rem] xs:min-w-[20rem] sm:h-[23rem] sm:w-[16rem]">
              <div className="card-face card-face-front w-full glass-effect">
                <div className="h-3/4  rounded-md p-4">
                  <img src={project.imageLink} alt={project.projectName} className="h-full w-full object-contain rounded-md"/>
                </div>
                <div className="h-[25%] p-4 flex justify-between items-center">
                  <span className="font-bold text-xl">{project.projectName}</span>
                  {/* <a href={project.githubLink} className="text-lg"><FaGithub/></a> */}
                </div>
              </div>
              <div className="card-face card-face-back glass-effect p-4">
                <div className="h-3/5">
                  <p>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {
                    project.techStack.map((tech, idx) => {
                      return (
                        <span className="xs:px-1 xs:py-[0.15rem] sm:px-2 sm:py-1 bg-white text-black rounded-md" key={idx}>{tech}</span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
