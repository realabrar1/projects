import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  const teamMembers = [
    {
      name: 'SYED ABRAR',
      position: 'Founder & CEO',
      image: 'https://github.com/realabrar1/images/blob/main/Pi7_Passport_Photo%20(1).jpeg?raw=true',
      bio: 'John is a passionate animal lover who founded PetsMoms to help pet owners find the best products and services for their furry friends.',
    },
    {
      name: 'SYED SHOAIB ABRAR',
      position: 'CTO',
      image: 'https://img.freepik.com/free-vector/cute-girl-wearing-headphones-cartoon-vector_138676-3151.jpg',
      bio: 'Jane is responsible for ensuring that PetsMoms reaches every pet owner who needs advice or services for their pets.',
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-white-200"> {/* Set background for the entire page */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center">About PetsMoms</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          PetsMoms is a platform dedicated to providing services, products, and advice to pet owners. Whether you're looking
          for pet care advice or products for your furry friends, we are here to help.
        </p>

        {/* Our Mission Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to make life easier for pet owners by offering trusted advice, products, and services. We believe
            in improving the well-being of pets by providing easy access to quality information and supplies.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc list-inside max-w-2xl mx-auto text-left">
            <li className="hover:text-indigo-600 transition duration-300 ease-in-out">Care and Compassion: We treat all pets like family.</li>
            <li className="hover:text-indigo-600 transition duration-300 ease-in-out">Trust and Transparency: We offer trusted advice and products.</li>
            <li className="hover:text-indigo-600 transition duration-300 ease-in-out">Community: We believe in building a supportive pet-owner community.</li>
          </ul>
        </section>

        {/* Meet the Team Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Meet the Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-40 w-40 rounded-full object-cover transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 rounded-full transition duration-300"></div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition duration-300">
                  {member.name}
                </h3>
                <p className="mt-2 text-lg text-gray-600">{member.position}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-action button */}
        <section className="mt-12 text-center">
          <Link to="/contact" className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-300">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
