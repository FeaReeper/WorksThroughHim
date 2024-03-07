import React from "react";
import ExampleImage1 from "../assets/ExampleHeadShot1.jpg";
import Kora from "../assets/Kora.jpg"

const ProfileExamples = () => {
  return (
    <div >
      {/* Example 1 */}
      

      <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
              <img className="w-24 mt-5 h-24 mb-3 rounded-full shadow-lg" src={Kora} alt="Bonnie image"/>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kora Reep</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Professional Gardner</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">ADGTH Church</span>
          </div>
      </div>

      {/* Example 2 */}
      <div className="mx-auto mt-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
              <img className="w-24 mt-5 h-24 mb-3 rounded-full shadow-lg" src={ExampleImage1} alt="Bonnie image"/>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Matthew Reep</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Victory Norcross</span>
          </div>
      </div>
    </div>
  );
};

export default ProfileExamples;
