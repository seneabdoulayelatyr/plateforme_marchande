import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionCallToActionProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
  };
}

const SectionCallToAction = ({
  heading = "Titre de la section",
  description = "Description de la section lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores eligendi illum sit fugit voluptas, quas doloribus nemo ipsum alias? Facere atque delectus nostrum, sint dicta repudiandae animi velit ad!",
  buttons = {
    primary: {
      text: "Bouton principal",
      url: "#",
    },
  },
}: SectionCallToActionProps) => {
  return (
    <section className="pb-32">
      <div className="container">
        <div className="bg-accent flex w-full flex-col gap-8 overflow-hidden rounded-lg p-4 md:p-8 md:rounded-xl lg:flex-row lg:items-center">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl ">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          {buttons.primary && (
            <Button asChild variant="default" size="lg">
              <Link href={`${buttons.primary.url}`}>
                {buttons.primary.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export { SectionCallToAction };
