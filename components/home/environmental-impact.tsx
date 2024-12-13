"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Globe, Share2, TreePine } from "lucide-react";

export function EnvironmentalImpact() {
  const [usage, setUsage] = useState(50);
  const carbonSaved = usage * 0.4; // 0.4 kg CO2 per kWh
  const treesEquivalent = Math.round(carbonSaved / 21.7); // One tree absorbs about 21.7 kg CO2 per year

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Environmental Impact
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Calculate your potential environmental savings
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Carbon Footprint Calculator</h3>
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Monthly Energy Usage (kWh)
                </label>
                <Slider
                  value={[usage]}
                  onValueChange={(value) => setUsage(value[0])}
                  max={1000}
                  step={10}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {usage} kWh per month
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Carbon Saved</span>
                  <span className="font-bold">{carbonSaved.toFixed(1)} kg CO₂/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Equivalent to</span>
                  <span className="font-bold">{treesEquivalent} trees planted</span>
                </div>
              </div>

              <Button className="w-full" onClick={() => {
                // Share functionality would go here
              }}>
                <Share2 className="w-4 h-4 mr-2" />
                Share Your Impact
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Global Impact Zones</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium">Implementation Regions</div>
                  <p className="text-sm text-muted-foreground">
                    Active in 5 continents, 20+ countries
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TreePine className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium">Environmental Preservation</div>
                  <p className="text-sm text-muted-foreground">
                    Protecting 1000+ hectares of forest equivalent
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}