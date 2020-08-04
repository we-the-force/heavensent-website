import React, { Component } from 'react';
import face from '../assets/images/face.png';
import insta from '../assets/images/insta.png';

export default class Footer extends Component {
  getTrans = (y) => {
    let trans = this.props.translate[this.props.lang.toUpperCase()];
    return trans ? trans[y] : '';
  }
  render() {
    const { children } = this.props;
    return (
      <footer className="small text-center">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="social d-flex justify-content-center align-items-center">
            <div className="face_cont d-flex justify-content-center align-items-center">
              <img src={face} alt="" />
            </div>
            <div className="insta_cont d-flex justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
          </div>
          <div className="lang d-flex align-items-center">
            {/* <p>{this.getTrans('language')}</p>
            {children} */}
          </div>
          <p>Copyright &copy; HevenSent 2020</p>
        </div>
      </footer>
    );
  }
}