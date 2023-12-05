import React from 'react'
import './LatestReviews.css'




const latestReviews = [
    {
        img: 'https://th.bing.com/th/id/OIP.llSs9FyqPDqOciNnJ55OJAHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7',
        user: 'Shangri-La',
        text: 'I recently had the pleasure of staying at the magnificent ITC [Hotel Name], and my experience was nothing short of exceptional. From the moment I entered the grand lobby to the minute I checked out, every aspect of my stay exuded luxury and sophistication.',
        date: '20 Aug 2023',
        reviewBy: 'Rakshit Shetty',
    },
    {
        img: 'https://nanawall.imgix.net/gallery/2019-12/2048x1365_hsw60-jw-marriott-nashville-09.jpg?auto=format',
        user: 'JW Marriot',
        text: 'The hotels ambiance is truly captivating.The tasteful decor seamlessly blends traditional elegance with modern chic, creating an atmosphere of opulence.The attention to detail in every corner reflects the commitment to providing guests with a truly indulgent experience',
        date: '20 Aug 2023',
        reviewBy: 'Rakshit Shetty',
    },
    {
        img: 'https://th.bing.com/th/id/OIP.aTPa7VPtu99uFDqeI6r_XwHaE7?rs=1&pid=ImgDetMain',
        user: 'Le Meridian',
        text: 'The rooms at ITC redefine comfort and luxury. Elegantly appointed with plush furnishings and state-of-the-art amenities, my accommodation provided a perfect sanctuary after a day of exploration or business meetings. The attention to cleanliness and comfort was truly commendable.',
        date: '20 Aug 2023',
        reviewBy: 'Rakshit Shetty',
    }, {
        img: 'https://images.rentalo.com/Singapore-Hotels-351910-8668589l.jpg',
        user: 'ITC Royal',
        text: ' I appreciate ITC s commitment to sustainability.The hotel s eco-friendly initiatives, such as energy conservation and waste reduction, showcase a responsible approach to luxury hospitality.Awesome place for pre wed couple shoot,post wedding shoot and matenity shoot serialshoots.baby shoots skdfj dlfsjdf djkfdskfjkd fkdjf sldjf sdkfjls djkfldsjf lsdjfsdlfkjls djflsdkj',
        date: '20 Aug 2023',
        reviewBy: 'Rakshit Shetty',
    },
    {
        img: 'https://image.wedmegood.com/resized/100X/uploads/member/4072826/1681134509_IMG_20230321_WA0017.jpg',
        user: 'The Plaza',
        text: 'The wellness facilities at ITC are top-notch. The spa offered a rejuvenating experience, and the fitness center was well-equipped for those who like to stay active during their travels. The rooftop pool with panoramic views was a highlight, providing a serene escape within the bustling city.',
        date: '20 Aug 2023',
        reviewBy: 'Rakshit Shetty',
    },
    // {
    //     img: 'https://image.wedmegood.com/resized/100X/uploads/member/4072826/1681134509_IMG_20230321_WA0017.jpg',
    //     user: 'ITC Royal',
    //     text: 'Awesome place for pre wed couple shoot,post wedding shoot and matenity shoot serialshoots.baby shoots skdfj dlfsjdf djkfdskfjkd fkdjf sldjf sdkfjls djkfldsjf lsdjfsdlfkjls djflsdkj',
    //     date: '20 Aug 2023',
    //     reviewBy: 'Rakshit Shetty',
    // }
]



const LatestReviews = () => {
    return (
        <div className="latestRevieMain">
            <div className='latest-reviews-section universal-container'>
                <h3 className='heading'>Latest Reviews For Vendors</h3>
                {
                    latestReviews.map(item => (
                        <div key={item.img} className='Latestreview-item'>
                            <div className="review-item-img">
                                <img src={item.img} alt='f' />
                            </div>
                            <div className="review-item-details">
                                <h3>{item.user}</h3>
                                <p>{item.text}</p>
                                <div className="review-item-date">
                                    <p>Reviewed By: {item.reviewBy} </p>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LatestReviews
