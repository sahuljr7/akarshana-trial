import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export function TeamCard({ name, role, image }: TeamMemberProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}