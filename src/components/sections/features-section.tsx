import { Building, ClipboardCheck, Users } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Architecture Planning",
    description: "Design workflows with structured, scalable and maintainable systems.",
    icon: Building,
  },
  {
    title: "Project Execution",
    description: "Deliver predictable outcomes through reusable processes and clean code.",
    icon: ClipboardCheck,
  },
  {
    title: "Client Collaboration",
    description: "Create transparent touchpoints and improve team communication.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section className="container rounded-2xl bg-vbs-soft py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vbs-black md:text-3xl">
          Core Capabilities
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <feature.icon className="mb-4 h-8 w-8 text-primary" />
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription className="mt-2">{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
