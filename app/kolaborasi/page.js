import { LAYANAN, SITE, SLOT, rp } from '@/lib/nova';
import Kembali from '../components/Kembali';
import FormKolaborasi from '../components/FormKolaborasi';

export const metadata = {
  title: 'Kolaborasi & Tarif',
  description: 'Jenis proyek yang dikerjakan Nova Ardhana, tarif mulai, slot kosong tiga bulan ke depan, dan formulir untuk mengajak ngobrol 20 menit.',
  alternates: { canonical: `${SITE}/kolaborasi` },
};

const LANGKAH = ['Ngobrol 20 menit', 'Proposal satu halaman', 'Prototipe minggu pertama', 'Bangun & uji di ponsel sungguhan'];

export default function Kolaborasi() {
  return (
    <main className="relative min-h-screen px-4 py-10 sm:py-14">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Kembali judul="Kolaborasi" />

      <div className="mx-auto mt-12 max-w-3xl">
        <h1 className="rise text-4xl font-bold text-gradient sm:text-5xl">Mari bangun yang terasa hidup</h1>
        <p className="rise mt-4 max-w-xl text-white/75" style={{ animationDelay: '0.08s' }}>Saya mengambil paling banyak dua proyek sekaligus supaya setiap animasi sempat diuji di ponsel murah.</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {LAYANAN.map((l) => (
            <li key={l.nama} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h2 className="font-semibold text-white">{l.nama}</h2>
              <p className="mt-3 font-display text-xl font-semibold text-white">mulai {rp(l.mulai)}</p>
              <p className="text-xs text-white/65">{l.waktu}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{l.isi}</p>
            </li>
          ))}
        </ul>

        <section aria-labelledby="slot" className="mt-12">
          <h2 id="slot" className="text-2xl font-bold text-white">Slot kosong</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {SLOT.map(([b, n]) => (
              <li key={b} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="text-white/85">{b}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${n ? 'bg-teal-300/15 text-teal-200' : 'bg-white/10 text-white/70'}`}>{n ? `${n} slot` : 'penuh'}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cara" className="mt-12">
          <h2 id="cara" className="text-2xl font-bold text-white">Cara kerja</h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-4">
            {LANGKAH.map((s, i) => (
              <li key={s} className="rounded-2xl border border-white/10 p-4">
                <span className="font-display text-sm text-teal-200">0{i + 1}</span>
                <p className="mt-1 text-sm text-white/85">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <FormKolaborasi />
        <p className="mt-8 text-center text-[11px] text-white/60">Tarif dan slot adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
