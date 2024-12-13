import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative flex h-full items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
            Gravity-Powered Electrical Energy Generation
          </h1>
          <p className="text-xl text-gray-200">
            Elevate. Innovate. Levitate. Lifting dreams, grounding reality.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}