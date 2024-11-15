import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}