"use client";
import { MapIcon, MonitorIcon, PhoneIcon, UserIcon } from "lucide-react";
import { CreditCardIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardWhy } from "@/components/card_why";

const whyUberEats = [
  {
    title: "Lorem ipsum, dolor sit amet consectetur",
    description:
      "Make doing business faster, easier, and more efficient with Uber Eats Orders. ",
    icon: <UserIcon className="size-10" />,
  },
  {
    title: "Lorem ipsum, dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: <MapIcon className="size-10" />,
  },
  {
    title: "Lorem ipsum, dolor sit amet consectetur",
    description:
      "Make doing business faster, easier, and more efficient with Uber Eats Orders. ",
    icon: <CreditCardIcon className="size-10" />,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-black py-14 w-full">
        <div className="container flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 md:w-1/2 w-full text-white">
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas, accusamus.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              accusantium vero reiciendis qui odit natus magnam eos totam
              dolorem porro? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Saepe, error!
            </p>
          </div>
          <img
            src="/images/placeholder.svg"
            alt="Home Image"
            className="md:w-[500px] md:h-[500px] w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      <section className="container py-14 space-y-14">
        <h2>Stay on track with the Uber Eats Orders app</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {whyUberEats.map((item) => (
            <CardWhy
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
        <p className="md:w-1/2 w-full">
          If you’re not using a dedicated tablet from us for Uber Eats Orders,
          you can easily install, set up, and customize the free tablet- or
          desktop-based app. Follow the download instructions below to get
          started.
        </p>
        <Tabs defaultValue="eat-order-app">
          <TabsList>
            <TabsTrigger value="eat-order-app">
              <span className="md:block hidden">Eat order mobile app</span>
              <PhoneIcon className="size-4 md:hidden block" />
            </TabsTrigger>
            <TabsTrigger value="eat-order-desktop-app">
              <span className="md:block hidden">Eat order desktop app</span>
              <MonitorIcon className="size-4 md:hidden block" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="eat-order-app">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi sint dolorum velit ea tempore amet nostrum ex excepturi
              voluptatibus alias atque dolores cumque cupiditate labore
              quisquam, nobis est fugiat laudantium. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit quae repellendus eaque
              tempora, quidem nobis corrupti, illo necessitatibus voluptates
              obcaecati nulla sint praesentium porro nesciunt maiores dolor nam
              omnis enim dolorum similique, quos natus incidunt. Magni
              necessitatibus debitis dolores, aliquam fuga cumque ab alias
              aperiam numquam repudiandae? Ratione quae a voluptates qui nulla
              amet vitae mollitia, autem, id officia est voluptatibus placeat
              quas? Non accusamus tempora voluptatibus minima, quas ipsum a ex
              nobis et sint ipsa quia esse harum rerum sunt ea. Maxime quaerat
              libero accusamus molestias vitae voluptates blanditiis ab eveniet,
              debitis praesentium veniam voluptatum, vel, deleniti quia unde.
            </p>
          </TabsContent>
          <TabsContent value="eat-order-desktop-app">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi sint dolorum velit ea tempore amet nostrum ex excepturi
              voluptatibus alias atque dolores cumque cupiditate labore
              quisquam, nobis est fugiat laudantium. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit quae repellendus eaque
              tempora, quidem nobis corrupti, illo necessitatibus voluptates
              obcaecati nulla sint praesentium porro nesciunt maiores dolor nam
              omnis enim dolorum similique, quos natus incidunt.
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
