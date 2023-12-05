import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MainNav from '../../components/navbar/MainNav/MainNav'
import ViewPage from '../../components/venueViewPageComponents/View'


const ListComponents = () => {


    return (
        <div className='main-view-page'>

            <MainNav />
            <ViewPage />

        </div>
    )
}

export default ListComponents

