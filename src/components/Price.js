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
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9 d-flex">
                            <div className="plan">
                                <h3>Basic</h3>
                                <p>$</p>
                                <p>%</p>
                                <p>PER MONTH</p>
                            </div>
                            <div className="plan">
                                <h3>Standar</h3>
                                <p>$</p>
                                <p>15</p>
                                <p>PER MONTH</p>
                            </div>
                            <div className="plan">
                                <h3>Premium</h3>
                                <p>$</p>
                                <p>25</p>
                                <p>PER MONTH</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Notas de texto</p>
                        </div>
                        <div className="col-9">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Imagenes</p>
                        </div>
                        <div className="col-9">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Video</p>
                        </div>
                        <div className="col-9">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>GPS</p>
                        </div>
                        <div className="col-9">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Bajo demanda</p>
                        </div>
                        <div className="col-9">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Price;
