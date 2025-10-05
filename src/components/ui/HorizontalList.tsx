interface HorizontalListProps {
    items: string[];
    className?: string;
}

export default function HorizontalList({ items, className = "" }: HorizontalListProps) {
    return (
        <ul className={`flex flex-row flex-wrap items-center list-none text-teal-300 text-xs mt-1 ${className}`}>
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center break-words">
                    {item}
                    {idx < items.length - 1 && (
                        <span className="before:content-['•'] before:text-teal-300 before:mx-2" />
                    )}
                </li>
            ))}
        </ul>
    );
}
