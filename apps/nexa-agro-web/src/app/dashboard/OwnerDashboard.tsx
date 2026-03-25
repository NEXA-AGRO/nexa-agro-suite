export default function OwnerDashboard() {
  const stats = [
    { label: 'Ganancias del mes', value: '$24.8M', hint: '+12.4%' },
    { label: 'Pagos masivos', value: '8', hint: 'Pendientes' },
    { label: 'Órdenes activas', value: '126', hint: '+8 hoy' },
    { label: 'Mapa premium', value: 'Disponible', hint: 'Activa' },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <article
          key={item.label}
          className="rounded-[24px] border border-[#E0E0E0] bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-[#6b7d8d]">{item.label}</p>
          <p className="mt-3 text-3xl font-black text-[#1B3B5F]">
            {item.value}
          </p>
          <p className="mt-2 text-sm font-medium text-[#2E7D32]">{item.hint}</p>
        </article>
      ))}
    </div>
  );
}
