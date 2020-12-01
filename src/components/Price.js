import React, { Component } from 'react';
class Price extends Component {
    getTrans = y => {
        let trans = this.props.translate[this.props.lang.toUpperCase()];
        return trans ? trans[y] : '';
    };
    render() {
        return (
            <section
                id="price"
                className="price-section d-flex flex-column justify-content-top"
            >
                <div className="container">
                    <h1 className="price-title">{this.getTrans('price_title')}</h1>
                    <h5 className="price-subtitle">{this.getTrans('price_sub')}</h5>
                    <div className="row prices">
                        <div className="col-3"></div>
                        <div className="col-9 d-flex justify-content-around">
                            <div className="plan blue-1 d-flex flex-column justify-content-around align-items-center">
                                <h3>Economy</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>39,99</p>
                                </div>
                                <p>{this.getTrans('per_month')}</p>
                            </div>
                            <div className="plan blue-2 d-flex flex-column justify-content-around align-items-center">
                                <h3>Premium</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>69,99</p>
                                </div>
                                <p>{this.getTrans('per_month')}</p>
                            </div>
                            <div className="plan blue-3 d-flex flex-column justify-content-around align-items-center">
                                <h3>VIP</h3>
                                <div className="price d-flex">
                                    <p className="small">$</p>
                                    <p>109,99</p>
                                </div>
                                <p>{this.getTrans('per_month')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>{this.getTrans('text_notes')}</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-check blue-1" aria-hidden="true"></i>
                            <i className="fa fa-check blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>{this.getTrans('pictures')}</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <p className="text blue-1">24 pictures</p>
                            {/* <i className="fa fa-check blue-1" aria-hidden="true"></i> */}
                            <p className="text blue-2">48 pictures</p>
                            {/* <i className="fa fa-check blue-2" aria-hidden="true"></i> */}
                            <p className="text blue-3">72 pictures</p>
                            {/* <i className="fa fa-check blue-3" aria-hidden="true"></i> */}
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3">
                            <p>Video</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <p className="text blue-1">5 videos (30" each)</p>
                            {/* <i className="fa fa-check blue-1" aria-hidden="true"></i> */}
                            <p className="text blue-2">10 videos (30" each)</p>
                            {/* <i className="fa fa-check blue-2" aria-hidden="true"></i> */}
                            <p className="text blue-3">15 videos (30" each)</p>
                            {/* <i className="fa fa-check blue-3" aria-hidden="true"></i> */}
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
                            <p>{this.getTrans('on_demand')}</p>
                        </div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <i className="fa fa-times blue-1" aria-hidden="true"></i>
                            <i className="fa fa-times blue-2" aria-hidden="true"></i>
                            <i className="fa fa-check blue-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-3"></div>
                        <div className="col-9 d-flex justify-content-around align-items-center">
                            <p className="desc">10 {this.getTrans('mem_pers_year')}</p>
                            <p className="desc">20 {this.getTrans('mem_pers_year')}</p>
                            <p className="desc">30 {this.getTrans('mem_pers_year')}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mt-4 price-subtitle">
                                {this.getTrans('prices_in')}
                                {this.getTrans('coin')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Price;
