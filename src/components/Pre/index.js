import React, {useRef, useState} from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_06.png'
import alt from '../../img/Rovo_Medical_320_24.png'
import video1 from "../../veideos/slide8_part1_video.mp4";
import video2 from '../../veideos/slide8_part2_video.mp4'
import video3 from '../../veideos/slide8_part3_video.mp4'
import video4 from '../../veideos/slide8_part4_video.mp4'
import video5 from '../../veideos/slide8_part5_video.mp4'
import video6 from '../../veideos/slide8_part6_video.mp4'

const Pre = () => {
    return (
        <div className="pre">
            <img className="pre__img" src={bg} alt=""/>
            <img className="pre__alt" src={alt} alt=""/>
            <h1 className='pre__title'>ПРЕИМУЩЕСТВА</h1>
            <div className="scroll-container">
                <div className='pre__videos'>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video1} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video2} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video3} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video4} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video5} type="video/mp4" />
                    </video>
                    <video autoPlay muted loop controls className="pre__videos--vid">
                        <source  src={video6} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>
    );
};

export default Pre;