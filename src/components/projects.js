import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Cpbiuro from '../images/cpbiuro.png';
import Ozdobychoinkowe from '../images/ozdobychoinkowe.png';
import Englishlector4u from '../images/englishlectoru.png';
import Marsell from '../images/marsellbrzesko.png';
import Fastmask from '../images/fastmask.png';
import Nowan from '../images/nowan.png';
import Muzeumbombki from '../images/muzeumbombki.png';
import { Paper, Fade } from '@material-ui/core';



class Project extends Component {
  render (){
    var shadowandwidth = {
      boxShadow: "9px 11px 13px -3px black",
      maxWidth: "450px",
    }
    var center = {
      textAlign: "left",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1000px",
    }
    var paper = {
      marginTop: "20px",
      maxWidth: "450px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D24DFF",
      color: "#ffffff"
    }
    return (
      <Container fluid style={center}>
        <Row className="font">
          <Col fluid> 
          <Fade in={true} timeout={1000 }>
            <Image style={shadowandwidth} src={Englishlector4u} fluid/>
            </Fade>
            <Fade in={true} timeout={1000 }>
            <Paper  elevation={10} style={paper}>
              <p>www.englishlector4u.pl <br></br>System CMS Wordpress, Panel Klienta, Panel Admina, Projekt Logo, Grafika Dedykowana<br></br>Sklep: Woocommerce<br></br>Responsywna</p>
            </Paper>
            </Fade>
            <Image style={shadowandwidth} src={Nowan} fluid/>
            <Paper elevation={10} style={paper}>
              <p>www.nowanbhp.pl<br></br>Sklep internetowy, System CMS Wordpress<br></br>Sklep: Woocommerce<br></br>Responsywna<br></br>Projekt Logo,<br></br>Grafika Dedykowana. <br></br>Responsywna</p>
            </Paper>
            <Image style={shadowandwidth} src={Muzeumbombki} fluid/>
            <Paper elevation={10} style={paper}>
              <p>www.muzeumbombki.pl<br></br>HTML/CSS/JavaScript<br></br>Projekt Logo<br></br>Grafika Dedykowana<br></br>Responsywna</p>
            </Paper>
          </Col>
          <Col>  
            <Fade in={true} timeout={2000 }>
            <Image style={shadowandwidth} src={Ozdobychoinkowe} fluid/>
            </Fade>
            <Fade in={true} timeout={3000 }>
            <Paper elevation={10} style={paper}>
            <p className="">www.ozdobychoinkowe.pl<br></br>System CMS: Wordpress<br></br>Sklep: Woocommerce<br></br>Responsywna</p>
            </Paper>
            </Fade>
            <Image style={shadowandwidth} src={Marsell} fluid/>
            <Paper elevation={10} style={paper}>
            <p className="">www.marsellbrzesko.pl <br></br>HTML/CSS<br></br>Grafika Dedykowana<br></br>jQuery<br></br>Responsywna</p>
            </Paper>
            <Image style={shadowandwidth} src={Cpbiuro} fluid/>
            <Paper elevation={10} style={paper}>
              <p className="">www.biurocp.pL<br></br>HTML/CSS<br></br>Projekt Logo, <br></br>Grafika Dedykowana. <br></br>Responsywna</p>
            </Paper>
            <Image style={shadowandwidth} src={Fastmask} fluid/>
            <Paper elevation={10} style={paper}>
              <p> www.fastmask.pl <br></br>Sklep internetowy, System CMS Wordpress<br></br>Sklep: Woocommerce<br></br>Responsywna</p>
            </Paper>
            </Col>
            </Row>
        
        </Container>
    );
  }
  }
  
  export default Project;
  
       
       {/*
          <VizSensor

      partialVisibility
      onChange={(isVisible) => {
        this.setState({imgViz: isVisible})
      }} >
        <img
          src={Marsell}
          style={{
            width: "",
            height: "",
            opacity: this.state.imgViz ? 1 : 0.25,
            transition: 'opacity 2000ms linear'
          }}
     />
      </VizSensor>
        */}


