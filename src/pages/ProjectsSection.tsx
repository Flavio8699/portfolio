import Card from "../components/ui/Card";
import HorizontalList from "../components/ui/HorizontalList";
import ImageCarousel from "../components/ui/ImageCarousel";
import Section from "../components/section/Section";
import SectionHeader from "../components/section/SectionHeader";
import CardTitle from "../components/ui/CardTitle";
import Link from "../components/ui/Link";
import VerticalList from "../components/ui/VerticalList";
import SkillsList from "../components/ui/SkillsList";
import { data } from "../../public/data"

export default function ProjectsSection() {
    const projects = data.projects;

    return (
        <Section id="projects">
            <SectionHeader>Projects 💻</SectionHeader>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, id) => {
                    const hasImages = project.images && project.images.length > 0;

                    const cardClasses = `${hasImages ? "flex flex-col md:flex-row md:col-span-2 gap-4" : ""}`;

                    return (
                        <Card key={id} className={cardClasses} id={project.title.toLowerCase().replace(/\s+/g, "-")}>
                            {/* In Progress Label */}
                            {project.inProgress && (
                                <div className="absolute top-0 right-0 bg-teal-500/50 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg shadow-md z-50">
                                    🔨 <span className="pl-1">In Progress</span>
                                </div>
                            )}

                            {/* Images */}
                            {hasImages && (
                                <div className="w-full md:w-1/2 aspect-[16/9] mx-auto overflow-hidden">
                                    <ImageCarousel images={project.images!} />
                                </div>
                            )}

                            {/* Content */}
                            <div className={`${hasImages ? "w-full md:w-1/2" : ""} flex flex-col gap-4`}>
                                <div>
                                    <CardTitle>{project.title}</CardTitle>
                                    <HorizontalList items={[project.company || "Personal", project.year]} />
                                </div>
                                <VerticalList items={project.description} />
                                <SkillsList skills={project.skills} />

                                {/* Links */}
                                {project.github && (
                                    <div className="flex gap-4 text-sm">
                                        {project.github && (
                                            <Link href={project.github}>GitHub</Link>
                                        )}
                                        {/* {project.live && (
                                            <Link href={project.live}>Live Demo</Link>
                                        )} */}
                                    </div>
                                )}
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}