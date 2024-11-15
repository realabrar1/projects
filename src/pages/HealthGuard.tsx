import React from 'react';
import { Shield, AlertTriangle, Activity, Brain, Thermometer, Heart } from 'lucide-react';

export default function HealthGuard() {
  const healthMetrics = [
    { icon: Heart, label: 'Heart Rate', value: '75 BPM', status: 'normal' },
    { icon: Thermometer, label: 'Temperature', value: '38.5°C', status: 'normal' },
    { icon: Activity, label: 'Activity', value: 'Active', status: 'normal' },
    { icon: Brain, label: 'Behavior', value: 'Normal', status: 'normal' },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Slightly elevated heart rate detected',
      time: '2 hours ago',
      status: 'resolved',
    },
    {
      id: 2,
      type: 'info',
      message: 'Daily activity goal reached',
      time: '5 hours ago',
      status: 'noted',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Health Guard</h1>
          <p className="mt-4 text-xl text-gray-600">24/7 AI-powered health monitoring and alerts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Status */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Current Health Status</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <metric.icon className="h-6 w-6 text-indigo-600 mb-2" />
                    <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
                    <p className="text-lg font-semibold mt-1">{metric.value}</p>
                    <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      {metric.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">AI Health Analysis</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600" />
                    <h3 className="ml-2 font-medium text-green-900">Overall Health Status: Good</h3>
                  </div>
                  <p className="mt-2 text-sm text-green-800">
                    All vital signs are within normal ranges. Regular activity patterns observed.
                  </p>
                </div>

                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="flex items-center">
                    <Activity className="h-5 w-5 text-indigo-600" />
                    <h3 className="ml-2 font-medium text-indigo-900">Activity Analysis</h3>
                  </div>
                  <p className="mt-2 text-sm text-indigo-800">
                    Daily exercise goals are being met consistently. Sleep patterns are regular.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Alerts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                        <p className="text-sm text-gray-500">{alert.time}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        alert.status === 'resolved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Emergency Contacts</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">Primary Vet</h3>
                  <p className="text-sm text-gray-600">Dr. Sarah Wilson</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">Emergency Clinic</h3>
                  <p className="text-sm text-gray-600">24/7 Pet Hospital</p>
                  <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              <button className="w-full mt-4 btn">
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}