import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Phone from "../../phone.jpg";

const Home = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  //   const loading = useSelector((state) => state.authReducer.loading);
  // useEffect(() => {
  //   if (isAuth === false) {
  //     navigate("/signin");
  //   }
  // }, [isAuth]);

  return (
    <Carousel>
      {/* <h1 style={{ marginTop: "100px" }}> home</h1> */}

      <Carousel.Item>
        <img className="d-block w-100" src={Phone} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Phone} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Phone} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
