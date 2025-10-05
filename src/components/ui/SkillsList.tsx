import Pill from "./Pill";

interface SkillsListProps {
    skills: string[];
    className?: string;
}

export default function SkillsList({ skills }: SkillsListProps) {
    return (
        <>
            {
                skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, id) => (
                            <Pill key={id} className="text-xs">{skill}</Pill>
                        ))}
                    </div>
                )
            }
        </>
    );
}
