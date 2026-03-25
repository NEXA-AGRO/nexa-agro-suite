// apps/nexa-agro-web/src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductsPreview from '@/components/home/ProductsPreview';

export default function HomePage() {
  return (
    <div className="pb-16">
      <HeroSection />
      <BenefitsSection />
      <ProductsPreview />
    </div>
  );
}
