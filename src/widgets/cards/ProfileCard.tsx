import { Github, Tv } from "lucide-react";
import type { UserProfile } from "../../services/UserService";

export const ProfileCard = ({ name, bio, avatarUrl, githubUrl, bilibiliUrl }: UserProfile) => {
    return (
        <div className="card bg-base-100 shadow w-full">
            <figure className="px-5 pt-3">
                <img src={avatarUrl} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{bio}</p>
                <div className="card-actions items-center">
                    {bilibiliUrl && (
                        <button className="btn btn-soft btn-info" onClick={() => window.open(bilibiliUrl, "_blank", "noopener,noreferrer")}>
                            <Tv size={20} />
                        </button>
                    )}
                    {githubUrl && (
                        <button className="btn btn-soft" onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}>
                            <Github size={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
