import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import photo1 from '../assets/images/Jason_Momoa_by_Gage_Skidmore_2.png';
import photo2 from '../assets/images/136128.png';
import photo3 from '../assets/images/b0a8a9917aae7debe429ac71bb480c66.png';

import translateEN from '../locales/en/translation.json'
import translateES from '../locales/es/translation.json'
class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "photo1": photo1,
            "photo2": photo2,
            "photo3": photo3
        };
    }

    getTrans = (y) => {
        let x = this.props.lang;
        if (x === 'en') {
            return translateEN[y]
        } else if (x === 'es') {
            return translateES[y]
        }
        return ''
    }

    componentDidMount() {
        this.getTrans("reviews_items").forEach((item, i) => {
            document.querySelectorAll("#reviews .carousel-indicators")[0].children[i].style.backgroundImage = "url(" + this.state[item.photo] + ")";
        })
    }

    render() {
        return (
            <section id="reviews" className="reviews-section d-flex flex-column justify-content-center">
                <div className="container">
                    <Carousel interval={null} controls={false}>
                        <Carousel.Item>
                            <Card className="d-flex flex-row">
                                <div className="left-side d-flex justify-content-center align-items-end"> <p>“</p> </div>
                                <hr />
                                <Card.Body>
                                    <Card.Title>- {this.getTrans('reviews_items')[0].Title}</Card.Title>
                                    <Card.Text>
                                        {this.getTrans('reviews_items')[0].Desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="d-flex flex-row">
                                <div className="left-side d-flex justify-content-center align-items-end"> <p>“</p> </div>
                                <hr />
                                <Card.Body>
                                    <Card.Title>- {this.getTrans('reviews_items')[1].Title}</Card.Title>
                                    <Card.Text>
                                        {this.getTrans('reviews_items')[1].Desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="d-flex flex-row">
                                <div className="left-side d-flex justify-content-center align-items-end"> <p>“</p> </div>
                                <hr />
                                <Card.Body>
                                    <Card.Title>- {this.getTrans('reviews_items')[2].Title}</Card.Title>
                                    <Card.Text>
                                        {this.getTrans('reviews_items')[2].Desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default Reviews;
