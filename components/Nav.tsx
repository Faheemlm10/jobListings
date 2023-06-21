import React from "react";
import Image from "next/image";
import bgHeaderDesktop from "../images/bg-header-desktop.svg";

const Nav = () => {
  return (
    <nav className="w-[100vw]  ">
      <div className="w-[100vw]  h-[20vh] bg-desaturatedDarkCyan ">
        <Image src={bgHeaderDesktop} alt="bgHeaderDesktop" className="w-[100%]  h-[100%]" />
      </div>
    </nav>
  );
};

export default Nav;
