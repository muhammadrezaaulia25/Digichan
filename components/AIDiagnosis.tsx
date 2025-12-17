import React from 'react';
import { Sparkles, ArrowRight, BrainCircuit } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const AIDiagnosis: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden text-white">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxItem speed={-0.2} className="absolute top-0 left-0 opacity-20">
           <BrainCircuit size={400} />
        </ParallaxItem>
        <ParallaxItem speed={0.1} className="absolute bottom-0 right-10 opacity-30">
           <div className="w-64 h-64 bg-cyan-400 rounded-full blur-[100px]"></div>
        </ParallaxItem>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ParallaxItem speed={-0.05}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 shadow-lg">
             <Sparkles size={16} className="text-yellow-300" />
             <span className="text-sm font-semibold tracking-wide">{CONTENT.aiDiagnosis.badge}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font leading-tight">
            {CONTENT.aiDiagnosis.title}
          </h2>

          {/* Description Paragraph */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {CONTENT.aiDiagnosis.description}
          </p>

          {/* CTA Button */}
          <button className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-50 hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto group">
            {CONTENT.aiDiagnosis.cta}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </ParallaxItem>
      </div>
    </section>
  );
};

export default AIDiagnosis;