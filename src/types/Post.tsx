// types/Post.ts
export interface PostPreview {
    _id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    tags: string[];
    coverImage: string;
    wordCount: number;
    readTime: number;
}

export interface PostDetail extends PostPreview {
    slug: string;
    content: string;
    author: string;
    updatedAt: string;
    authorId: string;
    draft: boolean;
    featured: boolean;
}

export interface Paginated<T> {
    data: T[];
    meta: {
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
    };
}
