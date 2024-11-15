import React, { useState } from 'react';
import { Heart, X, MessageCircle, MapPin, Calendar, Filter } from 'lucide-react';

export default function PetDating() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pets = [
    {
      name: 'Luna',
      breed: 'Golden Retriever',
      age: '2 years',
      location: 'Brooklyn, NY',
      interests: ['Playing fetch', 'Swimming', 'Park walks'],
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
      owner: 'Sarah M.',
      compatibility: 95,
    },
    {
      name: 'Max',
      breed: 'German Shepherd',
      age: '3 years',
      location: 'Manhattan, NY',
      interests: ['Agility training', 'Beach runs', 'Frisbee'],
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800',
      owner: 'John D.',
      compatibility: 88,
    },
    {
      name: 'Bella',
      breed: 'French Bulldog',
      age: '1.5 years',
      location: 'Queens, NY',
      interests: ['Short walks', 'Cuddles', 'Dog parks'],
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
      owner: 'Emily R.',
      compatibility: 92,
    },
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < pets.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const currentPet = pets[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Pet Dating</h2>
          <p className="mt-4 text-xl text-gray-600">Find the perfect playmate for your furry friend</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Panel */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-6">
              <Filter className="h-5 w-5 text-gray-500" />
              <h3 className="ml-2 text-lg font-semibold">Filters</h3>
            </div>
            
            <div className="space-y-4">
              {['Breed', 'Age', 'Distance', 'Size', 'Energy Level'].map((filter, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{filter}</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Any', 'Option 1', 'Option 2'].map((option, idx) => (
                      <button
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full border border-gray-200 hover:border-indigo-500 hover:text-indigo-600"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Card */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src={currentPet.image}
                alt={currentPet.name}
                className="w-full h-96 object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{currentPet.name}</h3>
                    <p className="text-gray-200">{currentPet.breed}</p>
                  </div>
                  <div className="bg-indigo-600 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{currentPet.compatibility}% Match</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {currentPet.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {currentPet.age}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentPet.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/20 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="h-8 w-8" />
                  </button>
                  <button
                    onClick={() => handleSwipe('right')}
                    className="p-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
                  >
                    <Heart className="h-8 w-8" />
                  </button>
                  <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <MessageCircle className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}