import React from 'react';
import { Blocks, Phone, ShieldCheck, Database, Wallet } from 'lucide-react';
import { CONTENT } from '../constants';
import ParallaxItem from './ParallaxItem';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <ParallaxItem speed={0.2} className="absolute top-10 right-10 opacity-5">
           <Blocks size={300} className="text-purple-600" />
        </ParallaxItem>
        <ParallaxItem speed={0.1} className="absolute bottom-20 left-10 opacity-20">
           <div className="w-72 h-72 rounded-full bg-purple-200 blur-3xl"></div>
        </ParallaxItem>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <ParallaxItem speed={-0.05} className="text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 text-purple-700 text-sm font-semibold mb-6 shadow-sm">
            <ShieldCheck size={16} />
            <span>Terverifikasi Blockchain ISO 27001</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight heading-font">
            {CONTENT.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            {CONTENT.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-purple-200 flex items-center justify-center gap-2">
              <Wallet size={20} />
              {CONTENT.hero.cta}
            </button>
            <button className="bg-white text-purple-600 border border-purple-200 px-8 py-4 rounded-xl font-medium hover:bg-purple-50 hover:border-purple-300 transition-all flex items-center justify-center gap-2">
              <Database size={20} />
              {CONTENT.hero.secondary_cta}
            </button>
          </div>
        </ParallaxItem>

        {/* Hero Visual */}
        <ParallaxItem speed={0.1} className="hidden md:block">
           <div className="relative">
              {/* Hospital Abstract Image */}
              <div className="w-full h-96 rounded-[30px] bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-purple-900/40"></div>
                 
                 {/* Floating Info Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-300 border border-purple-500/30">
                        <Blocks size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-purple-200 font-medium">Blok Terakhir</div>
                        <div className="text-white font-mono text-sm">#882910...22A (Verified)</div>
                    </div>
                 </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
           </div>
        </ParallaxItem>
      </div>
    </section>
  );
};

export default Hero;