import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../Services/Services.module.css";
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2 (1).webp';
import slide3 from '../../images/slide3.webp';

function Services() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className={style.wrapper}>
            <div className={style.wrap} >
            <img src={slide1}  alt="Slide 1" loading="lazy" />
            </div>
        </Carousel.Item>
        <Carousel.Item className={style.wrapper}>
            <div className={style.wrap}>
            <img src={slide2}  alt="Slide 2" loading="lazy" />
            </div>
        </Carousel.Item>
        <Carousel.Item className={style.wrapper}>
            <div className={style.wrap}>
              <img src={slide3}  alt="Slide 3" loading="lazy" />
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Services;
