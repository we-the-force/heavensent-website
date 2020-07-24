import React from 'react';
import photo1 from '../assets/images/iStock-971053374-2000x1200 1.png';
import photo2 from '../assets/images/banff-canada-landscape-5k-8p 1.png';

export default function About() {
    return (
        <section id="about" className="about-section d-flex flex-column justify-content-top">
            <div className="container d-flex">
                <div id="text" className="col">
                    <h1 className="about-title">About</h1>
                    <div className="about-desc">
                        <p>When we leave this world, our friends and family members will always remember us by the memories we created together. It may be something as simple as a birthday, anniversary, or holiday shared or something as specific as a special event, place, or even moment. We want to preserve these memories in time that were shared in our hearts and souls.</p>
                        <p>HeavenSent is an app with a very simple and intuitive platform that enables us to capture these memories. It makes it possible to upload images, videos, audio, and messages of all those special moments that you experienced together. These memories are saved and then shared with your friends and family on specific dates that you establish.  After the memory has been shared, your family member or friend will be able to revisit it anytime they desire.</p>
                        <p>The app provides you with the capability to still be part of your loved ones' lives, even after you have departed.</p>
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
