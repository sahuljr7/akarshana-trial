import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6">
        <Icon className="h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-center text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}