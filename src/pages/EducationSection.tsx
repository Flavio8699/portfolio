import Section from "../components/section/Section";
import SectionHeader from "../components/section/SectionHeader";
import Card from "../components/ui/Card";
import CardTitle from "../components/ui/CardTitle";
import HorizontalList from "../components/ui/HorizontalList";
import VerticalList from "../components/ui/VerticalList";
import { data } from "../../public/data"

export default function EducationSection() {
    const education = data.education;

    return (
        <Section id="education">
            <SectionHeader>Education 🎓</SectionHeader>
            <div className="grid lg:grid-cols-2 gap-8">
                {education.map((education, id) => (
                    <Card key={id}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <CardTitle>{education.title}</CardTitle>
                                <HorizontalList items={[education.school, education.year]} />
                            </div>
                            <VerticalList items={education.description} />
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
