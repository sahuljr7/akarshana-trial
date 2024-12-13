import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Leaf, Wallet } from "lucide-react";

const team = [
  {
    name: "Annkit Sarkar",
    role: "Project Manager & Energy Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Tanishqa Gupta",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sahul Kumar Parida",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Saswat Panda",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Innovative Technology",
    description: "Pioneering gravity-powered solutions for sustainable energy generation",
  },
  {
    icon: Battery,
    title: "Reliable Energy",
    description: "Ensuring consistent and dependable power supply for our customers",
  },
  {
    icon: Wallet,
    title: "Cost Efficiency",
    description: "Delivering affordable energy solutions with lower lifetime costs",
  },
];

export default function About() {
  return (
    <div className="container py-12">
      <section id="mission">
        <SectionHeader
          title="Our Mission"
          description="To revolutionize energy generation through innovative gravity-powered technology, making sustainable power accessible to all."
        />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col items-center p-6">
                <Icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-center text-sm text-gray-500">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-24" id="team">
        <SectionHeader
          title="Meet Our Team"
          description="The innovative minds behind Akarshana's gravity-powered technology"
          className="mb-12"
        />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}