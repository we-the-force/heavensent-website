import React, {Component} from 'react';
import photo1 from '../assets/images/iStock-971053374-2000x1200 1.png';
import photo2 from '../assets/images/banff-canada-landscape-5k-8p 1.png';


export default class About extends Component {
    getTrans = (y) => {
        let trans = this.props.translate[this.props.lang.toUpperCase()];
        return trans ? trans[y] : '';
    }
    render() {
        return (
            <section id="about" className="about-section d-flex flex-column justify-content-top">
                <div className="container d-flex">
                    <div id="text" className="col">
                        <h1 className="about-title">{this.getTrans('about')}</h1>
                        <div className="about-desc" dangerouslySetInnerHTML={{__html: this.getTrans('about_desc')}}>
                        </div>
                    </div>
                    <div id="images" className="col">
                        <div className="img_1">
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="img_2">
                            <img src={photo2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}