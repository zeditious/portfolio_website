import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="flex flex-col h-screen text-white items-center justify-center"
      >
        <h2 className="text-4xl md:text-7xl">About Me:</h2>

        <p className="text-xl px-6 md:w-1/2 pt-4 text-justify">
          My name is Ian Allish. I am a recent aerospace engineering graduate
          with a passion for programming. I have experience designing and
          analyzing aerospace systems, as well as programming in languages such
          as Python and MATLAB. I am excited to apply my technical skills to
          solve complex problems and develop innovative solutions in the
          aerospace industry.
        </p>
        <Link href="#projects">
          <ScrollIndicator />
        </Link>
      </div>
    </div>
  );
}
