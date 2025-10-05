interface VerticalListProps {
    items: React.ReactNode[];
    className?: string;
}

export default function VerticalList({ items, className = "" }: VerticalListProps) {
    return (

        <ul className={`list-disc list-inside text-gray-300 text-sm space-y-2 ${className}`}>
            {items.map((line, id) => (
                <li key={id}>{line}</li>
            ))}
        </ul>
    );
}
