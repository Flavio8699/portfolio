import Section from "../components/section/Section.tsx";
import SectionHeader from "../components/section/SectionHeader.tsx";
import CardTitle from "../components/ui/CardTitle.tsx";
import Card from "../components/ui/Card.tsx";
import { data } from "../../public/data.tsx";

export default function LanguagesSection() {
    const languages = data.languages;

    return (
        <Section id="languages">
            <SectionHeader>Languages 🌍</SectionHeader>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {languages.map((lang, id) => (
                    <Card key={id}>
                        <div className="flex justify-between items-center mb-4">
                            <CardTitle>{lang.name}</CardTitle>
                            <span
                                className="text-sm px-3 py-1 rounded-full font-semibold bg-teal-400/50"
                            >
                                {lang.level}
                            </span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div
                                className="h-2 rounded-full transition-all duration-500 bg-teal-400"
                                style={{ width: `${lang.progress}%` }}
                            ></div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
