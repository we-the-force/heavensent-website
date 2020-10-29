import React, { Component } from 'react';
import photo from '../assets/images/Frame.png';
import Carousel from 'react-bootstrap/Carousel';


class Features extends Component {

    getTrans = (y) => {
        let trans = this.props.translate[this.props.lang.toUpperCase()];
        return trans ? trans[y] : '';
    }

    componentDidMount() {
        document.querySelectorAll('.carousel-control-prev')[0].innerHTML = "<i class='fas fa-chevron-left'></i>";
        document.querySelectorAll('.carousel-control-next')[0].innerHTML = "<i class=\"fas fa-chevron-right\"></i>";
    }
    render() {
        return (
            <section id="features" className="features-section d-flex flex-column">
                <div className="container d-flex mx-0 px-0 mw-100">
                    <div className="col pl-0 img_cont">
                        <img src={photo} className="w-100" alt=""></img>
                    </div>
                    <div className="col pr-0 carousel_cont">
                        <h1 className="features-title">{this.getTrans('features')}</h1>
                        <Carousel interval={null}>
                            {this.getTrans('lang') !== '' &&
                                this.props.translate[this.props.lang.toUpperCase()]['feature_items'].map((el, key) =>
                                    <Carousel.Item key={key}>
                                        <h1 className="feat_Title">{el.Title}</h1>
                                        <p className="feat_desc">{el.Desc}</p>
                                    </Carousel.Item>
                                )
                            }
                            {/* <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[0].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[0].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[1].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[1].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[2].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[2].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[3].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[3].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[4].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[4].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[5].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[5].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[6].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[6].Desc}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className="feat_Title">{this.getTrans('feature_items')[7].Title}</h1>
                                <p className="feat_desc">{this.getTrans('feature_items')[7].Desc}</p>
                            </Carousel.Item> */}
                        </Carousel>
                    </div>
                </div>
            </section>
        );
    }
}
export default Features;
