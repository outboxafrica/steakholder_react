import React from "react";

import MeatItem from "./MeatItem/MeatItem";
import meat from "./MeatItem/meat_mockdata";

import "./MeatCategory.css";

export default function MeatCategory() {
 
  const meatList = meat.map((item, key) => (
    <MeatItem key={item.id} image={item.image} name={item.name} price={item.price} />
  ));
  return <div className="meat__category">{meatList}</div>;
}
