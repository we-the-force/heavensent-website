import React, { Component } from 'react';
import photo from '../assets/images/Group 12.png';
// import app_store from '../assets/images/apple.png';
// import google_play from '../assets/images/google.png';

class Download extends Component {
    
    getTrans = (y) => {
        let trans = this.props.translate[this.props.lang.toUpperCase()];
        return trans ? trans[y] : '';
    }
    
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
        return (
            <section id="download" className="download-section d-flex flex-column justify-content-center">
                {this.getsqr('600px','450px','35%','-15%')}
                {this.getsqr('810.26px','607.7px','50%','50%')}
                {this.getsqr('600px','450px','65%','115%')}
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <h1 className="download-title">{this.getTrans('downloads')}</h1>
                    <div className="images">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="stores">
                        <a href="#download" className="app_store">
                            <img src={"https://api.heavensentnow.com"+this.getTrans('apple_store').url} height='54' width='auto'  alt=""/>
                        </a>
                        <a href="#download" className="google_play">
                            <img src={"https://api.heavensentnow.com"+this.getTrans('google_store').url} height='54' width='auto'  alt=""/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;
