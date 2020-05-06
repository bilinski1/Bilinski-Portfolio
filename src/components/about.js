import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render (){
    return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="portfoliogrid">
        <Cell col={12}>
        <img
              src="./media/.png"
              alt="avatar"
              className="avatar-img"
              />
        </Cell>
    </Grid>
    </div>
  );
}
}

export default About;
