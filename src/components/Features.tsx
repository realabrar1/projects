import React from 'react';
import { Activity, Calendar, Gift, Map, Shield, Video } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Activity,
      title: 'Health Monitoring',
      description: 'Real-time health tracking with smart collar integration',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Video,
      title: 'Virtual Vet Visits',
      description: 'Connect with certified vets through video calls',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated reminders for meals, medicine, and appointments',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Map,
      title: 'Pet Location',
      description: 'GPS tracking and smart alerts for pet safety',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Shield,
      title: 'AI Health Guard',
      description: 'Predictive health alerts and emergency assistance',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Gift,
      title: 'Rewards Program',
      description: 'Earn points and unlock exclusive benefits',
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Everything Your Pet Needs</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive care powered by artificial intelligence</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center">
                  <feature.icon className="h-6 w-6 text-white" />
                  <h3 className="ml-3 text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}