import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="items-center justify-center gap-12 -top-[60px] relative" id="hero">
      <Image src="/salmon-icon-380x338.png" alt="Likesalmon" width={380} height={338} />
      <div className="font-exo text-4xl font-bold text-center leading-relaxed text-white">
        Developer & UI Designer Ammon Morris
        <br /> bridges the divide between technology and design.
      </div>
      <div className="font-exo text-4xl font-bold text-center font-light text-lg text-fuchsia-400">
        It&apos;s pronounced /ˈæmən/ - like &quot;salmon&quot;
      </div>
    </Section>
  );
}
