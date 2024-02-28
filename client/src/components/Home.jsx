import React from "react";
import Nav from "./Nav";
import ProfileExamples from "./ProfileExamples";
import LogIn from "./LogIn";
import Verse from "./Verse";

const Home = () => {
  return (
    <div>
      {/* Nav */}
      <div className="victory-bg">
        <Nav />
      </div>
      {/* Container */}
      <div>
        {/* Top Container */}
        <div className="xl:flex xl:w-10/12">
          {/* Top Left Container */}
          <div className="my-10">
            <ProfileExamples />
          </div>
          {/* Top Right Container */}
          <LogIn />
        </div>
        <div>
          <Verse/>
        </div>
      </div>
    </div>
  );
};

export default Home;
