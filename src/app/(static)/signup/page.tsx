"use client";
import React, { useState } from "react";
import Link from "next/link";
import SignupForm from "@/components/signup/form_signup";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const whyUberEats = [
  {
    title: "Livrez vos commandes à votre façon",
    description:
      "Nos offres sont flexibles : vous pouvez ainsi les adapter à vos besoins. Rejoignez Uber Eats et faites livrer vos commandes par vos coursiers ou ceux de notre plateforme.",
  },
  {
    title: "Augmentez votre visibilité",
    description:
      "Démarquez-vous grâce au marketing intégré à l'application pour atteindre davantage de clients et accroître vos ventes.",
  },
  {
    title: "Établissez un lien avec vos clients",
    description:
      "Faites connaître votre marque et gagnez en popularité en mettant en avant vos produits et services.",
  },
];

const SlideshowImages = [
  {
    title: "Uber Eats, la plateforme de livraison de repas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
    image: "/images/two-huge.png",
    alt: "Une plateforme adaptée à vos besoins",
  },
  {
    title: "Une plateforme adaptée à vos besoins",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
    image: "/images/colorful.jpg",
    alt: "Une plateforme adaptée à vos besoins",
  },
  {
    title: "Financez votre activité",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
    image: "/images/the-man-who.jpg",
    alt: "Une plateforme adaptée à vos besoins",
  },
];

const FonctionnementUberEats = [
  {
    image:
      "https://tb-static.uber.com/prod/udam-assets/3c3f70e6-bd04-495f-84d8-f7288ad01cb7.svg",
    title: "Les clients passent commande",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
  },
  {
    image:
      "https://tb-static.uber.com/prod/udam-assets/f83a023b-d455-4aab-97a0-12bc3026cebf.svg",
    title: "Vous préparez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
  },
  {
    image:
      "https://tb-static.uber.com/prod/udam-assets/6194ae40-5638-4fb7-88d2-94178d4d3eba.svg",
    title: "Les coursiers arrivent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt, tenetur labore porro odit inventore voluptas laboriosam sint consequuntur minima molestiae ipsum impedit eius voluptates quas dicta? Ex, totam quos.",
  },
];

function CardFonctionnementUberEats({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <Image
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
        width={100}
        height={100}
      />
      <h4 className="text-zinc-800 mt-4 mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

interface CardWhyUberEatsProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function CardWhyUberEats({
  title,
  description,
  icon,
}: CardWhyUberEatsProps) {
  return (
    <div className="space-y-2">
      {icon && <div>{icon}</div>}
      <h4 className="text-zinc-800">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function PageSignup() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev === SlideshowImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? SlideshowImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-14 pb-14">
      <section className="bg-black md:bg-[url(/images/point-de-vente-sur-un-marche.webp)] bg-cover bg-center h-full w-full">
        <div className="container flex items-center justify-between md:gap-8 gap-0 flex-col md:flex-row">
          <div className="md:w-2/4 w-full bg-black md:p-3 p-0 space-y-4 self-end md:mb-10 mb-5 text-white">
            <h1>Profitez d'une nouvelle source de revenus</h1>
            <p>
              La plateforme internationale d'Uber vous offre la flexibilité, la
              visibilité et les données nécessaires pour vous mettre en relation
              avec davantage de clients. Devenez partenaire dès aujourd'hui.
            </p>
          </div>

          <div className="bg-white px-5 py-14 h-full md:w-2/4 w-full space-y-5 overflow-y-auto">
            <h2>Créez votre compte</h2>
            <div className="text-muted-foreground space-x-2 text-sm">
              <span>Vous avez déjà un compte ?</span>
              <Link
                href="/login"
                className="text-primary font-medium underline hover:no-underline"
              >
                Se connecter
              </Link>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
      <section className="container space-y-16">
        <div className="space-y-8">
          <h2 className="text-zinc-800">Pourquoi Uber Eats ?</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {whyUberEats.map((item) => (
              <CardWhyUberEats
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-8 md:flex-row flex-col">
          <div className="md:w-2/5 w-full space-y-4">
            <h3 className="text-zinc-800 text-2xl font-semibold">
              {SlideshowImages[currentImage].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {SlideshowImages[currentImage].description}
            </p>
          </div>

          <div className="md:w-3/5 w-full space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={SlideshowImages[currentImage].image}
                alt={SlideshowImages[currentImage].alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition-opacity duration-300"
                priority={currentImage === 0}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {SlideshowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentImage
                        ? "w-8 bg-zinc-800"
                        : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreviousImage}
                  className="size-10 flex cursor-pointer items-center justify-center text-zinc-600 hover:text-zinc-900 bg-zinc-200 hover:bg-zinc-300 rounded-full transition-colors duration-200"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="size-10 flex cursor-pointer items-center justify-center text-zinc-600 hover:text-zinc-900 bg-zinc-200 hover:bg-zinc-300 rounded-full transition-colors duration-200"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-zinc-800 md:w-1/2 w-full">
            Fonctionnement d'Uber Eats pour les restaurants partenaires
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {FonctionnementUberEats.map((item) => (
              <CardFonctionnementUberEats
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-14">
        <div className="container  flex items-center justify-between gap-8 flex-col md:flex-row">
          <div className="md:w-1/2 w-full space-y-4">
            <h2 className="text-white">
              « Uber Eats renforce la notoriété de notre marque dans des
              quartiers qui seraient autrement hors de notre portée. »
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Numquam vel repudiandae quo cumque ipsam expedita. Corporis
              eveniet quod culpa adipisci illo minus. Ad in laboriosam
              architecto, eum fugiat labore eveniet!
            </p>
          </div>

          <Image
            src="/images/point-de-vente-sur-un-marche.webp"
            alt="Uber Eats"
            width={400}
            height={400}
            className="md:w-1/2 w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="container flex items-center justify-between gap-8 flex-col-reverse md:flex-row">
        <Image
          src="/images/point-de-vente-sur-un-marche.webp"
          alt="Uber Eats"
          width={400}
          height={400}
          className="md:w-1/2 w-full h-auto object-cover"
        />

        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-zinc-800">
            Lancez-vous en seulement trois étapes
          </h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Dites-nous en plus sur votre restaurant.</li>
            <li>Vous recevrez un email de confirmation.</li>
            <li>Vous pouvez commencer à vendre vos plats.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
