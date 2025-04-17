"use client";

import React, { useState, useCallback } from 'react';
import Navbar from '@/components/ui/navbar';
import Cursor from '@/components/ui/cursor';
import BlogPost from '@/components/cards/blog-post';
import type { BlogPost as BlogPostType } from '../blog-data';

interface BlogPostWrapperProps {
    post: BlogPostType;
    content: string;
}

export default function BlogPostWrapper({ post, content }: BlogPostWrapperProps) {
    const [isActive, setIsActive] = useState(false);
    const [radius, setRadius] = useState(20);

    const handleOver = useCallback((n: number) => {
        setIsActive(true);
        setRadius(n);
    }, []);

    const handleLeave = useCallback((n: number) => {
        setIsActive(false);
        setRadius(n);
    }, []);

    return (
        <div key={post.slug} className="w-screen min-h-screen bg-white overflow-hidden z-[250]">
            <div onMouseOver={() => handleOver(46)} onMouseLeave={() => handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div
                    className="text-left p-8 h-full w-xscard sm:w-smcard md:w-card my-36"
                    onMouseOver={() => handleOver(46)}
                    onMouseLeave={() => handleLeave(22)}
                >
                    <BlogPost post={post} content={content} />
                </div>
            </div>

            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
}
