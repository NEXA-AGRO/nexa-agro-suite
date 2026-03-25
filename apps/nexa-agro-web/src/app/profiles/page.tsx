// apps/nexa-agro-web/src/app/profiles/page.tsx
import ProfileSelector from '@/components/auth/ProfileSelector';

export default function ProfilesPage() {
  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-[#f2f4ef] p-8 shadow-[0_20px_40px_rgba(8,28,12,0.16)] sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#74a84a]">
            NEXA AGRO SUITE
          </p>
          <h1 className="mt-3 text-3xl font-black text-[#1e5728] sm:text-5xl">
            ¿Quién está usando la cuenta?
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#647c69] sm:text-base">
            Selecciona el perfil con el que deseas entrar. Cada rol tiene
            permisos y vistas diferentes dentro de la plataforma empresarial.
          </p>
        </div>

        <div className="mt-10">
          <ProfileSelector />
        </div>
      </section>
    </div>
  );
}
