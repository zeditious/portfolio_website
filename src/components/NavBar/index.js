import Link from "next/link";
import { Burger, Drawer } from "@mantine/core";
import { useState } from "react";

export default function NavBar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="hidden md:block h-16 py-6 px-10 bg-stone-900 border-b-2 border-stone-700">
        <div className="flex flex-row justify-between items-start items-end gap-10 lg:gap-16">
          <div className="flex gap-8 lg:gap-48">
            <Link href="/">
              <span className="text-3xl text-white">IA</span>
            </Link>
          </div>
          <div className="flex gap-8 text-lg opacity-70 text-white">
            <Link href="/about">
              <span className="">about</span>
            </Link>
            <Link href="/contact">
              <span className="">contact</span>
            </Link>
            <Link href="/about">
              <span className="">linkedin</span>
            </Link>
            <Link href="/about">
              <span className="">github</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="block md:hidden h-16 py-4 px-8 bg-stone-900 border-b-2 border-stone-700">
        <div className="flex flex-row justify-between">
          <Link href="/">
            <span className="text-3xl text-white">IA</span>
          </Link>
          <Burger
            color="white"
            opened={opened}
            onClick={() => setOpened(!opened)}
          />
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            padding="xl"
            size="sm"
            position="right"
            background-color="#1E1E1E"
          >
            <div className="flex flex-col gap-8 text-lg opacity-70 text-black">
              <Link href="/about">
                <span className="">about</span>
              </Link>
              <Link href="/contact">
                <span className="">contact</span>
              </Link>
              <Link href="/about">
                <span className="">linkedin</span>
              </Link>
              <Link href="/about">
                <span className="">github</span>
              </Link>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
