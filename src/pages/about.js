import React, { Component } from "react";
import Logo from "../images/b-design_logo_white.png";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

import mobile from "../images/devices/mobile.png";
import laptop from "../images/devices/laptop.png";
import desktop from "../images/devices/desktop.png";
import tablet from "../images/devices/tablet.png";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade, Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IconContext } from "react-icons/lib";

var maintext = {
  color: "#ffffff",
  margin: "auto",
  textAlign: "center",
};

class About extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      speed: 2000,
    };

    return (
      <Container>
        <Row>
          <Col style={maintext}>
            <Fade in={true} timeout={1000}>
              <Image
                style={{ padding: "10px" }}
                src={Logo}
                alt="B-Design logo"
                fluid
              />
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: "auto", textAlign: "center" }}>
            <Fade in={true} timeout={2000}>
              <Image
                style={{ padding: "15px" }}
                src={laptop}
                alt="laptop"
                fluid
              />
            </Fade>
            <Fade in={true} timeout={4000}>
              <Image
                style={{ padding: "15px" }}
                src={desktop}
                alt="desktop"
                fluid
              />
            </Fade>
            <Fade in={true} timeout={6000}>
              <Image
                style={{ padding: "15px" }}
                src={tablet}
                alt="tablet"
                fluid
              />
            </Fade>
            <Fade in={true} timeout={8000}>
              <Image
                style={{ padding: "15px" }}
                src={mobile}
                alt="mobile"
                fluid
              />
            </Fade>
            <h2 className="pt-4 mainsubtext"> FULL-STACK DEVELOPMENT </h2>
          </Col>
        </Row>
        <Grid
          container
          fluid
          direction="column"
          justify="flex-center"
          alignItems="center"
          spacing={0}
          alignContent="center"
          className="gridwidth"
        >
          <Col style={{ margin: "auto", textAlign: "center" }}>
            <h3 className="py-1 mainsubtext">
              {" "}
              JS/JAVA/REACT/NODE JS/BOOTSTRAP/RWD/SQL/WORDPRESS
            </h3>
          </Col>
          <Row></Row>
        </Grid>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            <div>
              <Col style={maintext}>
                Team Of Webdevelopers at your service! We are not afraid of any
                Front-End tasks as well as back-end modifications. We are able
                to modify current projects or to write any projects from
                scratch. Please use the form to contact us If you need our help.
              </Col>
            </div>
            <div>
              <Col style={maintext}>
                Nasz Zespół Developerski, oferuje usługi związane z tworzeniem,
                modifikacją oraz integracją serwisów internetowych. Oferujemy
                usługi front-endowe jak i back-endowe. Wszystkie nasze serwisy
                internetowe spełniają wymogi W3C, są w pełni responsywne oraz
                zoptymalizowane pod względem SEO.
              </Col>
            </div>
          </Slider>
        </div>
        <div className="carousel-wrapper">
        
            <IconContext.Provider value={{ color: "pink", size: "30px" }}>
            <Fade in={true} timeout={5000}>
              <SiFacebook />
              </Fade>
            </IconContext.Provider>


            <IconContext.Provider value={{ color: "pink", size: "40px" }}>
            <Fade in={true} timeout={7000}>
              <AiFillInstagram />
              </Fade>
            </IconContext.Provider>

        </div>
      </Container>
    );
  }
}

export default About;
