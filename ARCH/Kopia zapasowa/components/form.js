import React, { Component } from 'react';
import { Grid, Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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
        return (
            <Grid container fluid direction="column" justify="flex-center" alignItems="center" spacing={3} alignContent="center" className='Form'>
              <form style={{ textAlign: 'center'}} noValidate autoComplete="off" alignItems="center" spacing={3} alignContent="center" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <Box m={2}>
              <TextField id="filled-secondary" label="Imię" variant="filled" value={this.state.firstname} onChange={this.onFirstNameChange.bind(this)} />
              </Box>
              <Box m={2}>
              <TextField id="filled-basic" label="Email" variant="filled" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </Box>
              <Box m={2}>
              <TextField id="tel" label="Tel." InputAdornment="+48" variant="filled" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
              </Box>
              <Box m={2}>
              <TextField id="text" label="Treść" variant="filled" multiline rows={6} value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
              </Box>
              <Button type="submit" variant="outlined" color="primary">Send</Button>
              </form>
              <p>email: office@bdesign.dev
              Adres: Kraków ul. Zamoyskiego 77/2</p>
              
            </Grid>
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