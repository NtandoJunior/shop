import React from 'react';
import { ShoppingBagIcon, HeartIcon } from 'lucide-react';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}
export function ProductCard({
  id,
  name,
  price,
  image,
  isNew,
  isSale,
  salePrice
}: ProductCardProps) {
  return <div className="group relative">
      <div className="aspect-square w-full overflow-hidden bg-gray-100 mb-4">
        <img src={image} alt={name} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && <span className="bg-black text-white text-xs px-2 py-1">NEW</span>}
          {isSale && <span className="bg-red-600 text-white text-xs px-2 py-1">
              SALE
            </span>}
        </div>
        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex justify-between items-center">
          <button className="text-sm font-medium hover:underline">
            Quick View
          </button>
          <div className="flex gap-2">
            <button className="p-1 hover:text-gray-600">
              <HeartIcon size={18} />
            </button>
            <button className="p-1 hover:text-gray-600">
              <ShoppingBagIcon size={18} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="mt-1 flex items-center">
          {isSale && salePrice ? <>
              <span className="text-sm font-medium text-red-600">
                ${salePrice.toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            </> : <span className="text-sm font-medium">${price.toFixed(2)}</span>}
        </div>
      </div>
    </div>;
}