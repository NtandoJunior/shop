import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Categories />
      </main>
      <Footer />
    </div>;
}