import React, { Component } from 'react';
import photo from '../assets/images/Group 12.png';
import app_store from '../assets/images/apple.png';
import google_play from '../assets/images/google.png';

class Download extends Component {
    getsqr = (x,y,p_x,p_y) => {
        console.log('poner fondo aqui');
    }
    state = {}
    render() {
        var state = this.state;
        return (
            <section id="download" className="download-section d-flex flex-column justify-content-center">
                {this.getsqr('5','6','5','6')}
                {this.getsqr('5','6','5','6')}
                {this.getsqr('5','6','5','6')}
                <div className="container">
                    <h1 className="download-title">DESCARGA</h1>
                    <div className="images">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="stores">
                        <a className="app_store">
                            <img src={app_store} alt=""/>
                        </a>
                        <a className="google_play">
                            <img src={google_play} alt=""/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;
