import ScrollIndicator from "../PageStyle/scrollIndicator";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col h-screen justify-center items-center text-4xl md:text-7xl"
    >
      <h2>Projects:</h2>
      <a className="py-6">COMING SOON</a>
      <Link href="#contact">
        <ScrollIndicator />
      </Link>
    </div>
  );
}
