import React from "react";
import Link from "next/link";
import { nunito } from "@/app/ui/fonts";
const AboutMe = () => {
  return (
    <section className={`bg-[#6E07F3] w-full ${nunito.className} pt-10 lg:pt-20 pb-[200px] 
    `}>
      <div className="max-container padding-container">
        <h2 className="heading2 text-center text-white pb-6">
          Hallo, ich bin Fatlum Sulaj. Es freut mich, dich kennenzulernen.
        </h2>
        <p className="paragraph text-white max-w-[1000px] mx-auto">
          Als Frontend-Entwickler und SEO-Experte in Passau, Deutschland, bin
          ich leidenschaftlich darauf fokussiert, fesselnde und dynamische
          Benutzererlebnisse zu gestalten. Mit einem Auge für Detail und einem
          Talent für die Lösung komplexer Probleme, stehe ich bereit für
          anspruchsvolle Projekte, bei denen ich mit positiven Teams
          zusammenarbeiten kann. Meine Expertise erstreckt sich von HTML, CSS
          und JavaScript über Tools wie Tailwind, Sass, React, Next JS,
          Typescript, Bootstrap bis hin zu Git. Durch meine Erfahrung in der
          Frontend-Entwicklung schaffe ich nicht nur qualitativ hochwertige
          Webanwendungen, sondern optimiere sie auch für Suchmaschinen, um eine
          maximale Sichtbarkeit zu gewährleisten. Mein Ziel ist es, innovative
          und intuitive Lösungen zu entwickeln, die das Nutzererlebnis auf eine
          neue Ebene heben.
        </p>
        <Link href="/about" className="button-purple text-center mx-auto flex w-fit mt-6 lg:mt-10">Mehr Lesen</Link>
      </div>
    </section>
  );
};

export default AboutMe;
