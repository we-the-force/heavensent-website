import React, { Component } from 'react';
import photo from '../assets/images/Group 12.png';
class Price extends Component {
    state = {}
    render() {
        return (
            <section id="price" className="price-section d-flex flex-column justify-content-center">
                <div className="container">
                    <h1 className="price-title">Planes y Precios</h1>
                    <h5 className="price-subtitle">Selecciona el mejor plan para ti.</h5>
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
                            <p>Notas de texto</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-check blue-1" aria-hidden="true"></i>
                            <i className="fa fa-check blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>Imagenes</p>
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
                            <p>Bajo demanda</p>
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
                            <p className="desc">6 Memorias / Personas / Años</p>
                            <p className="desc">6 Memorias / Personas / Años</p>
                            <p className="desc">12 Memorias / Personas / Años</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Price;
