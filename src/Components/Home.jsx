import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className=" flex flex-col  text-white min-w-max justify-center items-center min-h-full gap-3">
        <p className="font-bold text-5xl">Mark Okoth</p>
        <p className="text-lg">
          Front-End Developer | Business Central | IT Technical Consultant
        </p>
        <a
          className="bg-blue-300 p-3 uppercase text-xs"
          href="https://www.linkedin.com/in/mark-okoth-1b514115b/"
          target={`_blank`}
        >
          Connect via LINKEDIN
        </a>
      </div>
    </div>
  );
}

export default Home;
