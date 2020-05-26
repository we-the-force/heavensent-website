import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';
import appScreen from '../assets/images/splash-app-screen.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
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
          {/* <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2> */}
          
          
        </div>
      </div>
    </header>

    

    
    <SocialLinks />      
    <Subscribe />

    
    <Footer />
  </Layout>
);

export default IndexPage;
