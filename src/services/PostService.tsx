import http from "../utils/HttpClient";
import type { PostPreview, PostDetail, Paginated } from "../types/Post";

// 对应 App 的分页结构
interface AppPaginated<T> {
    code: number;
    message: string;
    data: {
        records: T[];
        total: number;
        size: number;
        current: number;
        pages: number;
    };
}

interface RawAppPost {
    id: string;
    title: string;
    coverImage: string;
    content: string;
    tags: string; // e.g. "Biological,Food"
    views: number;
    updatedAt: string;
    createdAt: string | null;
}

export const fetchPostList = async (page = 1, pageSize = 10): Promise<Paginated<PostPreview>> => {
    const res = await http.get<AppPaginated<RawAppPost>>("https://api.aichemyharmony.ca/api/home/getPopularArticle", {
        params: { page, pageSize }
    });

    const records: PostPreview[] = res.data.records.map((p) => ({
        id: p.id,
        title: p.title,
        coverImage: p.coverImage,
        excerpt: p.content.slice(0, 200), // 简单取摘要
        tags: p.tags.split(",").map(tag => tag.trim()),
        views: p.views,
        updatedAt: p.updatedAt
    }));

    return {
        data: records,
        meta: {
            totalPages: res.data.total,
            pageSize: res.data.size,
            page: res.data.current,
            total: res.data.pages
        }
    };
};

// 👉 替代 fetchPostById
export const fetchPostById = async (id: string): Promise<PostDetail> => {
    const res = await http.get<{ code: number; message: string; data: RawAppPost }>(
        "https://api.aichemyharmony.ca/api/home/getArticleById",
        { params: { id } }
    );

    const p = res.data;

    return {
        id: p.id,
        title: p.title,
        coverImage: p.coverImage,
        content: p.content,
        excerpt: p.content.slice(0, 200),
        tags: p.tags.split(",").map(tag => tag.trim()),
        views: p.views,
        updatedAt: p.updatedAt
    };
};
