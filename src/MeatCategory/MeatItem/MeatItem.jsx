import React from "react";

import "./MeatItem.css";

function MeatItem({image, name, price}) {
  return (
    <div className="meat">
      <img
        className="meat__image"
        src={image}
        alt=""
        srcset=""
      />
      <div className="meat__detail">
        <p className="meat__detailTitle">{name}</p>
        <div className="meat__detailOption">
          <span className="material-icons meat__detailOptionIcon">
            thumb_up
          </span>
          <span className="material-icons meat__detailOptionIcon">
            shopping_cart{" "}
          </span>
        </div>
      </div>

      <p className="meat__price">{price}</p>
    </div>
  );
}

export default MeatItem;
