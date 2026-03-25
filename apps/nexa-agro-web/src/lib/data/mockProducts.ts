// apps/nexa-agro-web/src/lib/data/mockProducts.ts

import { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Semillas Premium de Maíz',
    category: 'Semillas',
    price: 85000,
    stock: 35,
    image: '/products/semillas-maiz.jpg',
    description: 'Semillas de alto rendimiento para cultivos tecnificados.',
    featured: true,
  },
  {
    id: 2,
    name: 'Fertilizante Orgánico BioGrow',
    category: 'Fertilizantes',
    price: 120000,
    stock: 18,
    image: '/products/fertilizante-organico.jpg',
    description: 'Mejora la estructura del suelo y fortalece el desarrollo.',
    featured: true,
  },
  {
    id: 3,
    name: 'Kit de Riego Inteligente',
    category: 'Riego',
    price: 289000,
    stock: 12,
    image: '/products/kit-riego.jpg',
    description: 'Solución eficiente para riego controlado y ahorro de agua.',
    featured: true,
  },
  {
    id: 4,
    name: 'Pala Pro Agro Steel',
    category: 'Herramientas',
    price: 64000,
    stock: 40,
    image: '/products/pala-pro.jpg',
    description: 'Herramienta resistente para trabajo intensivo de campo.',
    featured: true,
  },
  {
    id: 5,
    name: 'Protector Antihongos CropSafe',
    category: 'Protección',
    price: 97000,
    stock: 20,
    image: '/products/fungicida.jpg',
    description: 'Protección para hojas y frutos ante enfermedades comunes.',
  },
  {
    id: 6,
    name: 'Semillas Selectas de Tomate',
    category: 'Semillas',
    price: 74000,
    stock: 26,
    image: '/products/semillas-tomate.jpg',
    description: 'Ideal para producción uniforme y excelente germinación.',
  },
];
