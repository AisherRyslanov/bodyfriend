import React, {useState} from 'react';
import './style.scss'
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <Link to={'/'}>
                        <img className="header__logo" src={logo} alt=""/>
                    </Link>
                    <div className="header__links">
                        <Link to="/roller mechanism">
                            <p> РОЛИКОВЫЙ МЕХАНИЗМ</p>
                        </Link>
                        <Link className="header__links--oco" to="/peculiarities">
                            <p>ОСОБЕННОСТИ</p>
                        </Link>
                        <Link to="/advantages">
                            <p>ПРЕИМУЩЕСТВА</p>
                        </Link>
                    </div>

                    <button className="header__del"><i> <AiOutlineShoppingCart/> </i>ЗАКАЗАТЬ</button>
                    <button className="header__cart"><AiOutlineShoppingCart/></button>
                    <div className="header__group">
                        <a className="header__group--mp" href="https://www.mp-mp.ru/">MP@MP-MP.RU</a>
                        <a className="header__group--phone" href="tel://+7(800)333-030-68">+7(800)333-030-68</a>
                    </div>
                    <div className="header__ham">
                        <div className="burger-menu">
                            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                            </div>
                            <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                                <ul>
                                    <Link to="/roller mechanism">
                                        <p> РОЛИКОВЫЙ МЕХАНИЗМ</p>
                                    </Link>
                                    <Link className="header__links--oco" to="/peculiarities">
                                        <p>ОСОБЕННОСТИ</p>
                                    </Link>
                                    <Link to="/advantages">
                                        <p>ПРЕИМУЩЕСТВА</p>
                                    </Link>
                                    <li><AiOutlineShoppingCart/></li>
                                    <li>ЗАКАЗАТЬ</li>
                                    <li className="">
                                        <a className="header__group--mp" href="https://www.mp-mp.ru/">MP@MP-MP.RU</a>
                                        <a className="header__group--phone" href="tel://+7(800)333-030-68">+7(800)333-030-68</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;