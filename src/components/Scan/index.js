import React from 'react';
import './style.scss'
import bg from '../../img/Rovo_Medical_01.png'
import video from '../../img/phantom_robo_CW_p_1200_08_белый фон.mp4'
import alt from '../../img/Rovo_Medical_320_019.png'
const Scan = () => {
    return (
        <div className="scan">
            <h1 className="scan__main">моментальное сканирование перед началом сеанса</h1>
            <img className="scan__img" src={bg} alt=""/>
            <img className="scan__alt" src={alt} alt=""/>
            <p className='scan__scani'>Сканирование Smart Scan..</p>
            <p className="scan__bigTekst">Всем креслам в мире требуется около 1 минуты, чтобы распознать человеческое тело. Однако кресла ROVO это времясбыло сокращено до 15 секунд. канирование перед началом сеанса массажа позволяет адаптировать кресло под комплекцию человека, что способствует более точной проработке все зон тела, включая мышцы,суставы м сухожилья</p>
            <p className="scan__bigTekst2">Массажная техника с элементами стрергича в резулбтате воздействия земного влияет на развитие гибкости зазличных групп мышц и суставов. После процедуры проподают боль, судороги, мышечные уплотнения и напряжени, что положительно сказывается на здоровье всего организма</p>
        </div>
    );
};

export default Scan;