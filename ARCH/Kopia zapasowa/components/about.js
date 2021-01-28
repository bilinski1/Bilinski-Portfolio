import React, { Component } from 'react';
import Logo from '../images/b-design_logo.png';
import Responsiveimage from '../images/responsive2.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var maintext = {
  color: "#666666",
  margin: "auto",
  textAlign: "center",
}


class About extends Component {
  render (){
    return (
    <Container fluid>
      <Row>
      <Col style={maintext}>
      <Image style={{ padding: '10px'}} src={Logo} alt='B-Design logo' fluid/>
      </Col>
      </Row>
      <Row>
      <Col style={{margin: 'auto', textAlign: 'center'}}>
      <Image style={{ padding: '15px'}} src={Responsiveimage} alt='Responsive WWW' fluid/>
      </Col>
      </Row>
      <Row>
      <Col style={{margin: 'auto', textAlign: 'center'}}>
      <h2 className='pt-4 maintext'> FULL-STACK DEVELOPMENT </h2>
      <h3 className='py-1 mainsubtext'> HTML/CSS/Java Script/REACT/JQUERY/NODE JS/BOOTSTRAP/RESPONSIVE</h3>
      </Col>
      </Row>
    </Container>
    
  );
}
}

export default About;
