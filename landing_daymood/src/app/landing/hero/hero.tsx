import Image from 'next/image';
import Button from '@/app/components/shared/button';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#FDE2D9] overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-6 h-screen flex flex-col lg:flex-row relative">
                
                <div className="flex-1 relative h-full flex justify-center lg:justify-start items-end z-0">
                    <div className="relative w-[320px] sm:w-[400px] lg:w-[450px] h-[75%] lg:h-[85%] translate-y-[10%] lg:translate-y-[5%]">
                        <Image
                            src="/mock-up-left.jpeg"
                            alt="DayMood Calendar"
                            fill
                            className="object-contain object-top"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1 relative h-full flex flex-col justify-start lg:justify-between items-center lg:items-end pt-0 z-10">
                    
                    <div className="relative w-[320px] sm:w-[400px] lg:w-[450px] h-[55%] lg:h-[65%] -translate-y-[10%] lg:-translate-y-[10%]">
                        <Image
                            src="/mockup-up-right.png"
                            alt="DayMood Emotions"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-end lg:justify-end items-end pb-20 lg:pb-24 w-full max-w-lg lg:pr-12">
                        <h1 className="text-4xl lg:text-[3.25rem] font-bold text-black leading-[1] tracking-tight text-end mb-6">
                            Registra tus emociones de forma sencilla y diaria
                        </h1>
                        <Button href="/info/download">
                            Comenzar ahora
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}