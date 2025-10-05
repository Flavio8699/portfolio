import Pill from "./Pill";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function Button({ onClick, children, className = "" }: ButtonProps) {
    return (
        <Pill
            onClick={onClick}
            className={`px-6 py-2 text-md cursor-pointer shadow-md
                            hover:bg-teal-500 hover:shadow-lg active:bg-teal-600 active:shadow-inner
                            transition-all duration-200 ${className}`}
        >
            {children}
        </Pill>
    )
}