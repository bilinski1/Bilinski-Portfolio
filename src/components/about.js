import React, { Component } from 'react';
import Logo from '../images/b-design_logo.png';
import Responsiveimage from '../images/responsive2.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade, Grid} from '@material-ui/core';

var maintext = {
  color: "#666666",
  margin: "auto",
  textAlign: "center",
}


class About extends Component {
  render (){
    return (
    <Container>
      <Row>
      <Col style={maintext}>
      <Fade in={true} timeout={1000 }>
      <Image style={{ padding: '10px'}} src={Logo} alt='B-Design logo' fluid/>
      </Fade>
      </Col>
      </Row>
      <Row>
      <Col style={{margin: 'auto', textAlign: 'center'}}>
      <Fade in={true} timeout={2000 }>
      <Image style={{ padding: '15px'}} src={Responsiveimage} alt='Responsive WWW' fluid/>
      </Fade>
      <h2 className='pt-4 maintext'> FULL-STACK DEVELOPMENT </h2>
      </Col>
      </Row>
      <Grid container fluid direction="column" justify="flex-center" alignItems="center" spacing={0} alignContent="center" className='gridwidth'>
      <Col style={{margin: 'auto', textAlign: 'center'}}>
      <h3 className='py-1 mainsubtext'> HTML/CSS/Java Script/REACT/JQUERY/NODE JS/BOOTSTRAP/RESPONSIVE</h3>
      </Col>
      <Row>
      <Fade in={true} timeout={3000 }>
      <Col>
      
      Team Of Webdevelopers at your service!
      We are not afraid of any Front-End tasks as well as back-end modifications.
      We are able to modify current projects or to write any projects from scratch.
      Please use the form to contact us If you need our help.
      
      </Col>
      </Fade>
      <Fade in={true} timeout={4000 }>
      <Col>
      Nasz Zespół Developerski, oferuje usługi związane z tworzeniem, modifikacją oraz integracją serwisów internetowych.
      Oferujemy usługi front-endowe jak i back-endowe. Wszystkie nasze serwisy internetowe spełniają wymogi W3C, są w pełni responsiwne oraz zoptymalizowane pod względem SEO.
      </Col>
      </Fade>
      </Row>
      </Grid>
    </Container>
    
  );
}
}

export default About;
