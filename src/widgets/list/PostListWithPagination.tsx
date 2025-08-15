import { useEffect, useState } from "react";
import PostCard from "../../pages/subpages/PostCard";
import type { PostPreview } from "../../types/Post";
import { fetchPostList } from "../../services/PostService";

const PostListWithPagination = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const [posts, setPosts] = useState<PostPreview[]>([]);
    const [meta, setMeta] = useState({
        page: 1,
        pageSize,
        total: 0,
        totalPages: 1,
    });

    useEffect(() => {
        fetchPostList(page, pageSize).then((res) => {
            setPosts(res.data);
            setMeta(res.meta);
        });
    }, [page]);

    return (
        <div className="space-y-4">
            {/* 文章列表 */}
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}

            {/* 分页按钮 */}
            <div className="join mt-4">
                <button
                    className="join-item btn btn-sm"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <button className="join-item btn btn-sm btn-disabled">
                    {page} / {meta.totalPages}
                </button>
                <button
                    className="join-item btn btn-sm"
                    onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
                    disabled={page === meta.totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostListWithPagination;
