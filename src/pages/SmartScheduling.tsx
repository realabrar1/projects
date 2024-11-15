import React from 'react';
import { Calendar, Clock, Bell, CheckCircle } from 'lucide-react';

export default function SmartScheduling() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Vaccination Due',
      time: '10:00 AM',
      date: 'March 15, 2024',
      type: 'medical',
      location: 'PetCare Clinic',
    },
    {
      id: 2,
      title: 'Grooming Appointment',
      time: '2:30 PM',
      date: 'March 18, 2024',
      type: 'grooming',
      location: 'Pawsome Grooming',
    },
    {
      id: 3,
      title: 'Training Session',
      time: '11:00 AM',
      date: 'March 20, 2024',
      type: 'training',
      location: 'Pet Training Center',
    },
  ];

  const dailySchedule = [
    { time: '8:00 AM', task: 'Morning Walk', completed: true },
    { time: '9:00 AM', task: 'Breakfast', completed: true },
    { time: '2:00 PM', task: 'Afternoon Walk', completed: false },
    { time: '6:00 PM', task: 'Evening Meal', completed: false },
    { time: '9:00 PM', task: 'Night Walk', completed: false },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Smart Scheduling</h1>
          <p className="mt-4 text-xl text-gray-600">Keep track of your pet's daily routine and appointments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
                <button className="btn">
                  Add Event
                </button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-10 w-10 text-indigo-600" />
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time} - {event.date}
                      </div>
                      <div className="text-sm text-gray-600">{event.location}</div>
                    </div>
                    <button className="btn-secondary">
                      Reschedule
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Daily Schedule</h2>
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className={`h-5 w-5 ${item.completed ? 'text-green-500' : 'text-gray-400'}`} />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{item.task}</div>
                        <div className="text-sm text-gray-600">{item.time}</div>
                      </div>
                    </div>
                    {!item.completed && (
                      <button className="text-sm text-indigo-600 hover:text-indigo-700">
                        Mark Complete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 text-indigo-600" />
                <h2 className="ml-3 text-lg font-semibold">Reminders</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Medication Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Feeding Time</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Walk Time</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Tips</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Set consistent feeding times for better routine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Schedule walks during cooler hours of the day</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Regular grooming helps maintain pet health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}