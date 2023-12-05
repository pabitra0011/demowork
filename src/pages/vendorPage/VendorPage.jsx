import React, { useState } from 'react'
import './VendorPage.css'
import MainNav from '../../components/navbar/MainNav/MainNav'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

import { useCityContext } from '../../hooks/CityContext';

import Image1 from '../../assetes/vendorPage/vendorpageImg1.webp'
import Image2 from '../../assetes/vendorPage/vendorPageimg2.webp'
import Image3 from '../../assetes/vendorPage/Vendorpageimg3.webp'
import Image4 from '../../assetes/homeCategoriesImgs/homeCategories.webp'
import Image5 from '../../assetes/homeCategoriesImgs/homeCategories4.webp'
import Image6 from '../../assetes/homeCategoriesImgs/homeCategories3.webp'




import LatestReviews from '../../components/latest reviews/LatestReviews'
import FeaturedVendors from '../../components/homePage Components/FeaturedVendors/FeaturedVendors'
import HomeStories from '../../components/homePage Components/Wedding Stories/HomeStories'
import { Link } from 'react-router-dom';

// data
const data = [
    {
        img: Image1,
        name: 'Venue',
        desc: 'Banquet Halls,Lawns/Farmhouse',
        list: [
            "Lawns/Farmhouse", 'Resort', 'Banquet Halls', 'Small Function/Party Halls', 'Kalana Mandapan', '4 star & above hotels'
        ]
    },
    {
        img: Image2,
        name: 'Photographer',
        desc: 'Photographer',
        list: [
            'Photographer'
        ]
    },
    {
        img: Image3,
        name: 'Makup',
        desc: 'Bridal Makeup, Family Makeup',
        list: [
            'Bridal Makeup', 'Family Makeup'
        ]
    },
    {
        img: Image4,
        name: 'Pre Wedding Shoot',
        desc: 'Pre wedding photographer',
        list: [
            'Pre Wedding Photographer'
        ]
    },
    {
        img: Image5,
        name: 'Planning & Decor',
        desc: 'Wedding planners, Decorators,Small...',
        list: [
            'wedding planner', 'Small Function', 'Decorators'
        ]
    },
    {
        img: Image6,
        name: 'Jewellery & Accessories',
        desc: 'Jewellery & Accessories',
        list: [
            'Flower jewellery', 'Bridal Jewellery', 'Accessories', 'Jewellery'
        ]
    },
    {
        img: Image6,
        name: 'Groom Wear',
        desc: 'Sherwani,Wedding suits / Tuxes',
        list: [
            'Wedding Suits ', 'Tuxes', 'Sherwani', 'Sherwani On Rent'
        ]
    },
    {
        img: Image6,
        name: 'Food',
        desc: 'Catering Services, Cake, Chatt & Food',
        list: [
            'Cake', 'Bartenders', 'Catering Service', 'Chatt & Food Stalls'
        ]
    }

]


const VendorPage = () => {
    const { venueType, updateVenueType } = useCityContext();

    const colors = ['#fcd6ff', '#e0ffd6', 'azure', '#fff1e3', '#c9ffd5', '#ffdaf2', '#fde1df', '#cffdfd'];

    const [click, setClick] = useState(null);

    const handleClick = (i) => {
        if (click === i) {
            setClick(null);
        } else {
            setClick(i)
        }
    }


    return (

        <div >
            <MainNav />

            <div className='main-vendorPage universal-container'>
                <h3>Wedding Categories</h3>
                <div className="vendorPage-catefories-container">
                    {/* single categories item  */}
                    {
                        data.map((item, i) =>
                            <div key={i} className="vendorPage-categories-ItemContent"
                                onClick={() => handleClick(i)} >
                                <div className="vendorPage-categories-item"
                                    style={{ backgroundColor: colors[i] }}>
                                    <div className="text">
                                        <div className="text-heading">
                                            <h3>{item.name}</h3>
                                            {click === i ? <FaAngleUp /> : <FaAngleDown />}
                                        </div>
                                        <p> {item.desc}</p>
                                    </div>
                                    <div className="img">
                                        <img src={item.img} alt='e' />
                                    </div>
                                </div>
                                <div className={click === i ? 'categories-item-content active' : 'categories-item-content'}>
                                    {
                                        item.list.map((liItem, index) => (
                                            <li key={index} onClick={() => { updateVenueType(liItem) }}>
                                                <Link to={`/venuelist`}>
                                                    {liItem}</Link>
                                            </li>
                                        ))

                                    }
                                </div>
                            </div>
                        )
                    }
                    {/* end of item  */}

                </div>
            </div>

            <FeaturedVendors />
            <HomeStories />
            <LatestReviews />
        </div >
    )
}

export default VendorPage
