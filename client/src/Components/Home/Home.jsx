import React from 'react'

import video from '../../assets/video.mp4';
import plane from '../../assets/Images/plane.png';

const Home = () => {
    return (
        <div className="home flex container">
            <div className="mainText">
                <h1>Lets Craft Endless Memories Together</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                </div>
            </div>

            <img src={plane} className='plane' alt="" />
        </div>
    )
}

export default Home