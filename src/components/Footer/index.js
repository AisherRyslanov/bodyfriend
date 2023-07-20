import React from 'react';
import './style.scss'
import img from '../../img/Rovo_Medical_13.png'
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";
import alt from '../../img/Rovo_Medical_320_33.png'
import li from '../../img/Rovo_Medical_320_34.png'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer">
                <img className="footer__logo" src={logo} alt=""/>
                <img className="footer__img" src={img} alt=""/>
                <img className="footer__alt" src={alt} alt=""/>
                <div className="footer__group">
                    <h2>БУДУЩЕЕ УЖЕ ЗДЕСЬ</h2>
                    <p>ПРЕМИАЛЬНОЕ КОРЕЙСКОЕ КАЧЕСТВО</p>
                </div>
                <a href="tel://+7(800)333-030-68">
                    <img className="footer__li" src={li} alt=""/>
                </a>

                <div className="footer__group1">
                    <a className="footer__group1--mp" href="https://www.mp-mp.ru/">MP@MP-MP.RU</a>
                    <a className="footer__group1--phone" href="tel://+7(800)333-030-68">+7(800)333-030-68</a>
                </div>
                <div className="footer__links">
                    <Link to="">
                        <p> РОЛИКОВЫЙ МЕХАНИЗМ</p>
                    </Link>
                    <Link className="footer__links--oco" to="">
                        <p>ОСОБЕННОСТИ</p>
                    </Link>
                    <Link to="">
                        <p>ПРЕИМУЩЕСТВА</p>
                    </Link>
                        <h2 className="footer__teh">ЗПАТЕНТОВАННАЯ ТЕХНОЛОГИЯ МАССАЖА</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;