import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";
import { BrandGithub } from "tabler-icons-react";

export default function Projects() {
  return (
    <div>
      <div
        id="projects"
        className="flex flex-col h-screen md:max-h-[90vh] justify-center items-center text-4xl md:text-7xl"
      >
        <h2 className="pb-8">Projects:</h2>
        <div className="rounded justify-center bg-neutral-800 w-11/12 lg:w-1/3 py-3 px-4">
          <div className="text-xl md:text-3xl text-center pb-2">
            Portfolio Website
          </div>
          <div className="text-lg md:txt-2xl text-justify">
            Created on <Link href="https://nextjs.org">Next.js</Link> and
            stylized using{" "}
            <Link href="https://tailwindcss.com">TailwindCSS.</Link> This
            portfolio site contains information about the creator and their
            career goals and aspirations.
          </div>
          <Link href="https://github.com/zeditious/portfolio_website">
            <div className="flex gap-2 pt-2 text-lg md:txt-2xl text-justify justify-bottom">
              Find it on:
              <BrandGithub size={20} />
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="#contact">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
      <div className="flex md:h-screen md:max-h-[10vh] items-end justify-center">
        <div className="hidden md:block">
          <Link href="#contact">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
    </div>
  );
}
