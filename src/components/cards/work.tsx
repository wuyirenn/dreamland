"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Work = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const router = useRouter();

    const items = [
        { name: "Photography", image: "/assets/images/photography/DSCF6105.jpg", link: "/photography", 
            description: "Shot on my trusty Fujifilm X-T3 and edited in Capture One." 
        },
        { name: "Composites", image: "/assets/images/composites/bumblebees.webp", link: "/composites",
            description: "Trying to capture the wonder of nature. Made with Photoshop, my photography, and stock images."
        },
        { name: "Sketches", image: "", link: "/sketches",
            description: "People on pen and paper, inspired by the late Jason Polan. Currently procrastinating on scanning them."
        },
        { name: "Library", image: "", link: "/library",
            description: "Books, essays, and articles that I've found meaningful."
        },
        { name: "Projects", image: "", link: "/projects",
            description: "Behind the scenes of apps and websites I've built. Coming soon."
        },
        { name: "Archives", image: "", link: "/archives",
            description: "A personal history of architecture, art, film, and more. Many mishaps here. :D"
        }
    ]

    useEffect(() => {
        items.forEach(item => {
            const img = new Image();
            img.src = item.image;
        });
    }, []);

    return (
        <main className="relative">
            <div className="w-[96vw] h-[70vh] md:h-[50vh] text-white font-avantgarde drop-shadow-md">
                <div className="relative font-semibold text-left text-sm sm:text-base md:text-lg tracking-[0.15em] drop-shadow">
                    MY WORK
                </div>
                <br></br>
                <div className="flex flex-col md:grid md:grid-cols-5 h-3/4">
                    <div className="md:col-span-1">
                        <ul className="">
                            {items.map(item => (
                                <li
                                    key={item.name}
                                    className="text-2xl lg:text-3xl xl:text-4xl font-semibold pb-0 md:pb-1 xl:pb-3"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <br className="md:hidden" />
                    <div className="flex flex-col h-full md:col-span-4 drop-shadow-md">
                        <div className="relative left-1 h-full w-2/3 xl:w-[70%] outline outline-1 outline-white bg-white bg-opacity-20 md:ml-4 mb-4">
                            {items.map(item => (
                                <img
                                    key={item.name}
                                    src={item.image}
                                    alt={item.name}
                                    className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                        <div className="w-2/3 xl:w-[70%] md:ml-4 text-xs lg:text-sm font-medium">
                            {items.map(item => (
                                <div 
                                    key={item.name}
                                    className={`absolute transition-opacity duration-500 ease-in-out ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    {item.description}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Work