import React from 'react';
import phantom from '../../veideos/slide2_video_2.mp4'
import './style.scss'
// import phantom from '../../veideos/slide2_video_2.mp4'

const Phantom = () => {
    return (
        <div id="phantom">
            <div className="phantom">
                <video autoPlay muted loop className="phantom__videos">
                    <source  src={phantom} type="video/mp4" />
                </video>
                {/*autoPlay muted loop*/}
            </div>
        </div>
    );
};

export default Phantom;