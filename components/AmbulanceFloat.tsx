import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const AmbulanceFloat: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* Tooltip Label */}
      <div className="absolute bottom-full mb-2 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded shadow-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        Darurat? Hubungi Kami
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 hover:scale-110 hover:bg-green-600 transition-all duration-300"
        aria-label="Chat WhatsApp Ambulance"
      >
        <MessageCircle size={28} />
      </a>

      {/* Phone Call Button */}
      <a 
        href="tel:119" 
        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-200 hover:scale-110 hover:bg-red-700 transition-all duration-300 animate-pulse"
        aria-label="Call Ambulance"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default AmbulanceFloat;