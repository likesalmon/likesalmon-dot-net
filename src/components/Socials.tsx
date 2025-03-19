"use client";

import { Linkedin, Github, Instagram } from "lucide-react";
import Section from "./Section";
import SocialLink from "./social-link";
import { motion } from "motion/react";

export default function Socials() {
  return (
    <Section id="socials" title="Socials" light className="">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-lg max-w-md text-center leading-loose text-white mb-8"
        >
          If you&apos;re looking for a developer, designer, or engineering leader who bridges
          technology and design with a collaborative mindset, let&apos;s connect!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-md text-center leading-loose text-white"
        >
          The best way to get in touch with Ammon is via LinkedIn.
        </motion.p>
      </div>

      <div className="flex flex-row gap-12 py-12 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink
            href="https://github.com/likesalmon/"
            icon={<Github className="size-10" strokeWidth={1.5} />}
            label="Github"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SocialLink
            href="https://www.linkedin.com/in/ammonmorris/"
            icon={<Linkedin className="size-10" strokeWidth={1.5} />}
            label="LinkedIn"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SocialLink
            href="https://www.instagram.com/likesalmon/"
            icon={<Instagram className="size-10" strokeWidth={1.5} />}
            label="Instagram"
          />
        </motion.div>
      </div>
    </Section>
  );
}
