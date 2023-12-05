import React, { useState } from 'react'
import './HomeFront.css';
import { AiFillCaretDown, AiFillCaretUp, AiFillShop, AiOutlineSearch } from "react-icons/ai";
import { TbHomeSearch } from "react-icons/tb";

// use context 
import { useCityContext } from '../../../hooks/CityContext';
import frontImg from '../../../assetes/wedding img/home front.webp'
import { Link } from 'react-router-dom';




const HomeFront = ({ cityData }) => {
    // console.log(cityData)
    const { cityName, venueType, updateVenueType } = useCityContext()
    // console.log(cityName)

    // for toggleing vendor list
    const [isVendorListOpen, setIsVendorListOpen] = useState(false);
    const showVendorList = () => {
        setIsVendorListOpen(!isVendorListOpen);
    }

    const { name, img } = cityData;
    return (
        <div className='homeTitle'>
            <div className="homeFront-img">
                <img src={cityName === 'All Cities' ? frontImg : img} alt='f' />
            </div>
            <div className="homeTitle-content">
                {cityName === 'All Cities' ? <h1>Plan a Wedding In Your City</h1> : <h1>Plan a {name} Wedding</h1>}
                <div onClick={showVendorList} className="vendor-find-box">
                    <AiFillShop className='icon' />
                    {cityName === 'All Cities' ? <p>Find Vendors In Your City</p> : <p><TbHomeSearch style={{ fontSize: '22px', paddingTop: '.1rem' }} /> Find Vendors in {cityData.name}</p>}
                    <AiFillCaretDown className='icon2' />
                </div>

                {/* dropdown content  */}
                {isVendorListOpen && (
                    <div className="homeTitle-vendorList">
                        <div className="vendorList">
                            <div className='vendorList-row'>
                                <h3>Venues</h3>
                                <li onClick={() => { updateVenueType('banquet') }} >
                                    <Link to='/venuelist'>Banquet Halls</Link>
                                </li>
                                <li onClick={() => { updateVenueType('farmhouse') }} >
                                    <Link to='/venuelist'>FarmHouses</Link>
                                </li>
                                <li onClick={() => { updateVenueType('resort') }} >
                                    <Link to='/venuelist'>Resorts</Link>
                                </li>
                                <li><a href='ab'>Party Hall</a></li>
                                <li><a href='ab'>venue and concierge services</a></li>
                                <li><a href='ab'>Destination Wedding</a></li>
                                <li><a href='ab'>4 star & above hotels</a></li>
                                <li><a href='ab'>view All</a></li>
                            </div>
                            <div className='vendorList-row'>
                                <div>
                                    <h3>Photographer</h3>
                                    <li onClick={() => { updateVenueType('photo') }} >
                                        <Link to='/venuelist'>Photographer</Link>
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
                            <div className='vendorList-row'>
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
                            <div className='vendorList-row'>
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
                                <div>
                                    <h3>Musics & Dance</h3>
                                    <li><a href='a'>DJs</a></li>
                                    <li><a href='a'>Sangeet Choreographer</a></li>
                                    <li><a href='a'>Wedding Entertainment</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeFront
