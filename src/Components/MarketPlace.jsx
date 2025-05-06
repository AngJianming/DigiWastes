import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Wrapper } from '../Components';
import { BiSearch, BiHeart } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

const MarketPlace = () => {
  const navigate = useNavigate();
  const { User } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data - replace with your API call
  const mockProducts = [
    {
      id: 1,
      title: "Refurbished iPhone 12",
      price: "450",
      image: "phone-image-url",
      condition: "Like New",
      category: "Smartphones",
      seller: "TechStore"
    },
    // Add more mock products
  ];

  return (
    <Wrapper>
      <div className="min-h-screen py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              SecondLife Tech Market
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Give electronic devices a second chance - Buy and sell refurbished tech
            </p>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/sell')}
                className="bg-[#01796f] hover:bg-[#015951] px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Sell Device
              </button>
              <button 
                onClick={() => navigate('/explore')}
                className="border border-[#01796f] hover:bg-[#01796f] px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Browse Items
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <BiSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search devices..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select 
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="tablets">Tablets</option>
              <option value="accessories">Accessories</option>
            </select>
            <button className="p-2 rounded-lg bg-gray-800 border border-gray-700">
              <FiFilter className="text-xl" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 p-2 rounded-full bg-gray-900/50 hover:bg-[#01796f]">
                  <BiHeart className="text-xl" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#01796f] font-bold">${product.price}</span>
                  <span className="text-sm text-gray-400">{product.condition}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-400">{product.seller}</span>
                  <button className="bg-[#01796f] px-4 py-2 rounded-lg hover:bg-[#015951] transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MarketPlace;