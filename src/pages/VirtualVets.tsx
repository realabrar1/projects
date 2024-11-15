import React from 'react';
import { Video, Calendar, MessageCircle, Star } from 'lucide-react';

export default function VirtualVets() {
  const vets = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      specialty: 'General Veterinarian',
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      nextAvailable: '10:30 AM Today',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pet Nutritionist',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
      nextAvailable: '2:15 PM Today',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Behavioral Specialist',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
      nextAvailable: '11:45 AM Today',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Virtual Vet Consultations</h1>
          <p className="mt-4 text-xl text-gray-600">Connect with certified veterinarians from anywhere</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Video className="h-6 w-6 text-indigo-600" />
              <h2 className="ml-3 text-lg font-semibold">Video Call</h2>
            </div>
            <p className="text-gray-600 mb-4">Face-to-face consultation with a vet</p>
            <button className="btn w-full">Schedule Call</button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-6 w-6 text-indigo-600" />
              <h2 className="ml-3 text-lg font-semibold">Chat Consultation</h2>
            </div>
            <p className="text-gray-600 mb-4">Text-based consultation for quick queries</p>
            <button className="btn w-full">Start Chat</button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <h2 className="ml-3 text-lg font-semibold">Schedule Visit</h2>
            </div>
            <p className="text-gray-600 mb-4">Book an in-person clinic visit</p>
            <button className="btn w-full">Book Appointment</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Available Veterinarians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vets.map((vet) => (
              <div key={vet.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{vet.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{vet.specialty}</p>
                  
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{vet.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{vet.reviews} reviews</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Next available: {vet.nextAvailable}
                    </span>
                    <button className="btn-secondary text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}