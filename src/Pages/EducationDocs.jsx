import React from 'react';
import { Wrapper } from '../Components';

const EducationDocs = () => {
  const sections = [
    {
      title: 'What is E-Waste?',
      content: 'Electronic waste, or e-waste, refers to discarded electronic devices and equipment. This includes computers, smartphones, tablets, TVs, and other electronic devices that have reached the end of their useful life.',
      icon: '🖥️'
    },
    {
      title: 'Environmental Impact',
      content: 'E-waste contains toxic materials like lead, mercury, and cadmium that can harm the environment and human health. Proper disposal and recycling are crucial to prevent these hazardous materials from contaminating soil and water sources.',
      icon: '🌍'
    },
    {
      title: 'Recycling Benefits',
      content: 'Recycling e-waste helps recover valuable materials like gold, silver, and copper. This reduces the need for raw material extraction, conserves resources, and minimizes environmental impact.',
      icon: '♻️'
    },
    {
      title: 'How to Properly Dispose',
      content: 'Never throw e-waste in regular trash. Use certified e-waste recyclers, participate in take-back programs, or donate working devices to extend their lifecycle.',
      icon: '📱'
    }
  ];

  const stats = [
    { number: '50M', label: 'Tons of e-waste generated annually' },
    { number: '17.4%', label: 'Global e-waste recycling rate' },
    { number: '$57B', label: 'Value of raw materials in e-waste' }
  ];

  return (
    <Wrapper>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold mb-4">
            Understanding E-Waste
          </h1>
          <p className="text-xl font-montserrat text-gray-400 max-w-3xl mx-auto">
            Learn about electronic waste, its impact on our environment, and how proper management can make a difference.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#333] p-8 rounded-lg shadow-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              <div className="text-4xl font-montserrat font-bold text-[#01796f] mb-2">{stat.number}</div>
              <div className="text-gray-400 font-montserrat">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-[#333] rounded-lg shadow-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-montserrat font-bold mb-4">{section.title}</h2>
              <p className="text-gray-400 font-montserrat">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-[#222] rounded-lg p-8 shadow-3xl">
          <h2 className="text-2xl font-montserrat font-bold mb-4">Take Action Today</h2>
          <p className="text-gray-400 font-montserrat mb-6">
            Join us in our mission to responsibly manage e-waste and create a sustainable future.
          </p>
          <button className="bg-[#01796f] text-white px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-[#015951] transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default EducationDocs;