import React, { useState } from 'react'
import './CityFilterNav.css'

// icons 
import { AiFillCaretDown, AiOutlineFileText } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsEnvelopePaper } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";

import { Link } from 'react-router-dom';

import { useCityContext } from '../../../hooks/CityContext';

// data 
import cityData from '../../../data/cityData';
import { useUserContext } from '../../../hooks/UserContext';


const CityFilterNav = () => {
  // const user = true;

  const { cityName, updateCity } = useCityContext();
  const { user } = useUserContext();

  // for fixe nav ...............................
  // const [fix, setFix] = useState(false);

  // const setFixed = () => {
  //   if (window.scrollY >= 170) {
  //     setFix(true)
  //   } else {
  //     setFix(false);
  //   }
  // }
  // window.addEventListener("scroll", setFixed);


  const [click, setClick] = useState(false);
  // const [currentCity, setCurrentCity] = useState('Banglore');
  const [isAllcityVisible, setIsAllcityVisible] = useState(false);

  const handleCityClick = (e) => {
    e.preventDefault();
    // const city = e.target.textContent;
    // console.log(city);
    // setCurrentCity(city);
    setIsAllcityVisible(false)
  }
  // handle show all city section when user click search city input
  const showAllCity = () => {
    setIsAllcityVisible(!isAllcityVisible)
  }

  const handleStickyBtnClick = () => {
    setClick(!click);
  }
  const crossClick = () => {
    setClick(false)
  }


  // const { name, img, subcityName, subcityName1, subcityNam2 } = cityData;


  return (
    <div className='cityNav'>

      <div className='about'>
        <h4>Enquiry Now!</h4>
        <div className="phoneCall">
          <FiPhoneCall className='icon' />
          <p style={{ color: '#e2e2e2' }}>9382356307</p>
        </div>
      </div>
      <div onClick={showAllCity} className='city-search-section'>
        <input placeholder={cityName} /> <AiFillCaretDown />
      </div>
      {isAllcityVisible && (<div className='all-search-city-section'>
        <div className='all-search-city'>
          <div className='cityRow'>
            <h3>Top Cities</h3>
            <li onClick={(e) => { handleCityClick(e); updateCity('All Cities') }}>
              <Link to={`/?name=${encodeURIComponent(cityData[0].name)}&img=${encodeURIComponent(cityData[0].img)}&subcityName=${encodeURIComponent(cityData[0].subcityName)}&subcityName1=${encodeURIComponent(cityData[0].subcityName1)}&subcityName2=${encodeURIComponent(cityData[0].subcityName2)}&subcityName3=${encodeURIComponent(cityData[0].subcityName3)}`}>
                All Cities</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Hydrabad') }}>
              <Link to={`/?name=${encodeURIComponent(cityData[1].name)}&img=${encodeURIComponent(cityData[1].img)}&subcityName=${encodeURIComponent(cityData[1].subcityName)}&subcityName1=${encodeURIComponent(cityData[1].subcityName1)}&subcityName2=${encodeURIComponent(cityData[1].subcityName2)}&subcityName3=${encodeURIComponent(cityData[1].subcityName3)}`}>
                Hydrabad</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}>
              <Link to={`/?name=${encodeURIComponent(cityData[2].name)}&img=${encodeURIComponent(cityData[2].img)}&subcityName=${encodeURIComponent(cityData[2].subcityName)}&subcityName1=${encodeURIComponent(cityData[2].subcityName1)}&subcityName2=${encodeURIComponent(cityData[2].subcityName2)}&subcityName3=${encodeURIComponent(cityData[2].subcityName3)}`}>
                Banglore</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Kolkata') }}>
              <Link to={`/?name=${encodeURIComponent(cityData[3].name)}&img=${encodeURIComponent(cityData[3].img)}&subcityName=${encodeURIComponent(cityData[3].subcityName)}&subcityName1=${encodeURIComponent(cityData[3].subcityName1)}&subcityName2=${encodeURIComponent(cityData[3].subcityName2)}&subcityName3=${encodeURIComponent(cityData[3].subcityName3)}`}>
                Kolkata</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Mumbai') }}>
              <Link to={`/?name=${encodeURIComponent(cityData[4].name)}&img=${encodeURIComponent(cityData[4].img)}&subcityName=${encodeURIComponent(cityData[4].subcityName)}&subcityName1=${encodeURIComponent(cityData[4].subcityName1)}&subcityName2=${encodeURIComponent(cityData[4].subcityName2)}&subcityName3=${encodeURIComponent(cityData[4].subcityName3)}`}>
                Mumbai</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Chennai') }} >
              <Link to={`/?name=${encodeURIComponent(cityData[5].name)}&img=${encodeURIComponent(cityData[5].img)}&subcityName=${encodeURIComponent(cityData[5].subcityName)}&subcityName1=${encodeURIComponent(cityData[5].subcityName1)}&subcityName2=${encodeURIComponent(cityData[5].subcityName2)}&subcityName3=${encodeURIComponent(cityData[5].subcityName3)}`}>
                Chennai</Link>
            </li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Delhi') }} >
              <Link to={`/?name=${encodeURIComponent(cityData[6].name)}&img=${encodeURIComponent(cityData[6].img)}&subcityName=${encodeURIComponent(cityData[6].subcityName)}&subcityName1=${encodeURIComponent(cityData[6].subcityName1)}&subcityName2=${encodeURIComponent(cityData[6].subcityName2)}&subcityName3=${encodeURIComponent(cityData[6].subcityName3)}`}>
                Delhi</Link>
            </li>
          </div>
          <div className='cityRow'>
            <h3>Popular Cities</h3>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Gurgaon</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Goa</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Ahmedabad</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Indore</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Agra</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Kochi</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Jodhpur</a></li>
          </div>
          <div className='cityRow'>
            <h3>Others Cities</h3>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }} ><a href='a'>Mumbai</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Banglore</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Kolkata</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Chennai</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Hydrabad</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Delhi</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Pune</a></li>
          </div>
          <div className='cityRow'>
            <h3>International cities</h3>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Dubai</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>New York</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Singapure</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>New Jersey</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Toronto</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Thailand</a></li>
            <li onClick={(e) => { handleCityClick(e); updateCity('Banglore') }}  ><a href='a'>Chicago</a></li>
          </div>
        </div>
      </div>)}

      <div style={{ display: 'flex', gap: '30px' }} className="last-section">

        <div className='review-section'>
          <BiMessageSquareEdit color='#fff' className='review-icon' />
          <p><Link style={{ color: '#fff', fontWeight: 'bold' }} to={user ? '/writepage' : '/login'}>Write a Review</Link> </p>
        </div>
        <div className='mainNav-login'>
          <div className='navbar-login-btn'>
            <button>
              <Link style={{ color: '#fff' }} to='/login'>Log In</Link>
            </button>
          </div>
        </div>
      </div>



      {/* sticky contact button ......... */}

      <div onClick={handleStickyBtnClick} className="sticky-btn">
        <IoLogoWhatsapp className='whats-sticky-icon' />
      </div>
      {click ?
        <div className="sticky-btn-form">
          <div className="heading">
            <BsEnvelopePaper className='icon' />
            <h3>CoupleCanvas Contact</h3>
            <RxCross2 onClick={crossClick} className='icon' />
          </div>
          <p className='greet'>Get instant call back between 07:00 to 12:00, Thank You!!</p>
          <form className='sticky-form'>
            <input type='text' placeholder='Your Name**' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Mobile Number**' />
            <input type='text' placeholder='Whatsapp Number' />
            <p style={{ color: 'red', fontSize: '.8rem' }}>**Mandatory fields</p>
            <button type='submit' className='submit'>Get Call Back!</button>
            <h4 style={{ color: '#f12074', textAlign: 'center' }}><FiPhoneCall /> Get A Call From Us in 10 min, <FiPhoneCall /> </h4>
          </form>
        </div>
        :
        <></>
      }

    </div>


  )
}

export default CityFilterNav
