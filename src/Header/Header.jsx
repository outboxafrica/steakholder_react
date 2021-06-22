import React from 'react'

import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__detail">
              <p className="header__detailTitle">
                Eating Vegetables is a Mis-steak, Let’s save the planet
              </p>
              <p className="header__detailSubtitle">
                We consume less vegetables and eat the very things that cause
                global warming
              </p>
              <button className="actionButton">Explore More</button>
            </div>
            <img
              className="header__Image"
              src="https://image.freepik.com/free-vector/female-friends-hanging-out-cafe_74855-6459.jpg"
              alt=""
              srcset=""
            />
            </div>
    )
}

export default Header



