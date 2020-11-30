import React, { Component } from 'react';
import logo from '../assets/images/LOGO.png';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';
import appScreen from '../assets/images/LOGO.png';
import arrowDown from '../assets/images/Vector 7.png';
import Features from '../components/Features';
// import Reviews from '../components/Reviews';
import Download from '../components/Download';
import Price from '../components/Price';
import Footer from '../components/Footer';

export default class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            translate: {},
        };
    }

    componentDidMount() {
        fetch('https://api.heavensentnow.com/landing')
            .then(res => res.json())
            .then((data) => {
                let json = {};
                data.Landing.forEach(el => {
                    json[el.lang] = el;
                });
                this.setState({ translate: json });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getTrans = (y) => {
        let trans = this.state.translate[this.state.lang.toUpperCase()];
        return trans ? trans[y] : '';
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
                <Navbar lang={this.state.lang} translate={this.state.translate} handLang={this.handleLang}>
                    <button id="lang-btn" onClick={() => this.handleLang()} style={{ cursor: "pointer" }} tabIndex={0} onKeyPress={this.handleKeyPress}>
                        <p data-lang="en" className={this.state.lang === 'en' ? 'active' : null} >EN</p>
                        <p> / </p>
                        <p data-lang="es" className={this.state.lang === 'es' ? 'active' : null}>ES</p>
                    </button>
                </Navbar>
                <header className="masthead d-flex flex-column justify-content-center align-items-center" id="home">
                    <div className="app-screen">
                        <img style={{width: "215px"}} src={appScreen} alt="" />
                    </div>
                    <div className="foot position-absolute d-flex flex-column align-items-center">
                        <p className="text-uppercase">{this.getTrans('home_desc')}</p>
                        <img src={arrowDown} alt="" />
                    </div>
                </header>
                <About lang={this.state.lang} translate={this.state.translate} />
                <Features lang={this.state.lang} translate={this.state.translate} />
                {/* <Reviews lang={this.state.lang} translate={this.state.translate} /> */}
                <Download lang={this.state.lang} translate={this.state.translate} />
                <Price lang={this.state.lang} translate={this.state.translate} />
                <section id="logo_foot" className="logo-foot-section d-flex align-items-center justify-content-center">
                    <div className="logo_foot">
                        <img src={logo} alt="" />
                    </div>
                </section>
                <Footer lang={this.state.lang} translate={this.state.translate}>
                </Footer>
            </Layout>
        )

    }
}