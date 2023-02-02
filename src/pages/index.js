import Head from "next/head";

import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Ian Allish</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
