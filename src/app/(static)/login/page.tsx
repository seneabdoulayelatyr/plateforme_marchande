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
    <div className="flex flex-col items-center justify-center md:mt-24 mt-14 gap-8 container w-[400px]">
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

      <p className="text-cs text-muted-foreground">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        voluptatum, porro delectus excepturi aperiam minus, incidunt
        exercitationem quis, eos corrupti recusandae est aliquid. Magni qui quia
        odio quos laudantium vel.
      </p>
    </div>
  );
}
