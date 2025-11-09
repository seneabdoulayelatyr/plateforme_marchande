import * as z from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const signupSchema = z
  .object({
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères."),
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    email: z.string().email("Veuillez entrer une adresse email valide."),
    telephone: z
      .string()
      .min(1, "Le numéro de téléphone est requis.")
      .refine((val) => isValidPhoneNumber(val), {
        message: "Le numéro de téléphone n'est pas valide.",
      }),
    adresse: z.string().min(1, "L'adresse de l'établissement est requise."),
    nomEtablissement: z
      .string()
      .min(1, "Le nom de l'établissement est requise."),
    nomMarque: z.string().min(1, "Le nom de la marque est requise."),
    typeEntreprise: z.string().min(1, "Le type de l'entreprise est requis."),
    acceptConditions: z.boolean().optional(),
    motDePasse: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères."),
    confirmerMotDePasse: z.string(),
  })
  .refine((data) => data.motDePasse === data.confirmerMotDePasse, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmerMotDePasse"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
