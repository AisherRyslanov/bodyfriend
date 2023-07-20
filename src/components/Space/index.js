import React from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_05.png'
import video from "../../img/Phantom Medical Rovo_2.mp4";
import alt from '../../img/Rovo_Medical_320_23.png'

const Space = () => {
    return (
        <div className="space">
            <img className="space__img" src={bg} alt=""/>
            <img className="space__alt" src={alt} alt=""/>
            <h1 className="space__listen">КОСМИЧЕСКОЕ ЗВУЧАНИЕ</h1>
            <h3 className="space__system">BODYDIFRIEND STEREO SYSTEM</h3>
            <p className="space__relax">Наслаждайтесь чистейшим стереозвучанием любимой музыки. Включита расслабляющую музыку для более глубокого погружения</p>
            <video autoPlay muted loop controls className='space__video'>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Space;