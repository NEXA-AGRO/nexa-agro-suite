// apps/nexa-agro-web/src/components/layout/Navbar.tsx
import Link from 'next/link';
import { Leaf, ShoppingCart, UserCircle2 } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Tienda', href: '/shop' },
  { label: 'Productos', href: '/shop' },
  { label: 'Historia', href: '/about' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E0E0E0] bg-white/95 backdrop-blur-md">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-md">
              <Leaf className="h-6 w-6 text-[#2f6b34]" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold uppercase tracking-wide text-white">
                Nexa Agro
              </p>
              <p className="text-xs text-white/70">Agro tech & commerce</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-sm font-medium text-[#1B3B5F] transition hover:text-[#2E7D32]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E0E0E0] bg-[#f7faf7] text-[#1B3B5F] transition hover:bg-[#eef6ea]"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>

            <Link
              href="/account"
              className="hidden h-11 items-center gap-2 rounded-full border border-[#E0E0E0] bg-[#f7faf7] px-4 text-sm font-medium text-[#1B3B5F] transition hover:bg-[#eef6ea] sm:flex"
            >
              <UserCircle2 className="h-4 w-4" />
              Cuenta
            </Link>

            <Link
              href="/login"
              className="rounded-full bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#256a2a]"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
