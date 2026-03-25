// apps/nexa-agro-web/src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#2f6b34]">
      <div className="container-shell py-8">
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/80 md:flex-row">
          <p>
            © {new Date().getFullYear()} Nexa Agro. Todos los derechos
            reservados.
          </p>
          <p>Prototipo UI agro-commerce + dashboard</p>
        </div>
      </div>
    </footer>
  );
}
