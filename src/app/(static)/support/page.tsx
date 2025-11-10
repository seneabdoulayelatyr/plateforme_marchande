"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FormContact from "@/components/allFormsSections/form_contact";
import SectionContactHome from "@/components/section_contact_home";

interface SupportItem {
  title: string;
  content: string;
}

const supportItems: SupportItem[] = [
  {
    title: "Comment créer un compte ?",
    content:
      "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut de la page et remplissez le formulaire d'inscription avec vos informations personnelles.",
  },
  {
    title: "Comment réinitialiser mon mot de passe ?",
    content:
      "Sur la page de connexion, cliquez sur 'Mot de passe oublié' et suivez les instructions envoyées par email pour réinitialiser votre mot de passe.",
  },
  {
    title: "Quels sont les modes de paiement acceptés ?",
    content:
      "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et les virements bancaires. Tous les paiements sont sécurisés.",
  },
  {
    title: "Comment suivre ma commande ?",
    content:
      "Une fois connecté, accédez à votre tableau de bord et consultez la section 'Mes commandes' pour suivre l'état de vos achats en temps réel.",
  },
  {
    title: "Quelle est votre politique de retour ?",
    content:
      "Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un article. Le produit doit être dans son état d'origine.",
  },
  {
    title: "Comment contacter le service client ?",
    content:
      "Vous pouvez nous contacter via le formulaire de contact, par email à support@plateforme.com, ou par téléphone du lundi au vendredi de 9h à 18h.",
  },
  {
    title: "Comment modifier mes informations personnelles ?",
    content:
      "Dans votre tableau de bord, accédez à la section 'Mon profil' où vous pourrez modifier vos informations personnelles, adresse et préférences.",
  },
  {
    title: "La plateforme est-elle accessible ?",
    content:
      "Oui, notre plateforme respecte les normes d'accessibilité WAI-ARIA pour garantir une expérience optimale à tous les utilisateurs.",
  },
];

export default function SupportPage() {
  return (
    <div className="space-y-10">
      <section className="bg-[url('/images/colorful.jpg')] bg-cover bg-top bg-no-repeat h-[60vh] flex items-center justify-center w-full">
        <div className="container text-center text-white space-y-8">
          <h1>Support</h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolores eligendi illum sit fugit voluptas, quas doloribus nemo ipsum
            alias? Facere atque delectus nostrum, sint dicta repudiandae animi
            velit ad!
          </p>
        </div>
      </section>

      <section className="flex justify-center md:pt-20 pt-10 p-4">
        <FormContact />
      </section>

      <SectionContactHome />

      {/* <section className="flex items-start flex-col md:flex-row justify-between gap-6 container py-14">
        <div className="md:w-2/5 w-full flex flex-col gap-14 h-auto">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/placeholder.svg"
                alt="Sarah Johnson"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3>Sarah Johnson</h3>
                <p>Customer Success Manager</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              tempore repellat eligendi facere eos doloremque rem officia
              libero, asperiores veritatis.
            </p>
          </div>
          <div className="flex items-center gap-2 hover:animate-bounce">
            <Link
              href="/contact"
              className="text-3xl font-medium border-b-2 hover:border-black transition-all duration-300 "
            >
              Contactez-nous
            </Link>
            <ArrowUpRight />
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="space-y-4 md:w-3/5 w-full"
        >
          {supportItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium hover:no-underline cursor-pointer">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section> */}
      <section className="container md:py-14 py-5">
        <Accordion
          type="single"
          collapsible
          className="space-y-4 md:w-3/5 mx-auto w-full"
        >
          {supportItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className=" font-medium hover:no-underline cursor-pointer">
                <h3>{item.title}</h3>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
