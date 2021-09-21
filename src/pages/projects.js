import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Cpbiuro from "../images/cpbiuro.png";
import Ozdobychoinkowe from "../images/ozdobychoinkowe.png";
import Englishlector4u from "../images/englishlectoru.png";
import Marsell from "../images/marsellbrzesko.png";
import Fastmask from "../images/fastmask.png";
import Nowan from "../images/nowan.png";
import Muzeumbombki from "../images/muzeumbombki.png";
import Englishlector4u2 from "../images/englishlector4u2.0.png";
import Dudekhome from "../images/dudekhome.png"
import Andesign from "../images/andesign.png"
import { Paper, Fade } from "@material-ui/core";


class Project extends Component {
  render() {
    var shadowandwidth = {
      boxShadow: "9px 11px 13px -3px black",
      maxWidth: "",
    };
    var center = {
      textAlign: "left",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1000px",
    };
    var paper = {
      marginTop: "20px",
      maxWidth: "450px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#273238",
      color: "#D3D3D3",
    };
    return (
      <Container style={center}>
        <Row className="font">
        <h1 style={{color: "#D3D3D3"}}>Sklepy i Strony Internetowe</h1>
              <Row className="font">
              <Col fluid>
                <Image style={shadowandwidth} src={Nowan} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.nowanbhp.pl<br></br>Sklep internetowy, System CMS
                    Wordpress
                    <br></br>Sklep: Woocommerce<br></br>Responsywna
                    <br></br>Projekt Logo,<br></br>Grafika Dedykowana.
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Englishlector4u2} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.englishlector4u.pl<br></br>Landing Page
                    <br></br>Responsywna
                    <br></br>Projekt Logo,<br></br>Grafika Dedykowana.
                  </p>
                </Paper>
              </Col>
              <Col>
                <Image style={shadowandwidth} src={Englishlector4u} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.englishlector4u.pl <br></br>System CMS Wordpress, Panel
                    Klienta, Panel Admina, Projekt Logo, Grafika Dedykowana
                    <br></br>Sklep: Woocommerce<br></br>Responsywna
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Dudekhome} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.dudekhome.pl<br></br>Landing Page
                    <br></br>Responsywna
                    <br></br>Projekt Logo,<br></br>Grafika Dedykowana. <br></br>
                    Responsywna
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Fastmask} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    {" "}
                    www.fastmask.pl <br></br>Sklep internetowy, System CMS
                    Wordpress
                    <br></br>Sklep: Woocommerce<br></br>Responsywna
                  </p>
                </Paper>
              </Col>
              <Col>
                <Image style={shadowandwidth} src={Muzeumbombki} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.muzeumbombki.pl<br></br>HTML/CSS/JavaScript<br></br>
                    Projekt Logo<br></br>Grafika Dedykowana<br></br>Responsywna
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Andesign} fluid />
                <Paper elevation={20} style={paper}>
                  <p>
                    www.andesign.store<br></br>Landing Page
                    <br></br>Responsywna
                    <br></br>Projekt Logo,<br></br>Grafika Dedykowana. <br></br>
                    Responsywna
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Cpbiuro} fluid />
                <Paper elevation={20} style={paper}>
                  <p className="">
                    www.biurocp.pl<br></br>HTML/CSS<br></br>Projekt Logo,{" "}
                    <br></br>
                    Grafika Dedykowana. <br></br>Responsywna
                  </p>
                </Paper>
              </Col>
              <Col>
                <Image style={shadowandwidth} src={Ozdobychoinkowe} fluid />
                <Paper elevation={20} style={paper}>
                  <p className="">
                    www.ozdobychoinkowe.pl<br></br>System CMS: Wordpress
                    <br></br>
                    Sklep: Woocommerce<br></br>Responsywna
                  </p>
                </Paper>
                <Image style={shadowandwidth} src={Marsell} fluid />
                <Paper elevation={20} style={paper}>
                  <p className="">
                    www.marsellbrzesko.pl <br></br>HTML/CSS<br></br>Grafika
                    Dedykowana
                    <br></br>jQuery<br></br>Responsywna
                  </p>
                </Paper>
              </Col>
              </Row>
        </Row>
      </Container>
    );
  }
}

export default Project;


