import React from 'react';
export function Categories() {
  const categories = [{
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80'
  }, {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }, {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  }];
  return <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => <div key={category.id} className="relative group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="bg-white bg-opacity-90 px-8 py-4">
                  <h3 className="text-xl font-medium text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>)}
        </div>
        {/* Promotional Banner */}
        <div className="mt-16 relative">
          <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Summer collection" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 flex items-center px-6 md:px-16">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Summer Collection
              </h3>
              <p className="text-white mb-6 hidden md:block">
                Discover the perfect outfits for the season
              </p>
              <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}