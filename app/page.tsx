import { HeroSection } from "@/components/home/hero-section";
import { EnergyChallenge } from "@/components/home/energy-challenge";
import { CoreBenefits } from "@/components/home/core-benefits";
import { EnvironmentalImpact } from "@/components/home/environmental-impact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EnergyChallenge />
      <CoreBenefits />
      <EnvironmentalImpact />
    </>
  );
}