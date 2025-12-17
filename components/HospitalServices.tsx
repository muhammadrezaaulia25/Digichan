import React from 'react';
import { CreditCard, TestTube2, Check, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const Integration: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-slate-50 flex flex-col justify-center">
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 heading-font mb-4">
              {CONTENT.integration.title}
            </h2>
             <p className="text-slate-600 max-w-2xl mx-auto">
              {CONTENT.integration.description}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Insurance Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <CreditCard size={32} />
             </div>
             <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">{CONTENT.integration.services[0].title}</h3>
                <p className="text-sm text-slate-500 mb-4">{CONTENT.integration.services[0].description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                   {CONTENT.integration.services[0].features.map((f, i) => (
                     <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200">{f}</span>
                   ))}
                </div>
                <button className="text-indigo-600 font-semibold text-sm flex items-center justify-center md:justify-start gap-1 hover:gap-2 transition-all">
                  {CONTENT.integration.services[0].cta} <ArrowRight size={16} />
                </button>
             </div>
          </div>

          {/* Lab Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-shrink-0 w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                <TestTube2 size={32} />
             </div>
             <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">{CONTENT.integration.services[1].title}</h3>
                <p className="text-sm text-slate-500 mb-4">{CONTENT.integration.services[1].description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                   {CONTENT.integration.services[1].features.map((f, i) => (
                     <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200">{f}</span>
                   ))}
                </div>
                <button className="text-teal-600 font-semibold text-sm flex items-center justify-center md:justify-start gap-1 hover:gap-2 transition-all">
                  {CONTENT.integration.services[1].cta} <ArrowRight size={16} />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Integration;