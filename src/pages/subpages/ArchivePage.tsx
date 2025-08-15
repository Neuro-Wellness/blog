import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { PostPreview } from "../../types/Post";
import http from "../../utils/HttpClient";
import { MainCard } from "../../widgets/cards/MainCard";
import ArchiveTimeline from "./ArchiveTimeline";

type HomeRecord = {
    id: string;
    title: string;
    coverImage?: string | null;
    content?: string | null;
    tags?: string | null;
    views?: number | null;
    createdAt?: string | null;
    updatedAt: string; // e.g. "2025-08-15"
};

type PageResp<T> = {
    code: number;
    message: string;
    data: {
        records: T[];
        total: number;
        size: number;
        current: number;
        pages: number;
    };
};

const ArchivePage = () => {
    const [posts, setPosts] = useState<PostPreview[]>([]);
    const [searchParams] = useSearchParams();

    // 兼容：URL上的 ?tag=xx 或 ?category=xx 都当成 tag 用
    const urlTag = searchParams.get("tag") || searchParams.get("category") || "";

    useEffect(() => {
        http
            .get<PageResp<HomeRecord>>("https://api.aichemyharmony.ca/api/home", {
                params: {
                    category: urlTag, // 后端把 category 当成 tag 了😅
                    pageNo: 1000, // 垃圾接口PageNo和PageSize写反了😅
                    pageSize: 1,
                },
            })
            .then((res) => {
                const list = res.data.records.map<PostPreview>((r) => ({
                    id: r.id,
                    title: r.title,
                    updatedAt: r.updatedAt,
                    coverImage: r.coverImage ?? "",
                    tags: r.tags ? r.tags.split(",").map(tag => tag.trim()).filter(tag => tag) : [],
                    views: typeof r.views === "number" ? r.views : 0,
                }));
                setPosts(list);
            });
    }, [urlTag]);

    const title = urlTag ? `#${urlTag} 的归档` : "文章归档";

    return (
        <MainCard title={title}>
            <ArchiveTimeline posts={posts} />
        </MainCard>
    );
};

export default ArchivePage;
