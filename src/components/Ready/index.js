import React from 'react';
import './style.scss'
import img from '../../img/phantom_robo_CW_p_1200_04.gif'

const Ready = () => {
    return (
        <div className="ready">
            <h1 className="ready__title">А ТЫ ГОТОВ К МАКСИМАЛЬНОМУ РАССЛАБЛЕНИЮ?</h1>
            <p className="ready__p">Массажное кресло специально разработанное для людей разной комплекции. Phantom Rovo подойдет как для
                высоки спортсменов баскедболистов, так и для крупных тяжелоатлетов. Phantom Rovo предлагает
                непревзайденный комфорт и исклюительные возможности расслабления. Благодара своей просторной
                конструкции и усиленной поддержке, оно идеально подходит для людей с выдающийся физичуской силой
                и размерами. Независимо от размера и физической нагрузки, это массавое кресло предлогает
                безупречное засслабление и восстановление даже для самых требовательных спортсменов.</p>
            <img className="ready__img" src={img} alt=""/>
        </div>
    );
};

export default Ready;