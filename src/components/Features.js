import React, { Component } from 'react';
import photo from '../assets/images/Frame 14.png';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/images/iStock-971053374-2000x1200 1.png';
import photo2 from '../assets/images/banff-canada-landscape-5k-8p 1.png';

class Features extends Component {
    state = {
        features_items: [{
            "Title": "Carga de archivos",
            "Desc": "Sube imágenes, videos, mensajes grabados y mensajes de texto pre-escritos."
        }, {
            "Title": "Almacenaje",
            "Desc": "Guarda y revisita múltiples formatos audiovisuales por hasta 15 años."
        }, {
            "Title": "Distribución",
            "Desc": "Distribuye mensajes hasta un máximo de 10 personas."
        }, {
            "Title": "Regalos monetarios y donaciones",
            "Desc": "Manda regalos monetarios y dona a la caridad."
        }, {
            "Title": "Pagos",
            "Desc": "Procesa en una sola vez tus pagos y suscripciones en caso que así lo desees."
        }, {
            "Title": "Contacto a través de notificaciones",
            "Desc": "Contacta a tus seres queridos via notificaciones, textos, email o por teléfono de manera automática en intervalos de tiempo específicos."
        }, {
            "Title": "Mensajes en distintas plataformas",
            "Desc": "Permite recibir mensajes via WhatsaApp, Facebook o textos."
        }, {
            "Title": "Idiomas",
            "Desc": "Disponible en inglés y español."
        }]
    }
    render() {
        var items = this.state.features_items;
        return (
            <section id="features" className="features-section d-flex flex-column justify-content-center">
                <div className="container d-flex mx-0 mw-100">
                    <div className="col">
                        <div className="ml-n30">
                            <img src={photo} className="w-100"></img>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="features-title">CARACTERISTICAS</h1>
                        <Carousel interval={null}>
                            {items.map((item,i) => {
                                return (<Carousel.Item key={i}>
                                    <h1 className="feat_Title">{item.Title}</h1>
                                    <p className="feat_desc">{item.Desc}</p>
                                </Carousel.Item>)
                            })}
                        </Carousel>
                    </div>
                </div>
            </section>
        );
    }
}
export default Features;
