'use client'
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Linkedin, Copyright } from "lucide-react";
import { usePathname } from "next/navigation";


const Footer = () => {
  
  const path = usePathname()

  return (
    <footer className={`text-white bg-[#6E07F3] ${path === "/"? "pt-44":"pt-10"} pb-10`}>
      <div className="max-container flex flex-wrap padding-container">
        <div className="flex flex-wrap  justify-between w-full">
        <div className="flex flex-col justify-center gap-2 mb-5 w-full lg:w-1/3">
          <Link href="/" className="text-[40px] lg:text-[65px] text-center">
          𝔽𝕊
          </Link>
          <p className="max-w-[400px] paragraph text-center">
            Der Weg zum Erfolg ist gepflastert mit harter Arbeit, Hingabe und
            ständigem Lernen
          </p>
        </div>
        <div className="mt-5 mx-auto text-center w-full lg:w-1/3">
          <p className="heading3 mb-2">Navbar</p>
          <ul className="paragraph-sm flex flex-col gap-1">
            <Link href="/"><li>Home</li></Link>
            <Link href="/#aboutme"><li>Über mich</li></Link>
            <Link href="/#skills"><li>Fähigkeiten</li></Link>
            <Link href="/#projects"><li>Projekten</li></Link>
          </ul>
        </div>
        <div className="flex mt-5 flex-col gap-1 justify-center mx-auto text-center w-full lg:w-1/3">
          <p className="heading3 mb-2 text-center">Soziale Medien</p>
          <div className="flex flex-col gap-1 mx-auto text-center">
            <Link href="https://www.instagram.com/fatlum.sulaj/" className="text-center">
              <p className="text-center paragraph-sm">Instagram: fatlum.sulaj</p>
            </Link>
            <Link href="https://de.linkedin.com/in/fatlum-sulaj-642581236">
              <p className="text-center paragraph-sm">Linkedin: Fatlum Sulaj</p>
            </Link>
            <div className="flex gap-1 items-center paragraph-sm">
              <p>fatlumsulaj@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex max-container items-center justify-center gap-2 padding-container paragraph mt-12">
        <p>Erstellt mit Next JS 14</p>
        <p>|</p>
        <p>Fatlum Sulaj</p>
        <Copyright />
        <p>2024</p>
      </div>
      
    </footer>
  );
};

export default Footer;
