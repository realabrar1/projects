import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: 'https://img.freepik.com/free-vector/cute-cool-boy-listening-music-with-headphone-cartoon-vector-icon-illustration-people-music-isolated_138676-10365.jpg?semt=ais_hybrid', // Replace with actual image
      bio: 'John is a passionate animal lover who founded PetsMoms to help pet owners find the best products and services for their furry friends.'
    },
    {
      name: 'Jane Smith',
      position: 'Chief Marketing Officer',
      image: 'https://img.freepik.com/free-vector/cute-cool-boy-listening-music-with-headphone-cartoon-vector-icon-illustration-people-music-isolated_138676-10365.jpg?semt=ais_hybrid', // Replace with actual image
      bio: 'Jane is responsible for ensuring that PetsMoms reaches every pet owner who needs advice or services for their pets.'
    },
    {
      name: 'Emily Johnson',
      position: 'Chief Veterinary Officer',
      image: 'https://img.freepik.com/free-vector/cute-cool-boy-listening-music-with-headphone-cartoon-vector-icon-illustration-people-music-isolated_138676-10365.jpg?semt=ais_hybrid', // Replace with actual image
      bio: 'Emily has been a licensed veterinarian for over 10 years and leads our team in providing expert advice to pet owners.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">About PetsMoms</h1>
      <p className="mt-4 text-lg text-gray-600">
        PetsMoms is a platform dedicated to providing services, products, and advice to pet owners. Whether you're looking
        for pet care advice or products for your furry friends, we are here to help.
      </p>

      {/* Our Mission Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our mission is to make life easier for pet owners by offering trusted advice, products, and services. We believe
          in improving the well-being of pets by providing easy access to quality information and supplies.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
        <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
          <li>Care and Compassion: We treat all pets like family.</li>
          <li>Trust and Transparency: We offer trusted advice and products.</li>
          <li>Community: We believe in building a supportive pet-owner community.</li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-2 text-lg text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
