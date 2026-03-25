// apps/nexa-agro-web/src/components/dashboard/BuyerDashboard.tsx
import Link from 'next/link';

export default function BuyerDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-[24px] bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#1e5728]">
          Marketplace operativo
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#6f8575]">
          Desde aquí el comprador o chef puede navegar productos, armar el
          carrito y solicitar pedidos para aprobación.
        </p>

        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-xl bg-[#2f6b34] px-5 py-3 text-sm font-semibold text-white"
        >
          Ir a la tienda
        </Link>
      </div>

      <div className="rounded-[24px] bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#1e5728]">Permisos</h2>
        <ul className="mt-4 space-y-3 text-sm text-[#6f8575]">
          <li>• Ver productos</li>
          <li>• Agregar al carrito</li>
          <li>• Solicitar pedido</li>
          <li>• No puede aprobar pagos</li>
        </ul>
      </div>
    </div>
  );
}
