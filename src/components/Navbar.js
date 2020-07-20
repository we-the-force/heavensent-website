import React, { Component } from 'react';
//import Scroll from './Scroll';
import config from '../../config';
import logoLanding from '../assets/images/logo-landing.svg';
import logoLandingColor from '../assets/images/logo-landing-color.svg';
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            visibilityClass: '',
        };
    }
    toggleMenu = value => {
        this.setState({ openMenu: value });
    };
    handleScroll = () => {
        const { visibilityClass } = this.state;
        if (window.pageYOffset > 300) {
            if (visibilityClass !== 'navbar-shrink') {
                this.setState({ visibilityClass: 'navbar-shrink' });
            }
        } else {
            if (visibilityClass === 'navbar-shrink') {
                this.setState({ visibilityClass: '' });
            }
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { openMenu, visibilityClass } = this.state;
        return (
            <nav
                className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
                id="mainNav"
            >
                <div className="container justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                INICIO
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                ACERCA
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">
                                CARACTERISTICAS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">
                                RESEÑAS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#download">
                                DESCARGAS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#price">
                                PRECIO
                            </a>
                        </li>
                    </ul>
                    <div className="float-right">ES/EN</div>
                </div>
            </nav>
        );
    }
}
