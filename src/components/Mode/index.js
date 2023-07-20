import React from 'react';
import './style.scss'
import woM from '../../img/Rovo_Medical_3.png'
import alt from '../../img/Rovo_Medical_320_21.png'

const Model = () => {
    return (
        <div className="mode">
            <img className="mode__wom" src={woM} alt=""/>
            <img className="mode__alt" src={alt} alt=""/>
            <h1 className="mode__title">РЕЖИМ  ЛЕВИТАЦИИ</h1>
            <p className="mode__p">Технология «нулевой гравитации обеспечивает самое правильное положени тела, мышц и всех подсистем организа в пространстве для еффективного воздействия массажных функций кресла на проблемные зоны</p>
        </div>
    );
};

export default Model;