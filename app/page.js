import Image from 'next/image';
import { ArrowUpRight, Github, Instagram, Twitter, Mail, MapPin, Sparkles } from 'lucide-react';

const LINKS = [
  { no: '01', label: 'Portofolio & Studi Kasus', desc: 'Karya interaktif & eksperimen web', url: 'https://sanzy.dev' },
  { no: '02', label: 'Tulisan di Blog', desc: 'Catatan tentang kode & desain', url: '#' },
  { no: '03', label: 'Template & Resource', desc: 'Gratis untuk komunitas', url: '#' },
  { no: '04', label: 'Kolaborasi / Hire Me', desc: 'Terbuka untuk proyek baru', url: 'mailto:nova@sanzy.dev' },
];

const SOCIALS = [
  { icon: Github, label: 'GitHub', url: 'https://github.com' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
  { icon: Mail, label: 'Email', url: 'mailto:nova@sanzy.dev' },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-14">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="w-full max-w-md">
        {/* Avatar dengan ring conic */}
        <div className="rise mx-auto h-28 w-28 rounded-full p-[3px] ring-conic">
          <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#07070f]">
            <Image src="/images/p1.jpg" alt="Nova Ardhana" width={112} height={112} priority className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Identitas */}
        <div className="rise mt-6 text-center" style={{ animationDelay: '0.08s' }}>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
            <Sparkles size={11} className="text-teal-300" /> Creative Technologist
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gradient">Nova Ardhana</h1>
          <p className="mt-2 flex items-center justify-center gap-1 text-sm text-white/50">
            <MapPin size={13} /> Jakarta · membangun web yang terasa hidup
          </p>
        </div>

        {/* Stats */}
        <div className="rise mt-6 grid grid-cols-3 gap-2 text-center" style={{ animationDelay: '0.16s' }}>
          {[['48', 'Proyek'], ['6 th', 'Pengalaman'], ['12k', 'Followers']].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/5 py-3 backdrop-blur">
              <p className="font-display text-lg font-semibold text-white">{v}</p>
              <p className="text-[11px] text-white/45">{l}</p>
            </div>
          ))}
        </div>

        {/* Links bernomor */}
        <nav className="mt-6 space-y-3" aria-label="Tautan utama">
          {LINKS.map((l, i) => (
            <a
              key={l.no}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rise group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/40 hover:bg-white/10 hover:shadow-[0_10px_40px_-12px_rgba(232,121,249,0.35)]"
              style={{ animationDelay: `${0.24 + i * 0.07}s` }}
            >
              <span className="font-display text-sm text-white/30 transition group-hover:text-teal-300">{l.no}</span>
              <span className="flex-1">
                <span className="block font-display font-semibold text-white">{l.label}</span>
                <span className="block text-xs text-white/45">{l.desc}</span>
              </span>
              <ArrowUpRight size={18} className="text-white/30 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="rise mt-7 flex items-center justify-center gap-3" style={{ animationDelay: '0.6s' }}>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-teal-300/50 hover:text-teal-300">
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <p className="rise mt-8 text-center text-xs text-white/30" style={{ animationDelay: '0.7s' }}>© {new Date().getFullYear()} Nova Ardhana</p>
      </div>
    </main>
  );
}
