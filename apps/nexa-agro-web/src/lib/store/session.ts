// apps/nexa-agro-web/src/lib/store/session.ts

import { UserProfileRole } from "../types/auth";

const SESSION_KEY = 'nexa_agro_session';
const PROFILE_KEY = 'nexa_agro_selected_profile';

export function setMockSession() {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      isLoggedIn: true,
      company: 'Nexa Agro Demo Company',
      user: 'Jose Ivan',
    }),
  );
}

export function getMockSession() {
  if (typeof window === 'undefined') return null;

  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function clearMockSession() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(PROFILE_KEY);
}

export function setSelectedProfile(role: UserProfileRole) {
  localStorage.setItem(PROFILE_KEY, role);
}

export function getSelectedProfile(): UserProfileRole | null {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(PROFILE_KEY) as UserProfileRole | null) ?? null;
}
