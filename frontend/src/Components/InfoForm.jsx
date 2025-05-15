import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import Wrapper from './Wrapper';

const InfoForm = () => {
  const navigate = useNavigate();
  const { User } = useContext(Context);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    price: '',
    description: '',
    images: [],
    contactMethod: 'email'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sessionStorage.getItem('user')) {
      navigate('/login');
      return;
    }
    // API call would go here
    console.log(formData);
  };

  return (
    <Wrapper>
      <div className="min-h-screen py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-montserrat font-bold mb-8">Sell Your Device</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Item Title</label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                placeholder="e.g., iPhone 12 Pro 128GB"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select a category</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops & Computers</option>
                <option value="tablets">Tablets</option>
                <option value="accessories">Accessories</option>
                <option value="audio">Audio Devices</option>
                <option value="gaming">Gaming Devices</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Condition</label>
              <select
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price (RM)</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                required
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                placeholder="Describe your item's features, condition, and any other relevant details"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Images</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full text-gray-400"
                  onChange={(e) => setFormData({...formData, images: Array.from(e.target.files)})}
                />
                <p className="text-sm text-gray-400 mt-2">Upload up to 5 images. First image will be the cover.</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
              <select
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#01796f] focus:outline-none"
                value={formData.contactMethod}
                onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="chat">In-App Chat</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#01796f] hover:bg-[#015951] py-3 rounded-lg font-semibold transition-all"
              >
                List Item for Sale
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoForm;