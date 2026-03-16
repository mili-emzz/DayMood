import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    className?: string;
    download?: boolean | string;
}

export default function Button({ href, children, className = "", download, ...props }: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center px-12 py-6 bg-white text-lg sm:text-xl md:text-2xl text-black rounded-full font-medium transition-colors duration-500 hover:bg-[#FEB4A7] shadow ${className}`;

    if (download) {
        return (
            <a href={href} download={download === true ? "" : download} className={baseClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={baseClasses} {...props}>
            {children}
        </Link>
    );
}