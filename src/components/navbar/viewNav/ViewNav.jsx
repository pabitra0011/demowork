import React, { useState } from 'react'
import './VIewNav.css'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsCurrencyBitcoin, BsHouseAdd, BsStar, BsInboxFill, BsPeople, BsGeo } from "react-icons/bs";


const ViewNav = () => {
    const [fix, setFix] = useState(false);
    const [isNavListOpen, setIsNavListOpen] = useState(false);
    const setFixed = () => {
        if (window.scrollY >= 110) {
            setFix(true)
        } else {
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed);

    const setNavContent = () => {
        setIsNavListOpen(!isNavListOpen);
    }

    return (

        <div className={fix ? 'nav-section fixed' : 'nav-section'}>
            <div className="nav-container">
                <div onClick={setNavContent} className="nav-item">
                    <BsGeo />
                    <p>Locality</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

                <div onClick={setNavContent} className="nav-item">
                    <BsPeople />
                    <p>No. of Guests</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

                <div onClick={setNavContent} className="nav-item">
                    <BsCurrencyBitcoin />
                    <p>Price</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

                <div onClick={setNavContent} className="nav-item">
                    <BsInboxFill />
                    <p>Rental Cost</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

                <div onClick={setNavContent} className="nav-item">
                    <BsHouseAdd />
                    <p>Room Count</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

                <div onClick={setNavContent} className="nav-item">
                    <BsStar />
                    <p>Rating</p>
                    <IoMdArrowDropdown className='icon' />
                </div>

            </div>
            {/*  nav content for filtering  */}
            {
                isNavListOpen && (
                    <div>
                        <div className="viewNav-content">
                            <div className="nav-item-content">
                                {/* <label>Enter Your Locality</label> */}
                                <input style={{
                                    margin: ' 0 auto',
                                    height: '30px'
                                }} type='text' placeholder='Enter Your Locality' />
                            </div>
                            <div className="nav-item-content">
                                {/* <h4>Choose Number of Guests</h4> */}
                                <div>
                                    <input type='checkbox' />
                                    <label>{'< 50'}</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>50 - 100</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>100 - 150</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>200 & Above</label>
                                </div>
                            </div>
                            <div className="nav-item-content">
                                {/* <h4>Price Range per Plate</h4> */}
                                <div>
                                    <input type='checkbox' />
                                    <label> {'< 100 '} </label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>200 - 500</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>500 - 1000</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>1000 & Above</label>
                                </div>
                            </div>
                            <div className="nav-item-content">
                                {/* <h4>Choose Your cost</h4> */}
                                <div>
                                    <input type='checkbox' />
                                    <label>{'< 50,000'}</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>50,000 - 1,00,000</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>1,00,000 - 1,50,000</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>2,00,000 & Above</label>
                                </div>
                            </div>
                            <div className="nav-item-content">
                                {/* <h4>Choose Number of Rooms</h4> */}
                                <div>
                                    <input type='checkbox' />
                                    <label>{'< 10'}</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>50 - 100</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>100 - 150</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>200 & Above</label>
                                </div>
                            </div>
                            <div className="nav-item-content">
                                <div>
                                    <input type='checkbox' />
                                    <label>All</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>5 Star</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>4 Star</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>3 Star</label>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <label>2 Star or Less</label>
                                </div>
                            </div>
                        </div>
                        <div className="viewItem-content-bnts">
                            <button className='reset'>Reset</button>
                            <button className='view'>View Result</button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ViewNav
