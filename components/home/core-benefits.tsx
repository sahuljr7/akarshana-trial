"use client";

import { motion } from "framer-motion";
import { Battery, Leaf, Scale, Wallet } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { staggerChildren, scaleOnHover } from "@/lib/animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Move benefits data to a separate file if it grows larger
const benefits = [
  {
    icon: Leaf,
    title: "Sustainable Power",
    description: "Zero-emission energy generation",
    metrics: "100% renewable energy source",
    details: "Our gravity-powered system produces clean energy without any harmful emissions or environmental impact.",
  },
  {
    icon: Battery,
    title: "Reliable Supply",
    description: "24/7 consistent power output",
    metrics: "99.9% uptime guarantee",
    details: "Continuous power generation with minimal maintenance requirements and built-in redundancy.",
  },
  {
    icon: Scale,
    title: "Scalable Solution",
    description: "Adaptable to any requirement",
    metrics: "5kW to 1MW capacity range",
    details: "Modular design allows for easy scaling based on power needs and available space.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective",
    description: "Lower lifetime costs",
    metrics: "60% cost reduction over 10 years",
    details: "Significant savings on operational costs compared to traditional power sources.",
  },
];

export function CoreBenefits() {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Core Benefits
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the advantages of gravity-powered energy
          </p>
        </AnimatedSection>

        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={scaleOnHover}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{benefit.title}</CardTitle>
                        <CardDescription>{benefit.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm font-medium">{benefit.metrics}</div>
                      <p className="text-sm text-muted-foreground">
                        {benefit.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}