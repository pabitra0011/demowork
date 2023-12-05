import React, { useState } from 'react'
import './ServicePage.css'

import MainNav from '../../components/navbar/MainNav/MainNav'


// icons 
import { FaUserGraduate, FaHouseCircleCheck, FaSketch, FaCheck, FaImage, FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

// imgs 
const ssimg1 = 'https://th.bing.com/th/id/OIP.0Mm-EhGsTiokikRyGn9wtwHaHa?rs=1&pid=ImgDetMain';
const ssimg2 = 'https://5.imimg.com/data5/DZ/AH/FW/SELLER-10261948/bridal-makeup-service-500x500.png'
const ssimg3 = 'https://shaadiwish.com/blog/wp-content/uploads/2019/10/1brimcompany-1024x1024.jpg'
const ssimg4 = 'https://th.bing.com/th/id/OIP.cAyyC4r5u5r9sktx_PiClgHaE8?rs=1&pid=ImgDetMain'

const himg = 'https://i.pinimg.com/originals/6a/5f/d8/6a5fd840312488afd51751572c3235a9.jpg';
const offerBanner = 'https://www.pngfind.com/pngs/m/72-727417_special-offers-discount-codes-special-offer-png-logo.png';

const oImg = 'https://thumbs.dreamstime.com/b/special-offer-vector-sticker-pink-white-background-191972720.jpg'


// data s ...........
const serviceWorks = [
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/189524/1651208565_IMG_20220414_WA0014.jpg?crop=0,107,958,539',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/189158/1651055370_IMG_20220427_WA0038.jpg?crop=0,105,1080,607',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/37137/1536152637_ar3.jpg',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/31781/1526554812_an2.jpg',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/24365/1518502147_Pranav_Misha_TTEP_113_DSC01991_2.JPG',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/24537/1516078574_9c069464_c50a_495e_979b_26d746af2f37.JPG',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    },
    {
        img: 'https://image.wedmegood.com/resized/400X/uploads/project/146427/1626946717_image18.jpg?crop=0,77,960,540',
        name: 'Akanshas Classy Look',
        packeg: 'Diamond',
        city: 'Banglore',
        date: '29 Apr 2027',
        photos: [1, 3, 5, 5],
    }
];
const serviceReviews = [
    {
        img: 'https://www.pcclean.io/wp-content/gallery/beautiful-face-hd-wallpapers/555472.jpg',
        name: 'anjali_abc',
        rating: '4.5',
        package: 'Diamond',
        date: '22 Nov 2027',
        content: 'I loved their work and both the makeups were excellent. They were just how I had imagined. Everything was on point and I would love to get dolled up by them sometime again. A big thanks to her.',
    },
    {
        img: 'https://images5.alphacoders.com/764/764105.jpg',
        name: 'Deepak keshri',
        rating: '4.9',
        package: 'Diamond',
        date: '22 Nov 2022',
        content: 'Absolutely wonderful experience. I booked the WedMeGood team for my mother and I for two wedding events and were both all praises for the professionalism of the hair and makeup artists and the quality of their work.Karishma with her team - Supriya and Rekha did an incredibly spectacular job and I loved both my looks.I strongly recommend their services.Thank you so much!',
    },
    {
        img: 'https://images5.alphacoders.com/764/764105.jpg',
        name: 'anjali_abc',
        rating: '4.5',
        package: 'Diamond',
        date: '22 Nov 2027',
        content: 'I loved their work and both the makeups were excellent. They were just how I had imagined. Everything was on point and I would love to get dolled up by them sometime again. A big thanks to her.',
    },

]

// prices 
const sPrice = 2999;
const gPrice = 5999;
const dPrice = 8999;

