"use client"

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { blogPosts } from "@/app/blog/blog-data";

const Blog = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = useCallback((name: string) => {
        setHoveredItem(name);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    return (
        <main className="relative">
            <div className="w-[96vw] h-[70vh] md:h-[50vh] text-white font-avantgarde drop-shadow-md">
                <div className="relative font-semibold text-left text-sm sm:text-base md:text-lg tracking-[0.15em] drop-shadow">
                    BLOG
                </div>
                <br></br>
                <div className="flex flex-col">
                    <ul className="">
                        {blogPosts.map(item => (
                            <li
                                key={item.title}
                                className=""
                                onMouseEnter={() => handleMouseEnter(item.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href={`/blog/${item.slug}`}>
                                    <div className="group transition-all duration-300 hover:translate-x-2">
                                        <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                                            {item.title}
                                        </div>
                                        <div className="text-sm lg:text-base font-medium text-white/70 pb-2">
                                            {item.description}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default React.memo(Blog);