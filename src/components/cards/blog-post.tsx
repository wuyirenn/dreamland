"use client"

import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import type { BlogPost as BlogPostType } from '@/app/blog/blog-data';

interface BlogPostProps {
    post: BlogPostType;
    content: string;
}

const BlogPost = ({ post, content }: BlogPostProps) => {
    return (
        <>
            <div className="text-2xl sm:text-3xl md:text-4xl text-stone-600/95 font-bold mb-1">
                {post.title}
            </div>
            <div className="text-sm sm:text-base text-stone-500 font-medium">
                {post.description}
            </div>
            <div className="text-sm sm:text-base text-stone-500/70 font-medium italic mb-12">
                {post.date}
            </div>
            
            <div className="
                prose prose-stone max-w-none text-stone-500 
                prose-headings:text-stone-500 prose-strong:text-stone-500 prose-em:text-stone-500 prose-blockquote:text-stone-500 prose-a:text-stone-500
                prose-h1:mt-4 prose-h1:mb-2 prose-h2:mt-4 prose-h2:mb-2
            ">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {content}
                </Markdown>
            </div>
        </>
    );
};

export default BlogPost; 