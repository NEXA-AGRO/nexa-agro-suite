// apps/nexa-agro-web/src/lib/data/mockProfiles.ts

import { UserProfile } from "../types/auth";


export const mockProfiles: UserProfile[] = [
  {
    id: '1',
    name: 'Administrador',
    role: 'owner',
    label: 'Owner',
    description:
      'Acceso total a métricas, ganancias, mapa premium y autorización de pagos masivos.',
  },
  {
    id: '2',
    name: 'Operativo',
    role: 'buyer',
    label: 'Comprador / Chef',
    description:
      'Puede explorar el marketplace, agregar productos al carrito y solicitar pedidos.',
  },
  {
    id: '3',
    name: 'Financiero',
    role: 'finance',
    label: 'Contador',
    description:
      'Recibe solicitudes de compra y es el único que puede aprobar pagos con la cuenta empresarial.',
  },
];
