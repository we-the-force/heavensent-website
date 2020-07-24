import React, { Component } from 'react';
import Scroll from './Scroll';
import translateEN from '../locales/en/translation.json'
import translateES from '../locales/es/translation.json'

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

    getTrans = (x, y) => {
        if (x == 'en') {
            return translateEN[y]
        } else if (x == 'es') {
            return translateES[y]
        }
        return ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { children } = this.props;
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
                                    {this.getTrans(this.props.lang, 'home')}
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
                                    {this.getTrans(this.props.lang, 'about')}
                                    {/* ACERCA */}
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
                                    {this.getTrans(this.props.lang, 'features')}
                                    {/* CARACTERISTICAS */}
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
                                    {this.getTrans(this.props.lang, 'reviews')}
                                    {/* RESEÑAS */}
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
                                    {this.getTrans(this.props.lang, 'downloads')}
                                    {/* DESCARGAS */}
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
                                    {this.getTrans(this.props.lang, 'price')}
                                    {/* PRECIO */}
                                </a>
                            </Scroll>
                        </li>
                    </ul>
                    {children}
                </div>
            </nav>
        );
    }
}
