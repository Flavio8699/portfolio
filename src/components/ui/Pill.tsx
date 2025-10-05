interface PillProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Pill({ children, className = "", onClick }: PillProps) {
    return (
        <span
            onClick={onClick}
            className={`bg-teal-400 text-gray-900 flex md:inline-flex justify-center items-center px-4 py-2 rounded-full shadow ${className}`}
        >
            {children}
        </span>
    )
}