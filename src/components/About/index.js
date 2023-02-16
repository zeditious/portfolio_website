import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";
import { BrandLinkedin, BrandGithub, Mail } from "tabler-icons-react";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="flex flex-col h-screen md:max-h-[90vh] text-white items-center justify-center"
      >
        <h2 className="text-4xl md:text-7xl">About Me:</h2>

        <img className="py-8 max-h-96 w-auto" src="/aboutme.jpg" />

        <p className="text-xl px-6 md:w-1/2 pt-4 text-justify">
          My name is Ian Allish. I am a recent aerospace engineering graduate
          with a passion for programming. I have experience designing and
          analyzing aerospace systems, as well as programming in languages such
          as Python and MATLAB. I am excited to apply my technical skills to
          solve complex problems and develop innovative solutions in the
          aerospace industry.
        </p>
        <a className="text-xl md:text-4xl py-4">Find me at:</a>
        <div className="flex gap-8 justify-between">
          <Link href="https://www.linkedin.com/in/ian-allish/">
            <BrandLinkedin size={40} />
          </Link>
          <Link href="https://github.com/zeditious">
            <BrandGithub size={40} />
          </Link>
          <Link href="mailto:ian@ianallish.com">
            <Mail size={40} />
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="#projects">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
      <div className="flex h-screen max-h-[10vh] items-end justify-center">
        <div className="hidden md:block">
          <Link href="#projects">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
    </div>
  );
}
