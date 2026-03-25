// apps/nexa-agro-web/src/components/home/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Sprout, Tractor } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="container-shell pt-8 sm:pt-10">
      <div className="soft-card hero-grid-decoration relative overflow-hidden rounded-[32px] bg-white">
        <div className="absolute left-6 top-8 h-28 w-28 rounded-full bg-[#A5D64F] opacity-20 blur-2xl" />
        <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-[#4FB3E3] opacity-20 blur-2xl" />
        <div className="absolute bottom-10 right-1/4 h-24 w-24 rounded-full bg-[#FFD24D] opacity-20 blur-2xl" />

        <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#A5D64F]/30 bg-[#f7faf7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">
                <Leaf className="h-4 w-4" />
                Agro tech moderno
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#1B3B5F] sm:text-5xl lg:text-7xl">
              Agricultura
              <br />
              <span className="text-[#2E7D32]">Inteligente</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#4d6377] sm:text-lg">
              Nexa Agro conecta tienda, operaciones y análisis en una sola
              experiencia. Compra insumos, organiza pedidos y luego accede a un
              dashboard con datos productivos mockeados.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#6b7d8d]">
              Un prototipo visual inspirado en una estética agro premium, con
              una experiencia limpia, moderna y enfocada en crecimiento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E7D32] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:translate-y-[-1px] hover:bg-[#256a2a]"
              >
                Explorar tienda
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1B3B5F]/10 bg-white px-6 py-4 text-sm font-semibold text-[#1B3B5F] transition hover:bg-[#f2f7fb]"
              >
                Ver dashboard demo
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E0E0E0] bg-white p-4">
                <Sprout className="mb-3 h-5 w-5 text-[#2E7D32]" />
                <p className="text-sm font-bold text-[#1B3B5F]">Cultivos</p>
                <p className="mt-1 text-xs text-[#6b7d8d]">
                  Gestión y seguimiento visual
                </p>
              </div>

              <div className="rounded-2xl border border-[#E0E0E0] bg-white p-4">
                <Tractor className="mb-3 h-5 w-5 text-[#2E7D32]" />
                <p className="text-sm font-bold text-[#1B3B5F]">Insumos</p>
                <p className="mt-1 text-xs text-[#6b7d8d]">
                  Compra organizada y rápida
                </p>
              </div>

              <div className="rounded-2xl border border-[#E0E0E0] bg-white p-4">
                <Leaf className="mb-3 h-5 w-5 text-[#2E7D32]" />
                <p className="text-sm font-bold text-[#1B3B5F]">Analítica</p>
                <p className="mt-1 text-xs text-[#6b7d8d]">
                  Métricas listas para crecer
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-[620px]">
              <div className="absolute -left-5 top-10 hidden h-32 w-20 rounded-r-[30px] bg-[#A5D64F] lg:block" />
              <div className="absolute -right-8 bottom-[-24px] hidden h-48 w-40 rounded-l-[36px] bg-[#1B3B5F] lg:block" />

              <div className="relative overflow-hidden rounded-[28px] border-[10px] border-white bg-[#eef5ef] shadow-2xl">
                <div className="absolute left-5 top-5 z-10 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#2E7D32]" />
                  <span className="h-3 w-3 rounded-full bg-[#4FB3E3]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFD24D]" />
                </div>

                <Image
                  src="/images/hero-farmer.jpg"
                  alt="Agricultor usando tablet en cultivo"
                  width={900}
                  height={700}
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 left-6 rounded-2xl bg-white px-4 py-3 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b7d8d]">
                  Producción
                </p>
                <p className="mt-1 text-lg font-bold text-[#1B3B5F]">
                  +18% este mes
                </p>
              </div>

              <div className="absolute right-5 top-8 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b7d8d]">
                  Pedidos
                </p>
                <p className="mt-1 text-lg font-bold text-[#1B3B5F]">
                  126 activos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
