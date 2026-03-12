import Link from "next/link";

export default function Button({ href, children }: { href: string; children: React.ReactNode }) {
 
    return (
        <Link href={href} className="px-9 py-3 bg-white text-black rounded-full font-medium transition-colors duration-300 hover:bg-pink-200">
            {children}
        </Link>
    );
}