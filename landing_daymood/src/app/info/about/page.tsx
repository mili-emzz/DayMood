import Image from "next/image";
import Navbar from "@/app/components/shared/navbar";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-[#FDF5F5] font-sans flex flex-col relative overflow-hidden text-black">
            <Navbar />

            <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 flex flex-col md:flex-row items-center md:items-start justify-between relative z-10">

                <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col gap-8 md:gap-10 mt-10 md:mt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Sobre Nosotras
                    </h1>

                    <div className="flex flex-col gap-6 text-lg md:text-xl font-medium leading-relaxed">
                        <p>
                            La pandemia transformó nuestra dinámica social, poniendo la salud mental en el centro de la conversación. Aunque la digitalización nos acercó a nuevas formas de expresión.
                        </p>
                        <p>
                            Aún así, el acceso a herramientas digitales para el bienestar emocional sigue siendo limitado y poco visible.
                        </p>
                        <p>
                            Con DayMood, proponemos una aplicación móvil como herramienta para la facilidad de un registro diario.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-[40%] lg:w-[45%] h-[400px] md:h-[600px] relative mt-16 md:mt-0 flex items-center justify-center md:justify-end">
                    <div className="relative w-full h-full max-w-[400px]">
                        <Image
                            src="/emotions.png"
                            alt="Emociones DayMood"
                            fill
                            className="object-contain object-right md:object-center"
                            priority
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}
