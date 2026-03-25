// apps/nexa-agro-web/src/app/shop/page.tsx
import ProductCard from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/data/mockProducts';

const categories = [
  'Todos',
  'Semillas',
  'Fertilizantes',
  'Riego',
  'Herramientas',
  'Protección',
];

export default function ShopPage() {
  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-white p-6 shadow-[0_20px_40px_rgba(8,28,12,0.10)] sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mt-2 text-3xl font-black text-[#1B3B5F] sm:text-4xl">
              Nexa Agro Store
            </p>
            <h1 className="mt-2 text-3xl font-black text-[#1e5728] sm:text-4xl">
              Tienda agrícola
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b7d8d] sm:text-base">
              Explora una colección de productos agro organizados por categoría,
              con experiencia visual limpia y acciones rápidas para agregar al
              carrito.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E0E0E0] bg-[#f7faf7] px-4 py-3 text-sm text-[#5f6f7c]">
            {mockProducts.length} productos disponibles
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === 'Todos'
                  ? 'bg-[#1B3B5F] text-white'
                  : 'border border-[#E0E0E0] bg-[#f7faf7] text-[#1B3B5F] hover:bg-[#f2f7fb]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
