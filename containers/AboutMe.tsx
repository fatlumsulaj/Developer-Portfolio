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
        Als Frontend-Entwickler und SEO-Experte in Passau, Deutschland, liegt meine Leidenschaft in der Gestaltung fesselnder Benutzererlebnisse. Mit einem Auge fürs Detail und einem Talent zur Lösung komplexer Probleme stehe ich bereit für anspruchsvolle Projekte in Zusammenarbeit mit positiven Teams. Meine Expertise umfasst HTML, CSS, JavaScript, sowie Tools wie Tailwind, Sass, React, Next JS, Typescript, Bootstrap und Git. Durch meine Erfahrung in der Frontend-Entwicklung schaffe ich nicht nur qualitativ hochwertige Webanwendungen, sondern optimiere sie auch für Suchmaschinen, um maximale Sichtbarkeit zu gewährleisten. Mein Ziel ist es, innovative und intuitive Lösungen zu entwickeln, die das Nutzererlebnis auf eine neue Ebene heben.
In letzter Zeit habe ich zudem das <Link href="https://www.inoweb.pro/de" target="_blank" className="text-[#5be9b9] font-bold">Webentwicklungs-unternehmen INOWEB</Link> gegründet, um meine Fähigkeiten und Leidenschaft in einer breiteren Palette von Projekten einzubringen.
        </p>
        <Link href="/about" className="button-purple text-center mx-auto flex w-fit mt-6 lg:mt-10">Mehr Lesen</Link>
      </div>
    </section>
  );
};

export default AboutMe;
