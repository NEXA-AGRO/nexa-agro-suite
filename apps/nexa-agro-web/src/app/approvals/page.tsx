import FinanceDashboard from '../dashboard/FinanceDashboard';

export default function ApprovalsPage() {
  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-[#f2f4ef] p-8 shadow-[0_20px_40px_rgba(8,28,12,0.16)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#74a84a]">
          Aprobaciones
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#1e5728]">
          Solicitudes de pago
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6f8575]">
          Vista pensada para el perfil financiero, donde revisa y aprueba pagos
          de pedidos solicitados por el área operativa.
        </p>

        <div className="mt-8">
          <FinanceDashboard />
        </div>
      </section>
    </div>
  );
}
