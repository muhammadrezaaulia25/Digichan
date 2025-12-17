import React from 'react';
import { Bitcoin, Wallet, CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import ParallaxItem from './ParallaxItem';

const PaymentCrypto: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <ParallaxItem speed={-0.05}>
             <h2 className="text-3xl font-bold mb-4 heading-font">Metode Pembayaran Modern</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
               Kami menerima berbagai metode pembayaran mulai dari konvensional hingga Cryptocurrency untuk kemudahan transaksi global.
             </p>
           </ParallaxItem>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Bank Transfer */}
            <ParallaxItem speed={0.05} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="w-16 h-16 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 mb-6">
                    <Banknote size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Transfer Bank</h3>
                <p className="text-sm text-slate-400 mb-4">Mendukung semua bank nasional dengan konfirmasi otomatis.</p>
                <div className="flex justify-center gap-3 opacity-60">
                    <span className="font-bold">BCA</span>
                    <span className="font-bold">Mandiri</span>
                    <span className="font-bold">BNI</span>
                </div>
            </ParallaxItem>

            {/* E-Wallet */}
            <ParallaxItem speed={0.05} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors">
                <div className="w-16 h-16 mx-auto bg-green-900/50 rounded-full flex items-center justify-center text-green-400 mb-6">
                    <Wallet size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">E-Wallet</h3>
                <p className="text-sm text-slate-400 mb-4">Pembayaran QRIS instan bebas biaya admin.</p>
                <div className="flex justify-center gap-3 opacity-60">
                    <span className="font-bold">GoPay</span>
                    <span className="font-bold">OVO</span>
                    <span className="font-bold">Dana</span>
                </div>
            </ParallaxItem>

            {/* Crypto */}
            <ParallaxItem speed={0.05} className="bg-gradient-to-br from-purple-900 to-slate-800 p-8 rounded-2xl border border-purple-500/50 hover:border-purple-400 transition-colors shadow-lg shadow-purple-900/20">
                <div className="w-16 h-16 mx-auto bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400 mb-6">
                    <Bitcoin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Cryptocurrency</h3>
                <p className="text-sm text-slate-400 mb-4">Bayar menggunakan aset kripto Anda. Aman, cepat, dan transparan.</p>
                <div className="flex justify-center gap-3 items-center">
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs font-mono text-yellow-500">BTC</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs font-mono text-blue-400">ETH</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs font-mono text-green-400">USDT</span>
                </div>
            </ParallaxItem>
        </div>
      </div>
    </section>
  );
};

export default PaymentCrypto;