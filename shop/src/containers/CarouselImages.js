import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import women from "../assets/img/women.jpg";
import men from "../assets/img/men.jpg";
import jewelry from "../assets/img/jewelry.jpg";
import electronics from "../assets/img/electronics.jpg";

const CarouselImages = () => {
  return (
    <div style={{ display: 'block',  padding: 20,}}>
      
      <Carousel >
        <Carousel.Item interval={7500} style={{ height: 300, }} >
          <img
            className="d-block, w-100 " 
            src={women}
            alt="women"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500} style={{ height: 300}}>
          <img
            className="d-block w-100"
            src={men}
            alt="men"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500} style={{ height: 300}}>
          <img
            className="d-block w-100"
            src={jewelry}
            alt="jewelry"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500} style={{ height: 300}}> 
          <img
            className="d-block w-100"
            src={electronics}
            alt="electronics"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
        
        
    )

}

export default CarouselImages;
