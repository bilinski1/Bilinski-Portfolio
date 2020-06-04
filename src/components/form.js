import React, { Component } from 'react';
import { Grid, Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';



class Contact extends Component {
    render (){
        return (
            <Grid container fluid direction="column" justify="flex-center" alignItems="center" spacing={3} alignContent="center">
              <form style={{ textAlign: 'center'}} noValidate autoComplete="off" alignItems="center" spacing={3} alignContent="center">
              <Box m={2}>
              <TextField id="filled-secondary" label="Imię" variant="filled" />
              </Box>
              <Box m={2}>
              <TextField id="filled-basic" label="Nazwisko" variant="filled" />
              </Box>
              <Box m={2}>
              <TextField id="tel" label="Tel." InputAdornment="+48" variant="filled" />
              </Box>
              <Box m={2}>
              <TextField id="text" label="Treść" variant="filled" multiline rows={6}/>
              </Box>
              <Button variant="outlined" color="primary">Send</Button>
              </form>
              <p>email: office@bdesign.dev
              Adres: Kraków ul. Zamoyskiego 77/2</p>
            </Grid>
        );
    }
}
export default Contact;