import React from 'react';
import { MapPin, Navigation, Building2 } from 'lucide-react';
import ParallaxItem from './ParallaxItem';

const MapLocator: React.FC = () => {
  return (
    <section id="locations" className="relative w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 heading-font mb-4">Jaringan Mitra Terdaftar</h2>
            <p className="text-slate-500">Menampilkan 120+ Rumah Sakit dan Apotek mitra DigiChain di area Anda.</p>
        </div>

        <div className="relative w-full h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-300">
            {/* Google Maps Embed - Zoomed out to show wider area (Jakarta) representing distribution */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.9620986799!2d106.73236359332275!3d-6.229746463936017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1652763264177!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
            
            {/* Overlay Card Left */}
            <ParallaxItem speed={0.05} className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl max-w-sm hidden md:block border border-slate-100">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">DigiChain Central (HQ)</h4>
                        <p className="text-sm text-slate-500 mb-2">Jl. Blockchain Blvd No. 88, Jakarta Selatan</p>
                        <div className="flex gap-2 mb-3">
                             <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold uppercase tracking-wider">Pusat</span>
                             <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold uppercase tracking-wider">IGD 24H</span>
                        </div>
                        <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800">
                            <Navigation size={14} />
                            Navigasi
                        </button>
                    </div>
                </div>
            </ParallaxItem>

            {/* Overlay Card Right (List) */}
            <ParallaxItem speed={0.08} className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl w-64 hidden md:block border border-slate-100">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                    <Building2 size={16} className="text-slate-400" />
                    <span className="font-bold text-sm text-slate-700">Mitra Terdekat (Live)</span>
                </div>
                <div className="space-y-3">
                    <div className="flex items-start justify-between text-xs">
                        <div>
                            <div className="font-semibold text-slate-800">Apotek Kimia Farma</div>
                            <div className="text-slate-500">0.8 km • Buka 24 Jam</div>
                        </div>
                        <span className="text-green-600 font-bold">Buka</span>
                    </div>
                    <div className="flex items-start justify-between text-xs">
                        <div>
                            <div className="font-semibold text-slate-800">RS Pondok Indah</div>
                            <div className="text-slate-500">2.1 km • UGD Only</div>
                        </div>
                        <span className="text-orange-500 font-bold">Ramai</span>
                    </div>
                    <div className="flex items-start justify-between text-xs">
                        <div>
                            <div className="font-semibold text-slate-800">Klinik Prodia</div>
                            <div className="text-slate-500">3.5 km • Laboratorium</div>
                        </div>
                        <span className="text-green-600 font-bold">Buka</span>
                    </div>
                </div>
            </ParallaxItem>
        </div>
      </div>
    </section>
  );
};

export default MapLocator;