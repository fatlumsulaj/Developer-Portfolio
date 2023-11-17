import Image from "next/image";
import Link from "next/link";
import Hero from "@/containers/Hero";
import AboutMe from "@/containers/AboutMe";
import Skills from "@/containers/Skills";
import Companies from "@/containers/Companies";
import Projects from "@/containers/Projects";
import Mentorship from "@/containers/Mentorship";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Companies />
      <Projects />
      <Mentorship />
      <CallToAction />
    </main>
  );
}
