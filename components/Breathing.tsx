import React from 'react';
import { Smartphone, Video, Truck } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const Process: React.FC = () => {
  const icons = [Smartphone, Video, Truck];

  return (
    <section className="relative w-full py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <ParallaxItem speed={-0.05}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 heading-font">{CONTENT.process.title}</h2>
            <p className="text-slate-500 text-lg">{CONTENT.process.description}</p>
          </ParallaxItem>
        </div>

        {/* Steps Horizontal Flow */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0 transform -translate-y-1/2"></div>

          {CONTENT.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <ParallaxItem 
                key={index} 
                speed={0.05 * (index + 1)} 
                className="relative z-10"
              >
                <div className="bg-white p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 mb-4">
                    Langkah 0{step.count}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{step.step}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </ParallaxItem>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;