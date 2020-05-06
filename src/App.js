import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import './App.css';
import Routes from './components/routes';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div style={{height: '500px', position: 'relative', backgroundColor: '#828282'}}>
          <Layout style={{backgroundColor: '#828282'}}>
              <Header transparent title="B-Design" style={{color: 'white'}}>
                  <Navigation>
                      <Link to="/">O nas</Link>
                      <Link to="/projects">Projekty</Link>
                      <Link to="/form">Kontakt</Link>
                  </Navigation>
              </Header>
              <Drawer title="B-Design">
                  <Navigation>
                      <Link to="/">O nas</Link>
                      <Link to="/projects">Projekty</Link>
                      <Link to="/form">Kontakt</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Routes/>
              </Content>
          </Layout>
      </div>
  );
}
}

export default App;
