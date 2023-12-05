import React, { useState } from 'react'
import './ReviewWritePage.css'
import MainNav from '../../components/navbar/MainNav/MainNav'


import { BsEnvelopePaperHeartFill } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa6";

const ReviewWritePage = () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
            setSelectedImages((prevImages) => [...prevImages, ...newImages])
        }
    }
    console.log(selectedImages)

    return (
        <div className=''>
            <MainNav />
            <div className="write-page">
                <div className="writePage-heading">
                    <h3> <BsEnvelopePaperHeartFill /> Write a Review for your Wedding Vendors with <FaHandHoldingHeart /> </h3>
                    <p>Had a great experience with your wedding photographer? Or the food at the venue left you disappointed? Please tell us your experience below. Your reviews help other engaged couples in making informed decisions.</p>
                </div>
                <div className="writePage-container">
                    <form>
                        <label>Vendor Type**</label>
                        <input type='text' placeholder='Vendor Type ( Hotels/Photographer/DJs/Services/Decorators )' />
                        <label>Select a Vendor**</label>
                        <input type='text' placeholder='Vendor Name ( Wedy Photographer/ ITC Royal )' />
                        <label>Rate Vendor**</label>
                        <input type='text' placeholder='Rate out of 5 (like 4.8)' />
                        <textarea type='text' placeholder='Tell Us about your experience**' />
                        <input type='text' placeholder='How much did you spend on this vendor?' />
                        {/* img showw section..............*/}

                        <div className="imgs-show-container">
                            <h3>Photos You Select</h3>
                            <div className="photos-container">
                                {
                                    selectedImages.length === 0 ?
                                        <>
                                            <p>Your Selected Photos are Show Here to Verify... </p>
                                            <h4>Click<span style={{ color: 'red' }}> Add Photos </span> button below to Add photos</h4>
                                        </>
                                        :
                                        selectedImages.map((img, i) =>
                                            <div key={i} className='photo'>
                                                <img src={img} alt='a' />
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        {/* review show here  */}
                        review


                        <div className="reviewPage-btns">
                            <div className="addPhoto">
                                <label htmlFor='fileInput'>
                                    Add Photos
                                </label>
                                <input type='file' onChange={handleImageChange} accept='image/**' multiple id='fileInput' style={{ display: 'none' }} />
                            </div>
                            <button className='submit'>Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewWritePage
