
import http from "../utils/HttpClient";

export interface Tag {
    name: string;
    colorClass: string; // e.g. badge-info
    description?: string;
}
export const fetchTags = () => http.get<Tag[]>("/tags");
