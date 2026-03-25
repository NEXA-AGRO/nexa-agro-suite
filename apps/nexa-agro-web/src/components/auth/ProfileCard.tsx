// apps/nexa-agro-web/src/components/auth/ProfileCard.tsx
'use client';

import { UserProfile } from '@/lib/types/auth';
import { Leaf, ShoppingCart, WalletCards } from 'lucide-react';

type ProfileCardProps = {
  profile: UserProfile;
  onSelect: (profile: UserProfile) => void;
};

function getIcon(role: UserProfile['role']) {
  switch (role) {
    case 'owner':
      return Leaf;
    case 'buyer':
      return ShoppingCart;
    case 'finance':
      return WalletCards;
    default:
      return Leaf;
  }
}

function getColors(role: UserProfile['role']) {
  switch (role) {
    case 'owner':
      return 'from-[#2E7D32] to-[#A5D64F]';
    case 'buyer':
      return 'from-[#1B3B5F] to-[#4FB3E3]';
    case 'finance':
      return 'from-[#FFD24D] to-[#e8b923]';
    default:
      return 'from-[#2E7D32] to-[#A5D64F]';
  }
}

export default function ProfileCard({ profile, onSelect }: ProfileCardProps) {
  const Icon = getIcon(profile.role);
  const gradient = getColors(profile.role);

  return (
    <button
      onClick={() => onSelect(profile)}
      className="group w-full text-left transition"
      type="button"
    >
      <div className="overflow-hidden rounded-[28px] border border-[#E0E0E0] bg-white shadow-[0_18px_38px_rgba(10,30,14,0.10)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(10,30,14,0.14)]">
        <div className={`bg-gradient-to-br ${gradient} p-6`}>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <Icon className="h-8 w-8 text-white" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {profile.label}
          </p>
          <h3 className="mt-2 text-2xl font-black text-white">
            {profile.name}
          </h3>
        </div>

        <div className="p-5">
          <p className="text-sm leading-6 text-[#5f6f7c]">
            {profile.description}
          </p>

          <div className="mt-5 inline-flex rounded-xl bg-[#f2f7fb] px-4 py-3 text-sm font-semibold text-[#1B3B5F] transition group-hover:bg-[#e7f1f9]">
            Entrar con este perfil
          </div>
        </div>
      </div>
    </button>
  );
}
