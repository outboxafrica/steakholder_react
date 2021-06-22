import React from "react";

import "./MeatItem.css";

function MeatItem() {
  return (
    <div className="meat">
      <img
        className="meat__image"
        src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt=""
        srcset=""
      />
      <div className="meat__detail">
        <p className="meat__detailTitle">Bulgarian Meat</p>
        <div className="meat__detailOption">
          <span className="material-icons meat__detailOptionIcon">
            thumb_up
          </span>
          <span className="material-icons meat__detailOptionIcon">
            shopping_cart{" "}
          </span>
        </div>
      </div>

      <p className="meat__price">UGX 20,000</p>
    </div>
  );
}

export default MeatItem;
