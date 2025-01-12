import React from "react";
import Heading from "./Heading";
import "../utility.css"

const Skills = () => {
  const skillsData = {
    Languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    ],
    Libraries: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      "https://user-images.githubusercontent.com/315810/92161415-9e357100-edfe-11ea-917d-f9e33fd60741.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      "https://scipy.org/images/logo.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg",
      "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    ],
    Tools: [
      "https://www.iconpacks.net/icons/2/free--icon-4954-thumb.png",
      "https://1000logos.net/wp-content/uploads/2022/12/Power-BI-Logo.png",
      "https://img.icons8.com/color/512/tableau-software.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
    ],
  };
  return (
    <section className="bg-black h-fit pb-10" id="skill">
      <div className="flex justify-center items-center">
        <Heading heading={"Skills"} />
      </div>
      <div>
        {
            Object.keys(skillsData).map((key)=>{
                return (
                    <div className="flex justify-center items-start">
                        <div className="flex flex-col items-center my-5">
                        <h1 className="text-white text-lg font-semibold font-poppins mb-4">{key}</h1>
                        <div className="flex gap-4 flex-wrap justify-center px-4">
                            {skillsData[key].map((e)=>{
                                {console.log(e)}
                                return (
                                    <div className="glass-effect p-3"><img src={e} alt="" className="w-14 h-14"/></div>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  );
};
//

export default Skills;
