import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom';

// icons 
// import { AiOutlineSearch } from "react-icons/ai";
// imgs
import brandLogo from '../../../assetes/brand logo.png'
import LogIn from '../../../pages/login/LogIn'

// icons 
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { AiFillCrown } from "react-icons/ai";
import { GiHeartWings } from "react-icons/gi";

import { useCityContext } from '../../../hooks/CityContext';

import NcityData from '../../../data/cityData';


const MainNav = () => {
    const { cityName, updateCity, updateVenueType, updateVendorType } = useCityContext();
    // stay hompage for smae city whe click logo
    const cityData = NcityData.filter(item => item.hasOwnProperty('name') && item.name.includes(cityName));
    // console.log(cityName)


    return (
        <div className='mainNav'>
            <Link to={`/?name=${encodeURIComponent(cityData[0].name)}&img=${encodeURIComponent(cityData[0].img)}&subcityName=${encodeURIComponent(cityData[0].subcityName)}&subcityName1=${encodeURIComponent(cityData[0].subcityName1)}&subcityName2=${encodeURIComponent(cityData[0].subcityName2)}&subcityName3=${encodeURIComponent(cityData[0].subcityName3)}`}>
                {/* onClick={() => { updateCity('All Cities') }} */}
                <div className='mainNav-logo'>
                    <GiHeartWings className='icon' />
                    <h2 style={{
                        color: 'rgb(62, 242, 255)',
                        fontWeight: 'bolder',
                        fontFamily: 'cursive'
                    }}>CoupleCanvas </h2>
                </div>
            </Link>
            <div className='mainNav-list'>
                {/* <ul> */}
                <div className='main-menu' ><Link onClick={() => { updateVenueType('venues') }} style={{ color: '#fff', fontSize: '1.3rem' }} to='/venuelist'>Venues</Link>
                    <div className='dropdown-container'>
                        <div className="dropdown-menu">
                            <div className='dropdown-row'>
                                <h3>By Type</h3>
                                <li onClick={() => { updateVenueType('hotel') }}><Link to={`/venuelist?venuetype=${encodeURIComponent('hotel')}`}>4 star & above hotels</Link></li>
                                <li onClick={() => { updateVenueType('banquet') }}><Link to={`/venuelist?venuetype=${encodeURIComponent('banquet')}`}>Banquet Halls</Link></li>
                                <li onClick={() => { updateVenueType('farmhouse') }}><Link to={`/venuelist?venuetype=${encodeURIComponent('farmhouse')}`}>Farmhouses</Link></li>
                                <li onClick={() => { updateVenueType('resort') }}><Link to={`/venuelist?venuetype=${encodeURIComponent('none')}`}>Resorts</Link></li>
                                <li onClick={() => { updateVenueType('venues') }}><Link to={`/venuelist?venuetype=${encodeURIComponent('resort')}`}>View  All</Link></li>


                                {/* <li><a href='ab'>view All</a></li> */}
                            </div>
                            <div className='dropdown-row'>
                                <h3>By Locality </h3>
                                <li><a href='a'>{cityData[0].subcityName}</a></li>
                                <li><a href='a'>{cityData[0].subcityName1}</a></li>
                                <li><a href='a'>{cityData[0].subcityName2}</a></li>
                                <li><a href='a'>{cityData[0].subcityName3}</a></li>
                                <li><a href='a'>More..</a></li>
                            </div>
                        </div>
                    </div>
                </div>
                <li className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }} to='/vendors'>Vendors</Link>
                    <div className="dropdown-container">
                        <div className="dropdown-menu">
                            <div className='dropdown-row'>
                                <div>
                                    <h3>Photographer</h3>
                                    <li onClick={() => { updateVenueType('photo') }}>
                                        <Link to={`/venuelist`}>
                                            Photographers</Link>
                                    </li>
                                </div>
                                <div>
                                    <h3>Makeup</h3>
                                    <li><a href='a'>Bridal Makeup</a></li>
                                    <li><a href='a'>Family Makeup</a></li>
                                </div>
                                <div>
                                    <h3>Pre Wedding Shoot</h3>
                                    <li><a href='a'>Pre Wedding Photographer</a></li>
                                </div>
                                <div>
                                    <h3>Planning & Decor</h3>
                                    <li><a href='a'>Wedding Planner</a></li>
                                    <li><a href='a'>Decorators</a></li>
                                    <li><a href='a'>small function Decorators</a></li>
                                </div>
                            </div>
                            <div className='dropdown-row'>
                                <div>
                                    <h3>Bridal Wear</h3>
                                    <li><a href='a'>Bridal Lehengas</a></li>
                                    <li><a href='a'>Kanjeevaram/Silk Saree</a></li>
                                    <li><a href='a'>Cocktain Gowns</a></li>
                                    <li><a href='a'>Trousseau Sarees</a></li>
                                    <li><a href='a'>View All Bridal Wear</a></li>
                                </div>
                                <div>
                                    <h3>Groom Wear</h3>
                                    <li><a href='a'>Sherwani</a></li>
                                    <li><a href='a'>Wedding Suits</a></li>
                                    <li><a href='a'>Jeans</a></li>
                                    <li><a href='a'>View All Groom Wear</a></li>
                                </div>
                                <div>
                                    <h3>Mehndi</h3>
                                    <li><a href='a'>Mehndi Artist</a></li>
                                </div>
                            </div>
                            <div className='dropdown-row'>
                                <div>
                                    <h3>Jewellery & Accessories</h3>
                                    <li><a href='a'>Jewellery</a></li>
                                    <li><a href='a'>Flower Jewellery</a></li>
                                    <li><a href='a'>Bridal Jewellery on rent</a></li>
                                    <li><a href='a'>Accessories</a></li>
                                    <li><a href='a'>View All Accessories</a></li>
                                </div>
                                <div>
                                    <h3>Invites & Gifts</h3>
                                    <li><a href='a'>Invitations</a></li>
                                    <li><a href='a'>Favors</a></li>
                                    <li><a href='a'>Invitation Gifts</a></li>
                                    <li><a href='a'>Trousseau Packers</a></li>
                                    <li><a href='a'>View All Invitation & Gifts</a></li>
                                </div>

                            </div>
                            <div className='dropdown-row'>
                                <div>
                                    <h3>Foods</h3>
                                    <li><a href='a'>Catering Service</a></li>
                                    <li><a href='a'>Cake</a></li>
                                    <li><a href='a'>Food stalls</a></li>
                                </div>
                                <div>
                                    <h3>Pandits</h3>
                                    <li><a href='a'>Wedding Pandits</a></li>
                                </div>
                                <div>
                                    <h3>Honeymoon</h3>
                                    <li><a href='a'>Honeymoon Packeg</a></li>
                                </div>
                                <div>
                                    <h3>Musics & Dance</h3>
                                    <li><a href='a'>DJs</a></li>
                                    <li><a href='a'>Sangeet Choreographer</a></li>
                                    <li><a href='a'>Wedding Entertainment</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }} to='/realwedding'>Real Wedding</Link>
                    <div className="dropdown-container">
                        <div className="dropdown-menu">
                            <div className='dropdown-row'>
                                <h3>By City</h3>
                                <li><a href='a'>Mumbai</a></li>
                                <li><a href='a'>Kolkta</a></li>
                                <li><a href='a'>Banglore</a></li>
                                <li><a href='a'>Hydrabad</a></li>
                                <li><a href='a'>Chennai</a></li>
                                <li><a href='a'>Others</a></li>
                            </div>
                            <div className='dropdown-row'>
                                <h3>By Culture</h3>
                                <li><a href='a'>Bengali</a></li>
                                <li><a href='a'>Punjabi/Sikh</a></li>
                                <li><a href='a'>Telegu</a></li>
                                <li><a href='a'>Gujrati</a></li>
                                <li><a href='a'>Marwari</a></li>
                                <li><a href='a'>Others</a></li>
                            </div>
                            <div className='dropdown-row'>
                                <h3>By Theme</h3>
                                <li><a href='a'>Destination Wedding</a></li>
                                <li><a href='a'>Grand & Luxurious</a></li>
                                <li><a href='a'>Intimate & Minimalist</a></li>
                                <li><a href='a'>Modern & Stylish</a></li>
                                <li><a href='a'>International</a></li>
                                <li><a href='a'>Others</a></li>
                            </div>
                        </div>
                    </div>
                </li>
                <div className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }} to='/service'>Services</Link>
                    <div className="dropdown-container">
                        <div className="dropdown-menu">
                            <div className="dropdown-row">
                                <li style={{ textAlign: 'center' }}> <Link to='/service'>Home Services Avaliable</Link> </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }} to='/shop'>Shop</Link>
                    <div className="dropdown-container">
                        <div className="dropdown-menu">
                            <div className='dropdown-row'>
                                <h3>By Type</h3>
                                <li><a href='a'>Bridal Lehenga</a></li>
                                <li><a href='a'>Lehenga</a></li>
                                <li><a href='a'>Sarees</a></li>
                                <li><a href='a'>Gowns</a></li>
                                <li><a href='a'>Sharara</a></li>
                                <li><a href='a'>Anarkali</a></li>
                                <li><a href='a'>Drape Sarees</a></li>
                                <li><a href='a'>Indo Western</a></li>
                                <li><a href='a'>View More</a></li>
                            </div>
                            <div className='dropdown-row'>
                                <h3>By Occasion</h3>
                                <li><a href='a'>Engagement</a></li>
                                <li><a href='a'>Haldi</a></li>
                                <li><a href='a'>Mehendi</a></li>
                                <li><a href='a'>Cocktail</a></li>
                                <li><a href='a'>Wedding</a></li>
                                <li><a href='a'>Reception</a></li>
                                <li><a href='a'>Sangeet</a></li>
                            </div>
                            <div className='dropdown-row'>
                                <h3>Most Popular</h3>
                                <li><a href='a'>Engagement Lehenga</a></li>
                                <li><a href='a'>Cocktail Sarees</a></li>
                                <li><a href='a'>Wedding Sarees</a></li>
                                <li><a href='a'>Red Bridal Lehenga</a></li>
                                <li><a href='a'>International</a></li>
                                <li><a href='a'>View More</a></li>
                            </div>
                        </div>
                    </div>
                </div>
                <li className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }} to='/blog'>Blog</Link> </li>

                <li className='main-menu'><Link style={{ color: '#fff', fontSize: '1.3rem' }}>E-Invites</Link >
                    <div className='dropdown-container'>
                        <div className="dropdown-menu">
                            <div>
                                <h3>Wedding Invitation Maker</h3>
                                <li><a href='a'>Wedding Card Designs</a></li>
                                <li><a href='a'>Invitation Video Templates</a></li>
                                <li><a href='a'>Save The Data Tamplates</a></li>
                            </div>
                        </div>
                    </div>
                </li>
                {/* </ul> */}
            </div>
            {/* <div className='mainNav-login'>
                <div className='navbar-login-btn'>
                    <button>
                        <Link to='/login'>Log In</Link>
                    </button>
                </div>
            </div> */}
            <div className="nav-socials">
                <FaFacebook className='fb icon' />
                <FaFacebookMessenger className='icon mes' />
                <FaInstagram className='ins icon' />
                <FaPinterest className='pin icon' />
                <FaTwitter className='tw icon' />
            </div>
        </div>
    )
}

export default MainNav
