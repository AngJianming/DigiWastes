import React from 'react'
import Wrapper from './Wrapper'
import Logo from "../assets/digiwasteslogo.png";
import gsap from 'gsap';
import { useState } from 'react';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { BiCoinStack } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { useEffect } from 'react';
const Navbar = () => {

  const { isdark, setisdark, islogin, User, logout, Location } = useContext(Context);
  
  const navigate = useNavigate();
  const body = document.body;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const modetoggle=()=>{
    if(body.classList.contains("light")){
      body.classList.remove("light");
      setisdark(!isdark)
    }
    else{
      body.classList.add("light");
      setisdark(!isdark)
    }
  }

  return (
    <div className='shadow-3xl '>
    <Wrapper>
      <div className='justify-between items-center flex h-[15vh]'>
        {/* Logo */}
        <div className='flex gap-2 cursor-pointer' onClick={()=>navigate('/')}>
        <img src={Logo} alt="logo" className='h-[10vh]'/>
        </div>
        
        {/* <div className='absolute bg-red-400 w-fit'></div> */}

        {/* Desktop Menu */}
        <div className='md:flex hidden relative justify-between items-center gap-[10vh]'>  
        <nav >
          <ul className="hidden md:flex gap-10 justify-center items-center ">
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={() => navigate("/")}
            >
              <a>Home</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={() => navigate("/market")}
            >
              <a>Market</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#01796f] cursor-pointer nav"
              onClick={() => navigate("/aboutus")}
              // {()=>document.getElementById("/aboutus").scrollIntoView({behavior:"smooth"})}
              
            >
              <a>About</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={() => navigate("/education")}
              // {()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              
            >
              <a>Education</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              // onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              onClick={()=>navigate("/contact")}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
        
        </div>
        <div className='md:flex hidden gap-[5vh] items-center'>
          {!Location ? (<h1 className=' font-montserrat font-bold text-red-400 flex items-center gap-[1vh]'><i class=""></i></h1>) : (<h1 className=' font-montserrat font-bold text-red-400 flex items-center gap-[1vh]'><i class="fi fi-rr-marker"></i>{Location}</h1>)}
          
        {!islogin ? (
          <div className='md:flex hidden gap-[5vh]'>
            <button
              className="shadow-3xl font-medium border-2 font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#01796f] transition-transform nav"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className='md:flex hidden gap-[2vh] items-center'>
            <button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={() => navigate('/cart')}
            >
              <i className="fi fi-rr-shopping-cart"></i>
            </button>
            
            <div className="relative group">
              <button className='font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#01796f] transition-transform nav flex items-center gap-2'>
                <i className="fi fi-sr-user"></i>
                <span>{User?.username}</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                <button 
                  onClick={() => navigate('/profile')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#01796f] hover:text-white w-full text-left"
                >
                  Profile
                </button>
                {User?.role === 'admin' && (
                  <button 
                    onClick={() => navigate('/admin/dashboard')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#01796f] hover:text-white w-full text-left"
                  >
                    Admin Dashboard
                  </button>
                )}
                {User?.role === 'collector' && (
                  <button 
                    onClick={() => navigate('/collector/dashboard')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#01796f] hover:text-white w-full text-left"
                  >
                    Collector Dashboard
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className='flex w-fit h-fit justify-center items-center p-2 rounded-lg border-2'>
              <h1>500</h1>
              <BiCoinStack/>
            </div>
          </div>
        )}
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden flex items-center gap-[5vh]'>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
          <button className=' font-medium font-poppins hover:text-[#01796f] transition-transform'>
          <i class="fi fi-br-menu-burger text-xl"></i>
          </button>
        </div>
      </div>
    </Wrapper>
    </div>
  )
}

export default Navbar