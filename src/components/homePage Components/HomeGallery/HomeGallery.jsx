import React from 'react'
import './HomeGallery.css'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// imgs
import gImg1 from '../../../assetes/homeGalleryImgs/galleryimg1.webp'
import gImg2 from '../../../assetes/homeGalleryImgs/galleryimg2.webp'
import gImg3 from '../../../assetes/homeGalleryImgs/galleryimg3.webp'
import gImg4 from '../../../assetes/homeGalleryImgs/galleryimg24.webp'
import gImg5 from '../../../assetes/homeGalleryImgs/galleryimg5.webp'
import gImg6 from '../../../assetes/homeGalleryImgs/galleryimg6.webp'
import gImg7 from '../../../assetes/homeGalleryImgs/galleryimg7.webp'
import gImg8 from '../../../assetes/homeGalleryImgs/galleryimg8.webp'
import gImg9 from '../../../assetes/homeGalleryImgs/galleryimg9.webp'
import gImg10 from '../../../assetes/homeGalleryImgs/galleryimg10.webp'
import gImg11 from '../../../assetes/homeGalleryImgs/galleryimg11.webp'
// import gImg12 from '../../../assetes/homeGalleryImgs/galleryimg12.webp'
import gImg13 from '../../../assetes/homeGalleryImgs/galleryimg13.webp'
// import gImg1 from '../../../assetes/homeGalleryImgs/galleryimg1.webp'

const responsive = {
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



const HomeGallery = () => {

    return (
        <div className='universal-container homeGallery-seaction'>
            <h2>Gallery to look for</h2>
            <Carousel responsive={responsive}>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg1} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg2} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4> Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg3} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg4} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg5} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg5} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg6} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg7} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg8} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg9} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg10} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg11} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
                <div className="homeGallery-Item">
                    <div className="homeGallery-Item-img">
                        <img src={gImg13} alt='a' />
                    </div>
                    <div className="homeGallery-Item-desc">
                        <h4>Bridal Lehenga</h4>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeGallery
