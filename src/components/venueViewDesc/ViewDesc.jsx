import React from 'react'
import LatestReviews from '../latest reviews/LatestReviews';
import './ViewDesc.css'
import { useCityContext } from '../../hooks/CityContext';




const ViewDesc = () => {
    const { cityName, venueType } = useCityContext();

    return (
        <div className='viewDesc-page'>

            <div className="viewDesc-section">
                {/* how to find */}
                <div className="viewDescAbout-container">
                    <h3>How to find best {venueType} in {cityName} ?</h3>
                    <p>Selecting venues for weddings is one of the biggest and the most important decisions a couple has to take when planning for their wedding. After all, you would want to book one of the best wedding venues in Bangalore, that comes with a great package and best deals! There is a wide variety of venue options in Bangalore for you to choose from, right from banquet halls to poolside venues, from lawns to resorts, you can find them all.</p>
                    <p>Couple Canvas is a trusted wedding planning platform listing thousands of verified wedding vendors. You can find more than 750 wedding venues in Bangalore with a capacity of 500-1500 pax ranging from INR 500 to 1500 price per plate. From veg to non veg, venues with inhouse bar, dj & decor to the ones allowing outside decor & caterers, at wedmegood you can find venues of your choice in and around Bangalore. Apply various filters including cost, ratings, locality, etc and find the venue in Bangalore as per your requirements and the one that fulfills all your needs. You can check their menu, their prices, ratings and reviews and shortlist your favorites and contact them directly to get the best quote or book a site visit.</p>

                    <h3>What are the budget {venueType} in {cityName} ?</h3>
                    <p>If you are getting married in Bangalore and are looking for a banquet or venue to host your celebrations, then you are just at the right place. There are over 700 Bangalore venues on WedMeGood and all you need to do is apply the filters and you can easily find the best wedding venues, that too in your budget.</p>

                    <h3>Which localities in {cityName} have the best wedding venues ?</h3>
                    <p>Location of the venue holds utmost importance when we need to book them for hosting the wedding ceremony. It is important that the wedding place is centrally located and easily accessible so that your guests can reach without any hassles.

                        Mostly searches are for: wedding venues in Indiranagar, wedding venues in Electronic city, venues in South Bangalore or wedding venues in Yeswanthpur. To book a wedding venue in any locality in Bangalore, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.

                    </p>
                </div>

                {/* faq */}
                <div className="viewDesc-faq-section">
                    <h3>Frequently Asked Questions :</h3>
                    <div className="viewDescFaq-container">
                        <div className="viewDescFaq-item">
                            <h3>How to find wedding venues in {cityName}?</h3>
                            <p> This is Dummy answer, so don't read. To book a wedding venue in any locality in Bangalore, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.</p>
                        </div>
                        <div className="viewDescFaq-item">
                            <h3>Which type of wedding venue should I choose in {cityName} ?</h3>
                            <p> This is Dummy answer, so don't read. To book a wedding venue in any locality in Bangalore, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.</p>
                        </div>
                        <div className="viewDescFaq-item">
                            <h3>What is the best time to book a wedding venue in {cityName} ?</h3>
                            <p> This is Dummy answer, so don't read. To book a wedding venue in any locality in Bangalore, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.</p>
                        </div>
                        <div className="viewDescFaq-item">
                            <h3> How much do venues in Bangalore charge {cityName} ?</h3>
                            <p> This is Dummy answer, so don't read. To book a wedding venue in any locality in Bangalore, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.</p>
                        </div>
                    </div>
                </div>
                {/* navigation */}


            </div>


            <LatestReviews />
        </div>
    )
}

export default ViewDesc
