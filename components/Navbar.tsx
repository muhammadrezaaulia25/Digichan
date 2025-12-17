import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wallet, Search, Phone } from 'lucide-react';
import { NAV_MENU } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            DC
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 leading-none tracking-tight heading-font">DigiChain</span>
            <span className="text-[10px] text-blue-600 uppercase tracking-widest font-bold">Blockchain Hospital</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_MENU.map((menu, index) => (
            <div key={index} className="group relative">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 py-4 transition-colors">
                {menu.label}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown / Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2">
                <div className="flex flex-col">
                    {menu.items.map((item, idx) => (
                        <a key={idx} href={item.href} className="flex flex-col p-3 hover:bg-slate-50 rounded-lg transition-colors group/item">
                            <span className="text-sm font-semibold text-slate-800 group-hover/item:text-blue-600">{item.name}</span>
                            <span className="text-xs text-slate-500">{item.desc}</span>
                        </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Search size={20} />
          </button>
           <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-100 transition-colors">
            <Phone size={16} />
            Emergency
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg border border-slate-700">
            <Wallet size={18} className="text-purple-400" />
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 top-[70px] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto pb-20`}>
         <div className="p-6 flex flex-col gap-4">
            {NAV_MENU.map((menu, index) => (
                <div key={index} className="border-b border-slate-100 pb-2">
                    <button 
                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index)}
                        className="flex justify-between items-center w-full py-3 text-left font-semibold text-slate-800"
                    >
                        {menu.label}
                        <ChevronDown size={16} className={`transition-transform ${activeMobileSubmenu === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ${activeMobileSubmenu === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        {menu.items.map((item, idx) => (
                            <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-slate-600">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-slate-400">{item.desc}</div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            
            <div className="mt-6 flex flex-col gap-3">
                 <button className="w-full flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl text-sm font-bold">
                    <Phone size={18} />
                    Panggilan Darurat (IGD)
                </button>
                <button className="w-full flex justify-center items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-lg">
                    <Wallet size={18} />
                    Connect Wallet
                </button>
            </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;