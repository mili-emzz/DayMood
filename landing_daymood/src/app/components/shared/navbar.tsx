import Link from "next/link";

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 w-full flex justify-center p-4 z-50">
            <nav className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full px-8 py-3 w-full max-w-4xl flex items-center justify-between border border-gray-100 shadow">
                <Link href="/" className="text-2xl font-bold text-black">
                    DayMood
                </Link>
                <ul className="flex items-center gap-2">
                    <li className="hidden md:block">
                        <Link href="/info/about" className="px-6 py-2 rounded-full text-gray-900 font-medium transition-colors duration-300 hover:bg-[#FFB4A2]">
                            Nosotros
                        </Link>
                    </li>

                    <li>
                        <Link href="/info/download" className="px-6 py-2 rounded-full text-gray-900 font-medium transition-colors duration-300 hover:bg-[#FFB4A2]">
                            Descargar
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}