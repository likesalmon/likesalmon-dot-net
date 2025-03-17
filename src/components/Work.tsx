import Section from "./Section";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <Section title="Featured Work" id="work" className="px-16 justify-center items-center pb-16">
      <div className="flex flex-col gap-4 text-white max-w-xl text-center mb-6">
        <h2 className="text-2xl font-bold font-exo">Rhyme&middot;i&middot;ness Mobile app</h2>
        <p className="text-lg leading-loose">
          Create your own songs with a leeeeetle help from AI.
        </p>
        <p className="text-base leading-loose">
          Tired of getting stuck after the first line? Let <b>Rhyme&middot;i&middot;ness</b> fill in
          the gaps! Just enter a vibe, genre, and give your song a name. You can start writing or
          click Help Me Out to have AI generate lines for you. Arrange your song with intuitive drag
          controls then switch on Performance Mode and you&apos;re ready to rock!
        </p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="items-center justify-center py-6">
              <Image src={item.src} alt={item.alt} width={438} height={893} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
