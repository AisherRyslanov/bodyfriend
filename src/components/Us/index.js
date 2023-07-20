import React from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_11.png'
import alt from '../../img/Rovo_Medical_320_28.png'

const Us = () => {
    return (
        <div className="us">
            <img className="us__img" src={bg} alt=""/>
            <img className="us__alt" src={alt} alt=""/>
            <div className="us__all">
                <h1 className="us__title">СТАНЬ ОДНИМ ИЗ НАС</h1>
                <p className="us__deliver">ЗАКАЖИ УЖЕ СЕЙЧАС ROVO MEDICAL</p>
            </div>

            <div className="us__inps">
                <input type="text" className="us__inps--inp1" placeholder="ВАШЕ ИМЯ"/>
                <input type="text" className="us__inps--inp2" placeholder="ВАШ ТЕЛЕФОН"/>
                <button className="us__inps--btn">ЗАКАЗАТЬ</button>
            </div>

        </div>
    );
};

export default Us;