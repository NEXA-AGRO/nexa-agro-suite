// apps/nexa-agro-web/src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-[#f2f4ef] p-8 shadow-[0_20px_40px_rgba(8,28,12,0.16)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#74a84a]">
          Historia
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#1e5728]">
          Sobre Nexa Agro
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6f8575]">
          Este prototipo combina una landing moderna, una tienda agro organizada
          y una base para un dashboard administrativo. La idea es luego
          conectarlo a un backend real y evolucionarlo hacia una plataforma más
          completa.
        </p>
      </section>
    </div>
  );
}
