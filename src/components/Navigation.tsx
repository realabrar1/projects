import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Stethoscope, Heart, ShoppingBag, Users, Activity,
  Video, Calendar, Map, Shield, Gift
} from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { name: 'Health Support', to: '/health-support', icon: Stethoscope },
  { name: 'Pet Dating', to: '/pet-dating', icon: Heart },
  { name: 'Marketplace', to: '/marketplace', icon: ShoppingBag },
  { name: 'Community', to: '/community', icon: Users },
  { name: 'Health Monitoring', to: '/health-monitoring', icon: Activity },
  { name: 'Virtual Vets', to: '/virtual-vets', icon: Video },
  { name: 'Smart Scheduling', to: '/smart-scheduling', icon: Calendar },
  { name: 'Pet Location', to: '/pet-location', icon: Map },
  { name: 'Health Guard', to: '/health-guard', icon: Shield },
  { name: 'Rewards', to: '/rewards', icon: Gift },
];

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-3">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => clsx(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors',
                isActive
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              )}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}