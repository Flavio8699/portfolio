import Card from "../components/ui/Card";
import HorizontalList from "../components/ui/HorizontalList";
import Section from "../components/section/Section";
import SectionHeader from "../components/section/SectionHeader";
import CardTitle from "../components/ui/CardTitle";
import VerticalList from "../components/ui/VerticalList";
import SkillsList from "../components/ui/SkillsList";
import { data } from "../../public/data"

export default function ExperienceSection() {
    const experiences = data.experience;

    return (
        <Section id="experience">
            <SectionHeader>Experience 💼</SectionHeader>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-full top-0 w-1 bg-teal-500"></div>

                {experiences.map((exp, id) => {
                    const isLeft = id % 2 === 0;
                    return (
                        <div key={id} className="mb-8 relative pl-10 lg:pl-0">
                            {/* Dot */}
                            <div className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full z-10"></div>

                            <div
                                className={`lg:w-1/2 ${isLeft ? "lg:pl-8 lg:ml-auto" : "lg:pr-8"}`}
                            >
                                <Card key={id}>
                                    {/* Logo + Role */}
                                    <div className="flex items-center mb-4 gap-3">
                                        {exp.logo && (
                                            <div className="w-10 sm:w-14 aspect-square bg-white rounded-lg flex flex-shrink-0 items-center justify-center overflow-hidden border-1 boreder-red-500">
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className="w-full h-full p-1 sm:p-2 object-contain"
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <CardTitle>{exp.role}</CardTitle>
                                            <HorizontalList
                                                items={[exp.company, `${exp.start} – ${exp.end || "Present"}`]}
                                            />
                                        </div>
                                    </div>

                                    <VerticalList items={exp.description} className="mb-4" />
                                    <SkillsList skills={exp.skills} />
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    );
}
