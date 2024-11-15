import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, ShoppingBag, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Pet's Complete Care Platform
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100">
            AI-powered healthcare, community, and services - everything your pet needs in one place.
          </p>
          <div className="mt-10">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors inline-block"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Stethoscope, title: '24/7 AI Health Support', desc: 'Instant pet health analysis and vet consultations', link: '/health-support' },
            { icon: Heart, title: 'Pet Dating & Social', desc: 'Connect with other pets and owners nearby', link: '/pet-dating' },
            { icon: ShoppingBag, title: 'Smart Marketplace', desc: 'Personalized products and nutrition plans', link: '/marketplace' },
            { icon: Users, title: 'Expert Community', desc: 'Learn from vets and experienced pet owners', link: '/community' },
          ].map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors"
            >
              <feature.icon className="h-12 w-12 mx-auto text-white" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-indigo-100">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}