import React from "react";
import Heading from "./Heading";
import "../utility.css";

const Projects = () => {
  return (
    <section className="min-h-fit bg-white pb-10">
      <div className="xs:px-4 xs:my-10 md:my-0 md:px-20">
        <Heading heading={"Projects"} />
      </div>
      <div className="scene">
        <div className="card border-2 rounded-md">
          <div className="card-face card-face-front">
            <h1 className="text-red-500">front</h1>
          </div>
          <div className="card-face card-face-back">
          <h1 className="text-red-500">back</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
