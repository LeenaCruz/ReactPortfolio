
import { useEffect, useState } from "react";

const UserRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/LeenaCruz/repos`)
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const data = await response.json();
                setRepos(data.slice(0,6));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div> Error {error.message}</div>;

    return (
        <div>
            <h1>Leena's Portfolio</h1>
            <div className="repo-grid">
            {repos.map(repo => (
                <div className="repo-card" key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <div
                            className="repo-image"
                            style={{
                                backgroundColor: '#635CA0'
                        }}
                        >
                        <span className="repo-name"> {repo.name} </span>
                        </div>
                    </a>
                </div>
            ))}
</div>
        </div>
    )
}

export default UserRepos;
