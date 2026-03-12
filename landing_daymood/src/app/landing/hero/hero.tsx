import Image from 'next/image';
import Button from '@/app/components/shared/button';

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
            <div className="flex items-center justify-between gap-8 px-6 py-12 max-w-7xl w-full">
                <div className="hidden lg:flex flex-1">
                    <div className="relative w-full h-96">
                        <Image
                            src="/mock-up-left.png"
                            alt="DayMood Left"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div>
                    <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                            Registra tus emociones de forma sencilla y diaria
                        </h1>
                        <Button href="/download">
                            Comenzar ahora
                        </Button>
                    </div>

                    <div className="hidden lg:flex flex-1">
                        <div className="relative w-full h-96">
                            <Image
                                src="/mock-up-right.png"
                                alt="DayMood Right"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}