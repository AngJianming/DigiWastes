import React from 'react';

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
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding E-Waste</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about electronic waste, its impact on our environment, and how proper management can make a difference.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Take Action Today</h2>
          <p className="text-gray-600 mb-6">
            Join us in our mission to responsibly manage e-waste and create a sustainable future.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationDocs;