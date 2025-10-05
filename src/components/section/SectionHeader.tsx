interface SectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
    return (
        <h2
            className={`text-3xl md:text-4xl font-semibold mb-10 ${className}`}
        >
            {children}
        </h2>
    )
}