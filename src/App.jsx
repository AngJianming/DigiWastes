import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Navbar, Footer} from "./Components" ;
import {Homepage , SearchMap ,Login , Explore , PricePred , SubExplore ,ItemExplore , Cart ,Profile} from "./Pages" ;
import State from './context/State';
import useState from 'react';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/DigiWaste/" element={<Homepage/>} />
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/search" element={<SearchMap/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Login/>} />
          <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/explore/:category" element={<SubExplore/>} />
          <Route exact path="/explore/:category/:subcategory" element={<ItemExplore/>} />
          <Route exact path="/pricepredict" element={<PricePred/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/profile" element={<Profile/>} />
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