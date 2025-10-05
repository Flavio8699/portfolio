import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import Scrollspy from "react-scrollspy-navigation";
import { data } from "../../public/data"

export default function Navbar() {
    const aboutme = data.aboutme;
    const sections = data.sections;

    const [activeSection, setActiveSection] = useState<string>("about-me");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const newY = window.scrollY;
            setScrollDir(newY > lastScrollY ? "down" : "up");
            lastScrollY = newY > 0 ? newY : 0;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return (
        <header className="w-full mx-auto fixed top-0 right-0 z-100 bg-gray-900/80 backdrop-blur-md shadow">
            <nav className="max-w-7xl mx-auto lg:flex lg:justify-between items-center">
                {/* Name + Mobile Menu Hamburger */}
                <div className="flex items-center min-h-18 justify-between py-3 px-6 md:px-8">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/memoji-laptop.png"
                            className={`rounded-full bg-teal-400 transform transition-all duration-500 ${menuOpen || activeSection !== "about-me"
                                ? "h-10 scale-100 opacity-100"
                                : "h-0 scale-50 opacity-0"
                                }`}
                            alt="memoji"
                        />
                        <span
                            className={`font-bold text-white transform transition-all duration-500 ${menuOpen || activeSection !== "about-me"
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-4 scale-90"
                                }`}
                        >
                            {aboutme.firstname} <span className="font-light">{aboutme.lastname}</span>
                        </span>
                    </div>

                    {/* Mobile Menu Hamburger */}
                    <div className="lg:hidden">
                        <button
                            className="text-white focus:outline-none cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Navbar items */}
                <div
                    className={`bg-gray-900/95 lg:bg-transparent lg:mr-8 backdrop-blur-md lg:backdrop-blur-none border-b border-gray-800 lg:border-none overflow-hidden transform transition-all duration-300 
                        ${menuOpen
                            ? "opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-2"
                        } 
                    lg:opacity-100 lg:translate-y-0 lg:max-h-full`}
                >
                    <ul className="flex flex-col lg:flex-row lg:gap-6 px-6 md:px-8 lg:px-0 py-4 lg:py-0 lg:items-center relative">
                        <Scrollspy
                            onChangeActiveId={currentId => { if (currentId) setActiveSection(currentId) }}
                        >

                            {sections.map(s => {
                                const isActive = s.id === activeSection;
                                return (
                                    <li
                                        key={s.id}
                                        className="relative py-6 group cursor-pointer"
                                        onClick={() => scrollToSection(s.id)}
                                    >
                                        {/* Label */}
                                        <a
                                            href={`#${s.id}`}
                                            className={`w-full block font-medium transition-colors transform ${isActive ? "text-teal-300" : "group-hover:text-teal-300"} ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} lg:opacity-100 lg:translate-x-0`}
                                        >
                                            {s.label}
                                        </a>

                                        {/* Underline */}
                                        <span
                                            className={`absolute mt-1 left-0 right-0 h-1 bg-teal-300 rounded-full transform transition-transform duration-300 ease-in-out ${isActive
                                                ? scrollDir === "down"
                                                    ? "scale-x-100 origin-left"
                                                    : "scale-x-100 origin-right"
                                                : scrollDir === "down"
                                                    ? "scale-x-0 origin-right"
                                                    : "scale-x-0 origin-left"
                                                }`}
                                        />
                                    </li>
                                )

                            })}
                        </Scrollspy>
                        <Button
                            onClick={() => {
                                window.location.href = `mailto:${aboutme.email}`;
                            }}
                        >
                            Contact
                        </Button>
                    </ul>
                </div>
            </nav>
        </header >
    );
}
