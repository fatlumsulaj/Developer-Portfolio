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
    <div className="flex flex-wrap xl:flex-nowrap border-gray-400 border-opacity-50 shadow-md border-[1px] rounded-2xl">
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
      <h2 className="heading2 text-center">Meine aktuellen Arbeiten</h2>
      <p className="text-center paragraph mb-10">
        Hier sind ein paar Projekte, an denen ich in der Vergangenheit
        gearbeitet habe. Möchten Sie mehr sehen? Schreiben Sie mir einfach eine
        E-Mail.
      </p>

      <div className="flex flex-wrap flex-col gap-6">
        <SingleProject
          pname="Inoweb Agentur"
          text="Gemeinsam mit meinem Bruder haben wir unsere eigene Webentwicklungs- und SEO-Agentur gegründet. Es ist eines unserer bisher größten Projekte und bietet Inhalte in drei verschiedenen Sprachen an: Deutsch (Hauptsprache), Englisch und Albanisch."
          link="https://www.inoweb-agentur.de/"
          linkText="inoweb-agentur.de"
          image="/inowebproject.webp"
        />

        <SingleProject
          pname="Malaj Dienstleistungen"
          text="Wir haben mit einem Gartenbau aus dem Kosovo zusammengearbeitet, um eine maßgeschneiderte Website zu entwickeln, die auf ihre Geschäftsbedürfnisse zugeschnitten ist. Die Website verfügt über eine moderne Benutzeroberfläche und eine großartige Benutzererfahrung. Sie umfasst eine Startseite, eine Über uns-Seite, Dienstleistungen und Projekte, die das Unternehmen über das Sanity CMS verwaltet."
          link="https://www.dreamdesign-ks.com/"
          linkText="dreamdesign-ks.com"
          image="/dreamdesignproject.webp"
        />

        <SingleProject
          pname="BS Pflasterbau Meisterbetrieb"
          text="
Wir haben eine professionelle Landingpage für ein Pflasterbauunternehmen in Passau, Deutschland, erstellt. Die Landingpage verfügt über ein modernes Design und zeigt die Erfahrung von Pflasterbau Berisha auf dem Gebiet durch seine Projekte, Dienstleistungen und die Über uns-Sektion. Sie enthält auch ein Kontaktformular und häufig gestellte Fragen."
          link="https://www.berisha-pflasterbau.de/"
          linkText="berisha-pflasterbau.de"
          image="/pflasterbauproject.webp"
        />

        <SingleProject
          pname="Beaute Infinie"
          text="Wir haben mit einem Nagelstudio in Frankreich zusammengearbeitet und eine multifunktionale Website erstellt. Von einer beeindruckenden Startseite über verschiedene Seiten für Dienstleistungen mit einem einzigartigen Design und Online-Buchungssystem unterstützt die Website das Unternehmen dabei, Kunden online zu finden und alles über die Website zu verwalten."
          link="https://beaute-infinie.vercel.app/"
          linkText="beaute-infinie.vercel.app"
          image="/beauteinfinieproject.png"
        />

        <SingleProject
          pname="Digital Marketing"
          text="Website-Vorlage mit einem einzigartigen Design und einer klaren Struktur, die erstellt wurde, um die Fähigkeiten im Design von Websites für die Branche zu präsentieren."
          link="https://digital-marketing-website-fs.vercel.app/"
          linkText="digital-marketing-website-fs.vercel.app"
          image="/digitalmarketingproject.png"
        />
      </div>
    </section>
  );
};

export default Projects;
