interface CardProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Card({ children, className = "", id = undefined }: CardProps) {
    return (
        <div
            className={`relative p-6 bg-gray-800/60 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group scroll-mt-22 ${className}`}
            id={id}
        >
            {children}
        </div>
    )
}