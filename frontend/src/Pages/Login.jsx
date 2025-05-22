import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import poster from "../assets/Login_page/postergif.gif";
import posterlight from "../assets/Login_page/posterlightgif.gif";
import gsap from "gsap";
import Context from "../context/Context";
import { FcGoogle } from "react-icons/fc";
import { Wrapper, Loading } from "../Components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isdark, setUser } = useContext(Context);
  const [isLoginForm, setIsLoginForm] = useState(true); // New state for form toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setUser(JSON.parse(user));
      navigate('/');
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(".auth", 
      { x: 400, opacity: 0 },
      { x: 0, opacity: 100, duration: 2, ease: "power3.out", stagger: 0.25 }
    );
  }, [isLoginForm]);  const login = async () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      console.log('Attempting login with:', { email }); // Debug log
      
      // Create axios instance with default config
      const axiosInstance = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const res = await axiosInstance.post('/api/user/login', {
        email,
        password
      });      const { data } = res;
      console.log('Login response:', data); // Debug log
      setLoading(false);
      
      if (data?.message === "Authentication successful") {
        const userData = { ...data.user };
        if (data.user.isAdmin || data.user.role === 'admin') {
          userData.role = 'admin';
        }
        setUser(userData);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Handle navigation based on user role and admin status
        if (userData.role === 'admin') {
          navigate("/admin/dashboard"); // Direct to dashboard page
        } else if (userData.role === 'collector') {
          navigate("/collector/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setError("Invalid credentials");
        alert("Invalid Credentials");
      }    } catch (error) {
      setLoading(false);
      console.error('Login error:', error.response?.data || error); // Debug log
      const errorMessage = error.response?.data?.message || error.message || "Internal Server Error";
      setError(errorMessage);
      alert(errorMessage);
    }
  };

  const Register = async () => {
    if (!username || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (data?.message === "User created successfully") {
        alert("User Created Successfully");
        // Reset form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setIsLoginForm(true);
      } else {
        alert("Username or Email already exists");
      }
    } catch (error) {
      setLoading(false);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Wrapper>
      {loading && <Loading />}
      <div className="flex py-12 gap-x-10 md:px-[8vw] justify-end">
        <div className="w-full h-full z-10 md:flex hidden items-center">
          <img 
            src={isdark ? poster : posterlight}
            alt="Login poster"
            className=""
          />
        </div>

        {isLoginForm ? (
          <div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh] rounded-xl">
            <div>
              <h1 className="mt-[5vh] font-montserrat font-bold text-3xl">
                Welcome back!
              </h1>
              <p className="font-montserrat font-light text-center">
                Please enter your details
              </p>
            </div>

            <div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit w-full">
              <div className="border-b-2 md:w-[60vh] flex w-[45vh]">
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="border-b-2 md:w-[60vh] flex w-[45vh]">
                <input
                  type="password"
                  className="mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div className="w-full mt-[1vh] justify-between flex">
                <button className="font-montserrat font-medium text-gray-600 hover:text-[#01796f] hover:scale-105 transition-transform">
                  Forgot Password?
                </button>
                <button
                  className="font-montserrat font-medium text-gray-600 hover:text-[#01796f] hover:scale-105 transition-transform"
                  onClick={() => {
                    setIsLoginForm(false);
                    setEmail("");
                    setPassword("");
                  }}
                >
                  Not a User? Register
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
              <button
                className="text-md w-full font-poppins font-medium shadow-3xl p-3 rounded-xl hover:bg-[#01796f] hover:scale-105 transition-transform"
                onClick={login}
              >
                Login
              </button>
              <button className="text-md flex items-center justify-center gap-[2vh] w-full font-poppins font-medium shadow-3xl p-3 rounded-xl hover:bg-red-400 hover:scale-105 transition-transform">
                <FcGoogle /> Log in with Google
              </button>
            </div>
          </div>
        ) : (
          <div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh] rounded-xl">
            <div>
              <h1 className="mt-[5vh] text-center font-montserrat font-bold text-3xl">
                Register with DigiWaste
              </h1>
              <p className="font-montserrat font-light text-center">
                Please fill your details to register
              </p>
            </div>

            <div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit w-full">
              <div className="border-b-2 md:w-[60vh] flex w-[45vh]">
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Username"
                />
              </div>
              <div className="border-b-2 md:w-[60vh] flex w-[45vh]">
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="border-b-2 md:w-[60vh] flex w-[45vh]">
                <input
                  type="password"
                  className="mt-2 w-full rounded-lg py-4 font-montserrat font-medium md:w-[60vh]"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div className="w-full mt-[1vh]">
                <button
                  className="font-montserrat font-medium text-gray-600 hover:text-[#01796f] hover:scale-105 transition-transform"
                  onClick={() => {
                    setIsLoginForm(true);
                    setUsername("");
                    setEmail("");
                    setPassword("");
                  }}
                >
                  Already a User? Login
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
              <button
                className="text-md w-full font-poppins font-medium shadow-3xl p-3 rounded-xl hover:bg-[#01796f] hover:scale-105 transition-transform"
                onClick={Register}
              >
                Sign up
              </button>
              <button className="text-md flex items-center justify-center gap-[2vh] w-full font-poppins font-medium shadow-3xl p-3 rounded-xl hover:bg-red-400 hover:scale-105 transition-transform">
                <FcGoogle /> Log in with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Login;
