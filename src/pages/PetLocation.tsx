import React from 'react';
import { MapPin, Navigation, Bell, Shield } from 'lucide-react';

export default function PetLocation() {
  const safeZones = [
    { id: 1, name: 'Home', radius: '100m', status: 'active' },
    { id: 2, name: 'Dog Park', radius: '200m', status: 'active' },
    { id: 3, name: 'Grandma\'s House', radius: '150m', status: 'inactive' },
  ];

  const recentLocations = [
    { time: '2 mins ago', location: 'Backyard', status: 'safe' },
    { time: '15 mins ago', location: 'Front Garden', status: 'safe' },
    { time: '1 hour ago', location: 'Dog Park', status: 'safe' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Pet Location Tracking</h1>
          <p className="mt-4 text-xl text-gray-600">Keep your pets safe with real-time location monitoring</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Map Area */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
              {/* Map placeholder - would integrate with actual mapping service */}
              <div className="flex items-center justify-center h-full">
                <MapPin className="h-12 w-12 text-indigo-600" />
                <span className="ml-2 text-gray-500">Map View</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Current Location</h2>
                <p className="text-gray-600">Last updated: 2 minutes ago</p>
              </div>
              <button className="btn">
                <Navigation className="h-5 w-5 mr-2" />
                Track Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Location Details</h3>
                <p className="text-gray-600">123 Pet Park Avenue</p>
                <p className="text-gray-600">Within safe zone: Home</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Activity Status</h3>
                <p className="text-green-600 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Safe and Active
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Safe Zones */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Safe Zones</h2>
                <button className="text-sm text-indigo-600">Add Zone</button>
              </div>
              <div className="space-y-4">
                {safeZones.map((zone) => (
                  <div key={zone.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{zone.name}</h3>
                      <p className="text-sm text-gray-600">Radius: {zone.radius}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={zone.status === 'active'} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Locations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Locations</h2>
              <div className="space-y-4">
                {recentLocations.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.location}</p>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Bell className="h-5 w-5 text-indigo-600" />
                <h2 className="ml-2 text-lg font-semibold">Alert Settings</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Zone Exit Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Low Battery Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}