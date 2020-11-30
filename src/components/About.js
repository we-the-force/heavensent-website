import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import photo1 from '../assets/images/iStock-971053374-2000x1200 1.png';
import photo2 from '../assets/images/banff-canada-landscape-5k-8p 1.png';
import videoEN from '../assets/videos/HS_Video_00-EN.mp4';
import videoES from '../assets/videos/HS_Video_00-ES.mp4';
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
        };
    }

    handlePlay = () => {
        let x = !this.state.play
        this.setState({
            play: x
        })
    }

    getTrans = (y) => {
        let trans = this.props.translate[this.props.lang.toUpperCase()];
        return trans ? trans[y] : '';
    }
    render() {
        let video = '';
        if (this.props.lang === 'en') {
            video = videoEN;
        } else if (this.props.lang === 'es') {
            video = videoES;
        }
        return (
            <section id="about" className="about-section d-flex flex-column justify-content-top">
                <div className="container d-flex">
                    <div id="text" className="col">
                        <h1 className="about-title">{this.getTrans('about')}</h1>
                        <div className="about-desc" dangerouslySetInnerHTML={{ __html: this.getTrans('about_desc') }}>
                        </div>
                    </div>
                    <div id="images" className="col">
                        <div className="img_1">
                            <img src={photo1} alt="" />
                        </div>
                        <div className="img_2">
                            <img src={photo2} alt="" />
                        </div>
                    </div>
                    <div id="player-wrapper">
                        <ReactPlayer controls={true} /* onClick={() => this.handlePlay()} */ className="player" url={video} playing={false} />
                    </div>
                </div>
            </section>
        );
    }
}