import http from "../utils/HttpClient";
import type { PostPreview, PostDetail, Paginated } from "../types/Post";

// 获取预览列表
export const fetchPostList = (page = 1, pageSize = 10) => {
    return http.get<Paginated<PostPreview>>("/posts", {
        params: { page, pageSize },
    });
};

// 获取详情
export const fetchPostById = (id: string) => {
    return http.get<PostDetail>("/get-posts-by-id", {
        params: { id },
    });
};
