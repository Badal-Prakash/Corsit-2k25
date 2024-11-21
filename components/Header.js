"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"; // For next/image optimization
import Logo from "@/public/image/logo.png"; // Directly import the logo image
import Link from "next/link"; // Corrected import for next/link

function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveTab("Home");
        break;
      case "/about":
        setActiveTab("About");
        break;
      case "/projects":
        setActiveTab("Projects");
        break;
      case "/team":
        setActiveTab("OurTeam");
        break;
      case "/contact":
        setActiveTab("Contact");
        break;
      case "/alumini":
        setActiveTab("Alumini");
        break;
      default:
        setActiveTab("Home");
    }
  }, [pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link href="/" onClick={() => handleTabClick("Home")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link href="/about" onClick={() => handleTabClick("About")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link href="/projects" onClick={() => handleTabClick("Projects")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Projects
            </li>
          </Link>
          <Link href="/team" onClick={() => handleTabClick("OurTeam")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Team
            </li>
          </Link>
          <Link href="/contact" onClick={() => handleTabClick("Contact")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact Us
            </li>
          </Link>
          <Link href="/alumini" onClick={() => handleTabClick("Alumini")}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Alumini
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <header className="bg-slate-900 shadow-md fixed w-screen z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="h-10 w-10" />
        </Link>
        <div className="flex sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`hidden sm:flex gap-4 ${
            mobileMenuOpen ? "flex-col" : "hidden"
          }`}
        >
          <Link href="/" onClick={() => handleTabClick("Home")}>
            <li className={`nav-item ${activeTab === "Home" ? "active" : ""}`}>
              Home
            </li>
          </Link>
          <Link href="/projects" onClick={() => handleTabClick("Projects")}>
            <li
              className={`nav-item ${activeTab === "Projects" ? "active" : ""}`}
            >
              Projects
            </li>
          </Link>
          <Link href="/about" onClick={() => handleTabClick("About")}>
            <li className={`nav-item ${activeTab === "About" ? "active" : ""}`}>
              About
            </li>
          </Link>
          <Link href="/team" onClick={() => handleTabClick("OurTeam")}>
            <li
              className={`nav-item ${activeTab === "OurTeam" ? "active" : ""}`}
            >
              Our Team
            </li>
          </Link>
          <Link href="/contact" onClick={() => handleTabClick("Contact")}>
            <li
              className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
            >
              Contact
            </li>
          </Link>
          <Link href="/alumini" onClick={() => handleTabClick("Alumini")}>
            <li
              className={`nav-item ${activeTab === "Alumini" ? "active" : ""}`}
            >
              Alumini
            </li>
          </Link>
        </ul>
      </div>
      <div className="">{mobileMenuOpen && content}</div>
    </header>
  );
}

export default Header;
