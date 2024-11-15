import React from 'react';
import { Activity, Heart, Thermometer, Brain, Scale, Battery } from 'lucide-react';

export default function HealthMonitoring() {
  const healthMetrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '78 BPM',
      status: 'normal',
      change: '+2 from yesterday',
    },
    {
      icon: Activity,
      label: 'Activity',
      value: '4.2 hours',
      status: 'above',
      change: '+0.5 hrs from average',
    },
    {
      icon: Thermometer,
      label: 'Temperature',
      value: '38.5°C',
      status: 'normal',
      change: 'Stable',
    },
    {
      icon: Brain,
      label: 'Behavior',
      value: 'Active',
      status: 'normal',
      change: 'Normal patterns',
    },
    {
      icon: Scale,
      label: 'Weight',
      value: '12.5 kg',
      status: 'warning',
      change: '-0.3 kg this week',
    },
    {
      icon: Battery,
      label: 'Collar Battery',
      value: '85%',
      status: 'normal',
      change: '~4 days remaining',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">AI-Powered Health Monitoring</h2>
          <p className="mt-4 text-xl text-gray-600">Real-time insights into your pet's well-being</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Real-Time Health Dashboard</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {healthMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-100 hover:border-indigo-500 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <metric.icon className={`h-5 w-5 ${
                      metric.status === 'normal' ? 'text-green-500' :
                      metric.status === 'warning' ? 'text-yellow-500' :
                      'text-indigo-500'
                    }`} />
                    <span className="ml-2 text-sm text-gray-600">{metric.label}</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-900">{metric.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">AI Health Analysis</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-3"></div>
                  <h4 className="font-medium text-green-900">Overall Health Status: Excellent</h4>
                </div>
                <p className="mt-2 text-sm text-green-800">All vital signs are within normal ranges. Keep up the good work!</p>
              </div>

              <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                  <h4 className="font-medium text-yellow-900">Weight Trend Alert</h4>
                </div>
                <p className="mt-2 text-sm text-yellow-800">Slight decrease in weight noticed. Consider reviewing diet plan.</p>
              </div>

              <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-indigo-500 mr-3"></div>
                  <h4 className="font-medium text-indigo-900">Activity Recommendation</h4>
                </div>
                <p className="mt-2 text-sm text-indigo-800">Above-average activity levels today. Great job on keeping your pet active!</p>
              </div>

              <button className="w-full mt-4 btn">
                View Detailed Health Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}