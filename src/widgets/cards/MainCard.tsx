interface Props {
    title: string;
    children: React.ReactNode;
}

export const MainCard = ({ title, children }: Props) => (
    <div className="card w-full bg-base-100 shadow">
        <div className="card-body">
            <h2 className="card-title text-xl">{title}</h2>
            {children}
        </div>
    </div>
);
