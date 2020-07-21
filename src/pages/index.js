import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';
import appScreen from '../assets/images/LOGO.png';
import arrowDown from '../assets/images/Vector 7.png';
import Features from '../components/Features';

/* import appScreen from '../assets/images/splash-app-screen.png'; */

const IndexPage = () => (
  <Layout>
    <Navbar />
    <header className="masthead d-flex flex-column justify-content-center align-items-center" id="home">
      <div className="app-screen">
        <img src={appScreen} alt=""/>
      </div>
      <div className="foot position-absolute d-flex flex-column align-items-center">
        <p>crea, selecciona y envía tus memorias</p>
        <img src={arrowDown} alt=""/>
      </div>
    </header>
    <About />
    <Features />
    {/* <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="row">
          <div className="col-lg-6 col-xs-12 col-sm-12">
            <div className="splash-container">
            <h2>CREATE, SAVE AND SEND
              YOURS MEMORIES</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos-trud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. </p>
            </div>
          <Scroll type="id" element="signup">
              <a href="#signup" className="btn btn-primary">
                Suscribe
              </a>
            </Scroll>
          </div>
          <div className="col-lg-6 col-xs-12 col-sm-12">
          <div className="app-screen"><img src={appScreen} alt=""/></div>
          </div>
        </div>
        <div className="mx-auto text-center">
          
          
        </div>
      </div>
    </header> */}

    

    
    {/* <SocialLinks />      
    <Subscribe />

    
    <Footer /> */}
  </Layout>
);

export default IndexPage;
