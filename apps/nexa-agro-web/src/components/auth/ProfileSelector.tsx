// apps/nexa-agro-web/src/components/auth/ProfileSelector.tsx
'use client';

import { useRouter } from 'next/navigation';
import ProfileCard from './ProfileCard';
import { mockProfiles } from '@/lib/data/mockProfiles';
import { setSelectedProfile } from '@/lib/store/session';
import { UserProfile } from '@/lib/types/auth';

export default function ProfileSelector() {
  const router = useRouter();

  const handleSelect = (profile: UserProfile) => {
    setSelectedProfile(profile.role);

    if (profile.role === 'buyer') {
      router.push('/shop');
      return;
    }

    if (profile.role === 'finance') {
      router.push('/approvals');
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {mockProfiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
