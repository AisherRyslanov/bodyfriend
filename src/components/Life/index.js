import React from 'react';
import './style.scss'
// import bg from '../../img/Rovo_Medical_02.psd'
import bg from '../../img/Rovo_Medical_2.png'
import alt from '../../img/Rovo_Medical_320_20.png'
const Life = () => {
    return (
        <div className="life">
            <img className="life__img" src={bg} alt=""/>
            <img className="life__alt" src={alt} alt=""/>
            <h1 className="life__foot">ЖИВИ В НОГУ С ТЕХНОЛОГИЯМИ</h1>
            <p className="life__for">Раздельная подставка для ног помогает воплотить жизнь более 10 новых техник массажа ног,  том числе иммитируя прогулку пешком</p>
            <h2 className="life__look">ТОЛЬКО ПРЕДСТАВЬ</h2>
            <h2 className="life__feel">ПРОСТО ПОЧУВСТВУЙ</h2>
        </div>
    );
};

export default Life;