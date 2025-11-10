import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormField, PhoneField, TextareaField } from "../ui/form";
import { toast } from "sonner";
import { contactSchema, ContactFormData } from "@/lib/schema_zod/contact";

export default function FormContact() {
  const methods = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      adresse: "",
      message: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    toast.success("Message envoyé avec succès !");
    reset();
  };

  return (
    <div className="border p-5 md:w-1/2 w-full rounded-xl space-y-6">
      <h2 className="text-2xl font-bold">Contactez-nous</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField name="prenom" label="Prénom" />
          <FormField name="nom" label="Nom" />
          <FormField name="email" type="email" label="Email" />
          <PhoneField name="telephone" label="Numéro de téléphone" />
          <FormField name="adresse" label="Adresse de l'établissement" />
          <TextareaField name="message" label="Message" />
          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-lg text-base"
          >
            Envoyer le message !
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
