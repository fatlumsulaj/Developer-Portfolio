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
      className={`max-container container-padding flex flex-wrap justify-center border-0 2xl:border-[1px] border-gray-300 border-opacity-50 rounded-2xl mt-[-140px] shadow-md bg-white ${nunito.className}` } id="skills"
    >
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-10 lg:mt-24">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

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
            Typesript, Sanity CMS
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
          </div>
        </div>
      </Skill>
      <Skill>
        <div className="w-full h-full border-0 2xl:border-x-[1px] lg:border-gray-300 lg:border-opacity-50 pt-10 lg:pt-24">
          <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
</svg>

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
            </div>
          </div>
        </div>
      </Skill>
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-10 lg:mt-24">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

        </div>
        <div className="px-12 pb-10 lg:pb-24 text-center">
          <h3 className="heading3 text-center py-4">SEO Experte</h3>
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
          </div>
        </div>
      </Skill>
    </section>
  );
};

export default Skills;
