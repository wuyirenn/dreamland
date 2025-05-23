"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const router = useRouter();

    const items = useMemo(() => [
        { name: "Photography", image: "/assets/images/photography/DSCF6105.jpg", link: "/work/photography", 
            description: "Shot on my trusty Fujifilm X-T3 and edited in Capture One." 
        },
        { name: "Composites", image: "/assets/images/composites/bumblebees.jpg", link: "/work/composites",
            description: "Trying to capture the wonder of nature. Made with Photoshop, my photography, and stock images."
        },
        { name: "Sketches", image: "", link: "/work/coming-soon",
            description: "People on pen and paper, inspired by the late Jason Polan. Currently procrastinating on scanning them."
        },
        { name: "Projects", image: "", link: "/work/coming-soon",
            description: "Behind the scenes of apps and websites I've built. Coming soon."
        },
        { name: "FOAF", image: "", link: "/work/friend-of-a-friend",
            description: "An (in-progress) social app that connects you with friends of friends based on your location."
        },
        { name: "Archives", image: "", link: "/work/coming-soon",
            description: "A personal history of architecture, art, film, and more. Many mishaps here. :D"
        }
    ], []);

    const handleMouseEnter = useCallback((name: string) => {
        setHoveredItem(name);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    useEffect(() => {
        // Only preload images that actually exist
        items.forEach(item => {
            if (item.image) {
                const img = new window.Image();
                img.src = item.image;
            }
        });
    }, [items]);

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
                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <br className="md:hidden" />
                    <div className="flex flex-col h-full md:col-span-4 drop-shadow-md">
                        <div className="relative left-1 h-full w-2/3 xl:w-[70%] outline outline-1 outline-white bg-white bg-opacity-20 md:ml-4 mb-2">
                            {items.map(item => item.image && (
                                <div
                                    key={item.name}
                                    className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ease-in-out ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
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

export default React.memo(Work);