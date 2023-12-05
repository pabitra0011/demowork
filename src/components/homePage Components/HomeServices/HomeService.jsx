import React from 'react'
import './HomeService.css';

// imgs
import Serviceimg1 from '../../../assetes/homeServiceImgs/homeService1.webp'
import Serviceimg2 from '../../../assetes/homeServiceImgs/homeService2.webp'
import Serviceimg3 from '../../../assetes/homeServiceImgs/homeService3.webp'
import { Link } from 'react-router-dom';

const HomeService = () => {



    return (
        <div className='homeService-section'>
            <h2>CoupoeCanvas Inhouse Services</h2>
            <div className="homeService-item-container">


                <div className="homeService-item">
                    <img src={Serviceimg3} alt='img' />
                    <h1>Wedsta</h1>
                    <p>WMG At Home, Family Makeup Services</p>
                    <button className='btn'><Link to='/service' >Know More </Link></button>
                </div>
                <div className="homeService-item">
                    <img src={Serviceimg2} alt='img' />
                    <h1>Wedsta</h1>
                    <p>WMG At Home, Family Makeup Services</p>
                    <button className='btn'><Link to='/service' >Know More </Link></button>
                </div>
                <div className="homeService-item">
                    <img src={Serviceimg1} alt='img' />
                    <h1>Wedsta</h1>
                    <p>WMG At Home, Family Makeup Services</p>
                    <button className='btn'><Link to='/service' >Know More </Link></button>
                </div>

            </div>
        </div>
    )
}

export default HomeService
