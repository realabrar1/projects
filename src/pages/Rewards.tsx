import React from 'react';
import { Gift, Trophy, Star, Crown, Zap } from 'lucide-react';

export default function Rewards() {
  const rewards = [
    {
      id: 1,
      title: 'Health Champion',
      description: 'Complete all health check-ups',
      progress: 80,
      points: 500,
    },
    {
      id: 2,
      title: 'Social Butterfly',
      description: 'Attend 5 pet meetups',
      progress: 60,
      points: 300,
    },
    {
      id: 3,
      title: 'Training Master',
      description: 'Complete basic training course',
      progress: 100,
      points: 1000,
    },
  ];

  const redeemableRewards = [
    {
      id: 1,
      title: 'Free Grooming Session',
      points: 2000,
      image: 'https://images.unsplash.com/photo-1516734212186-65266f46771f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Premium Pet Food',
      points: 1500,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Luxury Pet Bed',
      points: 3000,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Rewards Program</h1>
          <p className="mt-4 text-xl text-gray-600">Earn points and unlock exclusive benefits</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Points Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">2,500</h2>
                  <p className="text-gray-600">Available Points</p>
                </div>
                <Crown className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Trophy className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Level 5</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">15 Rewards</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">3 Streaks</p>
                </div>
              </div>
            </div>

            {/* Active Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Active Challenges</h2>
              <div className="space-y-6">
                {rewards.map((reward) => (
                  <div key={reward.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{reward.title}</h3>
                      <span className="text-sm text-indigo-600">{reward.points} points</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 rounded-full h-2"
                        style={{ width: `${reward.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{reward.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rewards Shop */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Rewards Shop</h2>
              <Gift className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-6">
              {redeemableRewards.map((reward) => (
                <div key={reward.id} className="group relative">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <img
                      src={reward.image}
                      alt={reward.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{reward.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-200">{reward.points} points</span>
                      <button className="px-3 py-1 text-sm bg-white text-indigo-600 rounded-full hover:bg-indigo-50">
                        Redeem
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}