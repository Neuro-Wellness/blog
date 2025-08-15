import http from "../utils/HttpClient";

export interface Tag {
    name: string;
    colorClass: string; // e.g. badge-info
    description?: string;
}

// 颜色列表，防止所有 tag 都是一个颜色（可自定义）
const colorClasses = [
    "badge-primary",
    "badge-secondary",
    "badge-success",
    "badge-danger",
    "badge-warning",
    "badge-info",
    "badge-light",
    "badge-dark",
];

// 新的 fetchTags，适配新接口结构
export const fetchTags = async (): Promise<Tag[]> => {
    const res = await http.get<{ code: number; message: string; data: string[] }>("https://api.aichemyharmony.ca/api/home/get-all-tags");

    if (res.code !== 200 || !Array.isArray(res.data)) {
        console.error("获取标签失败：", res.message);
        return [];
    }

    // 把 string[] 映射成 Tag[]
    return res.data.map((tagName, idx) => ({
        name: tagName,
        colorClass: colorClasses[idx % colorClasses.length],
        description: undefined, // 如果接口没给，就留空
    }));
};
