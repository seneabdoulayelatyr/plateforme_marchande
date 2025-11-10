"use client";
import React from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import FormContact from "@/components/allFormsSections/form_contact";

interface SectionContactHomeProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const defaultProps: SectionContactHomeProps = {
  title: "Nos coordonnées",
  description: "Contactez-nous pour toute question ou demande de service.",
  emailLabel: "Email",
  emailDescription: "Nous répondons à tous les emails dans les 24 heures.",
  email: "contact@plateforme.com",
  officeLabel: "Bureau",
  officeDescription: "Venir au bureau pour discuter.",
  officeAddress: "1 Rue des Lilas, Dakar, Sénégal",
  phoneLabel: "Téléphone",
  phoneDescription:
    "Nous sommes disponibles du lundi au vendredi, de 9h à 17h.",
  phone: "+221 77 123 45 67",
  chatLabel: "Chat en direct",
  chatDescription: "Obtenez de l'aide instantanée de notre équipe de support.",
  chatLink: "Commencer le chat",
};
export default function SectionContactHome({
  title = defaultProps.title,
  description = defaultProps.description,
  emailLabel = defaultProps.emailLabel,
  emailDescription = defaultProps.emailDescription,
  email = defaultProps.email,
  officeLabel = defaultProps.officeLabel,
  officeDescription = defaultProps.officeDescription,
  officeAddress = defaultProps.officeAddress,
  phoneLabel = defaultProps.phoneLabel,
  phoneDescription = defaultProps.phoneDescription,
  phone = defaultProps.phone,
  chatLabel = defaultProps.chatLabel,
  chatDescription = defaultProps.chatDescription,
  chatLink = defaultProps.chatLink,
}: SectionContactHomeProps) {
  return (
    <section className="bg-background md:py-14 py-10 space-y-14 px-2 md:px-4 ">
      <div className="container">
        <div className="mb-14">
          <h2 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="text-muted-foreground mb-3">{chatDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {chatLink}
            </a>
          </div>
        </div>
      </div>
      {/* <div className="container flex gap-6">
        <img
          src="/images/placeholder.svg"
          className="md:w-1/2 w-full h-auto rounded-xl object-cover"
          alt="Contact Image"
        />
        <FormContact />
      </div> */}
    </section>
  );
}
