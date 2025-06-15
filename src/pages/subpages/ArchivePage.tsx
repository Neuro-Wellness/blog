import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { PostDetail } from "../../types/Post";
import http from "../../utils/HttpClient";
import { MainCard } from "../../widgets/cards/MainCard";
import ArchiveTimeline from "./ArchiveTimeline";

const ArchivePage = () => {
    const [posts, setPosts] = useState<PostDetail[]>([]);
    const [searchParams] = useSearchParams();

    const tag = searchParams.get("tag");
    const category = searchParams.get("category");

    useEffect(() => {
        http
            .get<PostDetail[]>("/archive", {
                params: {
                    ...(tag ? { tag } : {}),
                    ...(category ? { category } : {}),
                },
            })
            .then(setPosts);
    }, [tag, category]);

    const title = tag
        ? `#${tag} 的归档`
        : category
            ? `${category} 分类归档`
            : "文章归档";

    return (
        <MainCard title={title}>
            <ArchiveTimeline posts={posts} />
        </MainCard>
    );
};

export default ArchivePage;
