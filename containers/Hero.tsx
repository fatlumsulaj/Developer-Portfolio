import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import { Poppins } from "next/font/google";
const Hero = () => {
  return (
    <section className={`max-container padding-container flex flex-col items-center text-center ${nunito.className}`}>
      <h1 className="heading1 pt-6 lg:pt-10">Web Entwickler, Designer & SEO Expert</h1>
      <p className="paragraph px-2 pt-2">
        Ich liebe es, beeindruckende Websites zu erstellen, die Unternehmen
        dabei helfen, ihre Ziele zu erreichen.
      </p>
      <Image
        src="/fatlumsulaj.png"
        width={280}
        height={280}
        alt="Fatlum Sulaj"
        className="pt-16"
      />
      <Image
        src="/hero.svg"
        alt="devices"
        width={1000}
        height={1000}
        className="pt-14"
      />
    </section>
  );
};

export default Hero;
