import Link from 'next/link';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { KARYA, LINKS, PROFIL } from '@/lib/nova';

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-14">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="w-full max-w-md">
        {/* Avatar monogram dengan cincin conic — persona fiktif, tanpa foto */}
        <div className="rise mx-auto h-28 w-28 rounded-full p-[3px] ring-conic" aria-hidden="true">
          <div className="grid h-full w-full place-items-center rounded-full border-4 border-[#07070f] bg-[#0d0d1a]">
            <span className="text-gradient font-display text-4xl font-bold">{PROFIL.inisial}</span>
          </div>
        </div>

        <div className="rise mt-6 text-center" style={{ animationDelay: '0.08s' }}>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/75">
            <Sparkles size={11} className="text-teal-300" aria-hidden="true" /> {PROFIL.peran}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gradient">{PROFIL.nama}</h1>
          <p className="mt-2 flex items-center justify-center gap-1 text-sm text-white/70">
            <MapPin size={13} aria-hidden="true" /> {PROFIL.kota} · {PROFIL.bio.split(' — ')[0].toLowerCase()}
          </p>
        </div>

        <dl className="rise mt-6 grid grid-cols-3 gap-2 text-center" style={{ animationDelay: '0.16s' }}>
          {[[String(KARYA.length), 'Studi kasus'], ['6 th', 'Pengalaman'], ['1 slot', 'Kosong Nov']].map(([v, l]) => (
            <div key={l} className="flex flex-col-reverse rounded-2xl border border-white/10 bg-white/5 py-3 backdrop-blur">
              <dt className="text-[11px] text-white/70">{l}</dt>
              <dd className="font-display text-lg font-semibold text-white">{v}</dd>
            </div>
          ))}
        </dl>

        <nav className="mt-6 space-y-3" aria-label="Tautan utama">
          {LINKS.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className="rise group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/40 hover:bg-white/10 hover:shadow-[0_10px_40px_-12px_rgba(232,121,249,0.35)]"
              style={{ animationDelay: `${0.24 + i * 0.07}s` }}
            >
              <span className="font-display text-sm text-white/60 transition group-hover:text-teal-300">{l.no}</span>
              <span className="flex-1">
                <span className="block font-display font-semibold text-white">{l.label}</span>
                <span className="block text-xs text-white/70">{l.desc}</span>
              </span>
              <ArrowUpRight size={18} className="text-white/50 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <p className="rise mt-7 text-center text-xs text-white/70" style={{ animationDelay: '0.6s' }}>
          Juga di GitHub, Instagram, dan X sebagai <span className="font-semibold text-white/85">{PROFIL.handle}</span>
        </p>
        <p className="rise mt-6 text-center text-[11px] leading-relaxed text-white/60" style={{ animationDelay: '0.7s' }}>
          Persona fiktif untuk purwarupa desain — akun, klien, dan angka hanya contoh.
        </p>
      </div>
    </main>
  );
}
