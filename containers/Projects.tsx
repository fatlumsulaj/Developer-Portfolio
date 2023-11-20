import React from "react";
import Link from "next/link";
import { BarChart4 } from "lucide-react";
import { nunito } from "@/app/ui/fonts";
import { ExternalLink } from "lucide-react";
type ProjectStats = {
  link: string;
  text: string;
  title: string;
  linkText: string;
  bgColor: string;
  children: React.ReactNode;
};

const Project = ({ link, linkText, text, title, bgColor, children }: ProjectStats) => {
  const dynamicStyles = {
    backgroundColor: bgColor || 'transparent',
  };

  return (
    <div className={`max-w-[400px] h-[280px] py-10 px-2 text-center text-white flex flex-col justify-evenly rounded-xl shadow-md`} style={dynamicStyles}>
      <div className="flex flex-row justify-center items-center gap-1">
        {children}
        <h4 className="heading4">{title}</h4>
      </div>
      <p className="paragraph-sm">{text}</p>
      <div className="flex flex-row justify-center items-center gap-1">
      <ExternalLink/><Link href={link}>{linkText}</Link>
      </div>
    </div>
  );
};


const Projects = () => {
  return (
    <section className={`max-container padding-container ${nunito.className} text-center my-24`}>
      <h2 className="heading2">Meine aktuellen Arbeiten</h2>
      <p className="paragraph">
        Hier sind ein paar Designprojekte, an denen ich in der Vergangenheit
        gearbeitet habe. Möchten Sie mehr sehen? Schreiben Sie mir eine E-Mail.
      </p>
      <div className="flex flex-wrap justify-center flex-row gap-6 mt-12">
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#213f71"
        >
          <BarChart4 />
        </Project>
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#1aa6ab"
        >
          <BarChart4 />
        </Project>
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#4867d8"
        >
          <BarChart4 />
        </Project>
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#36393d"
        >
          <BarChart4 />
        </Project>
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#cb5c49"
        >
          <BarChart4 />
        </Project>
        <Project
          link="/about"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="#286c45"
        >
          <BarChart4 />
        </Project>
      </div>
    </section>
  );
};

export default Projects;
