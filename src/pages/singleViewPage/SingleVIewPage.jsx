import React from 'react'
import MainNav from '../../components/navbar/MainNav/MainNav'
import './SingleViewPage.css';
import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { FaLocationDot, FaStar, FaImage, FaHeart, FaShareNodes, FaFilePen, FaPhone, FaEnvelope, FaFlag, FaIndianRupeeSign } from "react-icons/fa6";

// imgs 
import img from '../../assetes/singleitem view/R.jpeg'
import areaIcon from '../../assetes/singleitem view/area icon/indoor&outdoor.png'
// photos 
import photo1 from '../../assetes/singleitem view/photos/photo1.jpg'
import photo2 from '../../assetes/singleitem view/photos/photo2.jpg'
import photo3 from '../../assetes/singleitem view/photos/photo3.jpg'
import photo4 from '../../assetes/singleitem view/photos/photo4.jpg'




const o = {
    img: '',
    name: 'The Lalit Mumbai',
    location: 'Andheri East, Mmbai',
    rating: '4.2',
    vegPrice: '4000',
    nonvegPrice: '2222',

    about: 'The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) containing digital images, videos, and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger applications (usually the term is used when on mobile devices).',
    about2: 'Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.'

}
const portfolio = [
    photo1, photo2, photo3, photo4, photo1, photo4, photo2, photo3, photo4, photo1, photo3
]




