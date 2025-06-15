import http from "../utils/HttpClient";

export interface UserProfile {
  name: string;
  bio: string;
  avatarUrl: string;
  githubUrl?: string;
  bilibiliUrl?: string;
}

export const fetchUserProfile = async (): Promise<UserProfile> => {
  return await http.get<UserProfile>("/user");
};
