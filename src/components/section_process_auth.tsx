"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SectionProcessAuthFeature {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface SectionProcessAuthProps {
  features: SectionProcessAuthFeature[];
}

const SectionProcessAuth = ({ features }: SectionProcessAuthProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section >
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="transition-opacity hover:opacity-80"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="no-underline! cursor-pointer py-5 transition"
                  >
                    <h4
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-base">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="bg-muted relative m-auto hidden w-1/2 overflow-hidden rounded-xl md:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-4/3 rounded-md object-cover pl-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionProcessAuth };
