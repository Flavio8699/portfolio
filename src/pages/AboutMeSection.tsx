import { useEffect, useState } from "react";
import Section from "../components/section/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { data } from "../../public/data"

export default function AboutMeSection() {
    const aboutme = data.aboutme;
    const [summaryText, setSummaryText] = useState("");

    const firstLine = 'cat summary.txt\n';
    const remainingLines = aboutme.summary;


    useEffect(() => {
        let charIndex = 0;
        let currentText = "";

        const typeInterval = setInterval(() => {
            if (charIndex < firstLine.length) {
                currentText += firstLine[charIndex];
                setSummaryText(currentText);
                charIndex++;
            } else {
                clearInterval(typeInterval);

                setTimeout(() => {
                    setSummaryText(currentText + remainingLines.join('\n'));
                }, 750);

            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <Section id="about-me" className="relative md:flex md:flex-row border-t-0">
            <div className="w-full md:w-1/2">
                <div className="w-full md:max-w-xl relative">
                    <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">
                        Hello <span className="inline-block">👋</span> I'm
                    </p>

                    <h1
                        className={`text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-6 transform transition-all duration-500 opacity-100 translate-y-0 scale-100"`}
                        id="full-name"
                    >
                        {aboutme.firstname} <br /> {aboutme.lastname}
                    </h1>

                    <p className="text-sm font-semibold text-teal-300 uppercase mb-4">
                        {aboutme.description}
                    </p>

                    <Card className="w-full mt-10 font-mono text-gray-300 mb-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <span className="text-teal-300">{aboutme.terminal} </span>
                                {summaryText}
                                {summaryText === firstLine && (
                                    <span className="inline-block w-3 h-3 border-2 border-t-teal-300 border-gray-600 rounded-full animate-spin ml-1"></span>
                                )}
                                {summaryText === firstLine + remainingLines.join("\n") && (
                                    <>
                                        {"\n"}
                                        <span className="text-teal-300">{aboutme.terminal} </span>
                                    </>
                                )}
                                <span className="animate-pulse">_</span>
                            </pre>
                        </div>
                    </Card>

                    <Button
                        onClick={() => {
                            window.open("/CV_Flavio.pdf", "_blank", "noopener,noreferrer");
                        }}
                        className="mt-10"
                    >
                        Download CV
                    </Button>
                </div>
            </div>

            <div className="absolute md:relative top-25 right-6 w-[120px] sm:w-[150px] md:w-1/3 md:left-1/12 md:top-25">
                <img
                    src="/memoji-laptop.png"
                    alt="memoji"
                    className="w-full max-w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
            </div>
        </Section>
    );
}
