// apps/nexa-agro-web/src/types/auth.ts
export type UserProfileRole = 'owner' | 'buyer' | 'finance';

export type UserProfile = {
  id: string;
  name: string;
  role: UserProfileRole;
  label: string;
  description: string;
};
