// apps/nexa-agro-web/src/app/account/page.tsx
export default function AccountPage() {
  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-[#f2f4ef] p-8 shadow-[0_20px_40px_rgba(8,28,12,0.16)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#74a84a]">
          Mi cuenta
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#1e5728]">
          Perfil del usuario
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6f8575]">
          Aquí luego puedes mostrar datos del cliente, historial de pedidos,
          direcciones y configuración.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#1e5728]">Nombre</h2>
            <p className="mt-2 text-sm text-[#6f8575]">José Ivan Polo</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#1e5728]">Correo</h2>
            <p className="mt-2 text-sm text-[#6f8575]">usuario@nexaagro.com</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#1e5728]">Pedidos</h2>
            <p className="mt-2 text-sm text-[#6f8575]">
              12 órdenes registradas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
