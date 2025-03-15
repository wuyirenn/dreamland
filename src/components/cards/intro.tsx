import React from "react";

interface IntroLineProps {
    delay: string
    children: React.ReactNode
}

const IntroLine: React.FC<IntroLineProps> = ({ delay, children }) => {
    return (
        <div className={`transition-opacity opacity-0 animate-fadeIn duration-800 ${delay}`}>
            {children}
        </div>
    )
}

const Intro = () => {

    return (
        <main className="">
            <div className="text-white font-avantgarde text-center">
                <div className="opacity-0 animate-fadeIn duration-1000 delay-2500">
                    <h1 className="font-semibold text-md md:text-lg lg:text-xl tracking-[0.15em] drop-shadow">
                        CHRISTIAN WU // 吳以仁
                    </h1>
                </div>
                <div className="h-2"></div>
                <ul className="relative font-semibold text-7xl sm:text-[5.5rem] md:text-[7rem] lg:text-9xl tracking-tight drop-shadow-md">
                    <IntroLine delay="delay-1100">DREAM</IntroLine>
                    <IntroLine delay="delay-1300">THE</IntroLine>
                    <IntroLine delay="delay-1500">IMPOSSIBLE</IntroLine>
                    <IntroLine delay="delay-1700">DREAM</IntroLine>
                </ul>
            </div>
        </main>
    
  )
}

export default Intro

/* 
<IntroLine delay="delay-1200">
    <div className="hidden text-xl md:text-2xl mt-[-0.6rem] md:mt-[-1rem] mb-[0.1rem] md:mb-[0.2rem] tracking-wide"> 
        AND                        
    </div>
</IntroLine>
*/