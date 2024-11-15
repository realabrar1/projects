import React, { useState } from 'react';
import { MessageCircle, Users, Bookmark, TrendingUp, Search, Filter, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      badge: 'Certified Trainer',
    },
    content: 'Just completed a successful training session with Max! Here are some tips for teaching your dog to stay...',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    likes: 245,
    comments: 56,
    shares: 12,
    tags: ['Training', 'DogTips', 'PetCare'],
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    author: {
      name: 'Dr. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      badge: 'Veterinarian',
    },
    content: 'Important reminder about summer pet safety! Here are essential tips to keep your pets cool and comfortable...',
    likes: 389,
    comments: 92,
    shares: 145,
    tags: ['PetHealth', 'SummerTips', 'VetAdvice'],
    timeAgo: '5 hours ago',
  },
];

const topics = [
  { name: 'Training Tips', count: '2.4k posts' },
  { name: 'Health & Wellness', count: '1.8k posts' },
  { name: 'Nutrition', count: '956 posts' },
  { name: 'Behavior', count: '1.2k posts' },
  { name: 'Pet Stories', count: '3.1k posts' },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pet Community</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="btn">
              Create Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Topics</h2>
              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-gray-700">{topic.name}</span>
                    <span className="text-sm text-gray-500">{topic.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Your Communities</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=100"
                    alt="Dog Lovers"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-3 text-gray-700">Dog Lovers NYC</span>
                </button>
                <button className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=100"
                    alt="Cat Parents"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-3 text-gray-700">Cat Parents Unite</span>
                </button>
              </div>
              <button className="w-full mt-4 text-sm text-indigo-600 hover:text-indigo-700">
                Browse More Communities →
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex border-b">
                {[
                  { id: 'trending', icon: TrendingUp, label: 'Trending' },
                  { id: 'latest', icon: MessageCircle, label: 'Latest' },
                  { id: 'following', icon: Users, label: 'Following' },
                  { id: 'saved', icon: Bookmark, label: 'Saved' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center px-4 py-3 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-3">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-gray-900">{post.author.name}</h3>
                          {post.author.badge && (
                            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              {post.author.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{post.timeAgo}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700">{post.content}</p>

                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post content"
                        className="mt-4 rounded-lg w-full"
                      />
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <button className="flex items-center text-gray-600 hover:text-indigo-600">
                        <ThumbsUp className="h-5 w-5 mr-1" />
                        {post.likes}
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-indigo-600">
                        <MessageSquare className="h-5 w-5 mr-1" />
                        {post.comments}
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-indigo-600">
                        <Share2 className="h-5 w-5 mr-1" />
                        {post.shares}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
              <div className="space-y-3">
                {[
                  { tag: 'PetTraining', posts: '1.2k posts today' },
                  { tag: 'CatLife', posts: '856 posts today' },
                  { tag: 'DogHealth', posts: '645 posts today' },
                ].map((trend, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-indigo-600 font-medium">#{trend.tag}</h3>
                    <p className="text-sm text-gray-500">{trend.posts}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Suggested Experts</h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Dr. Emily White',
                    role: 'Pet Nutritionist',
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                  },
                  {
                    name: 'Alex Thompson',
                    role: 'Dog Behaviorist',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
                  },
                ].map((expert, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">{expert.name}</h3>
                      <p className="text-sm text-gray-500">{expert.role}</p>
                    </div>
                    <button className="ml-auto text-sm text-indigo-600 hover:text-indigo-700">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}