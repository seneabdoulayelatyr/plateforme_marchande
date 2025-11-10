"use client";
import { FormField } from "@/components/ui/form";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { loginSchema, LoginFormData } from "@/lib/schema_zod/auth";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    toast.success("Connexion réussie !");
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center md:mt-14 mt-7  gap-8 container w-[400px]">
      <h3>Quel est votre adresse courriel pour vous connecter?</h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <FormField
            className="w-full"
            placeholder="Entrez votre email"
            name="email"
            type="email"
          />
          <Button className="w-full" type="submit">
            Continuer
          </Button>
        </form>
      </FormProvider>

      <div className="flex container  items-center justify-center gap-2">
        <div className="w-screen h-[1.5px] border-zinc-900 border" />
        <p>ou</p>
        <div className="w-screen h-[1.5px] border-zinc-900 border" />
      </div>
      <div className="flex w-full items-center justify-center gap-4 flex-col">
        <Button
          className="w-full bg-zinc-300 text-black hover:text-white"
          type="submit"
        >
          Continuer avec Google
        </Button>
        <Button
          className="w-full bg-zinc-300 text-black hover:text-white"
          type="submit"
        >
          Continuer avec Apple
        </Button>
      </div>
      <p className="text-cs text-muted-foreground">
        En continuant, vous acceptez de recevoir des appels, y compris par
        composition automatique, WhatsApp ou textos d'Uber et de ses sociétés
        affiliées.
      </p>
    </div>
  );
}
