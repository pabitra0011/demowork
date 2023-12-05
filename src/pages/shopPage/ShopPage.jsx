import React from 'react'

import './ShopPage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// imgs 
import img1 from '../../assetes/shopImgs/headingImg.webp'
import img2 from '../../assetes/shopImgs/headingImg2.webp'
import img3 from '../../assetes/shopImgs/headingImg3.webp'

import fimg1 from '../../assetes/shopImgs/byfuncImg1.webp'
import fimg2 from '../../assetes/shopImgs/byfuncimg2.webp'
import fimg3 from '../../assetes/shopImgs/byfunctionimg3.webp'
import fimg4 from '../../assetes/shopImgs/byfuncimg4.webp'
//type imgs
import timg1 from '../../assetes/shopImgs/bytypeimg1.webp'
import timg2 from '../../assetes/shopImgs/bytypeimg2.webp'
import timg3 from '../../assetes/shopImgs/bytypeimg3.webp'
import timg4 from '../../assetes/shopImgs/bytypeimg4.webp'
import timg5 from '../../assetes/shopImgs/bytypeimg5.webp'
import timg6 from '../../assetes/shopImgs/bytypeimg6.webp'

// trending imgss
import trending1 from '../../assetes/shopImgs/trending1.webp'
import trending2 from '../../assetes/shopImgs/trending2.webp'
import trending3 from '../../assetes/shopImgs/trending3.webp'
import trending4 from '../../assetes/shopImgs/trending4.webp'
import trending5 from '../../assetes/shopImgs/trending5.webp'
import trending6 from '../../assetes/shopImgs/trending6.webp'
// import trending6 from '../../assetes/shopImgs/trending1.webp'

// luxury imgs 
import luxury1 from '../../assetes/shopImgs/luxury1.webp'
import luxury2 from '../../assetes/shopImgs/luxury2.webp'
import luxury3 from '../../assetes/shopImgs/luxury3.webp'
import luxury4 from '../../assetes/shopImgs/luxury4.webp'
import luxury5 from '../../assetes/shopImgs/luxury5.webp'
import MainNav from '../../components/navbar/MainNav/MainNav';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
// by type responsive 
const responsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
// trending now page 
const responsive3 = {
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

// luxury curlse
const responsive4 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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




const ShopPage = () => {

    return (
        <div className='shop-page'>
            <MainNav />
            <div className="shopPage-section universal-container">

                <div className="heading-container">
                    <h3>Bridal Wear</h3>
                    <Carousel responsive={responsive}>
                        <div className="img1">
                            <img src={img1} alt='a' />
                        </div>
                        <div className="img1">
                            <img src={img2} alt='a' />
                        </div>
                        <div className="img1">
                            <img src={img3} alt='a' />
                        </div>
                    </Carousel>
                </div>
                {/* brows by function  */}
                <div className="by-function-section">
                    <h3>Browse By Function</h3>
                    <div className="function-container">
                        <div className="function-item">
                            <div className="function-item-img">
                                <img src={fimg1} alt='f' />
                            </div>
                            <button className='func-btn'>Wedding</button>
                        </div>
                        <div className="function-item">
                            <div className="function-item-img">
                                <img src={fimg2} alt='f' />
                            </div>
                            <button className='func-btn'>Cocktail</button>
                        </div>
                        <div className="function-item">
                            <div className="function-item-img">
                                <img src={fimg3} alt='f' />
                            </div>
                            <button className='func-btn'>Mehendi</button>
                        </div>
                        <div className="function-item">
                            <div className="function-item-img">
                                <img src={fimg4} alt='f' />
                            </div>
                            <button className='func-btn'>Sangeet</button>
                        </div>
                    </div>
                </div>
                {/* browse by type */}
                <div className="by-type-section">
                    <h3>Browse by type</h3>
                    <Carousel className='type-container' responsive={responsive2}>
                        <div style={{ background: 'hotpink' }} className="type-item">
                            <div className="type-img">
                                <img src={timg1} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                        <div style={{ background: 'cadetblue' }} className="type-item">
                            <div className="type-img">
                                <img src={timg2} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                        <div style={{ background: 'beige' }} className="type-item">
                            <div className="type-img">
                                <img src={timg3} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                        <div style={{ background: 'aquamarine' }} className="type-item">
                            <div className="type-img">
                                <img src={timg4} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                        <div style={{ background: 'antiquewhite' }} className="type-item">
                            <div className="type-img">
                                <img src={timg5} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                        <div className="type-item">
                            <div className="type-img">
                                <img src={timg6} alt='a' />
                            </div>
                            <p>Bridal Lehenga</p>
                        </div>
                    </Carousel>
                </div>
                {/* tranding now section .............. */}
                <div className="trending-section">
                    <h3>Trending Now</h3>
                    <Carousel className='trending-container' responsive={responsive3}>

                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending1} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Dilruba</p>
                                <h4>Prevasu</h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>
                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending2} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Shahi Place Lehenga</p>
                                <h4>Pallavi Poddar</h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>
                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending3} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Honeylust Lehenga</p>
                                <h4>Studio Lris </h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>
                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending4} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Liquid Gold Lehenga</p>
                                <h4>Prevasu</h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>
                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending5} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Liquid Gold Lehenga</p>
                                <h4>Prevasu</h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>
                        <div className="trending-item">
                            <div className="trending-item-img">
                                <img src={trending6} alt='s' />
                            </div>
                            <div className="trending-item-desc">
                                <p>Liquid Gold Lehenga</p>
                                <h4>Prevasu</h4>
                                <p>Delhi NRC</p>
                                <p className='price' >$ 1,200. 00</p>
                            </div>
                        </div>

                    </Carousel>
                </div>



                {/* Luxury bridal couture */}
                <div className="luxryBridal-section">
                    <h3>Luxury bridal couture</h3>
                    <Carousel className='luxury-container' responsive={responsive4}>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury1} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury3} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury2} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury3} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury4} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                        <div className="luxury-item">
                            <div className="luxury-item-img">
                                <img src={luxury5} alt='s' />
                            </div>
                            <div className="luxury-item-name">
                                <h1>NEETA LULLA</h1>
                            </div>
                        </div>
                    </Carousel>
                    <div className="luxury-item-view-all-btn">
                        <button>View More </button>
                    </div>
                </div>



            </div>

        </div >
    )
}

export default ShopPage
