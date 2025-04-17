import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import BlogPostWrapper from './blog-post-wrapper';
import { blogPosts } from '../blog-data';

interface Props {
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) return null;

    try {
        const filePath = join(process.cwd(), 'src', 'app', 'blog', 'content', `${post.slug}.md`);
        const content = readFileSync(filePath, 'utf8');

        return <BlogPostWrapper post={post} content={content} />;
    } catch (error) {
        console.error('Error reading blog post:', error);
        return null;
    }
}

export function generateStaticParams() {
    return blogPosts.map(post => ({
        slug: post.slug,
    }));
}
