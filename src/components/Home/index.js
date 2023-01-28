import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div
        id="/"
        className="flex flex-col h-screen text-white items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl">
          Hello,
          <br />
          My name is Ian
        </h1>
        <Typewriter
          options={{
            strings: ["Pleased to meet you", "Let's get to know each other"],
            wrapperClassName: "text-xl",
            cursorClassName: "text-xl",
            autoStart: true,
            loop: true,
            deleteChars: "0",
          }}
        />
        <div className="pb-12"></div>
        <div className="animate-bounce bg-stone-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-stone-500"
            fill="stone-800"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div
        id="/"
        className="flex flex-col h-screen text-white items-center justify-center"
      >
        <h2 className="text-4xl md:text-7xl">About Me:</h2>
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="ian-allish"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/ian-allish?trk=profile-badge"
          >
            Ian Allish
          </a>
        </div>

        <p className="text-xl px-6 md:w-1/2 pt-4 text-justify">
          My name is Ian Allish. I am a recent aerospace engineering graduate
          with a passion for programming. I have experience designing and
          analyzing aerospace systems, as well as programming in languages such
          as Python and MATLAB. I am excited to apply my technical skills to
          solve complex problems and develop innovative solutions in the
          aerospace industry.
        </p>
      </div>
    </div>
  );
}
