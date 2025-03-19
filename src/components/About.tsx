import Section from "./Section";
import Image from "next/image";
import GradientBorder from "./GradientBorder";

export default function About() {
  return (
    <Section title="About" className="items-center pb-24" light id="about">
      <div className="text-primary-foreground max-w-lg lg:max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6">
            <p className="text-base lg:text-lg leading-loose">
              Ammon lives in Douglas, Alaska with his wife and daughter. With 17 years of experience
              in web, mobile, and SaaS development, Ammon uses his deep understanding of the
              technical landscape to inform his designs — enabling a seamless transition from
              concept to code.
            </p>

            <GradientBorder>
              <Image
                src="/headshot.jpg"
                alt="Ammon and hid dog, Cider"
                width={362}
                height={482}
                className="rounded-lg block aspect-auto w-full"
              />
            </GradientBorder>
          </div>

          <div className="space-y-6">
            <GradientBorder className="relative">
              <Image
                src="/sunset-cider.jpg"
                alt="Beautiful sunset over Sandy Beach"
                width={446}
                height={350}
                className="rounded-lg w-full"
              />
            </GradientBorder>

            <p className="text-base lg:text-lg leading-loose">
              Whether leading engineering teams or working closely with clients to bring their
              vision to life, Ammon loves a collaborative environment. His leadership style
              emphasizes personal ownership, clear communication, and a shared commitment to
              excellence. He listens deeply, translates complex requirements into elegant solutions,
              and builds software that is both functional and beautifully designed.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