const SingleVIewPage = () => {
    // states ///////////////////////
    const [fixNav, setFixNav] = useState();


    const { i } = useParams();
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const itemDataparam = params.get('viewitem');
    const itemData = JSON.parse(decodeURIComponent(itemDataparam));
    console.log(itemData)
    if (!itemData) {
        return (
            <>
                <MainNav />
                <div style={{ color: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', marginTop: '5rem' }}>
                    <h1>Error! 505</h1>
                    <h3>No Page Found !!!</h3>
                </div>
            </>
        )
    }
    console.log(itemData)
    // for fixed item view nab ...........////
    const setFixed = () => {
        if (window.scrollY >= 650) {
            setFixNav(true)
        } else {
            setFixNav(false);
        }
    }
    window.addEventListener("scroll", setFixed);



    const reviews = [
        {
            name: 'Emma Stone',
            img: 'https://1.bp.blogspot.com/-FrmNSdOCzG4/V3s7W2RDhPI/AAAAAAAAFQc/uQCtxgSlQCEHUHeapuNGksr6e81TAGqCwCLcB/s1600/Actress%2BSurabhi%2BLatest%2BHot%2BPhotos%2BIn%2BWhite%2BDress%2B%25288%2529.jpg',
            rating: '5.0',
            date: '22.09.2023',
            text: 'I recently visited Effotel b sadfjdf dslkfj dkfjd lfjdklfjds fjldskjfldkjfd fkdjfldkjfldskfj ldkfjldk jf ldskfjldjkfldkjfldj sldfjdf dkfjd sfjdkf dkfjd kfjdkfj dkfjdkjfdkjfldkjfldksfj dkfjkldlksdjflksdfjlksdjf lsdfkjlsdfkjl'
        },
        {
            name: 'Amber Heard',
            img: 'https://i.pinimg.com/originals/7e/75/b7/7e75b781e67932cb8c721d0484af3359.jpg',
            rating: '4.2',
            date: '22.09.2021',
            text: 'I recently visited Effotel b sadfjdf dslkfj dkfjd lfjdklfjds fjldskjfldkjfd fkdjfldkjfldskfj ldkfjldk jf ldskfjldjkfldkjfldj'
        },
        {
            name: 'Megan Fox',
            img: 'https://th.bing.com/th/id/R.c77c9556f5ce518454953c6d74b242d5?rik=5NJE08FTkNaYrw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-kZs0EAK_8mA%2fVo6o6vu0f-I%2fAAAAAAAAEfY%2fUd8olnrux0c%2fs1600%2fTamil-Actress-Keerthy-Suresh-New-Cute-Stills-14.jpg&ehk=w1ZqWhpTvVI0EsEBIDXLLhtCWH3ojRLe7AY3LmIw4go%3d&risl=&pid=ImgRaw&r=0',
            rating: '3.7',
            date: '22.09.2021',
            text: 'I recently visited Effotel b sadfjdf dslkfj dkfjd lfjdklfjds fjldskjfldkjfd fkdjfldkjfldskfj ldkfjldk jf ldskfjldjkfldkjfldj'
        },
        {
            name: 'Alexandra Daddario',
            img: 'https://th.bing.com/th/id/OIP.4YIoiuo13g1Db6RU6Fgl4QHaLL?w=715&h=1080&rs=1&pid=ImgDetMain',
            rating: '3.0',
            date: '22.09.2021',
            text: 'I recently visited Effotel b sadfjdf dslkfj dkfjd lfjdklfjds fjldskjfldkjfd fkdjfldkjfldskfj ldkfjldk jf ldskfjldjkfldkjfldj'
        },
        {
            name: 'Alexandra Daddario',
            img: 'https://i.pinimg.com/originals/e4/71/af/e471af69da82e2cf129cb3d66e8d0cd1.jpg',
            rating: '2.0',
            date: '22.09.2021',
            text: 'I recently visited Effotel b sadfjdf dslkfj dkfjd lfjdklfjds fjldskjfldkjfd fkdjfldkjfldskfj ldkfjldk jf ldskfjldjkfldkjfldj'
        }
    ]
    const outdoorArea = [
        {
            name: 'Lawn Area',
            capacity: '500 seating'
        },
        {
            name: 'Poolside',
            capacity: '80 setting | 200 floating'
        },
    ]
    const indoorArea = [
        {
            name: 'Banquet Hall',
            capacity: '120 setting | 250 floating'
        },
        {
            name: 'Banquet Hall 2',
            capacity: '100 setting | 200 floating'
        },
    ]

    const Pricearr = [
        {
            price: '₹ 3000',
            forPrice: 'per room'
        },
        {
            price: '₹ 400',
            forPrice: 'per veg plate'
        },
        {
            price: '₹ 900',
            forPrice: 'per nonVeg plate'
        }

    ]
    const faqs = [
        {
            que: 'Does We allow Small size gatherings ?',
            ans: 'Less than 50 Pax allowed'
        },
        {
            que: 'Is outside alchol permitted at Goldfinch Retreat?',
            ans: 'In house alchol available , Outside alcohol permitted'
        },
        {
            que: 'What is Goldfinch Retreat Policy on catering?',
            ans: 'Inhouse and Outside Catering allowed in our serveice policy.'
        },
        {
            que: 'What is Goldfinch Retreat policy on DJ?',
            ans: 'In house DJ available, Outside DJ permitted'
        },
        {
            que: 'Is outside alchol permitted at Goldfinch Retreat?',
            ans: 'In house alchol available , Outside alcohol permitted'
        }
    ]




    return (

        <div className='singleViewPage-main'>
            <MainNav />

            <div className={fixNav ? 'itemViewNav fixTop' : 'itemViewNav'}>
                <div className="itemNav-container">
                    <div className="col1">
                        <li><a href='#banquet'>Banquets</a> </li>
                        <li><a href='#photo'>Projects</a> </li>
                        <li><a href='#about'>About</a> </li>
                        <li><a href='#review'>Reviews</a> </li>
                        <li><a href='#faq'>FAQ's</a> </li>
                    </div>
                    <div className="col2">
                        <div className="col2-item">
                            <FaHeart className='icon' />
                            <p>Shortlist</p>
                        </div>
                        <div className="col2-item">
                            <FaShareNodes className='icon' />
                            <p>Share</p>
                        </div>
                        <div style={{ color: 'red', alignItems: 'center' }} className="col2-item">
                            <FaIndianRupeeSign style={{ color: 'red' }} className='icon' />
                            <p style={{ fontSize: '21px' }}>
                                {itemData.price[0].split('-')[1]}</p>
                        </div>
                        <div className="col2-item">
                            {/* <FaRupeeSign /> */}
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="itemView-section universal-container">

                <div className="itemView-details-container">

                    <div className="row1">
                        <div className="img-section">
                            <img src={itemData.img} alt='f' />
                            <div className="itemView-details-section">

                                <div className="name-address-section">
                                    <div className="name-add">
                                        <h3>{itemData.name}</h3>
                                        <div className="location">
                                            <FaLocationDot className='loc-icon' />
                                            <p>{itemData.city} </p>
                                        </div>
                                        <p className='sublocation'>{itemData.location}</p>
                                        <button className='itemView-contact-btn'><FaPhone className='itemVIew-contact-icon' /> Contact</button>
                                    </div>
                                    <div className="rating-section">
                                        <div className="rating">
                                            <FaStar className='icon' />
                                            <p>{itemData.rating} </p>
                                        </div>
                                        <div className="review">
                                            <p>{itemData.reviews.length} reviews</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="accecibility-section">
                                    <div className="accecibility-menu photos">
                                        <FaImage className='icon' />
                                        <p>{itemData.photos.length} Photos</p>
                                    </div>
                                    <div className="accecibility-menu Shortlist">
                                        <FaHeart className='icon' />
                                        <p>Shortlist</p>
                                    </div>
                                    <div className="accecibility-menu WriteReview">
                                        <FaFilePen className='icon' />
                                        <p>Write a Review</p>
                                    </div>
                                    <div className="accecibilit-menu Share">
                                        <FaShareNodes className='icon' />
                                        <p>Share</p>
                                    </div>
                                </div>
                            </div>
                            {/* area section ...................................... */}

                            <div id='banquet' className="area-available-section">
                                <h3>Areas Available ({itemData.areas.length}) </h3>
                                <hr />
                                <div className="area-container">
                                    <div className="indoor-area">
                                        {/* <div className="area-item"> */}
                                        {
                                            indoorArea.map(areaItem => (
                                                <div className='areaItem' key={areaItem.name}>
                                                    <div className="areaHeading">
                                                        <img src={areaIcon} alt='r' />
                                                        <p>Indoor</p>
                                                    </div>
                                                    <div className="area-capacity">
                                                        <p> {areaItem.capacity} </p>
                                                        <p>{areaItem.name}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {/* </div> */}
                                    </div>
                                    <div className="outdoor-area">
                                        {
                                            outdoorArea.map(areaItem => (
                                                <div className='areaItem' key={areaItem.name}>
                                                    <div className="areaHeading">
                                                        <img src={areaIcon} alt='r' />
                                                        <p>Outdoor</p>
                                                    </div>
                                                    <div className="area-capacity">
                                                        <p> {areaItem.capacity} </p>
                                                        <p>{areaItem.name}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* photos and videos about item ...............................*/}
                            <div id='photo' className="portfolio-section">
                                <div className="portfolio-tabs">
                                    <div className="tab active-tab">PORTFOLIO ({portfolio.length}) </div>
                                    <div className="tab">PHOTOS ({portfolio.length})</div>
                                    <div className="tab">VIDEOS ({portfolio.length})</div>
                                </div>
                                <hr />
                                <div className="portfolio-container">
                                    {/* <div className="portfolio-item"> */}
                                    {
                                        portfolio.map(item => (
                                            <div className='portfolioItem' key={img}>
                                                <img src={item} alt='a' />
                                            </div>
                                        ))
                                    }
                                    {/* </div> */}
                                </div>
                                {/* <button >View All</button> */}
                            </div>
                        </div>
                    </div>





                    <div className="row2">
                        <div className="contact-details-section">
                            <div className="about-price-section">
                                <h3>Starting Price</h3>
                                <hr className='price-seperator' />
                                {
                                    itemData.price.map((itemPrice, i) => (
                                        <div className='price1' key={i.price}>
                                            <h4><FaIndianRupeeSign style={{ fontSize: '1.2rem' }} />  {itemPrice.split('-')[1]}</h4>
                                            <p>{itemPrice.split('-')[0]} </p>
                                            {/* <hr /> */}
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="contact-details-btns">
                                <button className='message-btn'> <FaEnvelope className='icon' /> Sent Message</button>
                                <button className='contact-btn'> <FaPhone className='icon' />View Contact</button>
                            </div>
                            {/* check avability from ................. */}
                            <div className="availability-check-section">
                                <h3>😍Hi, {itemData.name} 🤩</h3>
                                <div className="check-input">
                                    <div>
                                        <input type='text' placeholder='Enter Your Name*' />
                                        <input type='text' placeholder='Enter Mobile Number' />
                                        <input type='text' placeholder='Function type' />
                                    </div>
                                    <div>
                                        <input type='email' placeholder='Enter Email' />
                                        <input type='date' />
                                        <textarea placeholder='Any query?' />
                                    </div>
                                </div>
                                <div className="check-btn">
                                    <button>Check Availaility & Price</button>
                                </div>
                                <p>Complete information ensures you get accurate and timely vendor responses</p>
                            </div>
                            <div className="report-section">
                                <FaFlag className="icon" />
                                <p>Report Inaccurate Info</p>
                            </div>
                        </div>

                    </div>
                </div>



                {/* about the veneue or any vendors .................. */}
                <div id='about' className="viewItem-about-section">
                    <h3>About {itemData.name} </h3>
                    <hr />
                    <div className="about-txt">
                        <p> {o.about}</p>
                        <p>{o.about2}</p>
                    </div>
                    <hr />

                </div>

                {/* vendor review section ................................ */}
                <div id='' className="viewItem-reviews-section">
                    <h3>Reviews for {itemData.name} ({reviews.length}) </h3>
                    <hr />
                    <div className="review-input-section">
                        <h3>Review The {itemData.name}</h3>
                        <div className="rating-input">
                            <h4>Rate Vendor out of 5</h4>
                            <input type='text' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                        </div>
                        <div className="text-input">
                            <textarea type='text' placeholder='Tell us about you experience*' />
                        </div>
                        <div className="item-review-btns">
                            <button className='addPhoto-bnt'>Add Photos</button>
                            <button className='reviewSubmit-btn'>Submit Review</button>
                        </div>
                    </div>
                    <hr />

                    {/* all review list ...................... */}
                    {/* <h3>What our Client Say</h3> */}
                    <div id='review' className="item-reviewList">
                        {
                            reviews.map(item => (
                                <div className='item' key={item.name}>
                                    <div className="user-reviewInfo-container">
                                        <div className="user-photo">
                                            <img src={item.img} alt='f' />
                                        </div>
                                        <div className="user-details">
                                            <div className='user-name' style={{}}>
                                                <h4>{item.name}</h4>
                                                <div style={{
                                                    backgroundColor:
                                                        item.rating >= 4
                                                            ? 'green'
                                                            : item.rating >= 3.5
                                                                ? '#53a436'
                                                                : item.rating >= 2.2
                                                                    ? '#ff9797'
                                                                    : 'red'
                                                }} className="user-rating">
                                                    <FaStar className='icon' />
                                                    <p>{item.rating}</p>
                                                </div>
                                            </div>
                                            <p>{item.date}</p>
                                        </div>

                                    </div>
                                    <div className="user-review-text">
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* faq section ............................... */}

                <div id='faq' className="viewItem-faq-section">
                    <h3>FAQ about {itemData.name}</h3>
                    <div className="faq-container">
                        {
                            faqs.map(item => (
                                <div className='FaqItem' key={item.ans}>
                                    <h4>{item.que}</h4>
                                    <p>{item.ans}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleVIewPage
