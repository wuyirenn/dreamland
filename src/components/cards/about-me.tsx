import React from "react";
import Roles from "../ui/roles";

interface SongLinkProps {
    index: number,
    to: string,
    children: React.ReactNode
}

const SongLink : React.FC<SongLinkProps> = ({ index, to, children }) => {
    return (
        <div>
            {index}. <a href={to} target="_blank">{children}</a>
        </div>
    )
}

interface TimelineEventProps {
    role: string,
    org: string | null,
    year: string
}

const TimelineEvent : React.FC<TimelineEventProps> = ({ role, org, year }) => {
    return (
        <li className="flex mb-3">
            <div className="flex flex-col -ml-2">
                <span className="font-semibold text-sm lg:text-base">{role}</span>
                <span className="font-medium text-xs lg:text-sm">{org ? org : ''}</span>
                <span className="font-medium text-xs lg:text-sm">{year}</span>
            </div>
        </li>
    )
}

const AboutMe = () => {
    return (
        <main className="relative">
            <div className="text-white font-avantgarde drop-shadow-md">
                <div className="font-semibold text-left text-sm sm:text-base md:text-lg tracking-[0.15em] drop-shadow">
                    ABOUT ME
                </div>
                <br></br>
                <div className="grid md:grid-cols-5 xl:grid-cols-9 gap-4 text-xs lg:text-sm text-left font-medium">
                    <div className="col-span-full font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-left">
                        Forever enamored with technology, people, and the environment.
                    </div>
                    <div className="md:col-span-3 xl:col-span-4">
                        {`I fell in love with nature in the era of digital point-and-shoots. Through the tiny, electric viewfinder of my mom's 
                        silver Canon, I'd capture incredible wonders -- glorious views at national parks, but also daily sunsets, neighbourhood 
                        butterflies, and garden roses. I've learned that there is always magic to be found, if only I look. And I strive to convey 
                        this beauty through my art and photography today.`}
                    </div>
                    <div className="md:col-span-2 xl:col-span-3">
                        {`I work on projects that make the spaces we inhabit more sustainable and better designed.
                        As an entrepreneur and designer at heart, I'm driven by learning and creating new things, and I use my versatility and empathy to align people, inspire change, and get sh*t done.`}
                    </div>
                    <div className="col-span-full xl:col-span-2">
                        {`Most importantly, I aspire to live and lead with gratitude, humility, and grace always at the forefront.
                        To all the people who enrich my life, thank you.`}
                    </div>
                </div>
                <br></br>
                <div className="relative border-l-2 border-white text-xs lg:text-sm">
                    <div className="absolute top-0 left-0 -translate-x-full flex-col gap-1 pr-2">
                        <div className="flex flex-col">
                            <span>▲</span>
                            <span>▼</span>
                        </div>
                    </div>
                    <ul className="list-none pl-4 max-h-[240px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <TimelineEvent role="explore" org="AI x agriculture x urban spaces" year="current" />
                        <TimelineEvent role="ops" org="streamline climate" year="2024" />
                        <TimelineEvent role="founder" org="pallet" year="2023" />
                        <TimelineEvent role="research" org="brown x nasa ames" year="2023" />
                        <TimelineEvent role="film & design" org="freelance" year="2018 - 2022" />
                    </ul>
                </div>
            </div>
        </main>
  )
}

export default AboutMe