import React, { Component } from 'react';
import logo from '../assets/images/LOGOv2.png';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';
import appScreen from '../assets/images/LOGO.png';
import arrowDown from '../assets/images/Vector 7.png';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Download from '../components/Download';
import Price from '../components/Price';
import Footer from '../components/Footer';

import translateEN from '../locales/en/translation.json'
import translateES from '../locales/es/translation.json'

/* import appScreen from '../assets/images/splash-app-screen.png'; */

export default class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = { lang: 'en' };
    }

    getTrans = (y) => {
        ;
        let x = this.state.lang;
        if (x === 'en') {
            return translateEN[y]
        } else if (x === 'es') {
            return translateES[y]
        }
        return ''
    }

    handleLang = () => {
        let x = this.state.lang;
        if (x === 'en') {
            this.setState({ lang: "es" });
        } else if (x === 'es') {
            this.setState({ lang: "en" });
        }
    };
    render() {
        return (
            <Layout lang={this.state.lang}>
                <Navbar lang={this.state.lang}/>
                <header className="masthead d-flex flex-column justify-content-center align-items-center" id="home">
                    <div className="app-screen">
                        <img src={appScreen} alt="" />
                    </div>
                    <div className="foot position-absolute d-flex flex-column align-items-center">
                        <p className="text-uppercase">{this.getTrans('home_desc')}</p>
                        <img src={arrowDown} alt="" />
                    </div>
                </header>
                <About lang={this.state.lang} />
                <Features lang={this.state.lang} />
                <Reviews lang={this.state.lang} />
                {/*<Download lang={this.state.lang} />
                <Price lang={this.state.lang} /> */}
                <section id="logo_foot" className="logo-foot-section d-flex align-items-center justify-content-center">
                    <div className="logo_foot">
                        <img src={logo} alt="" />
                    </div>
                </section>
                <Footer lang={this.state.lang}>
                    <button id="lang-btn" className="position-absolute d-flex" onClick={() => this.handleLang()} style={{ cursor: "pointer" }} tabIndex={0} onKeyPress={this.handleKeyPress}>
                        <p data-lang="en" className={this.state.lang === 'en' ? 'active' : null} >EN</p>
                        <p> / </p>
                        <p data-lang="es" className={this.state.lang === 'es' ? 'active' : null}>ES</p>
                    </button>
                </Footer>
            </Layout>
        )

    }
}