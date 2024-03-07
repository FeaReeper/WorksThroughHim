import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-10/12 mx-auto lg:w-6/12">
      {/* Top Nav */}
      <div className="flex align-content-center ">
        {/* Logo */}
        <div>
          <img src={Logo} alt="" className="w-10/12 p-5 md:w-5/12 lg:w-4/12" />
        </div>
        {/* Dropdown */}
        <div className="flex gap-3 xl:gap-10">
          <Link to={'/'} className="h-fit my-auto text-decoration-none font-bold hover:underline">Home</Link>
          <a href="/about" className="h-fit my-auto text-decoration-none font-bold hover:underline">About</a>
          <a href="/" className="h-fit my-auto text-decoration-none font-bold hover:underline">Contact</a>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-center">
        {/* Website Description */}
        <div>
          <h1 className="text-md p-10 xl:text-xl font-mono">Trust the Work | Trust His Work</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
