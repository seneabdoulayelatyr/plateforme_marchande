import * as z from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
export const contactSchema = z.object({
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
  message: z
    .string()
    .min(20, "Le message doit contenir au moins 20 caractères."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
