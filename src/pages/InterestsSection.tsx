import Section from "../components/section/Section.tsx";
import SectionHeader from "../components/section/SectionHeader.tsx";
import { data } from "../../public/data.tsx";

export default function InterestsSection() {
    const interests = data.interests;

    return (
        <Section id="interests">
            <SectionHeader>Interests 🌟</SectionHeader>
            <div className="flex flex-wrap gap-4">
                {interests.map((interest, id) => (
                    <div
                        key={id}
                        className="flex items-center gap-2 bg-gray-800/60 text-gray-200 px-4 py-2 rounded-full shadow hover:bg-teal-500 hover:text-white transition-all duration-200 cursor-pointer"
                    >
                        {interest.icon}
                        <span className="font-medium">{interest.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
