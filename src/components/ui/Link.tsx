interface LinkProps {
    children: React.ReactNode;
    href: string;
    stay?: boolean;
}

export default function Link({ children, href, stay = false }: LinkProps) {
    return (
        <a
            href={href}
            className="text-teal-300 hover:underline"
            target={stay ? undefined : "_blank"}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}