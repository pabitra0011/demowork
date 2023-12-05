import React from 'react'
import './HomeStories.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from 'react-router-dom';


// imgs
const storiesImg1 = 'https://th.bing.com/th/id/R.313518473081291881fad6b791fc5f6a?rik=q%2b6MTfly44ymlg&riu=http%3a%2f%2fwww.chobirdokan.com%2fwp-content%2fuploads%2fcute-couple-holding-hand-walking-in-seashore.jpg&ehk=az5ghQNUaiiorKOar8wQyYFN%2bCtABK%2fWkikocW1LpzA%3d&risl=&pid=ImgRaw&r=0'
const storiesImg2 = 'https://th.bing.com/th/id/OIP.muveg0Y1qIldljzAB0LnkQHaEK?rs=1&pid=ImgDetMain';
const storiesImg3 = 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/789/1030789-h-84038f454cdf';
const storiesImg4 = 'https://img.latestgossipwu.com/2018/04/13/gossip-1523611735.jpg';



const realWeddingData = [
    {
        name1: 'Shalki',
        name2: 'Roshan',
        location: 'Delhi NCR',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Tessa',
        name2: 'Vishnu',
        location: 'Banglore',
        date: 'Wed Jun 22 2021',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Varsha',
        name2: 'Shrikant',
        location: 'Delhi NCR',
        date: 'Wed Feb 22 2019',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Nitika',
        name2: 'Abhishek',
        location: 'Chennai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },
    {
        name1: 'Manchal',
        name2: 'Luca',
        location: 'Navi Mumbai',
        date: 'Wed Feb 22 2023',
        text: 'This is Delhi Wedding Had A Bride In Lilac With A veil Dedicated to her grand....',
        imgs: [
            storiesImg1, storiesImg2, storiesImg3, storiesImg4,
        ]
    },

]


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


const HomeStories = () => {
    return (
        <div className='universal-container home-stories-section'>
            <h2>Real Wedding Stories</h2>

            <div className="home-stories-container">
                <Carousel responsive={responsive}>

                    {
                        realWeddingData.map((item, index) =>
                            <Link to='/realwedding'>
                                <div key={index} className='home-stories-item'>
                                    <div className="home-stories-item-img">
                                        <img src={item.imgs[index]} alt='ha' />
                                    </div>
                                    <div className="home-stories-item-desc">
                                        <h3> {item.name1} and {item.name2} </h3>
                                        <p>{item.text} </p>
                                    </div>
                                    <div className="home-stories-item-date">
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                </Carousel>
            </div>

        </div >

    )
}

export default HomeStories;
