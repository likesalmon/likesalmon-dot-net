import { Linkedin, Github, Instagram } from "lucide-react";
import Section from "./Section";
import SocialLink from "./social-link";

export default function Socials() {
  return (
    <Section id="socials" title="Socials" light className="">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg max-w-md text-center leading-loose text-white mb-8">
          If you&apos;re looking for a developer, designer, or engineering leader who bridges
          technology and design with a collaborative mindset, let’s connect!{" "}
        </p>
        <p className="text-lg max-w-md text-center leading-loose text-white">
          The best way to get in touch with Ammon is via LinkedIn.
        </p>
      </div>

      <div className="flex flex-row gap-12 py-12 justify-center">
        <SocialLink
          href="https://github.com/likesalmon/"
          icon={<Github className="size-10" />}
          label="Github"
        />

        <SocialLink
          href="https://www.linkedin.com/in/ammonmorris/"
          icon={<Linkedin className="size-10" />}
          label="LinkedIn"
        />

        <SocialLink
          href="https://www.instagram.com/likesalmon/"
          icon={<Instagram className="size-10" />}
          label="Instagram"
        />
      </div>
    </Section>
  );
}
