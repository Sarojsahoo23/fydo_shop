import React from "react";
import style1 from "../card/Card.module.css";

function Card({ image, name, loc }) {
  return (
    <>
      <div className={style1.cardContainer}>
      <div className={style1.work}>
        <img src={image} />
        <div className={style1.layer}>
          <h3>{name}</h3>
          <p>{loc}</p>
        </div>
      </div>
      </div>
      
    </>
  );
}
export default Card;
