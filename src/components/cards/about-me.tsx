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

const AboutMe = () => {

    return (
        <main className="relative">
            <div className="text-white font-avantgarde drop-shadow-md">
                <div className="font-semibold text-left text-md tracking-[0.15em] drop-shadow">
                    ABOUT ME
                </div>
                <br></br>
                <div className="font-semibold text-5xl md:text-6xl lg:text-7xl text-left">
                    {`I'm a people-oriented `}<br />
                    <Roles />
                    focused on environmental action and social equity.
                </div>
                <br></br>
                <div className="grid md:grid-cols-5 xl:grid-cols-9 gap-4 text-xs text-left font-medium ml-2">
                    <div className="md:col-span-3 xl:col-span-4">
                        {`I fell in love with nature in the era of digital point-and-shoots. Through the tiny, electric viewfinder of my mom's 
                        silver Canon, I'd capture incredible wonders -- glorious views at national parks, but also daily sunsets, neighbourhood 
                        butterflies, and garden roses. I've learned that there is always magic to be found, if only I look. And I strive to convey 
                        this beauty through my art and photography today.`}
                    </div>
                    <div className="md:col-span-2 xl:col-span-3">
                        {`I work on projects that make our built environment more sustainable and better designed. 
                        I'm an explorer at heart, driven by learning and creating new things, and I use my versatility and communication to connect people, align action, and get sh*t done.`}
                    </div>
                    <div className="col-span-full xl:col-span-2">
                        ON REPEAT
                        <SongLink index={1} to={"https://www.youtube.com/watch?v=sElE_BfQ67s"}>Cigarettes After Sex - Apocalypse</SongLink>
                        <SongLink index={2} to={"https://www.youtube.com/watch?v=OTsocEstP4Y"}>Saint Motel - LA2NY</SongLink>
                        <SongLink index={3} to={"https://www.youtube.com/watch?v=T4SimnaiktU"}>G.E.M.鄧紫棋 - 光年之外</SongLink>
                    </div>
                </div>
            </div>
        </main>
    
  )
}

export default AboutMe