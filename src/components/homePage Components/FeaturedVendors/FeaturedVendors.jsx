import React from 'react'
import './FeaturedVendor.css';



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import data 
import fvData from '../../../data/featuredVendorsData'



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const FeaturedVendors = () => {



    return (
        <div className='universal-container featured-vendors-section'>
            <h2>Featured Vendors</h2>
            <div className="featured-vendors-container">
                <Carousel responsive={responsive}>
                    {
                        fvData.map((item, index) =>
                            <div key={index} className='featured-vendors-item'>
                                <div className="featured-vendors-item-img">
                                    <img src={item.img} alt='f' />
                                </div>
                                <div className="featured-vendors-item-desc">
                                    <h3>{item.name}</h3>
                                    <p>{item.type}, {item.city}</p>
                                </div>
                                <div className="featured-vendors-item-price">
                                    <h3>{item.price}</h3>
                                </div>
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default FeaturedVendors
