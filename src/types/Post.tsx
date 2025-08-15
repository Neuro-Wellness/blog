// types/Post.ts
export interface PostPreview {
    id: string;
    title: string;
    coverImage: string;
    excerpt?: string; // optional
    tags: string[];
    views: number;
    updatedAt: string;
}

export interface PostDetail extends PostPreview {
    content: string;
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
