import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Linkedin, Copyright } from "lucide-react";
const Footer = () => {
  return (
    <footer className="text-white bg-[#6E07F3] pt-44 pb-10">
      <div className="max-container padding-container flex flex-col md:flex-row flex-wrap justify-around items-center">
        <div className="flex flex-col flex-wrap justify-center gap-2 items-center">
          <Link href="/" className="text-[40px] lg:text-[65px]">
            𝔉𝔖
          </Link>
          <p className="max-w-[400px] paragraph text-center">
            Der Weg zum Erfolg ist gepflastert mit harter Arbeit, Hingabe und
            ständigem Lernen
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="heading3 mb-2">Navbar</p>
          <ul className="paragraph-sm flex flex-col gap-1">
            <li>Home</li>
            <li>Über mich</li>
            <li>Fähigkeiten</li>
            <li>Projekten</li>
          </ul>
        </div>
        <div className="flex mt-5 flex-col gap-1 text-center">
          <p className="heading3 mb-2">Soziale Medien</p>
          <div className="flex flex-col gap-1 text-center">
            <div className="flex gap-1 items-center mx-auto paragraph-sm">
              <Instagram width={20} />
              <p>fatlum.sulaj</p>
            </div>
            <div className="flex gap-1 items-center mx-auto paragraph-sm">
              <Facebook width={20} />
              <p>Fatlum Sulaj</p>
            </div>
            <div className="flex gap-1 items-center mx-auto paragraph-sm">
              <Linkedin width={20} />
              <p>Fatlum Sulaj</p>
            </div>
            <div className="flex gap-1 items-center mx-auto paragraph-sm">
              <Mail width={20} />
              <p>fatlumsulaj@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-container items-center justify-center gap-2 padding-container paragraph pt-12">
        <p>Erstellt mit Next JS 14</p>
        <p>|</p>
        <p>Fatlum Sulaj</p>
        <Copyright />
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
