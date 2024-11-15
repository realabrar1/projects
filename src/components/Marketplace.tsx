import React, { useState } from 'react';
import { ShoppingBag, Filter, Star, Heart, Search } from 'lucide-react';

const categories = [
  { id: 'food', name: 'Food & Nutrition' },
  { id: 'toys', name: 'Toys & Entertainment' },
  { id: 'health', name: 'Health & Wellness' },
  { id: 'grooming', name: 'Grooming Supplies' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'tech', name: 'Smart Devices' },
];

const products = [
  {
    id: 1,
    name: 'Premium Dog Food',
    category: 'food',
    price: 49.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800',
    vetApproved: true,
    description: 'Nutrient-rich formula for active dogs',
  },
  {
    id: 2,
    name: 'Interactive Puzzle Toy',
    category: 'toys',
    price: 24.99,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800',
    vetApproved: true,
    description: 'Mental stimulation for curious pets',
  },
  {
    id: 3,
    name: 'Smart Health Collar',
    category: 'tech',
    price: 89.99,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    vetApproved: true,
    description: 'Track vital signs and location',
  },
  {
    id: 4,
    name: 'Natural Shampoo',
    category: 'grooming',
    price: 19.99,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800',
    vetApproved: true,
    description: 'Gentle, organic ingredients',
  },
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pet Marketplace</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="btn">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart (0)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Filter className="h-5 w-5 text-gray-500" />
              <h2 className="ml-2 text-lg font-semibold">Filters</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                      selectedCategory === 'all'
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                        selectedCategory === category.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                    {product.vetApproved && (
                      <div className="absolute bottom-3 left-3 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                        Vet Approved
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      <button className="btn-secondary">
                        Add to Cart
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