import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function Button({ href, children, className = "" }: ButtonProps) {
    return (
        <Link href={href} className={`px-12 py-6 bg-white text-lg sm:text-xl md:text-2xl text-black rounded-full font-medium transition-colors duration-500 hover:bg-[#FEB4A7] shadow ${className}`}>
            {children}
        </Link>
    );
}