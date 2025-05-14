import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Navbar, Footer, InfoForm, ProtectedRoute} from "./Components";
import {Homepage, SearchMap, Login, Explore, PricePred, SubExplore, ItemExplore, Cart, Profile} from "./Pages";
import State from './context/State';
import MarketPlace from './Components/MarketPlace';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import EducationDocs from './Pages/EducationDocs';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          {/* Route to change your page when navbar or footer want to nav to a diff page */}
          {/* Public Routes */}
          <Route exact path="/DigiWaste/" element={<Homepage/>} />
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/DigiWaste/login" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/DigiWaste/register" element={<Login/>} />
          <Route exact path="/register" element={<Login/>} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/education" element={<EducationDocs />} />
          
          {/* Protected Routes - require login */}
          <Route exact path="/DigiWaste/search" element={
              <SearchMap/>
          } />

          <Route exact path="/explore" element={
            <ProtectedRoute>
              <Explore/>
            </ProtectedRoute>
          } />
          
          <Route exact path="/explore/:category" element={
            <ProtectedRoute>
              <SubExplore/>
            </ProtectedRoute>
          } />
          
          <Route exact path="/explore/:category/:subcategory" element={
            <ProtectedRoute>
              <ItemExplore/>
            </ProtectedRoute>
          } />
          
          <Route exact path="/pricepredict" element={
            <ProtectedRoute>
              <PricePred/>
            </ProtectedRoute>
          } />
          
          <Route exact path="/cart" element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          } />
          
          <Route exact path="/profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          } />
          
          <Route path="/market" element={
            <ProtectedRoute>
              <MarketPlace />
            </ProtectedRoute>
          } />
          
          <Route path="DigiWaste/market" element={
            <ProtectedRoute>
              <MarketPlace />
            </ProtectedRoute>
          } />


          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="DigiWaste/aboutus" element={<AboutUs />} />
          <Route path="/education" element={<EducationDocs />} />
          <Route path="DigiWaste/education" element={<EducationDocs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="DigiWaste/contact" element={<ContactUs />} />
          <Route path="/sell" element={<InfoForm />} />
          <Route path="DigiWaste/sell" element={<InfoForm />} />
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
