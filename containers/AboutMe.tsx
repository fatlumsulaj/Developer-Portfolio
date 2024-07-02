import React from "react";
import Link from "next/link";
import { nunito } from "@/app/ui/fonts";
const AboutMe = () => {
  return (
    <section
      className={`bg-[#6E07F3] w-full ${nunito.className} pt-14 lg:pt-24 pb-[200px] md:pb-[250px] 
    `}
      id="aboutme"
    >
      <div className="max-container padding-container">
        <h2 className="heading2 text-center text-white pb-5">
          Hi, ich bin Fatlum. Schön, dich kennenzulernen.
        </h2>
        <p className="paragraph text-white max-w-[1000px] mx-auto text-center">
          Seit ich vor 3 Jahren als Webentwickler begonnen habe, habe ich
          Websites für Kunden erstellt und mit talentierten Menschen
          zusammengearbeitet, um qualitativ hochwertige Webanwendungen zu
          entwickeln und sie gezielt für Suchmaschinen zu optimieren, um
          maximale Sichtbarkeit und ein verbessertes Ranking zu gewährleisten.
          Ich bin ruhig selbstbewusst, von Natur aus neugierig und arbeite
          ständig daran, meine Fähigkeiten zu verbessern.

          Kürzlich habe ich das Webentwicklungsunternehmen{" "}
          <Link className="underline font-bold" href="https://www.inoweb-agentur.de/">
            INOWEB
          </Link>{" "}
          in Kosovo gegründet, um meine Fähigkeiten und Leidenschaft in einer
          in einer Vielzahl von Projekten einzubringen.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
