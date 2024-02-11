import React, { useContext, useState } from 'react'
import './View.css'
import { Link } from 'react-router-dom';
import { CityContext, useCityContext } from '../../hooks/CityContext';

import ViewNav from '../navbar/viewNav/ViewNav';

import { FaStar, FaLocationDot, FaHouse, FaSistrix } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import genieImg from '../../assetes/viewpageImgs/genie_icon.svg'

import { BsBagHeartFill } from "react-icons/bs";


import Img1 from '../../assetes/viewpageImgs/venueitemimg1.webp'
// data . ..........................
import AllData from '../../data/VenuesList'
import photographVendors from '../../data/photoVendors';
import ViewDesc from '../venueViewDesc/ViewDesc';




const ViewPage = () => {
  // pagination 
  const [currentPage, setCurrentPage] = useState(1);

  // const { cityName, venueType, vendorType } = useContext(CityContext)
  const { cityName, venueType, vendorType } = useCityContext()

  const cityNamev = cityName.toLowerCase();
  //  filter out data accroding city.............................
  let CityvnData = AllData.filter(item => item.hasOwnProperty('city') && item.city.toLowerCase() === cityNamev);

  if (cityNamev === 'all cities') {
    CityvnData = AllData;
  }


  // venueType.toLowerCase();
  //filter out accroding to type::...................................
  let MainData = CityvnData;
  if (venueType === 'venues') {
    MainData = CityvnData;
  }
  else {
    MainData = CityvnData.filter(item => item.hasOwnProperty('type') && (item.type.toLowerCase().includes(venueType) || venueType.toLowerCase().includes(item.type.toLowerCase())));
    // Data = CityvnData.filter(item => item.hasOwnProperty('type') && venueType.toLowerCase().includes(item.type.toLowerCase()) )
  }
  // console.log(venueType)
  // set data to photographer vendors ............................
  // if (vendorType === 'photo') {
  //   Data = photographVendors.filter(item => item.hasOwnProperty('type') && item.type.toLowerCase().includes('photo'))
  // }
  console.log(MainData)
  //  pagination systme . ..........................................
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const Data = MainData.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  console.log(Data)

  // define heading accroding venueTupe....................
  let headingType = "";
  switch (venueType) {
    case 'banquet':
      headingType = 'Banquet Halls';
      break;
    case 'Banquet Halls':
      headingType = 'Banquet Halls';
      break;
    case 'hotel':
      headingType = 'Hotels';
      break;
    case '4 star & above hotels':
      headingType = 'Hotels';
      break;
    case 'farmhouse':
      headingType = 'Farmhouse / Lawns';
      break;
    case 'Lawns/Farmhouse':
      headingType = 'Farmhouse / Lawns';
      break;
    case 'resort':
      headingType = 'Resorts';
      break;
    case 'Resort':
      headingType = 'Resorts';
      break;
    case 'photo':
      headingType = 'Photographers';
      break;
    default:
      // eslint-disable-next-line no-unused-vars
      headingType = 'All Vendors';
  }

  return (
    <div className='  view-section'>
      <div className="universal-container">
        {/* viewpage nav ..... */}
        <div className="viewPage-nav">
          <ViewNav />
        </div>

        <div className="view-heading">
          <div className="view-place-heading">
            <h3><BsBagHeartFill style={{ color: 'rgb(255, 0, 140)' }} /> {headingType} in <span style={{ color: 'rgb(255, 0, 140)', fontSize: '1.5rem' }}>{cityName} :</span></h3>
            <p>showing <span style={{ color: 'rgb(255, 0, 140)', fontSize: '16px' }}> {Data.length}</span> results as per you search criteria</p>
          </div>
          <div className="genie">
            <img src={genieImg} alt='a' />
            <p>Need Help call <span style={{ color: 'rgb(255, 0, 140)', fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>C.C Genie</span></p>

          </div>
          <div className="view-search-section">
            <FaSistrix />
            <input placeholder='Search Wedding Venues..' />
          </div>
        </div>
        {/* list items */}
        <div className="view-list-container">


          {/* single view item ................. */}
          {
            Data.map((item, i) => (

              <Link to={{
                key: { i },
                pathname: `/viewitem/${item.id}`,
                search: `?viewitem=${encodeURIComponent(JSON.stringify(item))}`
              }}>
                {/* dfdsfsfsfsdf <Link to='/viewitem' > */}
                {/* jlsdkjlsdjflskdfj */}
                <div className='view-item' key={i}>
                  <div className="view-item-img">
                    <img alt='f' src={item.img} />
                  </div>
                  <div className="item-details">
                    <div className="item-details-name">
                      <h3>{item.name}</h3>
                      <div className="item-details-rating">
                        <FaStar className='starIcon' />
                        <p>{item.rating}</p>
                        <p>({item.reviews.length} Reviews)</p>
                      </div>
                    </div>

                    <div className="item-details-place">
                      <div className="location">
                        <FaLocationDot className='locationIcon' />
                        <p>{item.city}</p>
                      </div>
                      <div className="type">
                        <FaHouse className='houseIcon' />
                        <p>{item.type}</p>
                      </div>
                    </div>
                    <p className='detail-loction'>{item.location}</p>
                    {/* price section ............. */}
                    <div className="item-details-price">
                      <div className="price">
                        <h4>{item.price[0]}</h4>
                        <h4>{item.price[1]}</h4>
                      </div>
                    </div>
                    {/* desc sectin.......... */}
                    <div className="item-details-about">
                      <button>{item.desc[0]}</button>
                      <button>{item.desc[1]}</button>
                      <button className='more-btn'>+ more</button>
                    </div>
                  </div>
                </div>
              </Link>

            ))
          }
        </div>
      </div>

      <div className="pagination-section">
        <IoIosArrowBack className='icon' />
        {Array.from({ length: Math.ceil(MainData.length / itemsPerPage) }).map(
          (item, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
        <IoIosArrowForward className='icon' />
      </div>

      <ViewDesc />
    </div>
  )
}

export default ViewPage
