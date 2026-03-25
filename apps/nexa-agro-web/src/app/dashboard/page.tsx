'use client';

import { useEffect, useState } from 'react';
import { getSelectedProfile } from '@/lib/store/session';
import OwnerDashboard from './OwnerDashboard';
import BuyerDashboard from './BuyerDashboard';
import FinanceDashboard from './FinanceDashboard';
import { UserProfileRole } from '@/lib/types/auth';

export default function DashboardPage() {
  const [role, setRole] = useState<UserProfileRole | null>(null);

  useEffect(() => {
    setRole(getSelectedProfile());
  }, []);

  return (
    <div className="container-shell py-10">
      <section className="rounded-[32px] bg-white p-6 shadow-[0_20px_40px_rgba(8,28,12,0.10)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#74a84a]">
          Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#1B3B5F] sm:text-4xl">
          Panel por perfil
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b7d8d]">
          Esta vista cambia según el tipo de usuario seleccionado después del
          login.
        </p>

        <div className="mt-8">
          {role === 'owner' && <OwnerDashboard />}
          {role === 'buyer' && <BuyerDashboard />}
          {role === 'finance' && <FinanceDashboard />}
          {!role && (
            <div className="rounded-2xl bg-white p-6 text-sm text-[#6f8575] shadow-sm">
              No hay perfil seleccionado todavía.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
