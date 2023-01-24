import Head from "next/head";

import NavBar from "@/components/NavBar";
import Home from "@/components/Home";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Ian Allish</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />
    </div>
  );
}