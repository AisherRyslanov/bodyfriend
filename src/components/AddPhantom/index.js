import React, {Component, useState} from 'react';
import './style.scss'
import medical from '../../img/Rovo_Medical_14.png'
import alt from '../../img/Rovo_Medical_320_018.png'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaCartShopping} from "react-icons/fa6";



const AddPhantom = () => {

    return (
        <div className="AddPhantom">
            <div className="">
                <img className='AddPhantom__img' src={medical} alt=""/>
                <img className="AddPhantom__alt" src={alt} alt=""/>
                <div className="AddPhantom__altDel">
                    <h1 className="AddPhantom__mass">МАССАЖНОЕ КРЕСЛО</h1>
                    <h1 className='AddPhantom__future'>БУДУЩЕЕ УЖЕ ЗДЕСЬ И СЕЙЧАС</h1>
                </div>

                <h2 className="AddPhantom__price">3 500 000</h2>
                <button className="AddPhantom__toc"><i> <AiOutlineShoppingCart/> </i>В КОРЗИНУ</button>
                <button className="AddPhantom__buy"><i> <FaCartShopping/> </i>КУПИТЬ В ОДИН КЛИК</button>


            </div>


        </div>
    );
};
export default AddPhantom;

