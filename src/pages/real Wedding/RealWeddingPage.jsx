import React, { useState } from 'react'
import './RealWeddingPage.css'
import MainNav from '../../components/navbar/MainNav/MainNav'

import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
// imgs 

import img1 from '../../assetes/realweddingPageimgs/img1.webp'
import img2 from '../../assetes/realweddingPageimgs/img2.webp'
import img3 from '../../assetes/realweddingPageimgs/img3.webp'
import img4 from '../../assetes/realweddingPageimgs/img4.webp'
import img5 from '../../assetes/realweddingPageimgs/img5.webp'
import img6 from '../../assetes/realweddingPageimgs/img6.webp'
import img7 from '../../assetes/realweddingPageimgs/img7.webp'
import img8 from '../../assetes/realweddingPageimgs/img8.webp'
import img9 from '../../assetes/realweddingPageimgs/img9.webp'
import img10 from '../../assetes/realweddingPageimgs/img10.webp'
import img11 from '../../assetes/realweddingPageimgs/img11.webp'

import bannerImg from '../../assetes/realweddingPageimgs/banner.jpg'

const banner2 = 'https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?rs=1&pid=ImgDetMain';

const realWeddingData = [
    {
        name1: 'Shalki',
        name2: 'Roshan',
        location: 'Delhi NCR',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img8, img2, img1, img4
        ]
    },
    {
        name1: 'Tessa',
        name2: 'Vishnu',
        location: 'Banglore',
        date: 'Wed Jun 22 2021',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img9, img2, img1, img4
        ]
    },
    {
        name1: 'Varsha',
        name2: 'Shrikant',
        location: 'Delhi NCR',
        date: 'Wed Feb 22 2019',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img10, img2, img1, img1
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img11, img2, img1, img4
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img11, img2, img1, img4
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img11, img2, img1, img4
        ]
    },
    {
        name1: 'Manchal',
        name2: 'Luca',
        location: 'Navi Mumbai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img5, img2, img1, img4
        ]
    },
    {
        name1: 'Shalki',
        name2: 'Roshan',
        location: 'Pune',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img6, img2, img1, img4
        ]
    },
    {
        name1: 'Radhika',
        name2: 'Rohan',
        location: 'Chandigar',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img7, img2, img1, img4
        ]
    },
    {
        name1: 'Radhika',
        name2: 'Rohan',
        location: 'Chandigar',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img4, img2, img1, img4
        ]
    },
    {
        name1: 'Radhika',
        name2: 'Rohan',
        location: 'Chandigar',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img2, img2, img1, img4
        ]
    },
    {
        name1: 'Radhika',
        name2: 'Rohan',
        location: 'Chandigar',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            img1, img2, img1, img4
        ]
    }
]

const RealWeddingPage = () => {
    const [navFix, setNavFix] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        // console.log(e.target, click)
    }

    const setNavFixed = () => {
        if (window.scrollY >= 480) {
            setNavFix(true)
        } else {
            setNavFix(false);
        }
    }
    window.addEventListener("scroll", setNavFixed);

    return (
        <div className='RealWeddingPage'>
            <MainNav />
            <div className="realWeddingPage-section">

                <div className="realweddingPage-banner">
                    <img alt='a' src={banner2} />
                    <div className="banner-text">
                        <h2>Real Weddings on WedMeGood | Photos & Trending Ideas</h2>
                        <p>Browse pictures from real weddings shared by couples on WedMeGood. Know latest wedding trends, outfit ideas, vendors chosen by real brides & grooms in different cities and culture.</p>
                    </div>
                </div>
                <div className={navFix ? 'realWeddingPage-filterNav fixed' : 'realWeddingPage-filterNav'}>

                    <div onClick={handleClick} className="filterNavItem-section">
                        <div className="filterNav-item">
                            <p>All Cities</p>
                            {click ? <RiArrowUpSFill className='icon' /> : <RiArrowDownSFill className='icon' />}
                        </div>
                        <div className={click ? 'filterNav-item-content show' : 'filterNav-item-content'}>
                            <li>Kolkata</li>
                            <li>Banglore</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                        </div>
                    </div>
                    <div onClick={handleClick} className="filterNavItem-section">
                        <div className="filterNav-item">
                            <p>All Cities</p>
                            {click ? <RiArrowUpSFill className='icon' /> : <RiArrowDownSFill className='icon' />}
                        </div>
                        <div className="filterNav-item-content">
                            <li>Kolkata</li>
                            <li>Banglore</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                        </div>
                    </div>
                    <div onClick={handleClick} className="filterNavItem-section">
                        <div className="filterNav-item">
                            <p>All Cities</p>
                            {click ? <RiArrowUpSFill className='icon' /> : <RiArrowDownSFill className='icon' />}
                        </div>
                        <div className="filterNav-item-content">
                            <li>Kolkata</li>
                            <li>Banglore</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                            <li>Kolkata</li>
                        </div>
                    </div>
                    <div className="filterNav-itemInput">
                        <input type='text' placeholder='Search by vendors,bride/groom' />
                    </div>
                </div>
                <div className="realWeddingItems-section universal-container">
                    <h3>Showing {realWeddingData.length} results in {'Banglore'}</h3>

                    <div className="realWeddingItems-container">
                        {
                            realWeddingData.map((item, index) =>
                                <div key={index} className='realWedding-Item'>
                                    <div className="img-section1">
                                        <img src={item.imgs[0]} alt='a' />
                                    </div>
                                    <div className="img-section2">
                                        <div className="section2Img">
                                            <img src={item.imgs[1]} alt='a' />
                                        </div>
                                        <div className="section2Img img-desc">
                                            <img src={item.imgs[2]} alt='a' />
                                        </div>

                                    </div>
                                    <div className="realWedding-about">
                                        <h3>{item.name1} and {item.name2}</h3>
                                        <div className="realWedding-location">
                                            <FaLocationDot />
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RealWeddingPage
