import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import photo1 from '../assets/images/Jason_Momoa_by_Gage_Skidmore_2.png';
import photo2 from '../assets/images/136128.png';
import photo3 from '../assets/images/b0a8a9917aae7debe429ac71bb480c66.png';

class Reviews extends Component {
    state = {
        reviews: [{
            "Title": "Mike, 50",
            "Desc": "¡Gracias Heaven Sent! Realmente lo recomiendo mucho, es una plataforma muy fácil de usar y cada parte del proceso fue muy sencilla de lograr.",
            "photo": photo1
        }, {
            "Title": "Susy, 58",
            "Desc": "Nunca hubiera imaginado que una app así pudiera ser posible, es realmente sencilla de usar y he podido crear cientos de memorias para mis seres queridos.",
            "photo": photo2
        }, {
            "Title": "Nora, 55",
            "Desc": "Me encanta la plataforma de Heaven Sent, gracias a ella pude planear los siguientes 15 cumpleaños de mi esposo e hijo, pudiéndoles dejar un mensaje especial en caso de que ya no pueda celebrar con ellos.",
            "photo": photo3
        }]
    }
    componentDidMount() {
        this.state.reviews.forEach((item, i) => {
            document.querySelectorAll("#reviews .carousel-indicators")[0].children[i].style.backgroundImage = "url(" + item.photo + ")";
        })

    }
    render() {
        var items = this.state.reviews;
        return (
            <section id="reviews" className="reviews-section d-flex flex-column justify-content-center">
                <div className="container">
                    <Carousel interval={null} controls={false}>
                        {items.map((item, i) => {
                            return (<Carousel.Item key={i}>
                                <Card className="d-flex flex-row">
                                    <div className="left-side d-flex justify-content-center align-items-end"> <p>“</p> </div>
                                    <hr/>
                                    <Card.Body>
                                        <Card.Title>- {item.Title}</Card.Title>
                                        <Card.Text>
                                            {item.Desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>)
                        })}
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default Reviews;
