import React from 'react';
export function Hero() {
  return <section className="relative w-full bg-gray-100">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Fashion model in trendy outfit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 bg-black bg-opacity-20">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              New Season Collection
            </h2>
            <p className="text-white text-lg mb-6">
              Discover the latest trends and elevate your style
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
                Shop Women
              </button>
              <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-900 transition-colors">
                Shop Men
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}