import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="w-full h-auto min-h-[40vh] md:h-screen flex flex-row relative overflow-hidden justify-between py-12 md:py-0">

            <div className="flex flex-col justify-end w-full lg:w-[60%] h-full px-6 md:pl-12 lg:pb-14 lg:pl-16 z-10">
               
                <div className="mb-8 md:mb-12 lg:mb-16">
                    <p className="text-2xl md:text-3xl lg:text-[44px] font-bold text-black w-full flex leading-[1.05] tracking-tight">
                        Herramienta de registro personal, no sustituto psicológico. Registra notas, comparte anónimamente en el foro, checa estadísticas.
                    </p>
                </div>

                <footer className="w-full flex flex-col gap-8 lg:gap-14">

                    <div className="w-full flex flex-col sm:flex-row justify-between pr-0 lg:pr-20 gap-8 sm:gap-4 md:gap-0">

                        <div className="flex flex-col border-l-[4px] border-[#FF9F9B] pl-4 md:pl-6 w-full sm:w-[50%] lg:w-[45%]">
                            <p className="text-2xl lg:text-3xl font-bold text-black mb-1 md:mb-3">
                                DayMood
                            </p>
                            <p className="text-base lg:text-xl text-black leading-snug">
                                Aplicación móvil para el registro y personalización de emociones
                            </p>
                        </div>

                        <div className="flex flex-col text-black text-base lg:text-xl w-full sm:w-[45%] lg:w-[40%] pl-4 sm:pl-8">
                            <ul className="flex flex-col gap-2 md:gap-4 font-medium">
                                <li className="cursor-pointer hover:underline">
                                    <Link href="/info/about">Nuestro equipo</Link>
                                </li>
                                <li className="cursor-pointer">Aviso de privacidad</li>
                                <li className="cursor-pointer">Manual de Usuario</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex text-black text-sm lg:text-lg justify-start lg:justify-center pr-4 md:pr-10">
                        <p className="text-left md:text-center md:pl-24 lg:pl-0 font-medium">© [2026] Lúmina. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>

            <div className="hidden md:block w-[50%] md:w-[45%] lg:w-[50%] h-full relative z-0">
                <Image
                    src="/mock-down-right.png"
                    alt="DayMood Features Left"
                    fill
                    className="object-contain object-right-bottom scale-[1.3] md:scale-[1.1] lg:scale-[1.1] translate-y-[2%] translate-x-[5%] md:translate-x-[15%] md:translate-y-[10%] lg:translate-x-[5%] lg:translate-y-[2%]"
                />
            </div>

        </div>
    )
}
