import React from 'react'
import './BlogPage.css'
import MainNav from '../../components/navbar/MainNav/MainNav';

import { IoIosSearch } from "react-icons/io";
// imgs 
import img1 from '../../assetes/blogimgs/blog1.webp'
import img2 from '../../assetes/blogimgs/blog2.webp'
import img3 from '../../assetes/blogimgs/blogimgs.webp'

import adImg from '../../assetes/blogimgs/adImg.webp'
import adImg2 from '../../assetes/blogimgs/adImg2.webp'

const adImg3 = 'https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/4f914309-af64-45e8-b0cd-7a5fffdaa61cgenie-blog-banner.jpg';
const adImg4 = 'https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/4195669/6827e61e-8b83-4794-999b-a9083c567ffdoption1.png'
const adImg5 = 'https://image.wedmegood.com/blog/instagram.png'


// data 
const blogList = [
    {
        img: img3,
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: img2,
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: img3,
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: img1,
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: 'https://th.bing.com/th/id/OIP.muveg0Y1qIldljzAB0LnkQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: 'https://th.bing.com/th/id/OIP.qoW4akaFvH_uZKcrRQxouwHaE7?w=220&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: 'https://th.bing.com/th/id/OIP.BR9uCaxe1rr-HJ9agG4NLAHaEe?w=249&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    },
    {
        img: 'https://th.bing.com/th/id/OIP.Arq16KvMTmZWhkmxq6jd-QHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Prettiest Feet Jewellery You d Definitely Want To Try!',
        author: 'BY John',
        date: '22 NOV, 2021',
        time: '4 min',
        text: 'Dear brides-to-be, welcome to a world where toes twinkle, and ankles shimmer yes, youve guessed it! Were diving feet first into the enchanting world of all things feet jewellery. Were not just'

    }
]




const BlogPage = () => {
    return (
        <div >
            <MainNav />
            <div className="BlogPage-section">
                <div className="blogPage-heading">
                    <h2>Check Our Latest BlogPosts</h2>
                </div>
                <div className="blogPage-searchSection">
                    <div className="input">
                        <IoIosSearch className='icon' />
                        <input placeholder='Search Wedding Articles' />
                    </div>
                </div>
                <div className="mainBlog-container universal-container">

                    <div className="blog-container ">
                        {
                            blogList.map((item, index) =>
                                <div key={index} className='Blog-Item'>
                                    <div className="blog-img">
                                        <img alt='s' src={item.img} />
                                    </div>
                                    <div className="blog-title">
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className="blog-about">
                                        <p>{item.author}</p>
                                        <p>{item.date}</p>
                                        <p>{item.time} Read</p>
                                    </div>
                                    <div className="blog-text">
                                        <p>{item.text}</p>
                                    </div>
                                    {/* <div className="blog-tag">
                                        <button>Life</button>
                                        <button>musics</button>
                                    </div> */}
                                </div>
                            )
                        }
                    </div>
                    <div className="add-container">
                        <div className="adImg">
                            <img src={adImg} alt='a' />
                        </div>
                        <div className="adImg">
                            <img src={adImg2} alt='a' />
                        </div>
                        <div className="adImg">
                            <img src={adImg3} alt='a' />
                        </div>
                        <div className="adImg">
                            <img src={adImg4} alt='a' />
                        </div>
                        <div className="adImg">
                            <img src={adImg5} alt='a' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
