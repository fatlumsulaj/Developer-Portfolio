import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
const Hero = () => {
  return (
    <section className={`max-container padding-container flex flex-col items-center text-center ${nunito.className}`}>
      <h1 className="heading1 pt-6 lg:pt-14">Web Entwickler, Designer & SEO Expert</h1>
      <p className="paragraph px-2 pt-5">
        Ich liebe es, beeindruckende Websites zu erstellen, die Unternehmen
        dabei helfen, ihre Ziele zu erreichen.
      </p>
      <Image
        src="/Fatlum-Sulaj.png"
        width={200}
        height={200}
        alt="Fatlum Sulaj"
        className="pt-12"
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
