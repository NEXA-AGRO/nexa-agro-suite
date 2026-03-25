// apps/nexa-agro-web/src/components/shop/ProductCard.tsx
'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

import { formatCOP } from '@/lib/utils/currency';
import { Product } from '@/lib/types/product';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log('[cart] agregar producto:', product);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E0E0E0] bg-white shadow-[0_14px_32px_rgba(15,36,20,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,36,20,0.10)]">
      <div className="relative overflow-hidden bg-[#f4f8f4]">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={380}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#eef6ea] px-3 py-1 text-xs font-semibold text-[#2E7D32] shadow">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="line-clamp-2 min-h-[64px] text-lg font-bold text-[#1B3B5F]">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 min-h-[56px] text-sm text-[#6b7d8d]">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#83a087]">
              Precio
            </p>
            <p className="mt-1 text-xl font-extrabold text-[#2E7D32]">
              {formatCOP(product.price)}
            </p>
          </div>

          <div className="rounded-xl bg-[#f4f8f4] px-3 py-2 text-right">
            <p className="text-xs text-[#6b7d8d]">Stock</p>
            <p className="text-sm font-bold text-[#1B3B5F]">{product.stock}</p>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E7D32] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#256a2a]"
        >
          <ShoppingCart className="h-4 w-4" />
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
