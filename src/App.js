
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all components 
// import MainNav from './components/navbar/MainNav/MainNav';
import CityFilterNav from './components/navbar/cityFilterNav/CityFilterNav';
import HomePage from './pages/home/HomePage';
import Footer from './components/footer/Footer';
// import LogIn from './pages/login/LogIn';
import LogIn from './pages/login/LogIn'
import MainNav from './components/navbar/MainNav/MainNav';
import ListComponents from './pages/venueListPage/VenueList';
import ShopPage from './pages/shopPage/ShopPage';
import SingleVIewPage from './pages/singleViewPage/SingleVIewPage';
import VendorPage from './pages/vendorPage/VendorPage';
import RealWeddingPage from './pages/real Wedding/RealWeddingPage';
import BlogPage from './pages/blogPage/BlogPage';

import VenueList from './pages/venueListPage/VenueList'
import ReviewWritePage from './pages/reviewWritePage/ReviewWritePage';
import ServicePage from './pages/servicePage/ServicePage';
import { CityContextProvider, useCityContext } from './hooks/CityContext';
import { UserContextProvider, useUserContext } from './hooks/UserContext';





function App() {
  const { user, updateUser } = useUserContext()

  // let user = true;

  // console.log(user)
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <CityFilterNav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/venuelist' element={<VenueList />} />
          <Route path='/vendors' element={<VendorPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/realwedding' element={<RealWeddingPage />} />
          <Route path='/viewitem/:id' element={<SingleVIewPage />} />
          <Route path='/writepage' element={user ? <ReviewWritePage /> : <LogIn />} />
          <Route path='/service' element={<ServicePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default function AppWrapper() {
  return (
    <UserContextProvider>
      <CityContextProvider>
        <App />
      </CityContextProvider>
    </UserContextProvider>
  );
}


// export default App;

