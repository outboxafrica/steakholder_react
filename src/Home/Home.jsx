import React, { Component } from "react";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__headerDetail">
            <p className="home__headerDetailTitle">
              Eating Vegetables is a Mis-steak, Let’s save the planet
            </p>
            <p className="home__headerDetailSubtitle">
              We consume less vegetables and eat the very things that cause
              global warming
            </p>
            <button className="actionButton">Explore More</button>
          </div>
          <img
            className="home__headerImage"
            src="https://image.freepik.com/free-vector/female-friends-hanging-out-cafe_74855-6459.jpg"
            alt=""
            srcset=""
          />
        </div>

        <div className="home__product">
            <img  src="" alt="" srcset="" />

        </div>
      </div>

    );
  }
}
