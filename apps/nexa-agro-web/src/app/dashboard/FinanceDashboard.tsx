// apps/nexa-agro-web/src/components/dashboard/FinanceDashboard.tsx
export default function FinanceDashboard() {
  const requests = [
    {
      id: 'REQ-101',
      requester: 'Chef Central',
      detail: '50 kg de tomate',
      amount: '$150.000',
      status: 'Pendiente',
    },
    {
      id: 'REQ-102',
      requester: 'Comprador Norte',
      detail: '20 cajas de lechuga',
      amount: '$210.000',
      status: 'Pendiente',
    },
  ];

  return (
    <div className="space-y-5">
      {requests.map((item) => (
        <article
          key={item.id}
          className="rounded-[24px] bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-[#1e5728]">{item.id}</p>
              <p className="mt-2 text-sm text-[#6f8575]">
                {item.requester} solicitó {item.detail}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#2f6b34]">
                {item.amount}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-xl border border-[#E0E0E0] bg-[#f7faf7] px-4 py-3 text-sm font-semibold text-[#1B3B5F]">
                Revisar
              </button>
              <button className="rounded-xl bg-[#FFD24D] px-4 py-3 text-sm font-semibold text-[#1B3B5F] hover:bg-[#f0c63f]">
                Aprobar pago
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
