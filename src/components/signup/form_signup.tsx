import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { signupSchema, SignupFormData } from "@/lib/schema_zod/auth";
import { FormField, PhoneField, SelectField, CheckboxField } from "../ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const companiesTypes = [
  {
    label: "Restaurant",
    value: "restaurant",
  },
  {
    label: "Bar",
    value: "bar",
  },
  {
    label: "Supermarché",
    value: "supermarche",
  },
  {
    label: "Autre",
    value: "autre",
  },
];

export default function SignupForm() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      adresse: "",
      nomEtablissement: "",
      nomMarque: "",
      typeEntreprise: "",
      motDePasse: "",
      confirmerMotDePasse: "",
      acceptConditions: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log("Données du formulaire:", data);
      toast.success("Compte créé avec succès !");
      router.push("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="prenom" label="Prénom" />
          <FormField name="nom" label="Nom" />
        </div>

        <FormField name="email" type="email" label="Email" />

        <PhoneField
          name="telephone"
          label="Numéro de téléphone"
          defaultCountry="SN"
        />

        <FormField name="adresse" label="Adresse de l'établissement" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="nomEtablissement" label="Nom de l'établissement" />
          <FormField name="nomMarque" label="Nom de la marque" />
        </div>

        <SelectField
          name="typeEntreprise"
          label="Type de l'entreprise"
          placeholder="Sélectionnez le type de votre entreprise"
          options={companiesTypes}
        />

        <FormField name="motDePasse" type="password" label="Mot de passe" />

        <FormField
          name="confirmerMotDePasse"
          type="password"
          label="Confirmer le mot de passe"
        />

        <CheckboxField
          name="acceptConditions"
          label="J'accepte les conditions d'utilisation"
        />

        <Button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-lg text-base"
        >
          Créer un compte
        </Button>
      </form>
    </FormProvider>
  );
}
