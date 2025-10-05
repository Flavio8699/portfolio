interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section
            id={id}
            className={`min-h-100 py-20 border-t border-gray-800 ${className}`}
        >
            {children}
        </section>
    )
}