const ServicePage = () => {

    const [silverCount, setSilverCount] = useState(0);
    const [goldCount, setGoldCount] = useState(0);
    const [diamondCount, setdiamondCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    // let totalCount = 0;


    // functions 
    const handleCartClick = (e, i) => {
        if (i === 1) {
            setSilverCount(silverCount + 1);
            setTotalCount(totalCount + 1)
            setTotalPrice(totalPrice + sPrice);
        }
        if (i === 2) {
            setGoldCount(goldCount + 1);
            setTotalCount(totalCount + 1)
            setTotalPrice(totalPrice + gPrice);
        }
        if (i === 3) {
            setdiamondCount(diamondCount + 1)
            setTotalCount(totalCount + 1)
            setTotalPrice(totalPrice + dPrice);
        }
    }
    const handleCartClickM = (e, i) => {
        if (i === 1) {
            if (silverCount > 0) {
                setSilverCount(silverCount - 1);
            }
            if (silverCount > 0) {
                setTotalCount(totalCount - 1)
                setTotalPrice(totalPrice - sPrice);
            }
        }
        if (i === 2) {
            if (goldCount > 0) {
                setGoldCount(goldCount - 1)
            }
            if (goldCount > 0) {
                setTotalCount(totalCount - 1)
                setTotalPrice(totalPrice - gPrice);
            }
        }
        if (i === 3) {
            if (diamondCount > 0) {
                setdiamondCount(diamondCount - 1)
            }
            if (diamondCount > 0) {
                setTotalCount(totalCount - 1)
                setTotalPrice(totalPrice - dPrice);
            }
        }
    }

    return (
        <div>
            <MainNav />
            <div className="service-page">

                <div className="service-heading">
                    <div className="service-heading-img">
                        <img src={himg} alt='f' />
                    </div>
                    <div className="service-heading-content">
                        <h1>Family Makeup Service by <span style={{ color: 'rgb(255, 0, 149)' }}>CoupleCanvas</span></h1>
                        <div className="service-heading-desc">
                            <div className="item">
                                <FaUserGraduate className='icon' />
                                <p>Tranined Artists</p>
                            </div>
                            <div className="item">
                                <FaSketch className='icon' />
                                <p>Premium Products</p>
                            </div>
                            <div className="item">
                                <FaHouseCircleCheck className='icon' />
                                <p>At Home Service</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="service-container universal-container">
                    <div className="offer-banner">
                        <img src={offerBanner} alt='d' />
                    </div>

                    <h3>Select Packge</h3>
                    <p  >We give best home service iosti tisp panin adf dikah le hua to fa ni a seont josi.</p>


                    <div className="services">
                        {/* service cart 1 .......... */}
                        <div className="service-item">
                            {/* offer secti  */}
                            <div className="item-offer">
                                <img alt='a' src={oImg} />
                            </div>
                            <p className='recom'>Recommended for friends of the bride</p>
                            <div className="title">
                                <h3>CC Silver Package</h3>
                                <div className="title-price">
                                    <h3 className='actual-price'>3500 /person</h3>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.3rem'
                                    }}>
                                        <BiSolidOffer style={{
                                            fontSize: '1.5rem',
                                            color: 'red',
                                        }} />
                                        <h4 style={{
                                            fontStyle: 'italic',
                                            color: 'red',
                                            // marginTop: '-0.4rem',
                                        }}> 2999 / person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="service-content">
                                    <h4>Services:</h4>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <RxCross2 />
                                        <p>Makeup</p>
                                    </div>
                                    <h4>Experience:</h4>
                                    <p>2 yrs+</p>
                                    <h4>Products:</h4>
                                    <p>Mac, Kryolan and similar brands</p>
                                </div>

                                <div className="addCart-btn">
                                    <FaMinus onClick={(e) => handleCartClickM(e, 1)} className='icon' />
                                    <h4>{silverCount}</h4>
                                    <FaPlus onClick={(e) => handleCartClick(e, 1)} className='icon' />
                                </div>

                            </div>

                            <div className="services-photos">
                                <div className="simg">
                                    <img src={ssimg1} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg2} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg3} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg4} alt='s' />
                                </div>
                            </div>
                        </div>
                        {/* endof cart  */}
                        <div className="service-item">
                            {/* offer secti  */}
                            <div className="item-offer">
                                <img alt='a' src={oImg} />
                            </div>
                            <p className='recom'>Recommended for friends of the bride</p>
                            <div className="title">
                                <h3>CC Gold Package</h3>
                                <div className="title-price">
                                    <h3 className='actual-price'>6500 /person</h3>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.3rem'
                                    }}>
                                        <BiSolidOffer style={{
                                            fontSize: '1.5rem',
                                            color: 'red',
                                        }} />
                                        <h4 style={{
                                            fontStyle: 'italic',
                                            color: 'red',
                                            // marginTop: '-0.4rem',
                                        }}> 5999 / person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="service-content">
                                    <h4>Services:</h4>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <RxCross2 />
                                        <p>Makeup</p>
                                    </div>
                                    <h4>Experience:</h4>
                                    <p>2 yrs+</p>
                                    <h4>Products:</h4>
                                    <p>Mac, Kryolan and similar brands</p>
                                </div>

                                <div className="addCart-btn">
                                    <FaMinus onClick={(e) => handleCartClickM(e, 2)} className='icon' />
                                    <h4>{goldCount}</h4>
                                    <FaPlus onClick={(e) => handleCartClick(e, 2)} className='icon' />
                                </div>

                            </div>
                            <div className="services-photos">
                                <div className="simg">
                                    <img src={ssimg4} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg3} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg2} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg1} alt='s' />
                                </div>
                            </div>
                        </div>
                        {/* endof cart  */}
                        <div className="service-item">
                            {/* offer secti  */}
                            <div className="item-offer">
                                <img alt='a' src={oImg} />
                            </div>
                            <p className='recom'>Recommended for friends of the bride</p>
                            <div className="title">
                                <h3>CC Diamond Package</h3>
                                <div className="title-price">
                                    <h3 className='actual-price'>9500 /person</h3>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.3rem'
                                    }}>
                                        <BiSolidOffer style={{
                                            fontSize: '1.5rem',
                                            color: 'red',
                                        }} />
                                        <h4 style={{
                                            fontStyle: 'italic',
                                            color: 'red',
                                            // marginTop: '-0.4rem',
                                        }}> 7999 / person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="service-content">
                                    <h4>Services:</h4>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <FaCheck className='icon' />
                                        <p>Makeup</p>
                                    </div>
                                    <div className="service-content-item">
                                        <RxCross2 />
                                        <p>Makeup</p>
                                    </div>
                                    <h4>Experience:</h4>
                                    <p>2 yrs+</p>
                                    <h4>Products:</h4>
                                    <p>Mac, Kryolan and similar brands</p>
                                </div>

                                <div className="addCart-btn">
                                    <FaMinus onClick={(e) => handleCartClickM(e, 3)} className='icon' />
                                    <h4>{diamondCount}</h4>
                                    <FaPlus onClick={(e) => handleCartClick(e, 3)} className='icon' />
                                </div>

                            </div>
                            <div className="services-photos">
                                <div className="simg">
                                    <img src={ssimg3} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg1} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg4} alt='s' />
                                </div>
                                <div className="simg">
                                    <img src={ssimg2} alt='s' />
                                </div>
                            </div>
                        </div>
                        {/* endof cart  */}
                    </div>



                    {/* shoping cart button nav */}
                    <div className={totalCount > 0 ? 'cart-nav serviceNavShow' : 'cart-nav'} >
                        <div className="count">
                            {/* <h3></h3> */}
                            <h4>{totalCount} Services</h4>
                        </div>
                        <div className="price">
                            <h3>Total Price : </h3>
                            <MdCurrencyRupee className='icon' />
                            <h3>{totalPrice}</h3>
                        </div>
                        <div className="btn">
                            <button>Continue</button>
                        </div>
                    </div>



                    {/*                                 service page work section  */}
                    <div className="work-section">
                        <h3>Out Latest Work</h3>
                        <div className="work-container">
                            <div className="workContainer-heading">

                            </div>
                            <div className="works">
                                {
                                    serviceWorks.map((item, index) =>
                                        <div key={index} className='workItem'>
                                            <div className="workItem-img">
                                                <img src={item.img} alt='a' />
                                            </div>
                                            <div className="workItem-content">
                                                <div className="name">
                                                    <h4>{item.name}</h4>
                                                    <p><FaImage className='icon' /> ({item.photos.length})</p>
                                                </div>
                                                <div className="place">
                                                    <p >{item.packeg} Package</p>
                                                    <p>Shot in {item.city}</p>
                                                </div>
                                                <p className='date'>Uploaded on {item.date}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-review">

                </div>
            </div>

        </div>
    )
}

export default ServicePage
