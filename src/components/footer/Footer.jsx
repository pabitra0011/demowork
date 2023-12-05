import React from 'react'
import './Footer.css'

import { FaFacebook, FaInstagram, FaSquareTwitter, FaSquareWhatsapp, FaSkype, FaLinkedin, FaImages, FaWhatsapp, FaTwitter, FaYoutube, FaCannabis, } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import { BsBalloonFill } from "react-icons/bs";
import { GiHeartWings, GiGhost } from "react-icons/gi";

// FaImages
import AppstoreImg from '../../assetes/footer/app store.png'
import PlaystoreImg from '../../assetes/footer/play store.png'
import Logo from '../../assetes/brand logo.png'
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className='universal-container footer-section'>
          {/* footer desc ..  */}
          <div className="footer-section-desc">
            <h3>CoupleCanvas - Your Personal Wedding Planner</h3>
            <p>Couple Canvas is an Indian Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India, or looking for the top photographers, or just some ideas and inspiration for your wedding. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
          </div>
          {/* footer social  */}
          <div className="footer-section-socials">

            <div className="footer-section-socials-row contact-details">
              <h3>Contact us to get best deals</h3>
              <div className="footer-social-contact">
                {/* <h3></h3> */}
                <p>info@couplecanvas.com</p>
                <p>9383774874</p>
              </div>
              <div className="footer-newsletter">
                <h3>Get Latest Blog Alearts</h3>
                <div className='newslatter-input'>
                  <input placeholder='Email*' />
                  <button className='btn'>Submit</button>
                </div>

                <div className="below-newsletter-btns">
                  <div className='nBtn s-w'>Submit Wedding</div>
                  <div className='nBtn r-v'>Register as a Vendor</div>
                </div>

              </div>
            </div>

            <div className="footer-section-socials-row">
              <h3>Follow us on:</h3>
              <div className="icon-div ">
                <FaFacebook className='fb icon' />
                <p>Facebook</p>
              </div>
              <div className="icon-div insta">
                <FaInstagram className='insta icon' />
                <p>Instagram</p>
              </div>
              <div className="icon-div link">
                <FaLinkedin className='linkd icon' />
                <p>Linkdnd</p>
              </div>
              <div className="icon-div what">
                <FaWhatsapp className='whats icon' />
                <p>Whatsapp</p>
              </div>
              <div className="icon-div twi">
                <FaTwitter className='tw icon' />
                <p>Twitter</p>
              </div>
              <div className="icon-div yout">
                <FaYoutube className='yt icon' />
                <p>Youtube</p>
              </div>
            </div>
            <div className="footer-section-socials-row app">
              <h3>Get The CoupleCanvas App</h3>
              <img className='appstore' src={AppstoreImg} alt='af' />
              <img className='playstore' src={PlaystoreImg} alt='fdf' />
            </div>

            <div className="funny-footer">
              <BsBalloonFill className='b-icon' />
              {/* <GiGhost className='ghost-icon' /> */}
            </div>

          </div>
          {/* footer navlist  */}
          <hr className='hrTag' />
          <div className="footer-section-navlist">
            <div className="navlist-row">
              <h3>Start Planning</h3>

              <li><a href='ad'>Search By Vendor</a></li>
              <li><a href='ad'>Search By City</a></li>
              <li><a href='ad'>Download Our app</a></li>
              <li><a href='ad'>Top Rated Vendors</a></li>
              <li><a href='ad'>Destination Wedding</a></li>
            </div>
            <div className="navlist-row">
              <h3>Wedding Ideas</h3>
              <li><a href='ad'>Wedding Blog</a></li>
              <li><a href='ad'>edding Inspiration Gallery</a></li>
              <li><a href='ad'>Real Weadding</a></li>
              <li><a href='ad'>Top Rated Vendors</a></li>
            </div>
            <div className="navlist-row">
              <h3>Photo Ballery</h3>
              <li><a href='ad'>Bridal Wear</a></li>
              <li><a href='ad'>Wedding Jewellery</a></li>
              <li><a href='ad'>Bridal Makeup & Hair</a></li>
              <li><a href='ad'>Groom Wear</a></li>
              <li><a href='ad'>Invitation & Favors</a></li>
              <li><a href='ad'>Wedding Accessories</a></li>
              <li><a href='ad'>Mehendi Designs</a></li>
              <li><a href='ad'>Wedding Photography</a></li>
              <li><a href='ad'>Invitation & Favors</a></li>
            </div>
            <div className="navlist-row">
              <h3>Home</h3>
              <li><a href='ad'>About</a></li>
              <li><a href='ad'>Careers</a></li>
              <li><a href='ad'>Contact Us</a></li>
              <li><a href='ad'>Site Map</a></li>
              <li><a href='ad'>Terms & Condition</a></li>
              <li><a href='f'>Privacy Policy</a></li>
              <li><a href='f'> Cancellation Policy</a></li>
            </div>
            <div className="navlist-row">
              <h3>Wedding Invitation Maker</h3>
              <li><a href='ad'>Wedding Card Designs</a></li>
              <li><a href='ad'>Save the Date Templates</a></li>
              <li><a href='ad'>Invitation Video Tamplates</a></li>
            </div>
          </div>
        </div>
      </div>

      <div className="copywrite-section">
        <div className='date'>
          <div className="brand">
            <GiHeartWings className='brand-icon' />
            <h4>  @CoupleCanvas</h4>
          </div>
        </div>
        <div className="developer">
          <p>Designed by <a style={{ fontSize: '16px', color: ' #f321ad' }} href='https://github.com/pabitra0011'>Robo0011</a> with <FaHeart style={{ color: 'red', fontSize: '1rem' }} /> + <FaCannabis style={{ color: 'green', fontSize: '1rem' }} /> + <FiCoffee style={{ color: 'brown', fontSize: '1rem' }} /> </p>
        </div>
        <div className='terms'>
          <p>@2023</p>
          <h4>Terms&Conditions</h4>
          <h4>PrivacyPolicy</h4>
        </div>
      </div>
    </div>

  )
}

export default Footer

