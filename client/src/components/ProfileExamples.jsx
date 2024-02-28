import React from "react";
import ExampleImage1 from "../assets/ExampleHeadShot1.jpg";
import Kora from "../assets/Kora.jpg"

const ProfileExamples = () => {
  return (
    <div>
      {/* Example 1 */}
      <div className="flex w-11/12 justify-evenly mx-auto border p-5 xl:w-8/12 2xl:w-6/12  bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {/* Image */}
        <img src={Kora} alt="" className="w-3/12 h-26 rounded-full" />
        {/* Details */}
        <div className="my-auto">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Church: <span className="font-normal text-gray-700 dark:text-gray-400">All Dogs Go To Heaven</span></p>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trade: <span className="font-normal text-gray-700 dark:text-gray-400">Gardener</span></p>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Location: <span className="font-normal text-gray-700 dark:text-gray-400">Good Hope, GA</span></p>
        </div> 
      </div>
      {/* Example 2 */}
      <div className="flex w-11/12 justify-evenly mx-auto border p-5 mt-5 xl:w-8/12 2xl:w-6/12 bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {/* Image */}
        <img src={ExampleImage1} alt="" className="w-3/12 h-26 rounded-full" />
        {/* Details */}
        <div className="my-auto">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Church: <span className="font-normal text-gray-700 dark:text-gray-400">Victory Norcross</span></p>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trade: <span className="font-normal text-gray-700 dark:text-gray-400">Software Developer</span></p>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Location: <span className="font-normal text-gray-700 dark:text-gray-400">Good Hope, GA</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProfileExamples;
