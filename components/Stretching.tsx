import React from 'react';
import { Cpu, Cloud, Watch } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const Features: React.FC = () => {
  const icons = [Cpu, Cloud, Watch];

  return (
    <section className="relative w-full py-20 bg-slate-900 text-slate-50 overflow-hidden">
      
      {/* Tech Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
         <div className="grid grid-cols-12 h-full opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-slate-700 h-full"></div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">Serba Digital</span>
             <h2 className="text-3xl md:text-5xl font-bold heading-font">{CONTENT.features.title}</h2>
          </div>
          <p className="text-slate-400 max-w-md text-right md:text-left">
            {CONTENT.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONTENT.features.cards.map((card, index) => {
             const Icon = icons[index];
             return (
              <ParallaxItem 
                key={card.id} 
                speed={index % 2 === 0 ? 0.05 : 0.02} 
                className="h-full"
              >
                <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 h-full hover:border-cyan-500/50 transition-colors duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-cyan-400">
                      <Icon size={24} />
                    </div>
                    <span className="text-5xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                      0{card.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{card.instruction}</p>
                  
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    {card.benefit}
                  </div>
                </div>
              </ParallaxItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;