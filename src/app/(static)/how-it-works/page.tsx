"use client";
import React from "react";
import { SectionCallToAction } from "@/components/section_call_to_action";
import { SectionHowItWorks } from "@/components/section_how_it_works";
import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";
import { SectionProcessAuth } from "@/components/section_process_auth";

const data = {
  label: "Comment ça marche ?",
  title: "Fully featured components for Shadcn UI & Tailwind",
  features: [
    {
      heading: "Quality",
      description:
        "Built with attention to detail and best practices. Every component is thoroughly tested and follows modern React patterns for reliability and performance.",
      icon: <GitPullRequest className="size-4 md:size-6" />,
    },
    {
      heading: "Experience",
      description:
        "Crafted with user experience in mind. Each component is designed to be intuitive, accessible, and provide smooth interactions across all devices.",
      icon: <SquareKanban className="size-4 md:size-6" />,
    },
    {
      heading: "Support",
      description:
        "Comprehensive documentation and community support. Get help when you need it with detailed guides, examples, and active community assistance.",
      icon: <RadioTower className="size-4 md:size-6" />,
    },
    {
      heading: "Innovation",
      description:
        "Cutting-edge design patterns and modern web technologies. Stay ahead with the latest trends in UI/UX design and development practices.",
      icon: <WandSparkles className="size-4 md:size-6" />,
    },
    {
      heading: "Results",
      description:
        "Proven track record of successful implementations. These components have been battle-tested in real-world applications and deliver consistent results.",
      icon: <Layers className="size-4 md:size-6" />,
    },
    {
      heading: "Efficiency",
      description:
        "Optimized for performance and developer productivity. Lightweight, fast-loading components that help you build faster without compromising on quality.",
      icon: <BatteryCharging className="size-4 md:size-6" />,
    },
  ],
};

const data_process_auth = {
  features: [
    {
      id: 1,
      title: "Créer un compte",
      image: "/images/placeholder.svg",
      description:
        "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
    },
    {
      id: 2,
      title: "Se connecter",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      description:
        "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
    },
    {
      id: 3,
      title: "Remplir les informations",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      description:
        "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
    },
    {
      id: 4,
      title: "Valider les informations",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      description:
        "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
    },
    {
      id: 5,
      title: "Recevoir le code de vérification",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      description:
        "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <section className="bg-[url('/images/portrait.jpg')] bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center w-full">
        <div className="container text-center text-white space-y-8">
          <h1>Comment ça marche ?</h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolores eligendi illum sit fugit voluptas, quas doloribus nemo ipsum
            alias? Facere atque delectus nostrum, sint dicta repudiandae animi
            velit ad!
          </p>
        </div>
      </section>

      <div className="md:px-5 px-0">
        <SectionHowItWorks
          label={data.label}
          title={data.title}
          features={data.features}
        />

        <div className="py-16 container space-y-10">
          <h2>Comment ça marche ?</h2>
          <SectionProcessAuth features={data_process_auth.features} />
        </div>

        <SectionCallToAction
          heading="Comment ça marche ?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores eligendi illum sit fugit voluptas, quas doloribus nemo ipsum alias? Facere atque delectus nostrum, sint dicta repudiandae animi velit ad!"
        />
      </div>
    </div>
  );
}
