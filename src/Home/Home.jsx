import React, { Component } from "react";
import Header from "../Header/Header";
import MeatCategory from "../MeatCategory/MeatCategory";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
    

     <Header />
<MeatCategory />
      </div>

    );
  }
}
