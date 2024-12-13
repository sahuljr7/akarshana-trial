import { SectionHeader } from "@/components/ui/section-header";
import { PriceCard } from "@/components/ui/price-card";

const plans = [
  {
    title: "Basic",
    price: "₹49,999",
    description: "Perfect for small homes",
    features: [
      "5kW Gravity-Powered System",
      "Basic Installation",
      "1-Year Warranty",
      "Email Support",
      "Monthly Performance Reports",
    ],
  },
  {
    title: "Standard",
    price: "₹99,999",
    description: "Ideal for medium businesses",
    features: [
      "15kW Gravity-Powered System",
      "Professional Installation",
      "3-Year Warranty",
      "24/7 Phone Support",
      "Real-time Monitoring",
      "Quarterly Maintenance",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "Custom",
    description: "For large enterprises",
    features: [
      "Custom Capacity System",
      "Premium Installation",
      "5-Year Warranty",
      "Dedicated Support Team",
      "Advanced Analytics",
      "Monthly Maintenance",
      "Energy Optimization",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your energy needs"
      />
      
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PriceCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}