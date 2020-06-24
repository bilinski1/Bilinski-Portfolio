import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/b-design_logo2.png';
import Image from 'react-bootstrap/Image';
import { Grid, Box } from '@material-ui/core';
import style from './footer.css';



class Footerino extends Component {
    render (){
        return (
    <footer>
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
        <Box m={2}>
            <Image style={{ paddingBottom: '20px', marginLeft: '10px'}} src={Logo} alt='B-Design logo' fluid/>
        </Box>
        <Box>
            <Link to={{tel:669560101}} data-rel="external" className={style}>Tel: +48 669 560 101</Link><br />
            <Link to="mailto:biuro@bilinskidesign.pl" data-rel="external">Email: office@bilinskidesign.pl </Link>
            <p>Copyright Bilinski Design</p>
        </Box>
    </Grid>
    </footer>
    
        );
    }
}
export default Footerino;