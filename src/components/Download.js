import React, { Component } from 'react';
import photo from '../assets/images/Group 12.png';
import app_store from '../assets/images/apple.png';
import google_play from '../assets/images/google.png';

class Download extends Component {
    getsqr = (x,y,t,l) => {
        const style = {
            width: x,
            height: y,
            background: "#FCFCFC",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.04)",
            borderRadius: "20px",
            transform: "rotate(-1.5deg) translate(-50%, -50%)",
            position: "absolute",
            top: t,
            left: l,

        }
        return (<div style={style}></div>)
    }
    state = {}
    render() {
        var state = this.state;
        return (
            <section id="download" className="download-section d-flex flex-column justify-content-center">
                {this.getsqr('600px','450px','35%','0%')}
                {this.getsqr('810.26px','607.7px','50%','50%')}
                {this.getsqr('600px','450px','65%','100%')}
                <div className="container d-flex flex-column justify-content-center align-items-center">
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
