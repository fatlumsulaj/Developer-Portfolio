import React from "react";
import Link from "next/link";
import { nunito } from "@/app/ui/fonts";
const AboutMe = () => {
  return (
    <section
      className={`bg-[#6E07F3] w-full ${nunito.className} pt-10 lg:pt-20 pb-[200px] 
    ` } id="aboutme"
    >
      <div className="max-container padding-container">
        <h2 className="heading2 text-left md:text-center text-white pb-5">
          Hallo, ich bin Fatlum Sulaj. Es freut mich, dich kennenzulernen.
        </h2>
        <p className="paragraph text-white max-w-[1000px] mx-auto">
          Als erfahrener Webentwickler und SEO-Experte in Passau, Deutschland,
          widme ich mich mit Leidenschaft der Schaffung beeindruckender
          Benutzererlebnisse. Mein ausgeprägtes Auge für Details und meine
          Fähigkeit, komplexe Probleme zu lösen, machen mich zu einem
          zuverlässigen Partner für anspruchsvolle Projekte. In enger
          Zusammenarbeit mit positiv eingestellten Teams stehe ich bereit, meine
          Expertise in HTML, CSS, JavaScript sowie Tools wie Tailwind, Sass,
          React, Next JS, Typescript, Bootstrap und Git einzusetzen.
          <br />
          <br />
          Als Webentwickler in Passau setze ich mich dafür ein, herausragende
          Websites zu erstellen und das Ranking durch effektive
          Suchmaschinenoptimierung zu verbessern. Durch meine umfangreiche
          Erfahrung in der Frontend-Entwicklung gelingt es mir nicht nur,
          qualitativ hochwertige Webanwendungen zu erstellen, sondern sie auch
          gezielt für Suchmaschinen zu optimieren, um maximale Sichtbarkeit und
          ein verbessertes Ranking zu gewährleisten. Mein Ziel ist es,
          innovative und intuitive Lösungen zu entwickeln, die das
          Nutzererlebnis auf eine neue Ebene heben.
          <br />
          <br />
          Kürzlich habe ich das Webentwicklungsunternehmen{" "}
          <Link className="underline font-bold" href="https://www.inoweb.pro/">
            INOWEB
          </Link>{" "}
          in Kosovo gegründet, um meine Fähigkeiten und Leidenschaft in einer
          breiteren Palette von Projekten einzubringen.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
