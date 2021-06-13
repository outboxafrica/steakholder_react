import React from "react";

import Header from "../Header/Header";
import MeatCategory from "../MeatCategory/MeatCategory";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <MeatCategory />
    </div>
  );
}

export default Home;
