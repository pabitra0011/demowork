import React from 'react'
import './HomePopular.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// imgs
import popularImg1 from '../../../assetes/popularVenuesImgs/popularVenue.webp'
import popularImg2 from '../../../assetes/popularVenuesImgs/popularVenue2.webp'
import popularImg3 from '../../../assetes/popularVenuesImgs/popularVenue3.webp'
import popularImg4 from '../../../assetes/popularVenuesImgs/popularVenue4.webp'
import popularImg5 from '../../../assetes/popularVenuesImgs/popularVenue5.webp'
import popularImg6 from '../../../assetes/popularVenuesImgs/popularVenue.webp'
// import cityData from '../../../data/cityData';

import { useCityContext } from '../../../hooks/CityContext';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    arrowIconBackgroundColor: 'red',
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    arrowIconColor: 'red',
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const HomePopular = ({ cityData }) => {
  const { cityName, updateVenueType } = useCityContext();

  // console.log(cityData)



  return (


    <div className='universal-container popular-venue-search'>
      <h2>Popular Venue Searches</h2>
      <div className="popular-venue-search-container">
        <Carousel responsive={responsive}>

          <div onClick={() => { updateVenueType('hotel') }} className='popularVenue-Item'>
            <Link to={`/venuelist?venuetype=${encodeURIComponent('hotel')}`} >
              <div className='popularVenue-content'>
                <img src={popularImg1} alt='a' />
                <div className='about'>
                  <h3>4 Star & Above Hotels</h3>
                  <div className="subcities">
                    <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                    <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                    <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                    <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                  </div>
                  <a href='a'>View All...</a>
                </div>
              </div>
            </Link>
          </div>

          <div onClick={() => { updateVenueType('banquet') }} className='popularVenue-Item'>
            <Link to={`/venuelist?venuetype=${encodeURIComponent('banquet')}`} >
              <div className='popularVenue-content'>
                <img src={popularImg2} alt='a' />
                <div className='about'>
                  <h3>Banquet Halls</h3>
                  <div className="subcities">
                    <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                    <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                    <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                    <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                  </div>
                  <a href='a'>View All...</a>
                </div>
              </div>
            </Link>
          </div>
          <div onClick={() => { updateVenueType('farmhouse') }} className='popularVenue-Item'>
            <Link to={`/venuelist?venuetype=${encodeURIComponent('farmhouse')}`} >
              <div className='popularVenue-content'>
                <img src={popularImg3} alt='a' />
                <div className='about'>
                  <h3>Lawns/Farmhouse</h3>
                  <div className="subcities">
                    <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                    <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                    <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                    <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                  </div>
                  <a href='a'>View All...</a>
                </div>
              </div>
            </Link>
          </div>
          <div onClick={() => { updateVenueType('resort') }} className='popularVenue-Item'>
            <Link to={`/venuelist?venuetype=${encodeURIComponent('resort')}`} >
              <div className='popularVenue-content'>
                <img src={popularImg4} alt='a' />
                <div className='about'>
                  <h3>Resorts</h3>
                  <div className="subcities">
                    <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                    <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                    <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                    <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                  </div>
                  <a href='a'>View All...</a>
                </div>
              </div>
            </Link>
          </div>
          <div className='popularVenue-Item'>
            <div className='popularVenue-content'>
              <img src={popularImg5} alt='a' />
              <div className='about'>
                <h3>Heritage properties</h3>
                <div className="subcities">
                  <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                  <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                  <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                  <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                </div>
                <a href='a'>View All...</a>
              </div>
            </div>
          </div>
          <div className='popularVenue-Item'>
            <div className='popularVenue-content'>
              <img src={popularImg1} alt='a' />
              <div className='about'>
                <h3>Destination Wedding</h3>
                <div className="subcities">
                  <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                  <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                  <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                  <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                </div>
                <a href='a'>View All...</a>
              </div>
            </div>
          </div>
          <div className='popularVenue-Item'>
            <div className='popularVenue-content'>
              <img src={popularImg6} alt='a' />
              <div className='about'>
                <h3>Small Functions</h3>
                <div className="subcities">
                  <p>{cityName === 'All Cities' ? 'Banglore' : cityData.subcityName}</p>
                  <p>{cityName === 'All Cities' ? 'Hydrabad' : cityData.subcityName1}</p>
                  <p>{cityName === 'All Cities' ? 'Chennai' : cityData.subcityName2}</p>
                  <p>{cityName === 'All Cities' ? 'Kolkata' : cityData.subcityName3}</p>
                </div>
                <a href='a'>View All...</a>
              </div>
            </div>
          </div>
        </Carousel>;
      </div>
    </div>

  )
}

export default HomePopular
