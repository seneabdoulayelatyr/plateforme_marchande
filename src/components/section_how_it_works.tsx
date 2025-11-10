import { Badge } from "@/components/ui/badge";

interface SectionHowItWorksFeature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface SectionHowItWorksProps {
  label?: string;
  title?: string;
  features: SectionHowItWorksFeature[];
}

const SectionHowItWorks = ({
  label,
  title,
  features,
}: SectionHowItWorksProps) => {
  return (
    <section className="py-16">
      <div className="container">
        {(label || title) && (
          <div className="mb-12 flex max-w-3xl flex-col gap-4">
            <Badge variant="secondary">{label}</Badge>
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div className="flex gap-6 space-y-4 rounded-lg md:block" key={idx}>
              <span className="bg-accent flex size-10 shrink-0 items-center justify-center rounded-full md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.heading}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SectionHowItWorks };
