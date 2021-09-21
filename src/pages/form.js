import React, { Component } from 'react';
import { Box, TextField, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/form.css';


class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        phone: '',
        email: '',
        message: ''
      }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent."); 
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }

    render (){
      var paper = {
        marginTop: "",
        maxWidth: "500px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#273238",
      }

      var text = {
        color: "#D3D3D3"
      }

      var column = {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        maxWidth: "1000px",
      };

      var center = {
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1000px",
        flexWrap: "wrap",
      };

      var shadowandwidth = {
        boxShadow: "9px 11px 13px -3px black",
        maxWidth: "20px",
        marginTop: "10px",
      };

        return (
          <Container style={column}> 
          <Row className="font">
          <h1 style={{color: "#D3D3D3"}}>Skontaktuj się z nami!</h1>
          </Row>
              <Container style={center}>
              <Col fluid>
              <form style={{ textAlign: 'center'}} noValidate autoComplete="off" alignItems="center" spacing={3} alignContent="center" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <Box m={0}>
              <TextField style={{background: "#ffc0cb"}} label={'margin="normal"'} margin="normal" id="filled-secondary" label="Imię" variant="filled" color="#fff" value={this.state.firstname} onChange={this.onFirstNameChange.bind(this)} />
              </Box>
              <Box m={0}>
              <TextField style={{background: "#ffc0cb"}} label={'margin="normal"'} margin="normal" id="filled-basic" label="Email" variant="filled" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </Box>
              <Box m={0}>
              <TextField style={{background: "#ffc0cb"}} label={'margin="normal"'} margin="normal" id="tel" label="Tel." InputAdornment="+48" variant="filled" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
              </Box>
              <Box m={0}>
              <TextField style={{background: "#ffc0cb"}} label={'margin="normal"'} margin="normal" id="text" label="Treść" variant="filled" multiline rows={6} value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
              </Box>
              <Button type="submit" variant="outlined" color="primary" style={{background: "#ffc0cb"}}>Send</Button>
              </form>
              </Col>
              <Col>
              <Paper elevation={20} style={paper}>
              <h2 style={text}>tel: +48 669 560 101 <br></br> email: office@bdesign.dev <br></br>
              Dębno 416<br></br>32-852 Dębno</h2>
              </Paper>
              </Col>
              </Container>


            </Container>
        );
    }

    onFirstNameChange(event) {
        this.setState({firstname: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
      }
    

}
export default Form;