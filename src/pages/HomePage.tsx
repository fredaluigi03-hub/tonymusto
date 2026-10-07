import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { StackingBlock } from '../components/common/StackingBlock';
import { PhilosophySection } from '../components/philosophy/PhilosophySection';
import { ServicesRail } from '../components/services/ServicesRail';
import { WeddingTeaser } from '../components/home/WeddingTeaser';
import { ShopSection } from '../components/shop/ShopSection';
import { AwardsStrip } from '../components/awards/AwardsStrip';
import { ContactSection } from '../components/contact/ContactSection';

export const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <StackingBlock id="filosofia" className="flex items-center bg-pearl-100">
      <PhilosophySection />
    </StackingBlock>
    <ServicesRail />
    <StackingBlock id="wedding" className="flex items-center bg-white">
      <WeddingTeaser />
    </StackingBlock>
    <StackingBlock id="shop" className="flex items-center bg-pearl-100">
      <ShopSection />
    </StackingBlock>
    <StackingBlock id="awards" className="flex items-center bg-white">
      <AwardsStrip />
    </StackingBlock>
    <StackingBlock id="contatti" className="flex items-center bg-neutral-950 text-white">
      <ContactSection />
    </StackingBlock>
  </>
);
