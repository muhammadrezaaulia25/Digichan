import { Smartphone, Video, Truck, Bitcoin, Wallet, CreditCard } from 'lucide-react';

export const CONTENT = {
  hero: {
    title: "Rumah Sakit Blockchain Pertama",
    tagline: "Decentralized Health Ecosystem",
    description: "DigiChain Health mengamankan rekam medis Anda dengan teknologi Blockchain. Transparansi biaya, privasi data mutlak, dan pembayaran Kripto terintegrasi.",
    cta: "Connect Wallet ID",
    secondary_cta: "Whitepaper Medis"
  },
  process: {
    title: "Ekosistem Kesehatan Terdesentralisasi",
    subtitle: "Secure & Smart",
    description: "Data kesehatan Anda dienkripsi dan disimpan dalam jaringan blockchain pribadi yang hanya bisa diakses oleh Anda dan dokter berwenang.",
    steps: [
      { step: "Verifikasi Identitas", desc: "Login menggunakan Decentralized ID (DID) atau Wallet Crypto Anda.", count: 1 },
      { step: "Smart Contract Medis", desc: "Persetujuan tindakan medis otomatis melalui Smart Contract yang transparan.", count: 2 },
      { step: "Pembayaran Kripto", desc: "Selesaikan administrasi detik itu juga dengan stablecoin atau fiat.", count: 3 }
    ]
  },
  features: {
    title: "Keunggulan Teknologi Blokchain",
    subtitle: "Web3 Healthcare",
    description: "Revolusi industri kesehatan dengan keamanan tingkat militer dan efisiensi tanpa perantara.",
    cards: [
      {
        id: 1,
        title: "Immutable Medical Record",
        instruction: "Riwayat penyakit tidak bisa dipalsukan atau hilang. Tersimpan abadi di blockchain.",
        benefit: "Keamanan Data 100%"
      },
      {
        id: 2,
        title: "Global Crypto Payment",
        instruction: "Berobat di cabang manapun tanpa repot tukar mata uang. Terima USDT, BTC, ETH.",
        benefit: "Instan & Tanpa Batas"
      },
      {
        id: 3,
        title: "NFT Membership",
        instruction: "Kartu pasien berbentuk NFT unik yang memberikan akses layanan VIP dan diskon prioritas.",
        benefit: "Aset Digital Bernilai"
      }
    ]
  },
  pharmacy: {
    title: "Apotek On-Chain 24 Jam",
    description: "Beli obat resep atau umum kapan saja. Pengiriman terlacak real-time via GPS tracker.",
    items: [
      { name: "Vitamin C Complex", price: "Rp 50.000 / 3 USDT", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", tag: "Best Seller" },
      { name: "Masker Medis N95", price: "Rp 150.000 / 9 USDT", image: "https://images.unsplash.com/photo-1585842378054-ee2472af3335?auto=format&fit=crop&q=80&w=400", tag: "Promo" },
      { name: "Paracetamol 500mg", price: "Rp 15.000 / 1 USDT", image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400", tag: "Umum" },
      { name: "Digital Thermometer", price: "Rp 350.000 / 22 USDT", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=400", tag: "Alat Medis" }
    ]
  },
  integration: {
    title: "Integrasi Layanan & Peta",
    description: "Temukan fasilitas kesehatan terdekat yang terverifikasi dalam jaringan DigiChain.",
    services: [
      {
        id: "insurance",
        title: "Smart Insurance Claim",
        subtitle: "Klaim Otomatis",
        description: "Tidak perlu isi formulir. Smart contract akan mencairkan asuransi Anda saat diagnosa keluar.",
        features: ["Auto-Claim", "Anti-Fraud", "Transparan"],
        cta: "Cek Polis Smart Contract"
      },
      {
        id: "lab",
        title: "Laboratorium Terdesentralisasi",
        subtitle: "Hasil Lab di Blockchain",
        description: "Hasil tes PCR, Darah, dan Rontgen langsung di-minting sebagai aset data pribadi Anda.",
        features: ["Privasi Terjamin", "Dapat Dibagikan Aman", "Verifiable"],
        cta: "Lihat Hasil Lab"
      }
    ]
  },
  aiDiagnosis: {
    title: "AI Doctor & Blockchain",
    badge: "Web3 Integration",
    description: "Gabungan kecerdasan buatan untuk diagnosa dan Blockchain untuk validasi data. Dapatkan opini medis kedua yang objektif dan tercatat.",
    cta: "Mulai Diagnosa AI"
  },
  footer: {
    copyright: "© 2024 DigiChain Health. Powered by Ethereum Network.",
    address: "Jl. Blockchain Boulevard No. 88, Crypto Valley, Jakarta Selatan 12190",
    email: "emergency@digichain.io",
    links: ["Smart Contract Audit", "Whitepaper", "Tokenomics"]
  }
};

export const NAV_MENU = [
  {
    label: "Layanan Medis",
    items: [
      { name: "IGD Blockchain", desc: "Penanganan darurat dengan identifikasi biometrik.", href: "#" },
      { name: "Poli Umum & Spesialis", desc: "Konsultasi tatap muka atau Metaverse.", href: "#" },
      { name: "Rawat Inap VIP", desc: "Fasilitas premium pembayaran Kripto.", href: "#" },
      { name: "Telemedicine Web3", desc: "Video call terenkripsi End-to-End.", href: "#" }
    ]
  },
  {
    label: "Fasilitas",
    items: [
      { name: "Apotek 24 Jam", desc: "Beli obat dengan Token DCH.", href: "#pharmacy" },
      { name: "Laboratorium", desc: "Simpan hasil lab di dompet digital.", href: "#" },
      { name: "Radiologi", desc: "Akses data X-Ray global.", href: "#" }
    ]
  },
  {
    label: "Blockchain & Info",
    items: [
      { name: "Verifikasi Dokter", desc: "Cek kredensial dokter di blockchain.", href: "#" },
      { name: "Transparansi Harga", desc: "Daftar harga tindakan real-time.", href: "#" },
      { name: "Lokasi RS & Apotek", desc: "Peta fasilitas terintegrasi Google Maps.", href: "#locations" }
    ]
  }
];