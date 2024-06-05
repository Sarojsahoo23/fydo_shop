import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styleu from "../pages/Notfound.module.css"
import  img1 from "../../images/notfoundpage.webp"
const NotFound =()=>{

    return(
        <section className={styleu.notFound}>
        <div className={styleu.container}>
          <img src={img1} alt="notFound" />
          <div className={styleu.notfound}>
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for</p>
          </div>
         
          <Link to={"/"}>
            <h2>
               Back to Home
            </h2>
          </Link>
        </div>
      </section>
    )
}


export default NotFound;