export interface BlogPost {
    title: string;
    date: string;
    description: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
    title: "Library",
    date: "last updated: December 2025",
    description: "things I've read that stood out",
    slug: "library",
    },
    {
    title: "Thoughts",
    date: "March 16, 2025",
    description: "contemplations on life and connection",
    slug: "thoughts",
    },
  ];