interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function CardTitle({ children, className = "" }: CardTitleProps) {
    return (
        <h3
            className={`text-lg md:text-xl font-semibold ${className}`}
        >
            {children}
        </h3>
    )
}