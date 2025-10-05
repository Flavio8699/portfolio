import Section from "../components/section/Section";
import SectionHeader from "../components/section/SectionHeader";
import Card from "../components/ui/Card";
import CardTitle from "../components/ui/CardTitle";
import SkillsList from "../components/ui/SkillsList";
import { data } from "../../public/data"

export default function SkillsSection() {
    const skills = data.skills;

    return (
        <Section id="skills">
            <SectionHeader>Skills ⚡️</SectionHeader>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skills, id) => (
                    <Card key={id}>
                        <CardTitle className="mb-4">{skills.category}</CardTitle>
                        <SkillsList skills={skills.list} />
                    </Card>
                ))}
            </div>
        </Section>
    );
}
