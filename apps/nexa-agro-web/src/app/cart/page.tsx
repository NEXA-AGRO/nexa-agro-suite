// apps/nexa-agro-web/src/app/cart/page.tsx
import { formatCOP } from '@/lib/utils/currency';

const cartItems = [
  { id: 1, name: 'Semillas Premium de Maíz', qty: 2, price: 85000 },
  { id: 2, name: 'Fertilizante Orgánico BioGrow', qty: 1, price: 120000 },
];

const subtotal = cartItems.reduce(
  (acc, item) => acc + item.qty * item.price,
  0,
);

export default function CartPage() {
  return (
    <div className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-[28px] bg-[#f2f4ef] p-6 shadow-[0_18px_36px_rgba(8,28,12,0.14)]">
          <h1 className="text-3xl font-black text-[#1e5728]">Carrito</h1>
          <p className="mt-2 text-sm text-[#6f8575]">
            Resumen mockeado de productos seleccionados.
          </p>

          <div className="mt-8 space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-[#16351f]/10 bg-white p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <h2 className="font-bold text-[#1e5728]">{item.name}</h2>
                  <p className="mt-1 text-sm text-[#6f8575]">
                    Cantidad: {item.qty}
                  </p>
                </div>

                <p className="text-lg font-extrabold text-[#2f6b34]">
                  {formatCOP(item.qty * item.price)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <aside className="h-fit rounded-[28px] bg-white p-6 shadow-[0_18px_36px_rgba(8,28,12,0.14)]">
          <h2 className="text-xl font-bold text-[#1e5728]">Resumen</h2>

          <div className="mt-6 space-y-3 text-sm text-[#59715f]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Envío</span>
              <span>{formatCOP(15000)}</span>
            </div>
            <div className="border-t border-[#16351f]/10 pt-3 text-base font-bold text-[#1e5728]">
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>{formatCOP(subtotal + 15000)}</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-[#74a84a] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95">
            Continuar compra
          </button>
        </aside>
      </div>
    </div>
  );
}
