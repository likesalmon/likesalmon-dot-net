import { Linkedin, Github } from "lucide-react";
import Section from "./Section";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Socials() {
  return (
    <Section id="socials" title="Socials" light>
      <p className="text-lg max-w-md text-center leading-loose text-white mb-8">
        If you&apos;re looking for a developer, designer, or engineering leader who bridges
        technology and design with a collaborative mindset, let’s connect!{" "}
      </p>
      <p className="text-lg max-w-md text-center leading-loose text-white">
        The best way to get in touch with Ammon is via LinkedIn.
      </p>

      <div className="flex flex-row gap-12 py-12 justify-center">
        <Link href="https://www.linkedin.com/in/ammonmorris/" passHref>
          <Button type="button" variant="gradient" size="lg">
            <Linkedin size={48} />
            LinkedIn
          </Button>
        </Link>

        <Link href="https://github.com/likesalmon/" passHref>
          <Button type="button" variant="gradient" size="lg">
            <Github size={48} />
            Github
          </Button>
        </Link>
      </div>
    </Section>
  );
}
