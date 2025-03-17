import Section from "./Section";
import Image from "next/image";
import GradientBorder from "./GradientBorder";

export default function About() {
  return (
    <Section title="About" className="text-white pb-16 max-w-4xl" light id="about">
      <div className="flex flex-wrap gap-12">
        <p className="text-lg max-w-sm leading-loose relative top-6">
          Ammon lives in Douglas, Alaska with his wife and daughter. With 17 years of experience in
          web, mobile, and SaaS development, Ammon uses his deep understanding of the technical
          landscape to inform his designs — enabling a seamless transition from concept to code.
        </p>

        <GradientBorder>
          <Image
            src="/sunset-cider.jpg"
            alt="Beautiful sunset over Sandy Beach"
            width={446}
            height={350}
            className="rounded-lg"
          />
        </GradientBorder>
        <GradientBorder className="relative bottom-24">
          <Image
            src="/headshot.jpg"
            alt="Ammon Morris and dog, Cider"
            width={362}
            height={482}
            className="rounded-lg"
          />
        </GradientBorder>
        <p className="text-lg max-w-sm leading-loose">
          Whether leading engineering teams or working closely with clients to bring their vision to
          life, Ammon loves a collaborative environment. His leadership style emphasizes personal
          ownership, clear communication, and a shared commitment to excellence. He listens deeply,
          translates complex requirements into elegant solutions, and builds software that is both
          functional and beautifully designed.
        </p>
      </div>
    </Section>
  );
}
