"use client";
import Image from "next/image";
import { CardWhyUberEats } from "./signup/page";
import { MapIcon, UserIcon } from "lucide-react";
import { CreditCardIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const whyUberEats = [
  {
    title: "Manage your orders in one place",
    description:
      "Make doing business faster, easier, and more efficient with Uber Eats Orders. Manage orders, deliveries, menus, and more from our tablet-based app.",
    icon: <UserIcon className="size-14" />,
  },
  {
    title: "Stay on track with the Uber Eats Orders app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: <MapIcon className="size-14" />,
  },
  {
    title: "Get paid faster with the Uber Eats Orders app",
    description:
      "Make doing business faster, easier, and more efficient with Uber Eats Orders. Manage orders, deliveries, menus, and more from our tablet-based app.",
    icon: <CreditCardIcon className="size-14" />,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-black py-14 w-full">
        <div className="container flex items-center justify-between">
          <div className="space-y-4 w-1/2 text-white">
            <h1>Manage your orders in one place</h1>
            <p>
              Make doing business faster, easier, and more efficient with Uber
              Eats Orders. Manage orders, deliveries, menus, and more from our
              tablet-based app.
            </p>
          </div>
          <Image
            src="/images/black-woman.jpg"
            alt="Home Image"
            width={500}
            height={500}
            className="w-[500px] h-[500px] object-cover "
          />
        </div>
      </section>

      <section className="container py-14 space-y-8">
        <h2>Stay on track with the Uber Eats Orders app</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {whyUberEats.map((item) => (
            <CardWhyUberEats
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      <section className="container py-14 space-y-8">
        <h2>Set up your device in a snap</h2>
        <p className="w-1/2">
          If you’re not using a dedicated tablet from us for Uber Eats Orders,
          you can easily install, set up, and customize the free tablet- or
          desktop-based app. Follow the download instructions below to get
          started.
        </p>
        <Tabs defaultValue="account" >
          <TabsList>
            <TabsTrigger value="eat-order-app">
              Eat order mobile app
            </TabsTrigger>
            <TabsTrigger value="eat-order-desktop-app">
              Eat order desktop app
            </TabsTrigger>
          </TabsList>
          <TabsContent value="eat-order-app" >
            <p className="bg-green-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi sint dolorum velit ea tempore amet nostrum ex excepturi
              voluptatibus alias atque dolores cumque cupiditate labore
              quisquam, nobis est fugiat laudantium.
            </p>
          </TabsContent>
          <TabsContent value="eat-order-desktop-app">
            <p className="bg-red-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quis voluptatum, consequatur voluptatibus odio fugit consectetur?
              Voluptatum ex nobis doloribus animi possimus quisquam, sed
              expedita quibusdam fugit odio hic ipsa molestias!
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
