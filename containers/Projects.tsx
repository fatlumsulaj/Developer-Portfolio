import React from "react";
import Link from "next/link";
import { BarChart4, UtensilsCrossed, Code2, Shovel, PencilRuler, PieChart, TrafficCone } from "lucide-react";
import { nunito } from "@/app/ui/fonts";
import { ExternalLink } from "lucide-react";
type ProjectStats = {
  link: string;
  text: string;
  title: string;
  linkText: string;
  bgColor: string;
  headingC: string;
  children: React.ReactNode;
};

type headingColor = {
  color: string;
}

const Project = ({ link, linkText, text, title, bgColor, headingC, children }: ProjectStats) => {
  const dynamicStyles = {
    backgroundColor: bgColor || 'transparent',
  };

const headingColor: headingColor= {
  color: headingC || "black",
}

  return (
    <div className={`max-w-[450px] h-[280px] py-8 px-12 text-center text-black flex flex-col justify-evenly rounded-xl shadow-md border-gray-300 border-opacity-50 border-[1px]`} style={dynamicStyles}>
      <div className="flex flex-row justify-center items-center gap-1">
        {children}
        <h4 className={`heading4`} style={headingColor}>{title}</h4>
      </div>
      <p className="paragraph-sm">{text}</p>
      <div className="flex flex-row justify-center items-center gap-1 bg-[#ebf5ff] w-fit mx-auto px-3 py-1 text-[16px]">
      <ExternalLink width={18} color="#0068db"/><Link href={link} className="text-[#0068db]">{linkText}</Link>
      </div>
    </div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className={`max-container padding-container ${nunito.className} text-center my-32`}>
      <h2 className="heading2">Meine aktuellen Arbeiten</h2>
      <p className="paragraph">
        Hier sind ein paar Designprojekte, an denen ich in der Vergangenheit
        gearbeitet habe. Möchten Sie mehr sehen? Schreiben Sie mir eine E-Mail.
      </p>
      <div className="flex flex-wrap justify-center flex-row gap-6 mt-12">
        <Project
          link="https://www.inoweb.pro"
          text="Website für ein Web-Entwicklung & SEO Unternehmen - Wo Webentwicklung auf Innovation trifft"
          title="INOWEB"
          linkText="inoweb.pro"
          bgColor="white"
          headingC="#213f71"
        >
          <Code2 color="#213f71"/>
        </Project>
        <Project
          link="https://www.berisha-pflasterbau.de/"
          text="Website für ein Speiserestaurant - Köstliche, Speisekarte, einladende Atmosphäre"
          title="Gericht"
          linkText="restaurant-website"
          bgColor="white"
          headingC="#19a0a5"
        >
         <UtensilsCrossed color="#19a0a5"/>
        </Project>
        <Project
          link="https://construction-website-fs.vercel.app/"
          text="Eine Website für ein Bauunternehmen, die Träume von Grund auf zu verwiklichen"
          title="Constructer"
          linkText="constructer-website"
          bgColor="white"
          headingC="#4965d6"
        >
          <Shovel color="#4965d6"/>
        </Project>
        <Project
          link="https://architect-website-fs.vercel.app/"
          text="Eine Website für ein Architektbüro, wo innovative Designs zum Leben erweckt werden"
          title="Architect"
          linkText="architect-website"
          bgColor="white"
          headingC="#36393d"
        >
          <PencilRuler color="#36393d"/>
        </Project>
        <Project
          link="https://digital-marketing-website-fs.vercel.app/"
          text="Website für ein Digital-Marketing Unternehmen - Online Strategien revolutionieren"
          title="DM Agency"
          linkText="digital-marketing"
          bgColor="white"
          headingC="#cc5c4a"
        >
          <PieChart color="#cc5c4a"/>
        </Project>
        <Project
          link="https://gericht-restaurant-fs.vercel.app/"
          text="Website für ein Speiserestaurant - Köstliche, Speisekarte, einladende Atmosphäre"
          title="Gericht"
          linkText="restaurant-website"
          bgColor="white"
          headingC="#19a0a5"
        >
         <UtensilsCrossed color="#19a0a5"/>
        </Project>
      </div>
    </section>
  );
};

export default Projects;
