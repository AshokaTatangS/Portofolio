"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "./components/Card";
import Introduction from "./components/Introduction";
import EducationJourney from "./components/MyEducationJourney";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const handleNavigationClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const navHeight = 70;
      const offsetTop = target.offsetTop - navHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const sections = ["about", "education", "projects", "contacts"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-600 to-white-500 text-white min-h-screen flex flex-col pb-20">
      <Head>
        <title>My Portfolio</title>
      </Head>

      {/* Top Navigation */}
      <nav className="w-full bg-black text-white py-4 flex justify-center space-x-20 sticky top-0 z-50">
        <button
          onClick={() => handleNavigationClick("about")}
          className={`hover:underline`}
        >
          About
        </button>
        <button
          onClick={() => handleNavigationClick("education")}
          className={`hover:underline`}
        >
          Education
        </button>
        <button
          onClick={() => handleNavigationClick("projects")}
          className={`hover:underline`}
        >
          Past Projects
        </button>
        <button
          onClick={() => handleNavigationClick("contacts")}
          className={`hover:underline`}
        >
          Contacts
        </button>
      </nav>

      <div className="ml-20 mt-5 mb-20 mr-20 z-10">
        {/* Header Section */}
        <header id="about" className="flex flex-row mt-12 justify-around">
          <div className="items-left text-center">
            <Image
              src="/beranda.jpeg"
              alt="godot"
              className="rounded-[10%] mb-4"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col text-center justify-center">
            <Introduction />
          </div>
        </header>

        {/* Education Journey Section */}
        <section id="education">
          <EducationJourney />
        </section>

        {/* Past Projects Section */}
        <section id="projects">
          <Card />
        </section>

        {/* Footer Section */}
        <footer id="contacts" className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-2">Let's work together!</h2>
          <div className="flex space-x-4 justify-center">
            <a href="mailto:ashoka.122140051@student.itera.ac.id" className="hover:underline">
              Email
            </a>
            <a href="https://github.com/AshokaTatangS/" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.instagram.com/ashzzz1" className="hover:underline">
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
