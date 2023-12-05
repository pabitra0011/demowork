import React from 'react'
import './PopularSearch.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// imgs
import pSearchImg1 from '../../../assetes/popularSearchImgs/popularSearch1.webp'
import pSearchImg2 from '../../../assetes/popularSearchImgs/popularSearch2.webp'
import pSearchImg3 from '../../../assetes/popularSearchImgs/popularSearch3.webp'
import pSearchImg4 from '../../../assetes/popularSearchImgs/popularSearch4.webp'
import pSearchImg5 from '../../../assetes/popularSearchImgs/popularSearch5.webp'
import pSearchImg6 from '../../../assetes/popularSearchImgs/popularSearch6.webp'
import pSearchImg7 from '../../../assetes/popularSearchImgs/popularSearch7.webp'
import { Link } from 'react-router-dom';

import { useCityContext } from '../../../hooks/CityContext';

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


const PopularSearch = ({ cityData }) => {
    const city = cityData.name;
    const { updateVenueType } = useCityContext();


    return (
        <div className=' universal-container popularSearch-section'>
            <h2>Popular Vendors Search </h2>
            <Carousel className='popularSearch-carousel' responsive={responsive}>
                {/* <div className="popularSearch-container"> */}
                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg1} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Bridal Waer in {city}</p>
                    </div>
                </div>
                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg2} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Bridal Makeup in {city}</p>
                    </div>
                </div>

                <div onClick={() => { updateVenueType('photo') }} className="popularSearch-Item">
                    <Link to='/venuelist'>
                        <div className="popularSearch-Item-img">
                            <img src={pSearchImg3} alt='a' />
                        </div>
                    </Link>
                    <div className="popularSearch-desc">
                        <p>Photographers in {city}</p>
                    </div>
                </div>

                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg4} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Invitations in {city}</p>
                    </div>
                </div>
                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg5} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Groom wear in {city}</p>
                    </div>
                </div>
                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg6} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Mehendi Artist in {city}</p>
                    </div>
                </div>
                <div className="popularSearch-Item">
                    <div className="popularSearch-Item-img">
                        <img src={pSearchImg7} alt='a' />
                    </div>
                    <div className="popularSearch-desc">
                        <p>Decorators in {city}</p>
                    </div>
                </div>
                {/* </div> */}
            </Carousel>
        </div >
    )
}

export default PopularSearch
