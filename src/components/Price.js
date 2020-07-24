import React, { Component } from 'react';
import photo from '../assets/images/Group 12.png';
class Price extends Component {
    state = {}
    render() {
        return (
            <section id="price" className="price-section d-flex flex-column justify-content-top">
                <div className="container">
                    <h1 className="price-title">PRICING</h1>
                    <h5 className="price-subtitle">Select the best plan for you.</h5>
                    <div className="row prices">
                        <div className="col-3"></div>
                        <div className="col-9 d-flex justify-content-around">
                            <div className="plan blue-1 d-flex flex-column justify-content-around align-items-center">
                                <h3>Basic</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>5</p>
                                </div>
                                <p>PER MONTH</p>
                            </div>
                            <div className="plan blue-2 d-flex flex-column justify-content-around align-items-center">
                                <h3>Standar</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>15</p>
                                </div>
                                <p>PER MONTH</p>
                            </div>
                            <div className="plan blue-3 d-flex flex-column justify-content-around align-items-center">
                                <h3>Premium</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>25</p>
                                </div>
                                <p>PER MONTH</p>
                            </div>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>Text Notes</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-check blue-1" aria-hidden="true"></i>
                            <i className="fa fa-check blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>Pictures</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-check blue-1" aria-hidden="true"></i>
                            <i className="fa fa-check blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>Video</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-times blue-1" aria-hidden="true"></i>
                            <i className="fa fa-check blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>GPS</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-times blue-1" aria-hidden="true"></i>
                            <i className="fa fa-times blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>On Demand</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-times blue-1" aria-hidden="true"></i>
                            <i className="fa fa-times blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <p className="desc">6 Memories / Person / Years</p>
                            <p className="desc">6 Memories / Person / Years</p>
                            <p className="desc">12 Memories / Person / Years</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Price;
