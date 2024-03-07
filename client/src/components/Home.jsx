import React from "react";
import ProfileExamples from "./ProfileExamples";
import LogIn from "./LogIn";
import Verse from "./Verse";
import Logo from "../assets/Logo.png";

const Home = () => {
  return (
    <div>
      {/* Nav */}
      <div className="victory-bg">
        <div className="w-10/12 mx-auto lg:w-6/12">
          {/* Top Nav */}
          <div className="flex align-content-center ">
            {/* Logo */}
            <div>
              <img
                src={Logo}
                alt=""
                className="w-10/12 p-5 md:w-5/12 lg:w-4/12"
              />
            </div>
            {/* Dropdown */}
            <div className="flex gap-3 xl:gap-10">
              <a
                href="/about"
                className="h-fit my-auto text-decoration-none font-bold hover:underline"
              >
                About
              </a>
              <a
                href="/"
                className="h-fit my-auto text-decoration-none font-bold hover:underline"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="flex justify-center">
            {/* Website Description */}
            <div>
              <h1 className="text-md p-10 xl:text-xl font-mono">
                Trust the Work | Trust His Work
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
      <div>
        {/* Short Description */}
        <div className="text-center w-11/12 xl:w-8/12 p-6 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/about">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Find your professional that you can trust!
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our mission is to help church members find and share work opportunities within their community.
          </p>
          <a
            href="/about"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/* Top Container */}
        <div className="xl:flex xl:w-10/12 xl:gap-5 mx-auto">
          {/* Top Left Container */}
          <div className="my-10 xl:flex-1">
            <ProfileExamples />
          </div>
          {/* Top Right Container */}
          <div className="my-auto xl:flex-1">
            <LogIn />
          </div>
        </div>
        <div>
          <Verse />
        </div>
      </div>
    </div>
  );
};

export default Home;
