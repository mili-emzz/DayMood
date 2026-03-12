import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    DayMood
                </Link>
                <ul className="flex gap-8 items-center">
                    <li>
                        <Link href="/about" className="text-gray-700 font-medium transition-colors duration-300 hover:text-pink-500 pb-1 border-b-2 border-transparent hover:border-pink-500">
                            Nosotras
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 font-medium transition-colors duration-300 hover:text-pink-500 pb-1 border-b-2 border-transparent hover:border-pink-500">
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link href="/download" className="text-gray-700 font-medium transition-colors duration-300 hover:text-pink-500 pb-1 border-b-2 border-transparent hover:border-pink-500">
                            Descargar
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}