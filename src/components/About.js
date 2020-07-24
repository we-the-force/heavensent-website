import React from 'react';
import photo1 from '../assets/images/iStock-971053374-2000x1200 1.png';
import photo2 from '../assets/images/banff-canada-landscape-5k-8p 1.png';

export default function About() {
    return (
        <section id="about" className="about-section d-flex flex-column justify-content-top">
            <div className="container d-flex">
                <div id="text" className="col">
                    <h1 className="about-title">Acerca</h1>
                    <div className="about-desc">
                        <p> Al momento de partir, nuestros seres queridos tienen la posibilidad de recordarnos mediante todos los momentos que compartimos juntos. Puede ser algo tan sencillo como un cumpleaños, un aniversario, unas vacaciones juntos, o algo más específico como un evento especial, un lugar o un momento. Queremos preservar en el tiempo todas estas memorias que alguna vez compartimos con ellos en nuestras almas y corazones.</p>
                        <p>Heaven Sent es una app con una muy sencilla e intuitiva plataforma que te permitirá capturar todos estos momentos; haciéndote posible subir todas las imágenes, videos, audios o mensajes que desees sobre esos momentos especiales.</p>
                        <p>Estas memorias serán guardadas y se compartirán con tus amigos o familia en el tiempo que tú lo decidas; una vez compartido, tus seres queridos podrán revisitar esta memoria cuantas veces lo deseen.</p>
                        <p>Forma parte de tus seres queridos aún después de partir.</p>
                    </div>
                </div>
                <div id="images" className="col">
                    <div className="img_1">
                        <img src={photo1} />
                    </div>
                    <div className="img_2">
                        <img src={photo2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
