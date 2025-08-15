
export interface UserProfile {
  name: string;
  bio: string;
  avatarUrl: string;
  githubUrl?: string;
  bilibiliUrl?: string;
}

export const fetchUserProfile = async (): Promise<UserProfile> => {

  return {
    name: "Neurowellness",
    bio: "Heal mind and body the nature way",
    avatarUrl: "https://image.aichemyharmony.ca/avatar/blog_avatar.jpg"

  }
};
