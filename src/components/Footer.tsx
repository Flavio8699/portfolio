import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "../../public/data"

export default function Footer() {
    const aboutme = data.aboutme;

    return (
        <footer className="bottom-0 left-0 right-0 bg-black/30 py-4 flex flex-col items-center text-sm text-gray-300 space-y-3">
            <span className="flex items-center">
                Made with <span className="mx-1">❤️</span> using React & TailwindCSS
            </span>

            <div className="flex space-x-6">
                {aboutme.github && (
                    <a
                        href={`https://github.com/${aboutme.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                )}
                {aboutme.linkedin && (
                    <a
                        href={`https://linkedin.com/in/${aboutme.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {aboutme.github && (
                    <a
                        href={`mailto:${aboutme.email}`}
                        className="hover:text-teal-400 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                )}
            </div>
        </footer>
    );
}
