'use client';

import { useRouter } from 'next/navigation';
import { setMockSession } from '@/lib/store/session';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMockSession();
    router.push('/profiles');
  };

  return (
    <div className="container-shell py-10">
      <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-[0_22px_42px_rgba(8,28,12,0.10)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E7D32]">
          Acceso
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#1B3B5F]">Ingresar</h1>
        <p className="mt-3 text-sm text-[#6b7d8d]">
          Después del acceso podrás seleccionar el perfil empresarial.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1B3B5F]">
              Correo
            </label>
            <input
              type="email"
              placeholder="correo@empresa.com"
              className="w-full rounded-xl border border-[#E0E0E0] bg-white px-4 py-3 outline-none transition focus:border-[#4FB3E3]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#1B3B5F]">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-[#E0E0E0] bg-white px-4 py-3 outline-none transition focus:border-[#4FB3E3]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#1B3B5F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16314f]"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
