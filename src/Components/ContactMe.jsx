import React from "react";
import { useForm } from "@formspree/react";
import Heading from "./Heading.jsx";
import devImage from "../assets/favicon.png";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThankyouPage from "./ThankyouPage.jsx";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mjkkjera");
  if (state.succeeded) {
    return <ThankyouPage/>
  }
  return (
    <div className="bg-black min-h-fit font-poppins" id="contact">
      {/* this contianer for heading */}
      <div className="xs:px-4 xs:py-10 md:pt-10 md:px-20 flex justify-center items-center">
        <Heading heading={"Contact Me"} />
      </div>
      {/* main container to contains the main content */}
      <div className="h-full flex xs:flex-col lg:flex-row xs:px-4 xs:py-10 md:py-0 md:px-20">
        {/* left conatainer */}
        <div className=" xs:w-full lg:w-2/3 rounded-t-3xl bg-gradient-to-b from-lime-400 to-white h-full border-2  border-none flex flex-col justify-between xs:gap-[5rem] lg:gap-[9rem]">
          {/* top  */}
          <div className="flex justify-between flex-wrap xs:px-4 xs:py-10 md:py-10 md:px-20">
            {/* left */}
            <div className="">
              <img src={devImage} alt="Developer Image" className="w-20 h-20" />
              <span className="pl-3 text-gray-700">Farhan</span>
              <p className="pl-3 text-gray-500">Data Analyst,</p>
              <p className="pl-3 text-gray-500">
                "Turning data into actionable insights."
              </p>
            </div>
            {/* right */}
            <div className="xs:pt-5 xs:px-4 2xl:pt-0 lg:w-2/6">
              <div className="flex gap-2 flex-wrap">
                <a
                  href="mailto:farhan420.official@gmail.com"
                  className="bg-black px-3 py-2 text-lime-400 rounded-md cursor-pointer"
                >
                  E-mail
                </a>
                <span className="bg-black px-3 py-2 text-lime-400 rounded-md">
                  7900240104
                </span>
                <span className="bg-black px-3 py-2 text-lime-400 rounded-md">
                  India
                </span>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="xs:px-4 xs:py-10 md:py-10 md:px-20">
            <h1 className="text-5xl text-black pl-3 pb-3">
              Transforming numbers{" "}
            </h1>
            <h1 className="text-5xl text-gray-500 pl-3">
              Into meaningful decisions
            </h1>
            <ul className="flex gap-3 mt-4 pl-3 pt-3">
              <li className="xs:p-2 md:p-3 bg-black text-lime-400 xs:text-xl md:text-xl rounded-md cursor-pointer">
                <FaGithub />
              </li>
              <li className="xs:p-2 md:p-3 bg-black text-lime-400 xs:text-xl md:text-xl rounded-md cursor-pointer">
                <FaLinkedin />
              </li>
              <li className="xs:p-2 md:p-3 bg-black text-lime-400 xs:text-xl md:text-xl rounded-md cursor-pointer">
                <FaInstagram />
              </li>
              <li className="xs:p-2 md:p-3 bg-black text-lime-400 xs:text-xl md:text-xl rounded-md cursor-pointer">
                <FaXTwitter />
              </li>
              <li className="xs:p-2 md:p-3 bg-black text-lime-400 xs:text-xl md:text-xl rounded-md cursor-pointer">
                <FaKaggle />
              </li>
            </ul>
          </div>
        </div>
        {/* right container */}
        <div className="h-full xs:w-full lg:w-2/6 bg-black flex justify-center items-center py-10">
          <div className="flex flex-col gap-[10rem]">
            <div>
              <h1 className="text-gray-500 text-2xl m-3">What services</h1>
              <h1 className="text-white text-2xl m-3">we can support you with?</h1>
            </div>
            <form
              action="https://formspree.io/f/mjkkjera"
              method="post"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="text-white bg-transparent border-b-2 border-b-white outline-none py-1 block m-3 w-full"
                name="username"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                className="text-white bg-transparent border-b-2 border-b-white outline-none py-1 block m-3 w-full"
                name="email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="text-white bg-transparent border-b-2 border-b-white outline-none py-1 block m-3 w-full"
                name="subject"
                required
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
                className="text-white bg-transparent border-b-2 border-b-white outline-none py-1 block m-3 w-full"
              ></textarea>

              <button className="w-full bg-lime-400 text-black ml-3 px-1 py-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
