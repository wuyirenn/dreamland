import React from "react";

const Work = () => {

    return (
        <main className="relative">
            <div className="text-white font-avantgarde drop-shadow-md">
                <h1 className="font-semibold text-left text-md tracking-[0.15em] drop-shadow">
                    MY WORK
                </h1>
                <br></br>
                <div className="grid gap-4 text-xs text-left font-medium">
                    <div className="col-span-full">
                        {`Real talk: I'm procrastinating the f*ck out of this particular project. I started earlier this summer, but life's been 
                        busy, and I'm having trouble both finding inspiration and motivation. Please check back in soon! Promise it won't be long! <3`}
                    </div>
                    <div className="col-span-full">
                        {`I am quite proud of the progress so far though. This site takes inspiration from Minh Pham and Fernando Pinto, and was designed 
                        loosely with pen and paper, coded in VS Code, prototyped in Figma, and built with Next.js and Tailwind CSS.`}
                    </div>
                    <div className="col-span-full">   
                        {`The shooting stars on the 'start' page are a combination of digital elements and a starry photo taken at Joshua Tree in April. 
                        The background composite is one of many Photoshop composites I've made over the years (using Unsplash, Adobe Stock, and my own photos). 
                        Inspired by the old Alto's Odyssey iPhone game, it embodies freedom and contains my appreciation for desert scenery. Lastly, the music 
                        was composed by Tim @ Tabletop Audio. His music speaks for itself -- it's beautiful.`}
                    </div>
                    <div className="col-span-full">   
                        {`Lately, I've been working on a few projects. I'm still processing photos from Taiwan, and been sketching as a creative outlet. I've
                        been exploring the intersection between knowledge graphs (Neo4j), IFC (ifcopenshell and topologicpy), and various graph/NLP/RAG
                        techniques. It's been a blast becoming technical, and while this realm in particular is quite tough to crack, I enjoy the challenge.`}
                    </div>
                </div>
            </div>
        </main>
    
  )
}

export default Work