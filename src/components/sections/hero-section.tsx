import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container py-20 md:py-28">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-vbs-red">
          Corporate Design System
        </p>
        <h1 className="h1 md:text-[4rem]">
          Virtual Building Studio
        </h1>
        <p className="p-lead">
          Clean, scalable and production-ready Next.js architecture with reusable
          components and modern UI foundations.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg">Explore Services</Button>
          <Button size="lg" variant="outline">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
