import React from "react";
import NavbarHome from "../components/NavbarHome";
import FooterHome from "../components/FooterHome";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col">
      <NavbarHome />
<<<<<<< HEAD
      <div className="flex flex-col md:flex-row justify-around mt-28 mx-3 items-center">
        <div className="md:mr-5  text-white text-center md:text-left  font-bold">
          <p className="md:mr-5  text-white text-center md:text-left text-5xl font-bold">{`Empower Your Projects  `}</p>
          <p className="mt-5">
            <span className="  text-white text-center md:text-left text-3xl font-bold">{`with `}</span>
            <span className="text-2xl md:text-5xl">TacticFlow</span>
          </p>

          <p className="text-lg mt-5 md:mt-10 text-shadow-none">
            Take the first step
          </p>
          <input
            className="h-10 rounded-2xl text-sm mr-3  w-80 text-dimgray px-4 font-normal"
            placeholder="Email"
=======
      <NavbarHome />
      
      <div className="relative translate-y-48  -translate-x-11">
        <svg
          height="800"
          width="1679"
          viewBox="0 0 1679 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 778.267C104.185 689.267 419.554 338.165 709.24 509.766C1071.35 724.267 1296.12 986.268 1550.73 732.767C1805.33 479.266 1623.25 120.264 1433.97 43.7638C1282.54 -17.4365 1148.67 3.59694 1100.66 21.7637"
            stroke="white"
            stroke-width="5"
            stroke-dasharray="20 20"
>>>>>>> ce129374756e052c3cfba832a02aa01e2f945cbf
          />
          <Link to="/signup">
            <button className=" h-10 bg-[#FFC107] text-[#212177] transition-transform transform hover:scale-105  items-center text-xl w-40  pb-1  text-midnightblue  justify-center  font-medium  m-6 rounded-xl  shadow-[-6px_8px_10px_rgba(0,_0,_0,_0.4)]">
              Sign up
            </button>
          </Link>
        </div>

        <img
          className="h-auto w-full md:w-[600px] mt-5 md:mt-0"
          alt="image"
          src="/img1home.png"
        />
      </div>
      <div className="features flex flex-wrap justify-center items-center my-40">
        <div className="transition-transform transform hover:scale-125 md:w-1/3 px-4 mb-8 flex flex-col items-center justify-center text-center">
          <img
            className="h-40  w-40 mb-6"
            alt="image"
            src="/consumer-1@2x.png"
          />
          <div className="title-feature font-semibold text-center text-lg text-[#FFC107] transition-transform transform hover:scale-110">
            Project Organization Hub
          </div>
          <div className=" text-white font-medium flex flex-col text-start  mt-3">
            <p>A visual and intuitive platform</p>
            <p>for organizing tasks into</p>
            <p>boards, lists, and cards .</p>
          </div>
        </div>

        <div className="transition-transform transform hover:scale-125 md:w-1/3 px-4 mb-8 flex flex-col items-center justify-center text-center">
          <img
            className="h-40  w-40 mb-6"
            alt="image"
            src="/graphic-1@2x.png"
          />
          <div className="title-feature font-semibold text-center text-lg text-[#FFC107] transition-transform transform hover:scale-110">
            Real-time Project Dashboard{" "}
          </div>
          <div className=" text-white font-medium flex flex-col text-start  mt-3">
            <p>A comprehensive dashboard that </p>
            <p>provides real-time insights into</p>
            <p>the progress of each project</p>
          </div>
        </div>

        <div className="transition-transform transform hover:scale-125 md:w-1/3 px-4 mb-8 flex flex-col items-center justify-center text-center">
          <img
            className="h-40  w-40 mb-6"
            alt="image"
            src="/network-1@2x.png"
          />
          <div className="title-feature font-semibold text-center text-lg text-[#FFC107] transition-transform transform hover:scale-110">
            {" "}
            Team Collaboration Hub
          </div>
          <div className=" text-white font-medium flex flex-col text-start  mt-3">
            <p>A comprehensive dashboard</p>
            <p>that provides real-time</p>
            <p>insights into the progress</p>
          </div>
        </div>
      </div>

      <FooterHome />
    </div>
  );
}

export default Home;
