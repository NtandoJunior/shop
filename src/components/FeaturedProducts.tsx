import React from 'react';
import { ProductCard } from './ProductCard';
export function FeaturedProducts() {
  // Mock product data
  const products = [{
    id: '1',
    name: 'Oversized Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    isNew: true
  }, {
    id: '2',
    name: 'Relaxed Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    isSale: true,
    salePrice: 39.99
  }, {
    id: '3',
    name: 'Linen Blend Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
  }, {
    id: '4',
    name: 'Cropped Cardigan',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80',
    isNew: true
  }];
  return <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-sm font-medium underline hover:no-underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      </div>
    </section>;
}