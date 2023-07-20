import React from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_04.png'
import alt from '../../img/Rovo_Medical_320_22.png'

const Open = () => {
    return (
        <div className="open">
            <img className="open__img" src={bg} alt=""/>
            <img className="open__alt" src={alt} alt=""/>
            <p className='open__p'>Откройте двери в мир иноваци и наслаждайтесь роскошью будущего прямо у себя дома. Наше массажное кресло - истинное воплощение передовых технологий, предостовляющих вам невероятные возможности релаксайии и востановления. Оно опережает свое время, позволяя вам ощутить чудеса будущего уже сегодня</p>
        </div>
    );
};

export default Open;