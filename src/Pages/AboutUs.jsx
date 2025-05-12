import React from 'react';
import { Wrapper } from '../Components';

const teamMembers = [
  {
    name: 'Ang Jianming',
    role: 'Project Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Leading the vision for sustainable e-waste management.'
  },
  {
    name: 'Leong Kean Tshung',
    role: 'Environmental Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Expert in environmental impact assessment and sustainability.'
  },
  {
    name: 'Cheng Hao Jee',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Bringing technical innovation to e-waste management.'
  },
  {
    name: 'Lai Wei Han',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Building and nurturing our eco-conscious community.'
  },
  {
    name: 'Willam Teh Kang Wye',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Ensuring smooth operations and logistics.'
  }
];

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-xl font-montserrat text-gray-400 max-w-3xl mx-auto">
            We are dedicated to revolutionizing e-waste management through innovative solutions 
            that protect our environment and create a sustainable future for generations to come.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-[#333] rounded-lg shadow-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm font-montserrat font-medium text-[#01796f] mb-3">{member.role}</p>
                  <p className="text-gray-400 font-montserrat">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#333] p-6 rounded-lg shadow-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-400 font-montserrat">Committed to environmental preservation through responsible e-waste management.</p>
            </div>
            <div className="bg-[#333] p-6 rounded-lg shadow-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400 font-montserrat">Constantly evolving our methods to better serve the environment and community.</p>
            </div>
            <div className="bg-[#333] p-6 rounded-lg shadow-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Community</h3>
              <p className="text-gray-400 font-montserrat">Building a network of environmentally conscious individuals and organizations.</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;