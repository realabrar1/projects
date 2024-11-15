import React from 'react';
import { Stethoscope, MessageCircle, Video, Clock } from 'lucide-react';

export default function HealthSupport() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">24/7 AI Health Support</h1>
          <p className="mt-4 text-xl text-gray-600">Instant pet health analysis and professional vet consultations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-indigo-600" />
              <h2 className="ml-3 text-2xl font-semibold">AI Chat Support</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Get instant answers to your pet health questions from our AI system.</p>
              <button className="btn w-full">Start Chat</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Video className="h-8 w-8 text-indigo-600" />
              <h2 className="ml-3 text-2xl font-semibold">Video Consultation</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Connect with certified veterinarians through video calls.</p>
              <button className="btn w-full">Book Consultation</button>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Symptom Analysis', desc: 'AI-powered diagnosis based on symptoms' },
              { title: 'Emergency Support', desc: '24/7 emergency veterinary guidance' },
              { title: 'Health Records', desc: 'Digital storage of all health records' },
              { title: 'Diet Consultation', desc: 'Personalized nutrition advice' },
              { title: 'Behavior Analysis', desc: 'Understanding pet behavior patterns' },
              { title: 'Treatment Plans', desc: 'Customized care recommendations' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Describe Symptoms', desc: 'Input your pet\'s symptoms or concerns' },
              { step: 2, title: 'AI Analysis', desc: 'Get instant AI-powered analysis' },
              { step: 3, title: 'Expert Review', desc: 'Veterinarian reviews the case if needed' },
              { step: 4, title: 'Care Plan', desc: 'Receive personalized treatment plan' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}