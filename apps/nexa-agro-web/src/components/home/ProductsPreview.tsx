// apps/nexa-agro-web/src/components/home/ProductsPreview.tsx
import Link from 'next/link';
import ProductCard from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/data/mockProducts';

export default function ProductsPreview() {
  const featured = mockProducts.filter((item) => item.featured);

  return (
    <section className="container-shell mt-14">
      <div className="rounded-[32px] bg-white px-6 py-8 shadow-[0_20px_40px_rgba(8,28,12,0.10)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">Productos destacados</h2>
            <p className="section-subtitle">
              Una tienda limpia y organizada para semillas, fertilizantes, riego
              y más.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex w-fit rounded-xl border border-[#1B3B5F]/10 bg-[#f7faf7] px-5 py-3 text-sm font-semibold text-[#1B3B5F] transition hover:bg-[#f2f7fb]"
          >
            Ver tienda completa
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
