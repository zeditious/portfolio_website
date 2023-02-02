import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex row justify-center items-center text-md gap-10 py-8">
      <Link href="https://www.linkedin.com/in/ian-allish/">
        <span>linkedin</span>
      </Link>
      <Link href="https://github.com/zeditious">
        <span>github</span>
      </Link>
      <Link href="mailto:ian@ianallish.com">
        <span>message</span>
      </Link>
    </div>
  );
}
