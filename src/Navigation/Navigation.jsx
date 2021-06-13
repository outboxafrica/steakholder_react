import React from 'react'

import "./Navigation.css"

function Navigation() {
  return (
    <nav>
    <div className="nav__logo">Steakholder</div>
    <div className="nav__option">
      <span className="nav__optionLink">Home</span>
      <span className="nav__optionLink">About</span>
      <span className="nav__optionLink">Offers</span>
    </div>
    <div className="nav__icon">
      <span className="material-icons">search</span>
      <span className="material-icons">shopping_cart </span>
      <span className="cartNumber">0</span>
    </div>
  </nav>
  )
}

export default Navigation
