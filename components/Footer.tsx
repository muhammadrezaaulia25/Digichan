import React from 'react';
import { CONTENT } from '../constants';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start max-w-xs">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 heading-font mb-2">
                    DigiChain Health
                </div>
                <p className="text-sm text-slate-400 text-center md:text-left mb-4">
                    Platform kesehatan berbasis Blockchain pertama di Indonesia. Aman, Terdesentralisasi, dan Efisien.
                </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm">
                <h4 className="font-bold text-slate-800">Hubungi Kami</h4>
                <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-blue-600" />
                    <span className="max-w-xs">{CONTENT.footer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    <span>{CONTENT.footer.email}</span>
                </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-2 text-sm">
                 <h4 className="font-bold text-slate-800">Tautan Cepat</h4>
                {CONTENT.footer.links.map((link, i) => (
                    <a key={i} href="#" className="hover:text-purple-600 transition-colors">
                    {link}
                    </a>
                ))}
            </div>
        </div>

        <div className="text-xs text-center opacity-60 border-t border-slate-100 pt-6">
          {CONTENT.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;