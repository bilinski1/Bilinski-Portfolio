import React, { Component } from 'react';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.css';
import Routes from './pages/routes';
import { Link } from 'react-router-dom';
import Footerino from './pages/footer';
import background from './images/background/wallhaven-3k8ydv.jpg';


class App extends Component {
  render() {
    return (
      <div>
          <Layout className={styles.main} style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
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
              <Content style={{ 
        backgroundImage: `url('/images/background/cool-background.png'})`,
        backgroundRepeat: 'no-repeat',
      }}>
                <Routes/>
              </Content>
              <Footerino/>
          </Layout>
      </div>
  );
}
}

export default App;
