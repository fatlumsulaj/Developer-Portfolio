import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import Link from "next/link";
type SkillProps = {
  children: React.ReactNode;
};

const Skill = ({ children }: SkillProps) => {
  return (
    <div className="w-full sm:max-w-[479px] h-auto border-[1px] border-gray-400 border-opacity-50 2xl:border-none rounded-xl">
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section
      className={`max-container container-padding flex flex-wrap justify-center border-0 2xl:border-[1px] border-gray-300 border-opacity-50 rounded-2xl mt-[-140px] shadow-md bg-white ${nunito.className}`}
    >
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-10 lg:mt-24">
          <Image
            src="/laptop-code-solid.svg"
            alt="web development"
            width={50}
            height={50}
          />
        </div>
        <div className="px-12 pb-10 lg:pb-24 text-center">
          <h3 className="heading3 text-center py-4">Web Entwickler</h3>
          <p className="paragraph-sm">
            Ich liebe es, von Grund auf zu programmieren und Ideen im Browser
            lebendig werden zu lassen.
          </p>
          <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
            Programmiersprachen, die ich beherrsche:
          </p>
          <p className="paragraph-sm">
            HTML, CSS, Tailwind, SASS, Bootstrap, Javasript, React, Next JS,
            Typesript
          </p>
          <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
            Dev Tools
          </p>
          <p className="paragraph-sm">Github</p>
          <p className="paragraph-sm">Netlify</p>
          <p className="paragraph-sm">Vercel</p>
          <p className="paragraph-sm">Joomla</p>
          <br />
          <div className="mt-10">
            <Link className="button-white" href="/">
              Mehr Lesen
            </Link>
          </div>
        </div>
      </Skill>
      <Skill>
        <div className="w-full h-full border-0 2xl:border-x-[1px] lg:border-gray-300 lg:border-opacity-50 pt-10 lg:pt-24">
          <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto">
            <Image
              src="/wand-magic-sparkles-solid.svg"
              alt="design"
              width={50}
              height={50}
            />
          </div>
          <div className="px-12 pb-10 lg:pb-24 text-center">
            <h3 className="heading3 text-center py-4">Designer</h3>
            <p className="paragraph-sm ">
              Eine klare Inhaltsstruktur, eine leicht verständliche Darstellung
              und verständlicher Inhalt sind für mich unverzichtbar.
            </p>
            <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
              Was ich gerne entwerfe:
            </p>
            <p className="paragraph-sm">
              UX, UI, Websites, Logos, Werbungen für Soziale Netzwerke
            </p>
            <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
              Design Tools
            </p>
            <p className="paragraph-sm">Figma</p>
            <p className="paragraph-sm">Adobe Express</p>
            <p className="paragraph-sm">Font Awesome</p>
            <p className="paragraph-sm">Pen & Paper</p>
            <br />
            <div className="mt-10">
              <Link className="button-white" href="/">
                Mehr Lesen
              </Link>
            </div>
          </div>
        </div>
      </Skill>
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-10 lg:mt-24">
          <Image
            src="/magnifying-glass-chart-solid.svg"
            alt="Suchmaschinen Optimierung"
            width={50}
            height={50}
          />
        </div>
        <div className="px-12 pb-10 lg:pb-24 text-center">
          <h3 className="heading3 text-center py-4">SEO Expert</h3>
          <p className="paragraph-sm">
            Durch eine gezielte SEO-Strategie kann ich sicherstellen, dass meine
            Webseites von den richtigen Nutzern gefunden und besucht wird.
          </p>
          <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
            Ich bin hauptsächlich konzentriert auf:
          </p>
          <p className="paragraph-sm">
            Content Creation, Werbungen, Keywords, Page Ranking, Link Building
            usw.
          </p>
          <p className="paragraph-sm purple-text font-semibold pt-12 pb-1">
            SEO Tools
          </p>
          <p className="paragraph-sm">Google Analytics</p>
          <p className="paragraph-sm">Google Search Console</p>
          <p className="paragraph-sm">Google Keyword Planner</p>
          <p className="paragraph-sm">Semrush</p>
          <p className="paragraph-sm">Ahrefs</p>
          <div className="mt-10">
            <Link className="button-white" href="/">
              Mehr Lesen
            </Link>
          </div>
        </div>
      </Skill>
    </section>
  );
};

export default Skills;
