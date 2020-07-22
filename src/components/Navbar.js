import React, { Component } from 'react';
import Scroll from './Scroll';
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
        if (window.pageYOffset > 500) {
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
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="home"
                            >
                                <a className="nav-link" href="#home">
                                    INICIO
                                </a>
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="about"
                            >
                                <a className="nav-link" href="#about">
                                    ACERCA
                                </a>
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="features"
                            >
                                <a className="nav-link" href="#features">
                                    CARACTERISTICAS
                            </a>
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="reviews"
                            >
                                <a className="nav-link" href="#reviews">
                                    RESEÑAS
                            </a>
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="download"
                            >
                                <a className="nav-link" href="#download">
                                    DESCARGAS
                            </a>
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll
                                onClick={() => this.toggleMenu(!openMenu)}
                                type="id"
                                element="price"
                            >
                                <a className="nav-link" href="#price">
                                    PRECIO
                            </a>
                            </Scroll>
                        </li>
                    </ul>
                    <div id="lang-btn" className="position-absolute d-flex">
                        <a data-lang="en" className="">EN</a>
                        <p> / </p>
                        <a data-lang="es" className="active">ES</a>
                    </div>
                </div>
            </nav>
        );
    }
}
