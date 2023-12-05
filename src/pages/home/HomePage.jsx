import React from 'react'
import { useParams, useLocation } from 'react-router-dom'



import MainNav from '../../components/navbar/MainNav/MainNav'
import HomeFront from '../../components/homePage Components/HomeFront/HomeFront'
import HomeService from '../../components/homePage Components/HomeServices/HomeService'
import HomeCategories from '../../components/homePage Components/homeCategories/HomeCategories'
import HomePopular from '../../components/homePage Components/HomePopular/HomePopular'
import PopularSearch from '../../components/homePage Components/HomePopularSearch/PopularSearch'
import HomeGallery from '../../components/homePage Components/HomeGallery/HomeGallery'
import HomeStories from '../../components/homePage Components/Wedding Stories/HomeStories'
import FeaturedVendors from '../../components/homePage Components/FeaturedVendors/FeaturedVendors'
// import LogIn from '../login/LogIn'






const HomePage = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const cityData = {
    name: params.get('name'),
    img: params.get('img'),
    subcityName: params.get('subcityName'),
    subcityName1: params.get('subcityName1'),
    subcityName2: params.get('subcityName2'),
    subcityName3: params.get('subcityName3')
  }


  return (
    <div>
      <MainNav cityData={cityData} />
      <HomeFront cityData={cityData} />
      <HomePopular cityData={cityData} />
      <PopularSearch cityData={cityData} />
      <HomeCategories />
      <HomeService />
      <HomeStories />
      <HomeGallery />
      <FeaturedVendors />
      {/* <LogIn /> */}

    </div>
  )
}

export default HomePage
