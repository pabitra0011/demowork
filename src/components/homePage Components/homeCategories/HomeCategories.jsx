
import React from 'react'
import './homeCategories.css'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import categoriesImg from '../../../assetes/homeCategoriesImgs/homeCategories.webp'
import categoriesImg2 from '../../../assetes/homeCategoriesImgs/homeCategories.webp'
import categoriesImg3 from '../../../assetes/homeCategoriesImgs/homeCategories.webp'
import categoriesImg4 from '../../../assetes/homeCategoriesImgs/homeCategories.webp'
import { Link } from 'react-router-dom';

const HomeCategories = () => {

    return (
        <div className='universal-conatainer homeCategories-section'>
            <div className="homeCategories-title">
                <h2>Vendor Categories</h2>
                <Link style={{ paddingRight: '3.5rem' }} to='/vendors'>View all Categories</Link>
            </div>
            <div className="homeCategories-container">
                <div className="homeCategories-container-row">
                    <div style={{ background: '#c499ed' }} className="homeCategories-item item1">
                        <div className='homeCategories-item-title item1'>
                            <h2>Venues </h2>
                            <p>Banquet Halls, Lawns/Farmhouses,..</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg} alt='a' />
                        </div>
                    </div>
                    <div style={{ background: ' #f8e6c5' }} className="homeCategories-item item2">
                        <div className='homeCategories-item-title'>
                            <h2>Photographers </h2>
                            <p>Photographers</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg2} alt='a' />
                        </div>
                    </div>
                    <div style={{ background: '#f7b3ec' }} className="homeCategories-item item3">
                        <div className='homeCategories-item-title'>
                            <h2>Makeups </h2>
                            <p>Makeups</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg3} alt='a' />
                        </div>
                    </div>
                </div>
                <div className="homeCategories-container-row">
                    <div style={{ background: '#b3f7be' }} className="homeCategories-item item4">
                        <div className='homeCategories-item-title'>
                            <h2>Pre Wedding Shoot </h2>
                            <p>Pre Wedding Shoot</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg4} alt='a' />
                        </div>
                    </div>
                    <div style={{ background: '#f7bbb3' }} className="homeCategories-item item5">
                        <div className='homeCategories-item-title'>
                            <h2>Planning & Decor </h2>
                            <p>Planning & Decor</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg} alt='a' />
                        </div>
                    </div>
                    <div style={{ background: 'lightBlue' }} className="homeCategories-item item6">
                        <div className='homeCategories-item-title'>
                            <h2>Bridal Wear</h2>
                            <p>Bridal Wear</p>
                        </div>
                        <div className='homeCategories-item-img'>
                            <img src={categoriesImg4} alt='a' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategories
