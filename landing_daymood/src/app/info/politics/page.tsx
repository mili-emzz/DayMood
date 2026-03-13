import Navbar from "@/app/components/shared/navbar";

export default function Politics() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9EDED]">
            <nav>
                <Navbar />
            </nav>
            <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
                <main className="flex flex-col items-center md:items-start text-black text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Políticas de Privacidad</h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700">
                        Próximamente...
                    </p>
                </main>
            </div>
        </div>
    );
}
