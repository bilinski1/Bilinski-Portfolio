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
import { Paper } from '@material-ui/core';


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
        <Row>
          <Col fluid> 
            <Image style={shadowandwidth} src={Cpbiuro} fluid/>
            <Paper elevation={10} style={paper}>
              <p className="text-center maintext">www.biurocp.pL Strona pisana od podstaw Projekt Logo Grafika Dedykowana</p>
            </Paper>
            <Image style={shadowandwidth} src={Englishlector4u} fluid/>
            <Paper elevation={10} style={paper}>
              <p> www.englishlector4u.pl System CMS WordpressPanel Klienta Panel Admina Projekt Logo Grafika Dedykowana</p>
            </Paper>
            <Image style={shadowandwidth} src={Fastmask} fluid/>
            <Paper elevation={10} style={paper}>
              <p> www.fastmask.pl Sklep internetowy, System CMS Wordpress</p>
            </Paper>
          </Col>
          <Col>  
            <Image style={shadowandwidth} src={Ozdobychoinkowe} fluid/>
            <Paper elevation={10} style={paper}>
            <p className="text-center">www.bilinski.online - CMS Wordpress-Woocommerce, Responsive</p>
            </Paper>
            <Image style={shadowandwidth} src={Marsell} fluid/>
            <Paper elevation={10} style={paper}>
            <p className="text-center">www.marsellbrzesko.pl - Coded from sctratch Projekt, Dedicated Graphic</p>
            </Paper>
          </Col>
        </Row>
      </Container>
  );
}
}

export default Project;