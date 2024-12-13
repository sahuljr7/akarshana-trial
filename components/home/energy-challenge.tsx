"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Battery, Zap } from "lucide-react";

export function EnergyChallenge() {
  const [progress, setProgress] = useState(0);
  const [energySaved, setEnergySaved] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEnergySaved(prev => prev + 0.1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Global Energy Challenge
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            66% of global electricity still comes from fossil fuels
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Battery className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Current Energy Mix</h3>
            </div>
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">
              Fossil Fuels Dependency: {progress}%
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Real-time Impact</h3>
            </div>
            <div className="text-3xl font-bold mb-2">
              {energySaved.toFixed(1)} MWh
            </div>
            <p className="text-sm text-muted-foreground">
              Potential energy saved with gravity power
            </p>
          </Card>

          <Card className="p-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Comparison</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Traditional Power</span>
                <span className="text-destructive">High CO₂</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Gravity Power</span>
                <span className="text-primary">Zero Emissions</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}