import Navbar from "@/app/components/shared/navbar";
import Image from "next/image";
import Button from "@/app/components/shared/button";

export default function Download() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9EDED]">
            <nav>
                <Navbar />
            </nav>
            <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl">
                    <Image
                        src="/logo-inclinado.png"
                        alt="Logo DayMood"
                        width={300}
                        height={300}
                        className="object-contain w-48 sm:w-64 md:w-80"
                    />
                    <main className="flex flex-col items-center md:items-start text-black text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Descargar</h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Gracias por escoger DayMood</h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mb-8">
                            Descarga la app y empieza a disfrutar de todos los beneficios que DayMood tiene para ti.
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700">
                            ¡Recuerda! Esta app no sustituye el acompañamiento de un profesional. <a href="/info/terms" className="text-blue-500 hover:underline">Lee términos y condiciones.</a>
                        </p>
                    </main>
                </div>
                <div className="mt-12 md:mt-16">
                    <Button href="/app-debug.apk" download="daymood.apk" className="text-lg sm:text-xl md:text-2xl md:px-16 md:py-8">
                        Descargar APK
                    </Button>
                </div>
            </div>
        </div>
    );
}