import Typewriter from "typewriter-effect";
import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";
import { Square } from "tabler-icons-react";
const greetings = [
  "Hello,",
  "Hola,",
  "Bonjour,",
  "Guten tag,",
  "Salve,",
  "Nǐ hǎo,",
  "Olá,",
  "Asalaam alaikum,",
  "Konnichiwa,",
  "Anyoung haseyo,",
  "Zdravstvuyte,",
];

export default function Home() {
  return (
    <div>
      <div
        id="/"
        className="flex flex-1 flex-col h-screen md:max-h-[90vh] text-white items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl">
          <Typewriter
            options={{
              strings: greetings,
              wrapperClassName: "text-4xl md:text-7xl",
              cursorClassName: "text-4xl md:text-7xl",
              autoStart: true,
              loop: true,
              deleteChars: "0",
            }}
          />
          My name is{" "}
          <Link
            href="https://www.linkedin.com/in/ian-allish/"
            className="font-bold hover:underline underline-offset-4"
          >
            Ian
          </Link>
        </h1>
        <a className="text-xl">Pleased to meet you.</a>
        <div className="md:hidden">
          <Link href="#about">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
      <div className="flex md:h-screen md:max-h-[10vh] items-end justify-center">
        <div className="hidden md:block">
          <Link href="#about">
            <ScrollIndicator />
          </Link>
        </div>
      </div>
    </div>
  );
}
