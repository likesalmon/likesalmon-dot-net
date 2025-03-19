"use client";

import Section from "./Section";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const carouselItems = [
  { id: "splash", src: "/mobile-app-screenshots/splash.webp", alt: "Splash screen" },
  { id: "home", src: "/mobile-app-screenshots/song-list.webp", alt: "Song list" },
  { id: "profile", src: "/mobile-app-screenshots/wizard-genre.webp", alt: "Select genre" },
  { id: "settings", src: "/mobile-app-screenshots/wizard-name.webp", alt: "Enter name" },
  {
    id: "details",
    src: "/mobile-app-screenshots/wizard-description.webp",
    alt: "Enter description",
  },
  { id: "edit-mode", src: "/mobile-app-screenshots/edit-mode.webp", alt: "Edit mode" },
  {
    id: "performance-mode",
    src: "/mobile-app-screenshots/performance-mode.webp",
    alt: "Performance mode",
  },
];

export default function Work() {
  return (
    <Section title="Featured Work" id="work" className="pb-16">
      <div
        className={cn(
          "flex flex-col gap-8 px-4 justify-center",
          "md:px-16 md:flex-row-reverse justify-center",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="gap-3 flex flex-col text-white max-w-sm mb-6 md:pt-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl font-bold font-exo">
                Rhyme&middot;i&middot;ness Mobile app
              </h2>
              <p className="text-base leading-loose text-slate-400">
                Create your own songs with a leeeeetle help from AI.
              </p>
            </div>
            <p className="text-base leading-loose text-slate-50">
              Tired of getting stuck after the first line? Let <b>Rhyme&middot;i&middot;ness</b>{" "}
              fill in the gaps! Just enter a vibe, genre, and give your song a name. You can start
              writing or click Help Me Out to have AI generate lines for you. Arrange your song with
              intuitive drag controls then switch on Performance Mode and you&apos;re ready to rock!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn("rounded-xl bg-gradient-to-br from-teal-500 to-fuchsia-500 p-0.5")}
        >
          <div className="py-6 px-16 bg-slate-900 rounded-xl">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {carouselItems.map((item) => (
                  <CarouselItem key={item.id} className="items-center justify-center">
                    <Image src={item.src} alt={item.alt} width={438} height={893} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
