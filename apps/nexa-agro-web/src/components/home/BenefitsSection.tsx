// apps/nexa-agro-web/src/components/home/BenefitsSection.tsx
import { BarChart3, ShoppingBag, ShieldCheck, Sprout } from 'lucide-react';

const items = [
  {
    title: 'Gestión agrícola',
    description:
      'Organiza procesos y visualiza operaciones en una misma experiencia.',
    icon: Sprout,
  },
  {
    title: 'Tienda integrada',
    description:
      'Compra productos agrícolas desde una interfaz moderna y ordenada.',
    icon: ShoppingBag,
  },
  {
    title: 'Panel analítico',
    description:
      'Conecta la operación con métricas visuales para tomar decisiones.',
    icon: BarChart3,
  },
  {
    title: 'Confianza operativa',
    description:
      'Prototipo enfocado en claridad, escalabilidad y experiencia premium.',
    icon: ShieldCheck,
  },
];

export default function BenefitsSection() {
  return (
    <section className="container-shell mt-14">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#E0E0E0] bg-white p-6 shadow-[0_18px_34px_rgba(10,30,14,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ea]">
                <Icon className="h-6 w-6 text-[#2E7D32]" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#1B3B5F]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7d8d]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
