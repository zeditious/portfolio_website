import Typewriter from "typewriter-effect";
import ScrollIndicator from "../PageStyle/scrollIndicator";

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
        <ScrollIndicator />
      </div>
    </div>
  );
}
