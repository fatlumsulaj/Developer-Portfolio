import React from "react";
import Link from "next/link";
import { nunito } from "@/app/ui/fonts";
import { ExternalLink } from "lucide-react";

type ProjectStats = {
  pname: string;
  text: string;
  link: string;
  image: string;
  linkText: string;
};

const SingleProject = ({
  pname,
  text,
  link,
  linkText,
  image,
}: ProjectStats) => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap border-gray-400 border-opacity-50 shadow-md border-[1px] rounded-2xl mx-2">
      <div className=" flex flex-col justify-center px-4 sm:px-10 py-5">
        <h3 className="text-[26px] font-bold my-2">{pname}</h3>
        <p className="paragraph max-w-[888px]">{text}</p>
        <a href={link} className="text-[#6E07F3] font-bold text-[21px] mt-5">
          {linkText}
        </a>
      </div>
      <img
        src={image}
        alt="Fatlum Sulaj Project"
        className="w-auto md:max-w-[550px] bg-[#96eace] rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className={`max-container my-20 ${nunito.className}`}
      id="projects"
    >
      <h2 className="heading2 text-center mb-4">Meine aktuellen Arbeiten</h2>
      <p className="text-center paragraph mb-14">
        Hier sind ein paar Projekte, an denen ich in der Vergangenheit
        gearbeitet habe. Möchten Sie mehr sehen? Schreiben Sie mir einfach eine
        E-Mail.
      </p>

      <div className="flex flex-wrap flex-col gap-6">
        <SingleProject
          pname="Malaj Dienstleistungen"
          text="Ich habe eine professionelle Landingpage für Malaj Dienstleistungen erstellt, ein Unternehmen für Gartenpflege und Hausmeisterservice in Passau und Umgebung. Die Seite präsentiert modernes Design und umfassende Informationen über Projekte, Dienstleistungen und das Unternehmen selbst.

Malaj Dienstleistungen steht für Qualität, Zuverlässigkeit und Kundenzufriedenheit mit langjähriger Erfahrung und Fachwissen für erstklassige Ergebnisse."
          link="https://www.malaj-service.de/"
          linkText="malaj-service.de"
          image="/malaj.png"
        />

        <SingleProject
          pname="Protec Safe"
          text="Ich habe eng mit dem führenden Tresorhersteller in Kosovo zusammengearbeitet, um eine maßgeschneiderte Unternehmenswebsite zu entwickeln. Diese Website wurde speziell für eine hohe Platzierung in Suchmaschinen optimiert und gewährleistet eine reibungslose Funktion auf verschiedenen Geräten. Sie umfasst eine ansprechende Haupt-Landingpage, eine detaillierte Übersicht der Produkte, eine Liste der Partnerschaften, einen gut strukturierten Kontaktbereich sowie individuelle Seiten für jedes Produkt von Protec Safe."
          link="https://www.protec.al/"
          linkText="protec.al"
          image="/protec.png"
        />

        <SingleProject
          pname="BS Pflasterbau Meisterbetrieb"
          text="
Wir haben eine professionelle Landingpage für das Pflasterbauunternehmen Pflasterbau Berisha in Passau, Deutschland, entwickelt.
Die Landingpage bietet einen umfassenden Überblick über vergangene Projekte, die breite Palette an Dienstleistungen sowie eine detaillierte Über uns -Sektion, die das Unternehmen und seine Werte darstellt. Darüber hinaus enthält die Seite ein intuitives Kontaktformular, um den direkten Austausch mit Kunden zu erleichtern, sowie eine Rubrik mit häufig gestellten Fragen, um potenzielle Kunden umfassend zu informieren."
          link="https://www.berisha-pflasterbau.de/"
          linkText="berisha-pflasterbau.de"
          image="/berisha.png"
        />

        <SingleProject
          pname="Beaute Infinie"
          text="Wir haben eng mit einem Nagelstudio in Frankreich zusammengearbeitet und eine multifunktionale Website entwickelt. Die Website bietet nicht nur eine beeindruckende Startseite, sondern auch verschiedene Seiten für Dienstleistungen mit einem einzigartigen und ansprechenden Design. Ein integriertes Online-Buchungssystem ermöglicht es den Kunden, Termine direkt über die Website zu vereinbaren, was die Benutzerfreundlichkeit und Effizienz für das Unternehmen steigert."
          link="https://beaute-infinie.ch/"
          linkText="beaute-infinie.ch"
          image="/beaute.png"
        />

        <SingleProject
          pname="Dream Design"
          text="Wir haben mit einem Architekturbüro aus Kosovo zusammengearbeitet, um eine maßgeschneiderte Website zu entwickeln, die genau auf ihre geschäftlichen Anforderungen zugeschnitten ist. Die Website überzeugt mit einem modernen UI-Design und bietet eine hervorragende UX (Nutzererfahrung). Sie umfasst eine Landingpage, eine Über-uns-Seite sowie Bereiche für Dienstleistungen und Projekte, die das Unternehmen mithilfe des Sanity CMS verwaltet. Unsere Zusammenarbeit hat es ermöglicht, eine innovative Online-Präsenz zu schaffen, die das Architekturbüro optimal repräsentiert und dessen Online-Auftritt erheblich stärkt."
          link="https://dreamdesign-ks.com/"
          linkText="dreamdesign-ks.com"
          image="/dreamdesign.png"
        />
      </div>
    </section>
  );
};

export default Projects;
