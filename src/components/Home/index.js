import Typewriter from "typewriter-effect";
import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";
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
        className="flex flex-col h-screen text-white items-center justify-center"
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
          My name is Ian
        </h1>
        <a className="text-xl">Pleased to meet you.</a>
        <Link href="#about">
          <ScrollIndicator />
        </Link>
      </div>
    </div>
  );
}
