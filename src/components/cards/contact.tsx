import React from 'react';

const Contact = () => {
    return(
        <main className="">
            <div className="text-white font-avantgarde mx-auto">
            <div>
                <div className="font-semibold text-left text-sm sm:text-base tracking-[0.10em] drop-shadow">
                    A QUOTE I LIVE BY:
                </div>
                <div className="h-4"></div>
                <ul className="relative font-semibold text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl  tracking-tight drop-shadow-md ml-1">
                    <li>{`"Another world is not only possible, she is on her way."`}</li>
                </ul>
                <div className="font-semibold text-sm sm:text-base text-right tracking-[0.10em] drop-shadow">
                    - ARUNDHATI ROY
                </div>
            </div>
            <div className="h-14 md:h-10"></div>
            <div>
                <div className="font-normal text-right text-sm sm:text-base tracking-[0.05em]">
                    If you want to create this world, <br className="md:hidden" />or simply say hello, find me at:
                    <br />
                    <a href="mailto:wuyirenn@gmail.com" target="_blank" className="font-semibold">wuyirenn [at] gmail [dot] com</a>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Contact