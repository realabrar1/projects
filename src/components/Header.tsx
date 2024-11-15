import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Search, Bell, UserCircle, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <PawPrint className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PetsMoms</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services, products, or advice..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
  {isAuthenticated ? (
    <>
      <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100">
        <Bell className="h-6 w-6 text-gray-600" />
      </Link>
      <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link> {/* About link */}
      <div className="relative group">
        <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
          <img
            src={user?.avatar || 'https://ui-avatars.com/api/?name=' + user?.name}
            alt={user?.name}
            className="h-8 w-8 rounded-full"
          />
        </button>
        <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
          <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</Link>
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link> {/* About link for non-authenticated users */}
      <Link to="/login" className="text-gray-600 hover:text-gray-900">Sign In</Link>
      <Link
        to="/register"
        className="btn"
      >
        Get Started
      </Link>
    </>
  )}
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
{isMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <div className="p-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border border-gray-300"
        />
      </div>
      {isAuthenticated ? (
        <>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Profile
          </Link>
          <Link
            to="/notifications"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Notifications
          </Link>
          <button
            onClick={logout}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  </div>
)}

    </header>
  );
}
