import React from "react";
import Discounted from "../Components/Discounted";
import Explore from "../Components/Explore";
import FeaturedBooks from "../Components/Featured Books";
import Highlights from "../Components/Highlights";
import Landing from "../Components/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <FeaturedBooks />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
