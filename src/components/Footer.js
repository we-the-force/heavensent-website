import React from 'react';
import face from '../assets/images/face.png';
import insta from '../assets/images/insta.png';

export default function Footer() {
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
        <p>Copyright &copy; HevenSent 2020</p>
      </div>
    </footer>
  );
}