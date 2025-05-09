import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Navbar, Footer, InfoForm} from "./Components" ;
import {Homepage , SearchMap ,Login , Explore , PricePred , SubExplore ,ItemExplore , Cart ,Profile} from "./Pages" ;
import State from './context/State';
import useState from 'react';
import MarketPlace from './Components/MarketPlace';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import EducationDocs from './Pages/EducationDocs';
//import { useRouter } from './router';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          {/* Route to change your page when navbar or footer want to nav to a diff page */}
          <Route exact path="/DigiWaste/" element={<Homepage/>} />
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/DigiWaste/search" element={<SearchMap/>} />
          <Route exact path="/DigiWaste/login" element={<Login />} />
          <Route exact path="/register" element={<Login/>} />
          <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/explore/:category" element={<SubExplore/>} />
          <Route exact path="/explore/:category/:subcategory" element={<ItemExplore/>} />
          <Route exact path="/pricepredict" element={<PricePred/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route path="/market" element={<MarketPlace />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/education" element={<EducationDocs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sell" element={<InfoForm />} />
          {/* <Route path="/" element={<DashboardPage/>} /> */}
          {/* <Route path="/analytics" element={<AnalyticsPage/>} /> */}
        </Routes>
        <Footer/>
      </Router>
      </State>
    </div>
  )
}

export default App

// const Root = () => {
//   //Check if token cause in localStorage
//   const isAuthenticated = !!localStorage.getItem("token");

//   //Redirect the platform to router
//   return isAuthenticated ? {  
//     <Navigate to="/dashboard" />
//   } : {
//     <Navigate to="/login" />
//   };

// };