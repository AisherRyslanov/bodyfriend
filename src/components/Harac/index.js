import React from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_31.png'

const Harac = () => {
    return (
        <div className="harac">
            <img className="harac__img" src={bg} alt=""/>
            {/*<h1 className='harac__title'>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h1>*/}
        </div>
    );
};

export default Harac;