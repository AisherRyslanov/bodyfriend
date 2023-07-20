import React from 'react';
import bg from '../../img/Rovo_Medical_09.png'
import './style.scss'
import alt from '../../img/Rovo_Medical_320_27.png'

const Eco = () => {
    return (
        <div className="eco">
            <img className="eco__img" src={bg} alt=""/>
            <img className="eco__alt" src={alt} alt=""/>
            <h1 className="eco__title">ТЕХНОЛОГИЯ ЭКОНОМИТ ПРОСТРАНСТВО</h1>
            <h2 className="eco__h2">SMART SLIDE PRO</h2>
            <p className="eco__p">Rovo Medical заботится об экономии пространства в Вашем доме! Массажный рай представляет
                обновленную технологию SmartSlide PRO - теперь требуется всего 8см от стены для установки нового
                массажного кресла XD PRO</p>
        </div>
    );
};

export default Eco;