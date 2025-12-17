import React from 'react';
import { ShoppingCart, Clock } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const OnlinePharmacy: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <div className="flex items-center gap-2 text-green-600 font-bold mb-2">
                    <Clock size={20} />
                    <span>Buka 24 Jam Non-Stop</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 heading-font">{CONTENT.pharmacy.title}</h2>
                <p className="text-slate-500 mt-2">{CONTENT.pharmacy.description}</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline">Lihat Semua Produk →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CONTENT.pharmacy.items.map((item, idx) => (
                <ParallaxItem key={idx} speed={0.02 * idx} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group border border-slate-100">
                    <div className="relative h-48 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">{item.tag}</span>
                    </div>
                    <div className="p-4">
                        <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">{item.name}</h4>
                        <p className="text-blue-600 font-semibold text-sm mb-4">{item.price}</p>
                        <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800 flex items-center justify-center gap-2">
                            <ShoppingCart size={16} />
                            Beli
                        </button>
                    </div>
                </ParallaxItem>
            ))}
        </div>

      </div>
    </section>
  );
};

export default OnlinePharmacy;